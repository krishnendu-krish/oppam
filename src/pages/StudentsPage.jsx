import { useEffect, useState } from "react";

export default function StudentsPage() {

  const quotes = [
    "Healing takes time, and asking for help is a courageous step.",
    "Your mental health is just as important as your physical health.",
    "Small progress every day leads to big changes over time.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) =>
        prev === quotes.length - 1 ? 0 : prev + 1
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


   




          {/* FLOATING CARD */}

          <div className="w-full flex justify-center mt-16">


            <div
              className="
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
              "
            >


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

                Student Wellness
                <br />

                <span className="
                bg-gradient-to-r
                from-indigo-400
                via-purple-400
                to-cyan-400

                text-transparent
                bg-clip-text
                ">

                  Starts Here

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

            Professional therapy, AI-powered support, and wellness
            activities designed specifically for students.

          </p>



        </div>


      </section>





      {/* ACTION BUTTONS */}


      <section className="
      relative h-[40px] flex items-center justify-center 
      mx-auto
      px-6
      -mt-8
      ">


        <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-25
        ">


          <button className="
          h-12
          w-[250px]
          rounded-2xl
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          text-lg
          font-semibold
          hover:scale-105
          transition
          ">

            Therapists

          </button>



          <button className="
          h-12
          rounded-2xl
          bg-gradient-to-r
          from-purple-600
          to-pink-600
          text-lg
          font-semibold
          hover:scale-105
          transition
          ">

            AI Support

          </button>




          <button className="
h-12
          rounded-2xl
          bg-gradient-to-r
          from-cyan-600
          to-blue-600
          text-lg
          font-semibold
          hover:scale-105
          transition
          ">

            Activities

          </button>


        </div>


      </section>







      {/* TRUST SECTION */}


      <section className="
         relative h-[400px] flex items-center justify-center

      
      mx-auto
      px-6
      py-24
      ">


        <div className="
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

            Your Healing Is Our Responsibility

          </h2>



          <div className="
          space-y-6
          text-xl
          text-gray-300
          ">


            <p>✓ Trusted therapists at your service</p>

            <p>✓ Flexible chat, call, video sessions</p>

            <p>✓ Affordable pricing plans</p>

            <p>✓ Safe space for you</p>


          </div>



        </div>


      </section>







      {/* QUOTES */}



      <section className="
         relative h-[300px] flex items-center justify-center
      mx-auto
      px-6
      ">


        <div className="
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


<section className=" relative h-[300px] flex justify-center items-center

py-24
px-6
">

  <div className="w-[1200px] mx-auto">

    {/* Heading */}

    <h2 className="
    text-5xl
    font-bold
    text-center
    mb-16
    ">

      Our Impact

    </h2>
<br></br>

    {/* Stats */}

    <div className="
    grid
    grid-cols-2
    md:grid-cols-4
    gap-8
    ">

      {[
        ["25L+", "Happy Clients"],
        ["10K+", "Therapy Sessions"],
        ["500+", "Expert Therapists"],
        ["98%", "Satisfaction Rate"]
      ].map((item, index) => (

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