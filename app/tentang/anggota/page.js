import Link from "next/link";

export default function DaftarAnggota() {
  const anggota = [
    {
      id: "001",
      nama: "Ahmad Fauzi",
      angkatan: "XXIV",
      status: "Anggota Penuh",
    },
    {
      id: "002",
      nama: "Rina Kartika",
      angkatan: "XXV",
      status: "Anggota Penuh",
    },
    // Tambahkan data lainnya di sini
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link
        href="/tentang"
        className="text-emerald-600 hover:underline mb-6 inline-block"
      >
        &larr; Kembali ke Tentang Kami
      </Link>
      <h1 className="text-3xl font-bold text-emerald-800 mb-8">
        Daftar Lengkap Anggota
      </h1>

      <div className="grid gap-4">
        {anggota.map((a) => (
          <div
            key={a.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-emerald-50 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-gray-800">{a.nama}</h3>
              <p className="text-sm text-gray-500">Angkatan {a.angkatan}</p>
            </div>
            <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded">
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
