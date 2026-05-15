// app/artikel/[id]/page.js
import Link from "next/link";
import { getArtikelById } from "@/app/actions/artikel";
import { notFound } from "next/navigation";

export default async function DetailArtikel({ params }) {
  const { id } = await params;

  // Mengambil data artikel tunggal dari database
  const artikel = await getArtikelById(id);

  if (!artikel) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      <Link
        href="/artikel"
        className="text-emerald-600 hover:underline mb-6 inline-block text-sm"
      >
        ← Kembali ke Daftar Artikel
      </Link>
      <header className="mb-8">
        <span className="text-emerald-600 font-bold uppercase text-xs tracking-widest">
          {artikel.kategori}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          {artikel.judul}
        </h1>
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <span>Oleh: {artikel.penulis}</span>
          <span>•</span>
          <span>{new Date(artikel.tanggal).toLocaleDateString("id-ID")}</span>
        </div>
      </header>
      <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
        <p className="whitespace-pre-line">{artikel.konten}</p>
      </div>
    </article>
  );
}
