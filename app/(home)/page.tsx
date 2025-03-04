import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import DateSelect from "./_components/date-select";
import { isMatch } from "date-fns";

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
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <DateSelect />
        </div>
        <SummaryCards mouth={mouth} />
      </div>
    </>
  );
};

export default Home;
