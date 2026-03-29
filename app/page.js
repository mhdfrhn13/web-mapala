import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-emerald-700 text-white py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Jelajahi Alam, Lestarikan Kehidupan
          </h1>
          <p className="text-lg md:text-xl mb-10 text-emerald-100">
            Selamat datang di portal resmi Mahasiswa Pecinta Alam Buana. Kami
            berkomitmen untuk menjaga keseimbangan alam dan memupuk
            persaudaraan.
          </p>
          <Link
            href="/tentang"
            className="bg-white text-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-100 transition-all"
          >
            Kenali Kami Lebih Jauh
          </Link>
        </div>
      </section>

      {/* Sekilas Info Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-emerald-100">
            <h3 className="text-2xl font-bold text-emerald-700 mb-3">
              Gunung Hutan
            </h3>
            <p className="text-gray-600">
              Divisi yang berfokus pada navigasi darat, pendakian, dan
              *survival* di alam liar.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-emerald-100">
            <h3 className="text-2xl font-bold text-emerald-700 mb-3">
              Susur Goa
            </h3>
            <p className="text-gray-600">
              Eksplorasi sistem perut bumi, pemetaan goa, dan konservasi kawasan
              karst.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-emerald-100">
            <h3 className="text-2xl font-bold text-emerald-700 mb-3">
              Panjat Tebing
            </h3>
            <p className="text-gray-600">
              Melatih fisik dan mental melalui kegiatan panjat tebing artifisial
              maupun tebing alam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
