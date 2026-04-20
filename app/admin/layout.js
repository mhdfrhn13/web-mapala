import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-emerald-900 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <p className="text-emerald-300 text-sm mt-1">Mapala Buana</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link
            href="/admin"
            className="block px-4 py-2 rounded hover:bg-emerald-800 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/artikel"
            className="block px-4 py-2 rounded hover:bg-emerald-800 transition"
          >
            Kelola Artikel
          </Link>
          <Link
            href="/admin/event"
            className="block px-4 py-2 rounded hover:bg-emerald-800 transition"
          >
            Kelola Event
          </Link>
          <Link
            href="/admin/galeri"
            className="block px-4 py-2 rounded hover:bg-emerald-800 transition"
          >
            Kelola Galeri
          </Link>
        </nav>
        <div className="p-4 border-t border-emerald-800">
          <Link href="/" className="text-sm text-emerald-300 hover:text-white">
            ← Kembali ke Website Utama
          </Link>
        </div>
      </aside>

      {/* Area Konten Utama */}
      <main className="flex-1 p-8 text-gray-800">{children}</main>
    </div>
  );
}
