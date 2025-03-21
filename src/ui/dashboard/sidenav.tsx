import Link from "next/link";
import NavLinks from "@/ui/dashboard/nav-links";
import LogoutForm from "./logout-form";

export default function SideNav() {
  return (
    <div className="relative flex h-full flex-col px-3 py-4 md:px-2 bg-[#233746]">
      <Link className="" href="/">
        <div className="text-gray-300 text-5xl px-2 pb-4">R</div>
      </Link>
      <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
      <div className="absolute bottom-0">
        <LogoutForm />
      </div>
    </div>
  );
}
