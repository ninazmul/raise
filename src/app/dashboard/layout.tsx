import DashNav from "@/ui/dashboard/dashnav";
import SideNav from "@/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-50">
      <div className="w-full flex-none md:w-16">
        <SideNav />
      </div>
      <div className="flex-grow  md:overflow-y-auto ">
        <div><DashNav/></div>
        <div className="p-6 md:p-12">{children}</div>
      </div>
    </div>
  );
}
