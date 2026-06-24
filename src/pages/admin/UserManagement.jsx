import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

export default function UserManagement() {
  const users = [
    {
      id: 1,
      name: "Krishnendu",
      email: "krish@gmail.com",
      role: "Student",
    },
    {
      id: 2,
      name: "Sarah",
      email: "sarah@gmail.com",
      role: "Therapist",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminHeader />

        <div className="p-8">

          <div className="bg-white rounded-3xl border p-6">

            <h1 className="text-3xl font-bold mb-8">
              User Management
            </h1>

            <table className="w-full">

              <thead>
                <tr className="border-b">

                  <th className="text-left py-4">
                    Name
                  </th>

                  <th className="text-left py-4">
                    Email
                  </th>

                  <th className="text-left py-4">
                    Role
                  </th>

                  <th className="text-left py-4">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b"
                  >
                    <td className="py-4">
                      {user.name}
                    </td>

                    <td>
                      {user.email}
                    </td>

                    <td>
                      {user.role}
                    </td>

                    <td>
                      <button className="text-red-600">
                        Suspend
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}