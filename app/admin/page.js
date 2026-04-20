export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Ringkasan Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card Statistik Sederhana */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-semibold">Total Artikel</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-semibold">Agenda Aktif</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-semibold">Foto Galeri</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">45</p>
        </div>
      </div>
    </div>
  );
}
