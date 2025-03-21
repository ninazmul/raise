"use client";

import { lusitana } from "@/ui/fonts";
import {
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { handleSignIn } from "@/lib/cognitoActions";
import Link from "next/link";
import RaiseLogo from "../raise-logo";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(handleSignIn, undefined);
  return (
    <form action={dispatch} className="space-y-3 shadow-md rounded-lg">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <RaiseLogo />
        <h1
          className={`${lusitana.className} mt-10 mb-3 text-2xl text-gray-700 font-sans font-semibold text-center`}
        >
          Welcome to our system!
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Enter your details to access
            </label>
            <div className="space-y-4">
              <input
                className="peer block w-full rounded-full border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500 text-black"
                id="email"
                type="email"
                name="email"
                placeholder="Email / User"
                required
              />
              <input
                className="peer block w-full rounded-full border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500 text-black"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex justify-center">
          <Link
            href="/auth/signup"
            className="mt-2 cursor-pointer text-gray-500 text-sm"
          >
            {"Don't have an account? "} Sign up.
          </Link>
        </div>
        <div className="flex h-8 items-end space-x-1">
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full hover:bg-red-900 bg-[#9B2341] text-center rounded-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
