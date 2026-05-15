// app/admin/artikel/page.js
import Link from "next/link";
import { getSemuaArtikel } from "@/app/actions/artikel";

export default async function AdminArtikel() {
  const daftarArtikel = await getSemuaArtikel();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Artikel</h1>
        <Link
          href="/admin/artikel/tambah"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          + Tambah Artikel Baru
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 font-semibold text-gray-600">Judul</th>
              <th className="py-4 font-semibold text-gray-600">Kategori</th>
              <th className="py-4 font-semibold text-gray-600">Tanggal</th>
              <th className="py-4 font-semibold text-gray-600 text-right">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {daftarArtikel.map((art) => (
              <tr
                key={art.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 text-gray-800 font-medium">{art.judul}</td>
                <td className="py-4 text-gray-500">{art.kategori}</td>
                <td className="py-4 text-gray-500">
                  {new Date(art.tanggal).toLocaleDateString("id-ID")}
                </td>
                <td className="py-4 text-right space-x-2">
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline text-sm">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
