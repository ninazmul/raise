import Image from "next/image";
import logo from "/public/login.png";

export default function Layout({ children }: { children: React.ReactNode }) {
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
        <div className="mx-20">{children}</div>
      </div>
      <div className="absolute bottom-0 pt-10 w-full bg-[#233746]" />
    </main>
  );
}
