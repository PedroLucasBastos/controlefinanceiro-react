import { TransactionType } from "@prisma/client";

export const TRANSACTION_CATEGORY_MAP = {
  EDUCATION: "Educação",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Entretenimento",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};
export const TRANSACTION_PAYMENT_METHOD_MAP = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
];
