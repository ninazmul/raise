"use client";

import React from "react";
import { RaiseLogoLong } from "../raise-logo";
import useAuthUser from "@/app/hooks/use-auth-user";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const DashNav = () => {
  const user = useAuthUser();
  return (
    <div className="flex items-center justify-between shadow-md">
      <Link href={"/dashboard"}>
        <RaiseLogoLong />
      </Link>
      <Link href={"/dashboard/profile"} className="flex items-center gap-2 text-black px-4 py-2 w-max">
        <div className="bg-sky-200 rounded-full p-1">
          <UserCircleIcon className="w-8 h-8 text-gray-500" />
        </div>
        <div>
          <h3 className="text-gray-700 text-sm">{user?.name || "User"}</h3>
          <p className="text-sm font-semibold">Pricing</p>
        </div>
      </Link>
    </div>
  );
};

export default DashNav;
