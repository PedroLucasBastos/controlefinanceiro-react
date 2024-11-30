-- CreateEnum
CREATE TYPE "TrasactionType" AS ENUM ('DEPOSIT', 'EXPENSE', 'INVESTMENT');

-- CreateEnum
CREATE TYPE "TrasactionCategory" AS ENUM ('HOUSING', 'TRANSPORTATION', 'FOOD', 'ENTERTAINMENT', 'HEALTH', 'UTILITY', 'SALARY', 'EDUCATION', 'OTHER');

-- CreateEnum
CREATE TYPE "TrasactionPaymentMethod" AS ENUM ('CREDIT_CARD', 'DEBIT_CARD', 'PIX', 'BANK_TRANSFER', 'BANK_SLIP', 'CASH', 'OTHER');

-- CreateTable
CREATE TABLE "Trasaction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TrasactionType" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "category" "TrasactionCategory" NOT NULL,
    "paymentMethod" "TrasactionPaymentMethod" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trasaction_pkey" PRIMARY KEY ("id")
);
