import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-emerald-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1">
            <Link href="/" className="font-bold text-xl tracking-wider">
              MAPALA BUANA
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-6">
              <Link
                href="/"
                className="hover:text-emerald-300 transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/tentang"
                className="hover:text-emerald-300 transition-colors"
              >
                Tentang
              </Link>
              <Link
                href="/artikel"
                className="hover:text-emerald-300 transition-colors"
              >
                Artikel
              </Link>
              <Link
                href="/event"
                className="hover:text-emerald-300 transition-colors"
              >
                Event
              </Link>
              <Link
                href="/galeri"
                className="hover:text-emerald-300 transition-colors"
              >
                Galeri
              </Link>
              <Link
                href="/kontak"
                className="hover:text-emerald-300 transition-colors"
              >
                Kontak
              </Link>
            </div>
          </div>
          <div className="hidden md:block flex-1"></div>
        </div>
      </div>
    </nav>
  );
}
