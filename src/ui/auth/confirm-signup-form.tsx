"use client";

import { lusitana } from "@/ui/fonts";
import {
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { handleConfirmSignUp } from "@/lib/cognitoActions";
import RaiseLogo from "../raise-logo";

export default function ConfirmSignUpForm() {
  const [errorMessage, dispatch] = useFormState(handleConfirmSignUp, undefined);
  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <RaiseLogo />
        <h1
          className={`${lusitana.className} mt-10 mb-3 text-2xl text-gray-700 font-sans font-semibold text-center`}
        >
          Please confirm your account.
        </h1>
        <div className="w-full">
          <div>
            <div className="space-y-4">
              <input
                className="peer block w-full rounded-full border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500 text-black"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <input
                className="peer block w-full rounded-full border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500 text-black"
                id="code"
                type="text"
                name="code"
                placeholder="Enter code"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <ConfirmButton />
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

function ConfirmButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full hover:bg-red-900 bg-[#9B2341] text-center rounded-full" aria-disabled={pending}>
      Confirm <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
