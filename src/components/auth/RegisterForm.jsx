import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  registerUser,
} from "../../services/authService";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "USER",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  if (formData.password !== formData.confirm_password) {
    setError("Passwords do not match");
    return;
  }

  try {
    setLoading(true);

    await registerUser({
      full_name: formData.full_name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });

    // Save role for later use
    localStorage.setItem(
      "selectedRole",
      formData.role
    );

    // Go to login page
    navigate("/login");

  } catch (err) {
    console.error(err);
    setError(
      "Registration failed. Please try again."
    );
  } finally {
    setLoading(false);
  }

  };

  return (
    <div className="w-full max-w-[500px] mx-auto">

      {/* HEADER */}
      <div className="mb-10 text-center">
        <h1 className="text-[56px] font-bold text-slate-900">
          Create Account
        </h1>
        <p className="mt-3 text-[18px] text-slate-500">
          Start your wellness journey today
        </p>
      </div>

      {/* GOOGLE BUTTON */}
      <button
        type="button"
        className="w-full h-14 rounded-2xl border border-slate-200 bg-white font-medium text-slate-700 flex items-center justify-center gap-3"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>

      <div className="flex items-center gap-4 my-8">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-sm text-slate-400">
          or register with email
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* FULL NAME */}
        <div className="relative">
          <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full h-14 rounded-2xl border border-slate-200 !pl-20 pr-4"
            required
          />
        </div>

        {/* EMAIL */}
        <div className="relative">
          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full h-14 rounded-2xl border border-slate-200 !pl-20 pr-4"
            required
          />
        </div>

        {/* ROLE */}
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Select Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full h-14 rounded-2xl border border-slate-200 px-4"
          >
            <option value="USER">User</option>
            <option value="STUDENT">Student</option>
            <option value="THERAPIST">Therapist</option>
            <option value="ACTIVITY_OWNER">Activity Owner</option>
          </select>
        </div>

        {/* PASSWORD */}
        <div className="relative">
          <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full h-14 rounded-2xl border border-slate-200 !pl-20 pr-14"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative">
          <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full h-14 rounded-2xl border border-slate-200 !pl-20 pr-14"
            required
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm">
            {error}
          </div>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      {/* LOGIN LINK */}
      <p className="text-center mt-8 text-slate-500">
        Already have an account?{" "}
        <Link to="/" className="text-violet-600 font-semibold">
          Sign In
        </Link>
      </p>
    </div>
  );
}