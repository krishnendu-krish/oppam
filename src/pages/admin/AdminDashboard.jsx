import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import StatsCard from "../../components/admin/StatsCard";

import {
  Users,
  DollarSign,
  ShieldCheck,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">

      <AdminSidebar />
     

      <div className="flex-1">

        <AdminHeader />
        <br>
        </br>

        <main className="p-8 space-y-8">

       

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatsCard
              title="Total Users"
              value="50,284"
              growth="+1,240 this month"
              icon={<Users size={22} />}
            />

            <StatsCard
              title="Monthly Revenue"
              value="$68,000"
              growth="+5.4%"
              icon={<DollarSign size={22} />}
            />

            <StatsCard
              title="Active Therapists"
              value="1,248"
              growth="+52 new"
              icon={<ShieldCheck size={22} />}
            />

            <StatsCard
              title="Sessions"
              value="2,720"
              growth="+180 this month"
              icon={<Activity size={22} />}
            />

          </div>


         <br></br>
         <br></br>
          {/* CHART + ACTIONS */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* CHART */}
            <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Platform Growth
                  </h2>

                  <p className="text-slate-500 mt-1">
                    Revenue and user growth overview
                  </p>
                </div>

                <select className="border border-slate-200 rounded-xl px-4 py-2 outline-none">
                  <option>Last 6 Months</option>
                  <option>Last 12 Months</option>
                </select>

              </div>

              <div className="mt-8 h-[320px] rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-indigo-100 flex flex-col items-center justify-center">

                <Activity
                  size={60}
                  className="text-indigo-500"
                />

                <p className="text-slate-600 mt-4 font-medium">
                  Analytics Chart Coming Soon
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  Recharts integration will be added here
                </p>

              </div>

            </div>

            {/* ACTION CENTER */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

              <h2 className="text-2xl font-bold mb-6">
                Action Center
              </h2>

              <div className="space-y-4">

                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100">

                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Therapist Verification
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        8 applications awaiting approval
                      </p>
                    </div>

                    <button className="text-indigo-600">
                      <ArrowRight size={20} />
                    </button>

                  </div>

                </div>

                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">

                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Community Reports
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        3 reports require moderation
                      </p>
                    </div>

                    <button className="text-indigo-600">
                      <ArrowRight size={20} />
                    </button>

                  </div>

                </div>

                <div className="p-5 rounded-2xl bg-green-50 border border-green-100">

                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Activity Centers
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        3 centers pending approval
                      </p>
                    </div>

                    <button className="text-indigo-600">
                      <ArrowRight size={20} />
                    </button>

                  </div>

                </div>

                <div className="p-5 rounded-2xl bg-red-50 border border-red-100">

                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Billing Disputes
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        1 unresolved dispute
                      </p>
                    </div>

                    <button className="text-indigo-600">
                      <ArrowRight size={20} />
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <br></br>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

  {/* HEADER */}
  <div className="flex items-center justify-between mb-8">

    <div>
      <h2 className="text-2xl font-bold text-slate-900">
        Recent Activities
      </h2>

      <p className="text-slate-500 mt-1">
        Latest platform updates and actions
      </p>
    </div>

    <button
      className="
        px-4
        py-2
        rounded-xl
        bg-indigo-50
        text-indigo-600
        font-semibold
        hover:bg-indigo-100
        transition
      "
    >
      View All
    </button>

  </div>

  {/* ACTIVITIES */}
  <div className="space-y-6">

    {/* ITEM 1 */}
    <div className="flex items-start justify-between">

      <div className="flex gap-4">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-green-100
            flex
            items-center
            justify-center
          "
        >
          👨‍⚕️
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            New Therapist Registration
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Dr. Sarah Wilson submitted verification documents.
          </p>
        </div>

      </div>

      <span className="text-sm text-slate-400">
        2 min ago
      </span>

    </div>

    {/* ITEM 2 */}
    <div className="flex items-start justify-between">

      <div className="flex gap-4">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-red-100
            flex
            items-center
            justify-center
          "
        >
          🚨
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            Community Report Submitted
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Content flagged by multiple users for review.
          </p>
        </div>

      </div>

      <span className="text-sm text-slate-400">
        15 min ago
      </span>

    </div>

    {/* ITEM 3 */}
    <div className="flex items-start justify-between">

      <div className="flex gap-4">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-indigo-100
            flex
            items-center
            justify-center
          "
        >
          🏢
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            Activity Center Request
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Wellness Hub requested approval to join platform.
          </p>
        </div>

      </div>

      <span className="text-sm text-slate-400">
        1 hour ago
      </span>

    </div>

    {/* ITEM 4 */}
    <div className="flex items-start justify-between">

      <div className="flex gap-4">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-emerald-100
            flex
            items-center
            justify-center
          "
        >
          💳
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            Payment Received
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Monthly subscription payment processed successfully.
          </p>
        </div>

      </div>

      <span className="text-sm text-slate-400">
        3 hours ago
      </span>

    </div>

    {/* ITEM 5 */}
    <div className="flex items-start justify-between">

      <div className="flex gap-4">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-violet-100
            flex
            items-center
            justify-center
          "
        >
          📈
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            Monthly Growth Update
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            User registrations increased by 12.4% this month.
          </p>
        </div>

      </div>

      <span className="text-sm text-slate-400">
        5 hours ago
      </span>

    </div>

  </div>

</div>

        </main>

      </div>

    </div>
  );
}