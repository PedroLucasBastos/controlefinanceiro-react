import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Seção de login */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center px-4 py-8">
        <div className="flex flex-col items-center">
          <Image
            src="./logo.svg"
            alt="budgetbuddy"
            width={170}
            height={170}
            className="mb-6"
          />
          <h1 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            Bem-Vindo!
          </h1>
        </div>
        <p className="mb-8 text-center text-gray-500">
          BudgetBuddy é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button className="mx-auto w-full max-w-[300px]" variant="outline">
            <LogInIcon className="mr-2" />
            Fazer Login
          </Button>
        </SignInButton>
      </div>

      {/* Imagem lateral */}
      <div className="relative hidden h-full w-full md:block">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
