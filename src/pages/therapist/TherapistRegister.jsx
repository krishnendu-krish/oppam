import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function TherapistRegister() {
  const navigate = useNavigate();

  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("bio", bio);
      formData.append("experience_years", experience);
      formData.append("certificates", file);

await api.post(
  "auth/therapist/register/",
  formData,
  {
    headers: {
      "Content-Type":
        "multipart/form-data",
    },
  }
);

navigate("/waiting-approval");

    } catch (err) {
      console.log(err);
      setError("Failed to submit therapist application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">

      <h2 className="text-2xl font-bold mb-6">
        Therapist Verification
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* BIO */}
        <textarea
          placeholder="Write your bio..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border p-3 rounded-xl"
          required
        />

        {/* EXPERIENCE */}
        <input
          type="number"
          placeholder="Experience (years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-full border p-3 rounded-xl"
          required
        />

        {/* FILE */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
          required
        />

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-xl"
        >
          {loading ? "Submitting..." : "Submit for Approval"}
        </button>

      </form>
    </div>
  );
}