"use client";
import {
  HomeIcon,
  ListBulletIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Listings",
    href: "/dashboard/listings",
    icon: ListBulletIcon,
  },
  { name: "Settings", href: "/dashboard/settings", icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-full p-3 text-sm font-medium hover:bg-sky-100/20 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100/20 rounded-full": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
          </Link>
        );
      })}
    </>
  );
}
