"use client";

import { PowerIcon } from "@heroicons/react/24/outline";

import { useFormState } from "react-dom";
import { handleSignOut } from "@/lib/cognitoActions";

export default function LogoutForm() {
  const [, dispatch] = useFormState(handleSignOut, undefined);
  return (
    <form action={dispatch}>
      <button className="flex h-[48px] w-full grow rounded-full p-3 text-sm font-medium hover:bg-sky-100/20 md:flex-none md:justify-start md:p-2 md:px-3 my-2">
        <PowerIcon className="w-6" />
      </button>
    </form>
  );
}
