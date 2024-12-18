import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="fixed top-0">
      <nav>
        <Link href={"/"} className="flex gap-2 items-center justify-center">
          <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          <h2>Wealth</h2>
        </Link>
      </nav>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Header;
