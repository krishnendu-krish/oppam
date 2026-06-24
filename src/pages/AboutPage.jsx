import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/about/HeroSection";
import MissionVision from "../components/about/MissionVision";
import WhyChoose from "../components/about/WhyChoose";
import StatsSection from "../components/about/StatsSection";

export default function AboutPage(){

return(

<div className="bg-[#070b1a] text-white">

<Navbar />

<HeroSection />

<MissionVision />

<WhyChoose />

<StatsSection />



<Footer />

</div>

)

}