import { db } from "@/app/_lib/prisma";

export const getDashboard = async (mouth: string) => {
  const where = {
    date: {
      gte: new Date(`2025-${mouth}-01`),
      lt: new Date(`2025-${mouth}-31`),
    },
  };
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;
  return {
    balance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
  };
};
