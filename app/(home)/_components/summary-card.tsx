import AddTransactionButton from "@/app/_components/addTransactionButton";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  amout: number;
  size?: "small" | "medium" | "large";
}

const SummaryCard = ({
  icon,
  title,
  amout,
  size = "small",
}: SummaryCardProps) => {
  return (
    <Card className={`${size == "large" ? "bg-white bg-opacity-5" : ""} `}>
      <CardHeader className="flex w-full flex-row items-center gap-6">
        {icon}
        <p
          className={`${size == "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`${size == "small" ? "text-2xl font-bold" : "text-4xl font-bold"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amout)}
        </p>

        {size == "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
