// import Sidebar from "@/components/layout/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950">

      {/* Dashboard Content */}
      <section className="min-w-0 flex-1 overflow-x-auto">
        <div className="mx-auto w-full p-6 lg:p-8">
          {children}
        </div>
      </section>
    </div>
  );
}