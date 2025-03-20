"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <Image src="/logoHead.svg" width={35} height={35} alt="budgetbuddy" />
          <h1 className="text-xl font-bold">BudgetBuddy</h1>
        </div>

        {/* Links para telas maiores */}
        <div className="hidden gap-6 md:flex">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Assinaturas
          </Link>
        </div>
      </div>

      {/* Botão de usuário e menu hambúrguer */}
      <div className="flex items-center gap-4">
        <UserButton showName />
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown para telas menores */}
      {isOpen && (
        <div className="absolute right-8 top-16 flex flex-col gap-2 rounded-lg bg-white p-4 shadow-lg md:hidden">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
            onClick={() => setIsOpen(false)}
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
            onClick={() => setIsOpen(false)}
          >
            Assinaturas
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
