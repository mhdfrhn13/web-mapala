import Link from "next/link";
import { daftarArtikel } from "@/data/artikel"; // Impor data terpusat

export default async function DetailArtikel({ params }) {
  // Tunggu (await) params sebelum mengakses propertinya
  const { id } = await params;

  const artikel = daftarArtikel.find((a) => String(a.id) === String(id));

  if (!artikel) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
        <Link
          href="/artikel"
          className="text-emerald-600 underline mt-4 inline-block"
        >
          Kembali ke Daftar Artikel
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      {/* ... sisa kode UI Anda ... */}
      <h1 className="text-4xl font-bold">{artikel.judul}</h1>
      <p className="whitespace-pre-line mt-6">{artikel.konten}</p>
    </article>
  );
}
