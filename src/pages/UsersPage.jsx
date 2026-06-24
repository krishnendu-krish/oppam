import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UsersPage() {
    const navigate = useNavigate();

  const quotes = [
    "Self-care is not selfish. It is essential.",
    "Your mental health matters every single day.",
    "Small positive changes create big results.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentQuote((prev) =>
        prev === quotes.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);



  return (

    <div className="min-h-screen bg-[#070B14] text-white">


      {/* HERO */}

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />


        <div className="relative w-full flex flex-col items-center justify-center px-6">


          <div className="w-full flex justify-center mt-16">

            <div className="
            relative
            w-[95%]
            max-w-[1400px]
            h-[240px]

            rounded-[35px]

            bg-gradient-to-br
            from-slate-900
            via-indigo-950
            to-slate-900

            border
            border-white/10

            shadow-[0_50px_120px_rgba(99,102,241,0.45)]

            flex
            items-center
            justify-center

            overflow-hidden
            ">


              <div className="
              absolute
              inset-0
              bg-gradient-to-r
              from-indigo-500/10
              via-purple-500/10
              to-cyan-500/10
              " />


              <h1 className="
              relative
              z-10
              text-6xl
              md:text-8xl
              font-bold
              text-center
              leading-tight
              ">

                Personal Wellness

                <br />

                <span className="
                bg-gradient-to-r
                from-indigo-400
                via-purple-400
                to-cyan-400

                text-transparent
                bg-clip-text
                ">

                  Begins Today

                </span>

              </h1>

            </div>

          </div>



          <p className="
          mt-10
          max-w-3xl
          text-xl
          text-gray-300
          text-center
          leading-relaxed
          ">

            Discover therapy, mindfulness practices,
            and wellness programs designed to help
            you live a happier and healthier life.

          </p>


        </div>

      </section>






      {/* ACTION BUTTONS */}


      <section className="
    relative h-[40px] flex justify-center items-center

      px-6
      -mt-8
      ">


        <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        ">


          <button 
          onClick={() => navigate("/therapists")}className="
          h-12
          w-[250px]
          rounded-2xl

          bg-gradient-to-r
          from-indigo-600
          to-purple-600

          font-semibold

          hover:scale-105

          transition

          ">

            Therapists

          </button>



          <button className="
          h-12
          w-[250px]
          rounded-2xl

          bg-gradient-to-r
          from-purple-600
          to-pink-600

          font-semibold

          hover:scale-105

          transition
          ">

            Meditation

          </button>




          <button className="
          h-12
          w-[250px]
          rounded-2xl

          bg-gradient-to-r
          from-cyan-600
          to-blue-600

          font-semibold

          hover:scale-105

          transition
          ">

            Wellness Plans

          </button>


        </div>


      </section>









      {/* TRUST SECTION */}


      <section className="
      py-28
      px-6
    relative h-[300px] flex justify-center items-center

      ">


        <div className="
        max-w-4xl

        bg-white/5

        border

        border-white/10

        rounded-3xl

        p-10

        backdrop-blur-xl
        ">


          <h2 className="
          text-4xl

          font-bold

          mb-10
          ">

            Wellness Designed For Everyone

          </h2>



          <div className="
          space-y-6

          text-xl

          text-gray-300
          ">


            <p>✓ Professional therapists available</p>

            <p>✓ Personalized wellness guidance</p>

            <p>✓ Meditation and mindfulness support</p>

            <p>✓ Safe and confidential sessions</p>


          </div>


        </div>


      </section>










      {/* QUOTES */}



      <section className="
      py-20

      px-6

   relative h-[300px] flex justify-center items-center

      ">


        <div className="
        max-w-4xl

        w-full

        bg-gradient-to-r

        from-indigo-500/10

        to-purple-500/10


        border

        border-white/10


        rounded-3xl

        p-12

        text-center
        ">


          <h2 className="
          text-4xl

          font-bold

          mb-8
          ">

            Daily Motivation

          </h2>



          <p className="
          text-3xl

          text-indigo-300

          min-h-[120px]

          flex

          items-center

          justify-center
          ">

            "{quotes[currentQuote]}"

          </p>


        </div>


      </section>










      {/* STATS */}


      <section className="relative h-[300px] flex justify-center items-center

      py-24

      px-6
      ">


        <div className="max-w-7xl mx-auto">


          <h2 className="
          text-5xl

          font-bold

          text-center

          mb-16
          ">

            Our Impact

          </h2>



          <div className="
          grid

          grid-cols-2

          md:grid-cols-4

          gap-8
          ">


            {[
              ["50K+", "Happy Users"],
              ["20K+", "Sessions Completed"],
              ["100+", "Expert Therapists"],
              ["98%", "Satisfaction Rate"]
            ].map((item,index)=>(

              <div

                key={index}

                className="

                bg-white/5

                backdrop-blur-xl

                border

                border-white/10

                rounded-3xl

                p-8

                text-center

                hover:border-violet-500

                hover:-translate-y-2

                transition-all

                duration-300

                "

              >

                <h3 className="
                text-5xl

                font-bold

                text-indigo-400
                ">

                  {item[0]}

                </h3>



                <p className="
                mt-4

                text-gray-400

                text-lg
                ">

                  {item[1]}

                </p>

              </div>

            ))}


          </div>


        </div>


      </section>



    </div>

  );

}