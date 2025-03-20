"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentPerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.EXPENSE]: {
    label: "Gasto",
    color: "#e93030",
  },
  [TransactionType.DEPOSIT]: {
    label: "Depósito",
    color: "#55b02e",
  },
} satisfies ChartConfig;

interface PieChartTransactionProps {
  typesPercent: TransactionPercentPerType;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const PieChartTransaction = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercent,
}: PieChartTransactionProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55b02e",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#e93030",
    },
  ];
  const allZero =
    depositsTotal === 0 && investmentsTotal === 0 && expensesTotal === 0;
  if (allZero) {
    return (
      <Card className="flex flex-col p-6">
        <CardContent className="flex-1 pb-0">
          <div className="text-center text-gray-500">
            <p>Nenhuma transação cadastrada nesse mês ainda</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-96 w-full md:aspect-square md:max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-3">
          <PercentageItem
            value={typesPercent[TransactionType.DEPOSIT]}
            title="Receita"
            icon={<TrendingUpIcon size={16} className="text-primary" />}
          />
          <PercentageItem
            value={typesPercent[TransactionType.EXPENSE]}
            title="Despesa"
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
          />
          <PercentageItem
            value={typesPercent[TransactionType.INVESTMENT]}
            title="Investimento"
            icon={<PiggyBankIcon size={16} className="text-white" />}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartTransaction;
