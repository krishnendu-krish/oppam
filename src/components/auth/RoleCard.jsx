import { ArrowRight } from "lucide-react";

export default function RoleCard({
  title,
  description,
  icon,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white border border-slate-200 rounded-3xl p-6 hover:border-violet-500 hover:shadow-lg transition-all"
    >
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="text-slate-500 mt-2">
        {description}
      </p>

      <div className="mt-6 flex justify-end">
        <ArrowRight
          size={20}
          className="text-violet-600"
        />
      </div>
    </button>
  );
}