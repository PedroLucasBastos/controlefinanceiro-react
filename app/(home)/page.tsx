import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import DateSelect from "./_components/date-select";
import { isMatch } from "date-fns";
import PieChartTransaction from "./_components/pie-chart-transaction";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";

interface HomeProps {
  searchParams: {
    mouth: string;
  };
}

const Home = async ({ searchParams: { mouth } }: HomeProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  const mouthIsInvalid = !mouth || !isMatch(mouth, "MM");
  if (mouthIsInvalid) {
    redirect("/?mouth=01");
  }
  const dashboard = await getDashboard(mouth);
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <DateSelect />
        </div>
        <div className="grid grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-6">
            <SummaryCards mouth={mouth} {...dashboard} />

            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <PieChartTransaction {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensesPerCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
