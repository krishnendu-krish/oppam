import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

export default function TherapistVerification() {
  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialization: "Anxiety Therapy",
      experience: "8 Years",
      status: "Pending",
    },
    {
      id: 2,
      name: "Dr. James Brown",
      specialization: "Depression",
      experience: "6 Years",
      status: "Pending",
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialization: "Family Therapy",
      experience: "10 Years",
      status: "Pending",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminHeader />

        <div className="p-8">

          <div className="bg-white rounded-3xl border p-6">

            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">
                  Therapist Verification
                </h1>

                <p className="text-slate-500 mt-2">
                  Review therapist applications
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>
                  <tr className="border-b">

                    <th className="text-left py-4">
                      Therapist
                    </th>

                    <th className="text-left py-4">
                      Specialization
                    </th>

                    <th className="text-left py-4">
                      Experience
                    </th>

                    <th className="text-left py-4">
                      Status
                    </th>

                    <th className="text-left py-4">
                      Actions
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {therapists.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b"
                    >
                      <td className="py-5">
                        {item.name}
                      </td>

                      <td>
                        {item.specialization}
                      </td>

                      <td>
                        {item.experience}
                      </td>

                      <td>
                        <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                          {item.status}
                        </span>
                      </td>

                      <td>

                        <div className="flex gap-3">

                          <button className="px-4 py-2 rounded-xl bg-green-600 text-white">
                            Approve
                          </button>

                          <button className="px-4 py-2 rounded-xl bg-red-600 text-white">
                            Reject
                          </button>

                          <button className="px-4 py-2 rounded-xl border">
                            View Certificate
                          </button>

                        </div>

                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}