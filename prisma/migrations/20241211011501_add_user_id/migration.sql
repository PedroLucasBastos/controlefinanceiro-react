/*
  Warnings:

  - Added the required column `userId` to the `Trasaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trasaction" ADD COLUMN     "userId" TEXT NOT NULL;
