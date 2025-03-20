import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  userCanAddTransaction,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Primeiro card */}
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amout={balance}
        size="large"
        userCanAddTransaction={userCanAddTransaction}
      />

      {/* Card 2 */}
      <div className="grid grid-cols-1 justify-between gap-6 md:grid-cols-3">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amout={investmentsTotal}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amout={depositsTotal}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          amout={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
