export default function MissionVision(){

return(

<section className="h-[200px] flex items-center justify-center px-6">

  <div className="max-w-6xl mx-auto">

    <div className="grid md:grid-cols-2 gap-10">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10">

        <h2 className="text-4xl font-bold mb-6">
          Our Mission
        </h2>

        <p className="text-gray-300 leading-8">
          To make mental healthcare accessible,
          affordable and stigma-free so everyone can live
          a healthier and happier life.
        </p>

      </div>


      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] ml-10">

        <h2 className="text-4xl font-bold mb-6">
          Our Vision
        </h2>

        <p className="text-gray-300 leading-8">
          A world where emotional wellness is valued
          equally with physical health and support
          is available to everyone.
        </p>

      </div>

    </div>

  </div>

</section>

)

}