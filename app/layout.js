import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mapala Buana - Organisasi Pecinta Alam",
  description: "Website resmi Mahasiswa Pecinta Alam Buana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-emerald-900 text-emerald-100 text-center py-6 mt-12">
          <p>&copy; {new Date().getFullYear()} Mapala Buana. Salam Lestari!</p>
        </footer>
      </body>
    </html>
  );
}
