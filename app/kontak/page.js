export default function Kontak() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
        Hubungi Kami
      </h1>

      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm">
        {/* Informasi Kontak */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Sekretariat Mapala Buana
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Alamat:</strong>
              <br />
              Gedung Pusat Kegiatan Mahasiswa (PKM) Lt. 2,
              <br />
              Jalan Kampus Hijau No. 1, Kota
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              halo@mapalabuana.com
            </p>
            <p>
              <strong>Instagram:</strong>
              <br />
              @mapala_buana
            </p>
          </div>
        </div>

        {/* Form Kontak */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              placeholder="Masukkan nama..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pesan
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              placeholder="Tuliskan pesan Anda di sini..."
            ></textarea>
          </div>
          <button
            type="button"
            className="w-full bg-emerald-700 text-white font-bold py-3 rounded-lg hover:bg-emerald-800 transition-colors"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}
