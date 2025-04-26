import { DashboardView } from "@/components/dashboard/dashboard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 p-6">
        <DashboardView />
      </main>
    </div>
  );
} 