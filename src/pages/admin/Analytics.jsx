import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminHeader />

        <div className="p-8">

          <div className="bg-white rounded-3xl border p-6">

            <h1 className="text-3xl font-bold">
              Platform Analytics
            </h1>

            <div className="mt-10 h-[500px] border rounded-2xl flex items-center justify-center">
              Charts Coming Soon
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}