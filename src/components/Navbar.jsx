import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import ProfileMenu from "./ProfileMenu";

export default function Navbar() {

  const [showServices, setShowServices] =
    useState(false);

  const [open, setOpen] =
    useState(false);

  const navigate = useNavigate();

  const { user } = useAuth();


  return (

    <nav className="fixed top-0 left-0 w-full z-50">

      <div
        className="
        h-17

        px-8

        flex

        items-center

        justify-between

        backdrop-blur-md

        bg-white/5

        border-b

        border-white/10

        text-white
        "
      >

        {/* LOGO */}

        <Link
          to="/"
          className="
          flex

          items-center

          gap-3

          text-xl

          font-bold
          "
        >

          <div
            className="
            w-9

            h-9

            rounded-full

            bg-gradient-to-tr

            from-purple-500

            to-blue-500
            "
          />

          MindVerse

        </Link>



        {/* CENTER MENU */}

        <div
          className="
          hidden

          md:flex

          items-center

          gap-24

          text-sm

          text-gray-300
          "
        >

          {/* SERVICES */}

          <div className="relative">

            <button

              onClick={() =>

                setShowServices(

                  !showServices

                )

              }

              className="
              flex

              items-center

              gap-2

              hover:text-white

              transition
              "

            >

              Services

              <span

                className={`

                transition-transform

                duration-300

                ${showServices ?

                  "rotate-180"

                  :

                  ""

                }

                `}

              >

                ▼

              </span>

            </button>



            {

              showServices &&

              (

                <div

                  className="

                  absolute

                  top-12

                  left-0

                  w-56

                  rounded-2xl

                  bg-[#0f172a]

                  border

                  border-white/10

                  backdrop-blur-xl

                  shadow-2xl

                  overflow-hidden

                  "

                >

                  <Link

                    to="/students"

                    onClick={() =>

                      setShowServices(false)

                    }

                    className="

                    block

                    px-6

                    py-4

                    hover:bg-white/5

                    transition

                    "

                  >

                    Students

                  </Link>



                  <Link

                    to="/users"

                    onClick={() =>

                      setShowServices(false)

                    }

                    className="

                    block

                    px-6

                    py-4

                    hover:bg-white/5

                    transition

                    "

                  >

                    Normal Users

                  </Link>

                </div>

              )

            }

          </div>



          <Link

            to="/about"

            className="hover:text-white"

          >

            About Us

          </Link>



          <Link

            to="/faq"

            className="hover:text-white"

          >

            QNA

          </Link>



          <Link

            to="/contact"

            className="hover:text-white"

          >

            Contact

          </Link>

        </div>



        {/* RIGHT SIDE */}

        {

          user ?

          (

            <>

              <div

                onClick={() =>

                  setOpen(

                    !open

                  )

                }

                className="

                flex

                items-center

                gap-3

                cursor-pointer

                "

              >

                {/* Avatar */}

                <div

                  className="

                  w-11

                  h-11

                  rounded-full

                  bg-gradient-to-r

                  from-violet-500

                  to-indigo-500

                  flex

                  items-center

                  justify-center

                  font-bold

                  text-white

                  shadow-lg

                  hover:scale-105

                  transition

                  "

                >

                  {

                    user?.full_name

                    ?.charAt(0)

                    ?.toUpperCase()

                  }

                </div>



                {/* Name */}

                <div className="hidden md:block">

                  <p className="font-semibold text-white">

                    {user?.full_name}

                  </p>

                  <p className="text-xs text-gray-400">

                    {user?.role}

                  </p>

                </div>

              </div>



              {

                open &&

                <ProfileMenu

                  onClose={() =>

                    setOpen(false)

                  }

                />

              }

            </>

          )

          :

          (

            <button

              onClick={() =>

                navigate("/login")

              }

              className="

              text-gray-300

              hover:text-white

              "

            >

              Sign In

            </button>

          )

        }

      </div>

    </nav>

  );

}