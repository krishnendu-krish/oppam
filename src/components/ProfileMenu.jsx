import {
  User,
  LayoutDashboard,
  LogOut,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function ProfileMenu({ onClose }) {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {

    logout();

    navigate("/login");

    onClose();

  };

  return (

    <>

      {/* Blur Background */}

      <div

        onClick={onClose}

        className="
        fixed
        inset-0
        bg-black/60
        backdrop-blur-md
        z-[999]
        "

      />



      {/* Profile Card */}

      <div

        className="

        fixed

        inset-0

        z-[1000]

        flex

        items-center

        justify-center

        px-4

        "

      >

        <div

          className="

          relative

          w-full

          max-w-[420px]

          bg-[#0f172a]

          border

          border-white/10

          rounded-[35px]

          shadow-[0_30px_100px_rgba(0,0,0,0.6)]

          overflow-hidden

          animate-in

          zoom-in-95

          duration-300

          "

        >

          {/* Close */}

          <button

            onClick={onClose}

            className="

            absolute

            top-6

            right-6

            text-gray-400

            hover:text-white

            transition

            "

          >

            <X size={24} />

          </button>



          {/* Profile Top */}

          <div className="text-center pt-12 pb-8">

            <div

              className="

              w-28

              h-28

              rounded-full

              mx-auto

              bg-gradient-to-r

              from-violet-500

              to-indigo-500

              flex

              items-center

              justify-center

              text-5xl

              font-bold

              text-white

              "

            >

              {user?.full_name?.charAt(0)?.toUpperCase()}

            </div>



            <h2

              className="

              mt-6

              text-3xl

              font-bold

              text-white

              "

            >

              {user?.full_name}

            </h2>



            <p

              className="

              mt-2

              text-gray-400

              "

            >

              {user?.email}

            </p>



            <div

              className="

              mt-4

              inline-block

              px-5

              py-2

              rounded-full

              bg-violet-500/20

              text-violet-300

              font-semibold

              "

            >

              {user?.role}

            </div>

          </div>



          {/* Buttons */}

          <div className="px-8 pb-10 space-y-4">

            <button

              onClick={() => {

                navigate("/dashboard");

                onClose();

              }}

              className="

              w-full

              h-14

              rounded-2xl

              bg-white/5

              border

              border-white/10

              flex

              items-center

              justify-center

              gap-3

              text-white

              hover:bg-white/10

              transition

              "

            >

              <LayoutDashboard size={22} />

              Dashboard

            </button>



            <button

              onClick={() => {

                navigate("/profile");

                onClose();

              }}

              className="

              w-full

              h-14

              rounded-2xl

              bg-white/5

              border

              border-white/10

              flex

              items-center

              justify-center

              gap-3

              text-white

              hover:bg-white/10

              transition

              "

            >

              <User size={22} />

              Profile Settings

            </button>



            <button

              onClick={handleLogout}

              className="

              w-full

              h-14

              rounded-2xl

              bg-red-500/10

              border

              border-red-500/20

              flex

              items-center

              justify-center

              gap-3

              text-red-400

              hover:bg-red-500/20

              transition

              "

            >

              <LogOut size={22} />

              Logout

            </button>

          </div>

        </div>

      </div>

    </>

  );

}