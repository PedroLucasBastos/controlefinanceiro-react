import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import DateSelect from "./_components/date-select";
import { isMatch } from "date-fns";
import PieChartTransaction from "./_components/pie-chart-transaction";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import AiReportButton from "./_components/ai-report-button";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
    redirect(`?month=${currentMonth}`); //aqui corrige a questão do mês está vindo com apenas 1 caracter na url, fazendo com que o select ficasse vazio
  }
  const dashboard = await getDashboard(month);
  const userCanAddTransaction = await canUserAddTransaction();
  const user = await clerkClient().users.getUser(userId);
  if (!user) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 overflow-auto p-6">
        <div className="flex justify-between">
          <h1 className="hidden text-2xl font-bold md:block">Dashboard</h1>
          <div className="flex items-center gap-3">
            <AiReportButton
              month={month}
              hasPremiumPlan={user.publicMetadata.subscriptionPlan == "premium"}
            />
            <DateSelect />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 overflow-auto md:grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-6 overflow-auto">
            <SummaryCards
              month={month}
              {...dashboard}
              userCanAddTransaction={userCanAddTransaction}
            />

            <div className="grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-3">
              <PieChartTransaction {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensesPerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Home;
