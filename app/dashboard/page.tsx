import Document from "@/components/Document";

export const dynamic = "forced-dynamic";
function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 bg-gray-100 font-extralight text-indigo-600">
        My Documents
      </h1>

      {/* Document */}

      <Document />
    </div>
  );
}

export default Dashboard;
