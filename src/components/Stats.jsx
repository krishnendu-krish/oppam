export default function Stats() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-12 text-center mt-6 pt-[-200px]">
      <div>
        <h2 className="text-3xl font-bold text-white">50K+</h2>
        <p className="text-sm text-gray-400 mt-1">Active Users</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white">1,200+</h2>
        <p className="text-sm text-gray-400 mt-1">Therapists</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white">98%</h2>
        <p className="text-sm text-gray-400 mt-1">Satisfaction Rate</p>
      </div>
    </div>
  );
}