import Link from "next/link";

export default function Event() {
  // Data event disesuaikan dengan skema data artikel (judul, kategori, ringkasan, tanggal)
  const events = [
    {
      id: "1",
      judul: "Pendakian Massal Gn. Gede",
      tanggal: "15 Agustus 2026",
      status: "Akan Datang",
      ringkasan:
        "Pendakian bersama anggota dan calon anggota Mapala Buana dalam rangka memperingati HUT RI ke-81.",
      kategori: "Gunung Hutan",
      penulis: "Divisi Gunung Hutan",
    },
    {
      id: "2",
      judul: "Latihan Gabungan Water Rescue",
      tanggal: "20 September 2026",
      status: "Akan Datang",
      ringkasan:
        "Pelatihan teknik penyelamatan di air yang melibatkan berbagai organisasi pecinta alam di wilayah ini.",
      kategori: "Kemanusiaan",
      penulis: "Divisi Operasional",
    },
    {
      id: "3",
      judul: "Aksi Bersih Pantai",
      tanggal: "5 Juni 2026",
      status: "Selesai",
      ringkasan:
        "Kegiatan pembersihan sampah plastik di kawasan pesisir sebagai bentuk kepedulian nyata terhadap ekosistem laut.",
      kategori: "Konservasi",
      penulis: "Humas",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-emerald-800 mb-4">
            Agenda & Event
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai agenda kegiatan Mapala Buana, mulai dari ekspedisi
            hingga aksi sosial lingkungan.
          </p>
        </header>

        {/* Grid Kartu Event yang menyerupai Page Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/event/${event.id}`}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gambar / Visual Banner */}
              <div
                className={`h-48 flex items-center justify-center ${event.status === "Selesai" ? "bg-gray-200" : "bg-emerald-700"}`}
              >
                <span className="text-white font-bold opacity-20 uppercase tracking-[0.2em] text-xl">
                  {event.kategori}
                </span>
              </div>

              {/* Konten Kartu */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                      event.status === "Selesai"
                        ? "bg-gray-100 text-gray-500"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {event.status}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">
                    {event.tanggal}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors mb-3 leading-tight">
                  {event.judul}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                  {event.ringkasan}
                </p>

                {/* Footer Kartu (Info Penulis/Divisi) */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Oleh:{" "}
                    <span className="font-semibold text-gray-700">
                      {event.penulis}
                    </span>
                  </span>
                  <span className="text-emerald-600 text-xs font-bold group-hover:translate-x-1 transition-transform">
                    Baca Selengkapnya →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
