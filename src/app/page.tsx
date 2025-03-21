"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import logo from "/public/login.png";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Button } from "@/ui/button";
import RaiseLogo from "@/ui/raise-logo";
import { lusitana } from "@/ui/fonts";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative flex items-center justify-center bg-white">
      <div className="w-3/5 z-10 min-h-screen">
        <Image
          src={logo}
          alt=""
          height={1000}
          width={1000}
          className="min-h-screen w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 mx-20">
          <RaiseLogo />
          <h1
            className={`${lusitana.className} mt-10 mb-3 text-2xl text-gray-700 font-sans font-semibold text-center`}
          >
            Welcome to our system!
          </h1>
          <div className="w-full text-gray-800">
            Sign in to explore your dashboard and get started!
          </div>
          <Link href="/auth/login">
            <LoginButton />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 pt-10 w-full bg-[#233746]" />
    </main>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 w-full hover:bg-red-900 bg-[#9B2341] text-center rounded-full"
      aria-disabled={pending}
    >
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
