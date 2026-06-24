import {
  Bell,
  Search,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200">

      <div className="h-24 px-8 flex items-center justify-between">

        {/* LEFT */}
        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            Admin Dashboard
          </h1>

          <p className="text-slate-500 mt-1">
            Welcome back. Here's what's happening today.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* DATE */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-100">

            <CalendarDays
              size={18}
              className="text-indigo-600"
            />

            <div>
              <p className="text-xs text-slate-500">
                Today
              </p>

              <p className="font-semibold text-slate-800">
                24 June 2026
              </p>
            </div>

          </div>

          {/* SEARCH */}
          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search users, therapists, reports..."
              className="
                w-[350px]
                h-12
                pl-11
                pr-4
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                outline-none
                transition
                focus:bg-white
                focus:border-indigo-500
                focus:ring-4
                focus:ring-indigo-100
              "
            />

          </div>

          {/* NOTIFICATIONS */}
          <button
            className="
              relative
              w-12
              h-12
              rounded-2xl
              border
              border-slate-200
              bg-white
              flex
              items-center
              justify-center
              hover:bg-slate-50
              transition
            "
          >

            <Bell size={18} />

            <span
              className="
                absolute
                top-2
                right-2
                w-2.5
                h-2.5
                bg-red-500
                rounded-full
              "
            />

          </button>

          {/* PROFILE */}
          <button
            className="
              flex
              items-center
              gap-3
              px-3
              py-2
              rounded-2xl
              hover:bg-slate-100
              transition
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                text-white
                font-bold
                flex
                items-center
                justify-center
                shadow-lg
              "
            >
              A
            </div>

            <div className="hidden lg:block text-left">

              <p className="font-semibold text-slate-900">
                Admin
              </p>

              <p className="text-xs text-slate-500">
                Super Administrator
              </p>

            </div>

            <ChevronDown
              size={16}
              className="text-slate-500"
            />

          </button>

        </div>

      </div>

    </header>
  );
}