export default function StatsCard({
  title,
  value,
  growth,
  icon,
}) {
  return (
    <div
      className="
        group
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-6
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >

      {/* TOP */}
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            {value}
          </h2>

        </div>

        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-violet-600
            text-white
            flex
            items-center
            justify-center
            shadow-lg
            group-hover:scale-110
            transition
          "
        >
          {icon}
        </div>

      </div>

      {/* DIVIDER */}
      <div className="h-px bg-slate-100 my-5" />

      {/* GROWTH */}
      <div className="flex items-center justify-between">

        <div
          className="
            px-3
            py-1
            rounded-full
            bg-green-100
            text-green-700
            text-sm
            font-semibold
          "
        >
          ↑ {growth}
        </div>

        <span className="text-xs text-slate-400">
          vs last month
        </span>

      </div>

    </div>
  );
}