import Link from "next/link";
import { notFound } from "next/navigation";

// Data simulasi (Pastikan ID di sini sesuai dengan yang diklik di page utama)
const events = [
  {
    id: "1",
    judul: "Pendakian Massal Gn. Gede",
    tanggal: "15 Agustus 2026",
    status: "Akan Datang",
    kategori: "Gunung Hutan",
    penulis: "Divisi Gunung Hutan",
    konten:
      "Detail lengkap mengenai rencana pendakian massal ke Gunung Gede...",
  },
  {
    id: "2",
    judul: "Latihan Gabungan Water Rescue",
    tanggal: "20 September 2026",
    status: "Akan Datang",
    kategori: "Kemanusiaan",
    penulis: "Divisi Operasional",
    konten: "Pelatihan teknik penyelamatan di air...",
  },
  {
    id: "3",
    judul: "Aksi Bersih Pantai",
    tanggal: "5 Juni 2026",
    status: "Selesai",
    kategori: "Konservasi",
    penulis: "Humas",
    konten: "Dokumentasi hasil pembersihan pantai...",
  },
];

export default async function DetailEvent({ params }) {
  // Tunggu (await) params sebelum digunakan (Standar Next.js terbaru)
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div
        className={`py-20 text-white ${event.status === "Selesai" ? "bg-gray-500" : "bg-emerald-800"}`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link
            href="/event"
            className="text-emerald-200 text-sm font-bold hover:underline mb-6 inline-block"
          >
            ← Kembali ke Daftar Event
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {event.judul}
          </h1>
          <p className="opacity-80">
            {event.tanggal} | {event.kategori}
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto py-16 px-4 prose">
        <p className="text-gray-700 leading-relaxed text-lg">{event.konten}</p>
      </article>
    </div>
  );
}
