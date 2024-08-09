import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";

function Dashboardlayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      <div className="flex flex-col flex-1 h-screen">
        {/* Header Component */}
        <Header />
        {/* Header Component close... */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </ClerkLoaded>
  );
}

export default Dashboardlayout;
