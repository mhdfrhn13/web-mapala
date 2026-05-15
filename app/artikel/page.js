// app/artikel/page.js
import Link from "next/link";
import { getSemuaArtikel } from "@/app/actions/artikel";

export default async function ArtikelPage() {
  // Mengambil data secara dinamis dari database
  const daftarArtikel = await getSemuaArtikel();

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">
          Ruang Literasi
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kumpulan tulisan, cerita perjalanan, dan karya sastra dari anggota
          Mapala Buana.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {daftarArtikel.length > 0 ? (
          daftarArtikel.map((artikel) => (
            <article
              key={artikel.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="p-6 flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  {artikel.kategori}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mt-3 mb-2 hover:text-emerald-700">
                  <Link href={`/artikel/${artikel.id}`}>{artikel.judul}</Link>
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {artikel.ringkasan}
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                <span>{artikel.penulis}</span>
                <span>
                  {new Date(artikel.tanggal).toLocaleDateString("id-ID")}
                </span>
              </div>
            </article>
          ))
        ) : (
          <p className="text-center col-span-full py-10 text-gray-500">
            Belum ada artikel tersedia.
          </p>
        )}
      </div>
    </div>
  );
}
