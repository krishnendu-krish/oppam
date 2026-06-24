import { useState } from "react";

import { useNavigate } from "react-router-dom";

import RoleCard from "../../components/auth/RoleCard";

import api from "../../services/api";

export default function RoleSelectPage() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const chooseRole = async (
    role
  ) => {
    try {
      setLoading(true);

      await api.post(
        "/auth/select-role/",
        {
          role,
        }
      );

      switch (role) {
        case "STUDENT":
          navigate(
            "/"
          );
          break;

        case "THERAPIST":
          navigate(
            "/"
          );
          break;

        case "ACTIVITY_OWNER":
          navigate(
            "/owner/dashboard"
          );
          break;

        default:
          navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="max-w-6xl w-full">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-slate-900">
            Choose Your Role
          </h1>

          <p className="text-slate-500 mt-4 text-lg">
            Select how you want to use
            MindVerse
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <RoleCard
            icon="🎓"
            title="Student"
            description="Track mood, access therapy, stress relief activities and mental wellness tools."
            onClick={() =>
              chooseRole(
                "STUDENT"
              )
            }
          />

          <RoleCard
            icon="🧑‍⚕️"
            title="Therapist"
            description="Manage appointments, support users and provide professional guidance."
            onClick={() =>
              chooseRole(
                "THERAPIST"
              )
            }
          />

          <RoleCard
            icon="🏢"
            title="Activity Owner"
            description="Host pottery therapy, rage rooms, yoga sessions and wellness activities."
            onClick={() =>
              chooseRole(
                "ACTIVITY_OWNER"
              )
            }
          />

        </div>

        {loading && (
          <div className="text-center mt-10 text-violet-600 font-semibold">
            Updating role...
          </div>
        )}

      </div>
    </div>
  );
}