// app/admin/artikel/tambah/page.js
import { simpanArtikel } from "@/app/actions/artikel";

export default function TambahArtikel() {
  return (
    <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Tulis Artikel Baru
      </h1>

      <form action={simpanArtikel} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Judul Artikel
          </label>
          <input
            name="judul"
            type="text"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <select
              name="kategori"
              className="w-full px-4 py-2 border rounded-lg outline-none"
            >
              <option>Cerita</option>
              <option>Edukasi</option>
              <option>Berita</option>
              <option>Opini</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Penulis
            </label>
            <input
              name="penulis"
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ringkasan Singkat
          </label>
          <textarea
            name="ringkasan"
            rows="2"
            required
            className="w-full px-4 py-2 border rounded-lg outline-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Isi Konten
          </label>
          <textarea
            name="konten"
            rows="10"
            required
            className="w-full px-4 py-2 border rounded-lg outline-none"
          ></textarea>
        </div>

        <div className="pt-4 flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700"
          >
            Terbitkan Artikel
          </button>
        </div>
      </form>
    </div>
  );
}
