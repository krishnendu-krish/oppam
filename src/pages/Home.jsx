import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b1a] via-[#12122b] to-[#0b0b1a]">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}