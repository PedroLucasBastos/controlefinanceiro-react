import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div>
      {/*Titilo e botão*/}
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Trasações</h1>
        <Button className="rounded-full">
          Adicionar Trasações
          <ArrowDownUpIcon />
        </Button>
      </div>
    </div>
  );
};
export default TransactionsPage;
