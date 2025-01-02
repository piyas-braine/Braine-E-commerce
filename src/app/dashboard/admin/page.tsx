import { DashboardSidebarMenu } from "@/components/Dashboard/DashboardSidebarMenu";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <DashboardSidebarMenu />

        <main className="w-full bg-gray-200 h-screen">
          <nav className="p-4 bg-slate-300 w-full">Navbar</nav>
          <SidebarTrigger>
            <Button variant="default"> open</Button>
          </SidebarTrigger>

          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
