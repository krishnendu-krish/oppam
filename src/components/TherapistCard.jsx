import { useNavigate } from "react-router-dom";

export default function TherapistCard({


therapist


}) {


const navigate = useNavigate();


return (

    <div

    className="

    bg-white/5

    backdrop-blur-xl

    border

    border-white/10

    rounded-3xl

    p-8

    hover:border-violet-500

    hover:-translate-y-2

    transition-all

    duration-300

    "

    >

        <div

        className="

        w-20

        h-20

        rounded-full

        bg-gradient-to-r

        from-violet-500

        to-indigo-500

        flex

        items-center

        justify-center

        text-3xl

        font-bold

        "

        >

            {

                therapist.full_name

                ?.charAt(0)

                ?.toUpperCase()

            }

        </div>



        <h2

        className="

        mt-5

        text-2xl

        font-bold

        "

        >

            {

                therapist.full_name

            }

        </h2>



        <p className="text-indigo-300 mt-2">

            {

                therapist.specialization

            }

        </p>



        <p className="text-gray-400 mt-3">

            {

                therapist.experience

            } years experience

        </p>



        <p className="text-gray-400">

            ₹

            {

                therapist.fee

            }

            /session

        </p>



        <button

        onClick={()=>

            navigate(

                `/therapists/${therapist.id}`

            )

        }

        className="

        mt-6

        w-full

        h-12

        rounded-2xl

        bg-gradient-to-r

        from-indigo-600

        to-violet-600

        font-semibold

        "

        >

            View Profile

        </button>

    </div>

);


}
