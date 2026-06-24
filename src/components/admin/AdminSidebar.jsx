import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Building2,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const menuItems = [
    {
      name: "Overview",
      icon: LayoutDashboard,
      path: "/admin-dashboard",
    },
    {
      name: "User Management",
      icon: Users,
      path: "/admin/users",
    },
    {
      name: "Therapist Verification",
      icon: ShieldCheck,
      path: "/admin/therapists",
    },
    {
      name: "Activity Centers",
      icon: Building2,
      path: "/admin/activity-centers",
    },
    {
      name: "Analytics",
      icon: BarChart3,
      path: "/admin/analytics",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="w-[280px] h-screen bg-[#0F172A] text-white flex flex-col">

      {/* LOGO */}
      <div className="px-8 py-7 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          MindVerse
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Admin Portal
        </p>
      </div>

      {/* MENU */}
      <div className="flex-1 py-6 px-4">

        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }`
                  }
                >
                  <Icon size={20} />

                  <span>
                    {item.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>

      </div>

      {/* FOOTER */}
      <div className="p-5 border-t border-slate-700">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <h4 className="font-semibold">
              Admin Console
            </h4>

            <p className="text-xs text-slate-400">
              Super Admin
            </p>
          </div>
        </div>

      </div>
    </aside>
  );
}