import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminHeader />

        <div className="p-8">

          <div className="bg-white rounded-3xl border p-6">

            <h1 className="text-3xl font-bold">
              System Settings
            </h1>

            <div className="space-y-6 mt-8">

              <div>
                <label className="font-medium">
                  Platform Name
                </label>

                <input
                  type="text"
                  defaultValue="MindVerse"
                  className="w-full border rounded-xl p-3 mt-2"
                />
              </div>

              <div>
                <label className="font-medium">
                  Support Email
                </label>

                <input
                  type="email"
                  defaultValue="support@mindverse.com"
                  className="w-full border rounded-xl p-3 mt-2"
                />
              </div>

              <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl">
                Save Settings
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}