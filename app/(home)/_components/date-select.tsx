"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

const DateSelect = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  // Inicializa com o valor da query string ou com um valor padrão (por exemplo, o mês atual)
  const initialMonth =
    searchParams.get("month") ||
    new Date().toLocaleDateString("pt-BR", { month: "2-digit" });
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);

  // Atualiza o estado se a query string mudar
  useEffect(() => {
    const month =
      searchParams.get("month") ||
      new Date().toLocaleDateString("pt-BR", { month: "2-digit" });
    setSelectedMonth(month);
  }, [searchParams]);

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    push(`/?month=${month}`);
  };

  return (
    <Select
      value={selectedMonth}
      onValueChange={(value) => handleMonthChange(value)}
    >
      <SelectTrigger className="w-60 rounded-full">
        <SelectValue placeholder="Mês" />
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DateSelect;
