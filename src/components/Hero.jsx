import { useNavigate } from "react-router-dom";
export default function Hero() {
      const navigate = useNavigate();
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 h-[600px]">
      
      {/* Glow background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.25),transparent_60%)]" />

      {/* Badge */}
  <div className="relative inline-flex items-center gap-2 px-4 py-6 mb-8 text-sm text-indigo-300 bg-white/10 border border-white/10 rounded-full backdrop-blur-md">
  ✨ AI-Powered Mental Wellness Ecosystem
</div>

      {/* Heading (BIGGER) */}
      <h1 className="relative text-6xl md:text-8xl font-bold leading-tight text-white max-w-4xl">
        Your Mental Health,{" "}
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Reimagined
        </span>
      </h1>

      {/* Subtitle (slightly bigger) */}
      <p className="relative mt-6 text-indigo-300 max-w-2xl text-l leading-relaxed">
        Connect with therapists, track your mood, explore wellness activities,
        and get AI-powered support — all in one trusted platform designed for
        your unique journey.
      </p>
<br></br>
      {/* Button (BIGGER width + height) */}
<div className="relative mt-auto mb-10 flex flex-col sm:flex-row items-center gap-4">
<button 
 onClick={() => navigate("/login")}
className="px-12 w-65 h-13 text-lg rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:scale-105 transition flex items-center justify-center">
    Start Your Journey →
  </button>
</div>

    </section>
  );
}