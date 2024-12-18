import React from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { LayoutDashboard, PenBox } from "lucide-react";

function HeaderButton() {
  return (
    <div>
      <SignedOut>
        <SignInButton forceRedirectUrl="/dashboard">
          <Button variant="outline">Login</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-center items-center gap-2">
          <Link
            href={"/dashboard"}
            className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
          >
            <Button variant="outline">
              <LayoutDashboard size={18} />
              <span className="hidden md:inline">Dashboard</span>
            </Button>
          </Link>
          <Link href={"/transaction/create"}>
            <Button className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Transaction</span>
            </Button>
          </Link>
          <UserButton
            appearance={{
              elements: { avatarBox: "w-9 h-9" },
            }}
          />
        </div>
      </SignedIn>
    </div>
  );
}

export default HeaderButton;
