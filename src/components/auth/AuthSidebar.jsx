export default function AuthSidebar() {
  const stats = [
    {
      value: "50K+",
      label: "Active Users",
    },
    {
      value: "1,200+",
      label: "Therapists",
    },
    {
      value: "98%",
      label: "Satisfaction",
    },
    {
      value: "24/7",
      label: "AI Support",
    },
  ];

  return (
    <div
      className="
      hidden
      lg:flex
      flex-col
      justify-between
      px-12
      py-10
      text-white
      bg-gradient-to-b
      from-[#071938]
      via-[#12385e]
      to-[#4a2aa7]
      relative
      overflow-hidden
    "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-violet-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 flex flex-col h-full">

  {/* Logo */}
  <div className="flex items-center gap-4">
    <div
      className="
        w-12
        h-12
        rounded-2xl
        bg-gradient-to-br
        from-violet-500
        to-purple-600
        flex
        items-center
        justify-center
        text-lg
      "
    >
      🧠
    </div>

    <h1 className="text-4xl font-bold">
      MindVerse
    </h1>
  </div>


</div>
  {/* Hero */}
  <div className=" max-w-[420px]">
    <h2
      className="
        text-[45px]
        leading-[1.05]
        font-bold
        tracking-[-2px]
        pl-[20px]
      "
    >
      Your mental
      <br />
      wellness journey
      <br />
      continues here.
    </h2>
<br></br>
    <p
      className="
        mt-30
        text-[16px]
        leading-5
        text-blue-200
      "
    >
      Access your AI assistant,
      mood tracker, therapist
      connections, and community
      support.
    </p>
  </div>
<div>
  <h1>                     </h1>
  <br></br>
  <br></br>
</div>

      {/* Stats */}

<div className="relative z-10 mt-16 ml-12">
  <div className="grid grid-cols-2 gap-x-8 gap-y-5">
  {stats.map((item, index) => (
    <div
      key={item.label}
      className={`
        h-[100px]
        w-[165px]
        rounded-3xl
        bg-black/20
        backdrop-blur-md
        border border-white/10
        flex flex-col items-center justify-center text-center
        ${index % 2 === 0 ? "ml-6" : ""}
      `}
    >
        <h3
          className="
            text-[28px]
            font-bold
            leading-none
          "
        >
          {item.value}
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-slate-300
          "
        >
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>
<br></br>
    </div>
  );
}