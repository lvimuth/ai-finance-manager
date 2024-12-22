import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderButton from "./HeaderButton";
import { checkUser } from "@/lib/CheckUser";

async function Header() {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between ">
        <Link href={"/"} className="">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <HeaderButton />
      </nav>
    </div>
  );
}

export default Header;
