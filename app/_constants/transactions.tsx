import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

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

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.BANK_TRANSFER]: "/bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "/bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "/cash.svg",
  [TransactionPaymentMethod.CREDIT_CARD]: "/credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "/debit-card.svg",
  [TransactionPaymentMethod.PIX]: "/pix.svg",
  [TransactionPaymentMethod.OTHER]: "/other.svg",
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

export const PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_MAP[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: TRANSACTION_PAYMENT_METHOD_MAP[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_MAP[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: TRANSACTION_PAYMENT_METHOD_MAP[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: TRANSACTION_PAYMENT_METHOD_MAP[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_MAP[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_MAP[TransactionPaymentMethod.OTHER],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_MAP[TransactionCategory.UTILITY],
  },
];
