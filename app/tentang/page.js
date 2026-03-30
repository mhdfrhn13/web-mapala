import Image from "next/image";
import Link from "next/link";

export default function Tentang() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
        Tentang Kami
      </h1>

      <div className="flex flex-col items-center mb-12">
        <div className="bg-emerald-100 p-6 rounded-full mb-4 shadow-sm">
          {/* Pastikan file logo tersedia di folder public, contoh: /logo-mapala.png */}
          <Image
            src="/next.svg" // Menggunakan file bawaan sebagai placeholder
            alt="Logo Mapala Buana"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-900 tracking-widest uppercase">
          Mapala Buana
        </h2>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Mapala Buana didirikan pada tahun 1998 di kampus kita tercinta. Kami
          adalah wadah bagi mahasiswa yang memiliki kepedulian tinggi terhadap
          lingkungan hidup dan gemar melakukan kegiatan di alam bebas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-emerald-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Visi</h2>
          <p className="text-gray-700">
            Menjadi organisasi mahasiswa yang pelopor dalam kelestarian alam,
            tangguh, dan menjunjung tinggi nilai persaudaraan serta kemanusiaan.
          </p>
        </div>
        <div className="bg-emerald-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Misi</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Menyelenggarakan pendidikan dasar kepencintaalaman yang
              berstandar.
            </li>
            <li>Melakukan kegiatan konservasi dan reboisasi secara rutin.</li>
            <li>
              Berperan aktif dalam mitigasi bencana dan *Search and Rescue*
              (SAR).
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">
        Susunan Pengurus
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["Ketua Umum", "Sekretaris", "Bendahara", "Ketua Operasional"].map(
          (jabatan, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-20 h-20 bg-emerald-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-800">Anggota {index + 1}</h3>
              <p className="text-sm text-emerald-600">{jabatan}</p>
            </div>
          ),
        )}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/tentang/anggota"
          className="inline-block bg-emerald-700 text-white px-6 py-2 rounded-lg hover:bg-emerald-800 transition-colors"
        >
          Lihat Seluruh Daftar Anggota
        </Link>
      </div>
    </div>
  );
}
