"use server";

import { db } from "@/app/_lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
import OpenAI from "openai";
import { generateAiReportSchema } from "./schema";

export const generateAiReport = async ({ month }: generateAiReportSchema) => {
  generateAiReportSchema.parse({ month });
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const user = await clerkClient.users.getUser(userId);
  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";
  if (!hasPremiumPlan) {
    throw new Error("User does not have premium plan");
  }
  const transactions = await db.transaction.findMany({
    where: {
      date: {
        gte: new Date(`2025 ${month}-01`),
        lt: new Date(`2025 ${month}-31`),
      },
    },
  });
  const content = `Gere um relatório financeiro com insights, orientações e dicas para melhorar minha vida financeira, baseado nas transações a seguir. 
Retorne somente o relatório, sem mensagens adicionais, sem introdução ou títulos extras.
As transações estão divididas por ponto e vírgula, com o formato {DATA}-{TIPO}-{VALOR}-{CATEGORIA}. São elas:
  ${transactions
    .map(
      (transaction) =>
        `${transaction.date.toLocaleDateString("pt-BR")}-${transaction.type}-R$${transaction.amount}-${transaction.category}`,
    )
    .join(";")}`;
  const completion = await openAi.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Você é um especialista em gestão e organização de finanças pessoais. Você ajuda as pessoas a organizarem melhor as suas finaças.",
      },
      {
        role: "user",
        content,
      },
    ],
  });
  const aiReport = completion.choices[0].message.content;

  const reportFormatted = `
  <div style="text-align: center;">
    <img src="/logo.png" alt="LogoRelatorio" style="max-width: 150px; display: block; margin: 0 auto;">
    <h2>Relatório Financeiro do mês de ${month}</h2>
  </div>

---

${aiReport}

---

<div style="text-align: center;">
  <strong>Relatório gerado por IA na plataforma BudgetBuddy.</strong><br>
  © ${new Date().getFullYear()}
</div>
`;
  return reportFormatted;
};
