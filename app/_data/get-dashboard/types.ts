import { TransactionType } from "@prisma/client";

export type TransactionPercentPerType = {
  [key in TransactionType]: number;
};
