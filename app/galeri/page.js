export default function Galeri() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
        Galeri Kegiatan
      </h1>

      {/* Grid untuk foto menggunakan Tailwind Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="group relative w-full h-64 bg-gray-200 rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Tempat untuk gambar (placeholder) */}
            <div className="w-full h-full bg-emerald-200 flex items-center justify-center text-emerald-600 transition-transform duration-300 group-hover:scale-110">
              <span className="font-semibold">Foto Dokumentasi {item}</span>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 font-medium">
                Lihat Detail
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
