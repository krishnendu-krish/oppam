import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import {
  loginUser,
  googleLogin,
} from "../../services/authService";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        "access",
        data.access
      );

      localStorage.setItem(
        "refresh",
        data.refresh
      );

      localStorage.setItem(
        "role",
        data.user.role
      );

      const role = data.user.role;

      // ROLE BASED REDIRECT
      if (role === "THERAPIST") {
        navigate("/therapist-register");
      }

      else if (role === "STUDENT") {
        navigate("/student-dashboard");
      }

      else if (role === "ACTIVITY_OWNER") {
        navigate("/owner-dashboard");
      }

      else if (role === "ADMIN") {
        navigate("/admin-dashboard");
      }

      else {
        navigate("/");
      }

    } catch (error) {
      console.error(error);
      setError(
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (
    credentialResponse
  ) => {
    try {
      setLoading(true);
      setError("");

      const data = await googleLogin(
        credentialResponse.credential
      );

      localStorage.setItem(
        "access",
        data.access
      );

      localStorage.setItem(
        "refresh",
        data.refresh
      );

      localStorage.setItem(
        "role",
        data.user.role
      );

      const role = data.user.role;

      if (role === "THERAPIST") {
        navigate("/therapist-register");
      }

      else if (role === "STUDENT") {
        navigate("/student-dashboard");
      }

      else if (role === "ACTIVITY_OWNER") {
        navigate("/owner-dashboard");
      }

      else if (role === "ADMIN") {
        navigate("/admin-dashboard");
      }

      else {
        navigate("/");
      }

    } catch (error) {
      console.error(error);
      setError(
        "Google authentication failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[500px] mx-auto">

      <div className="mb-10 text-center">
        <h1 className="text-[56px] font-bold text-slate-900">
          Welcome back
        </h1>

        <p className="mt-3 text-[18px] text-slate-500">
          Sign in to continue your wellness journey
        </p>
      </div>

      <div className="w-full flex justify-center">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() =>
            setError("Google login failed")
          }
        />
      </div>

      <div className="flex items-center gap-4 my-8">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-sm text-slate-400">
          or sign in with email
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >
        <div className="relative">
          <Mail
            size={20}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter your email"
            className="w-full h-14 rounded-2xl border border-slate-200 !pl-20 pr-4"
            required
          />
        </div>

        <div className="relative">
          <Lock
            size={20}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Enter your password"
            className="w-full h-14 rounded-2xl border border-slate-200 !pl-20 pr-14"
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold"
        >
          {loading
            ? "Signing In..."
            : "Sign In →"}
        </button>
      </form>

      <p className="text-center mt-8 text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-violet-600 font-semibold"
        >
          Create one free
        </Link>
      </p>

    </div>
  );
}