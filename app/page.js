"use client"; // Diperlukan karena menggunakan useEffect dan useRef

import { useEffect, useRef } from "react";
import Link from "next/link";
import { daftarArtikel } from "@/data/artikel"; // Berdasarkan berkas data/artikel.js

export default function Home() {
  const carouselRef = useRef(null);

  // Data foto (Placeholder)
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      alt: "Ekspedisi Gunung",
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      alt: "Konservasi Danau",
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Penelitian Hutan",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      alt: "Reboisasi",
    },
    {
      src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
      alt: "Pendakian Gabungan",
    },
    {
      src: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6",
      alt: "Eksplorasi Goa",
    },
  ];

  const upcomingEvents = [
    {
      title: "Pendakian Massal Gn. Gede",
      date: "15 Agustus 2026",
      status: "Akan Datang",
    },
    {
      title: "Latihan Gabungan Water Rescue",
      date: "20 September 2026",
      status: "Akan Datang",
    },
  ];

  // Logika Auto-Slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

        if (isAtEnd) {
          // Kembali ke awal jika sudah di ujung
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Geser ke kanan (sejauh lebar satu kartu + gap)
          carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 3000); // Bergeser setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* 1. Hero Section */}
      <section className="relative bg-emerald-700 text-white py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Jelajahi Alam, Lestarikan Kehidupan
          </h1>
          <p className="text-lg md:text-xl mb-10 text-emerald-100">
            Selamat datang di portal resmi Mahasiswa Pecinta Alam Buana.
          </p>
          <Link
            href="/tentang"
            className="bg-white text-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-100 transition-all shadow-lg"
          >
            Kenali Kami Lebih Jauh
          </Link>
        </div>
      </section>

      {/* 2. Visi & Misi (Data dari app/tentang/page.js) */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-50">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              Visi Kami
            </h2>
            <p className="text-gray-700 text-lg italic leading-relaxed">
              "Menjadi organisasi mahasiswa yang pelopor dalam kelestarian alam,
              tangguh, dan menjunjung tinggi nilai persaudaraan."
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              Misi Utama
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                ✓ Konservasi dan reboisasi rutin
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                ✓ Mitigasi bencana dan SAR
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                ✓ Pendidikan dasar kepencintaalaman
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Galeri Auto-Slide Carousel */}
      <section className="py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-emerald-800">
              Galeri Kegiatan
            </h2>
            <p className="text-gray-600">Momen terbaik kami di lapangan</p>
          </div>
          <Link
            href="/galeri"
            className="text-emerald-700 font-semibold hover:underline"
          >
            Lihat Semua Foto →
          </Link>
        </div>

        {/* Container Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex-none w-72 md:w-96 aspect-video relative rounded-2xl overflow-hidden shadow-lg snap-center"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Artikel & Event */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8">
            Artikel Terkini
          </h2>
          <div className="space-y-6">
            {daftarArtikel.slice(0, 2).map((art) => (
              <div
                key={art.id}
                className="flex gap-6 items-start border-b border-gray-100 pb-6"
              >
                <div className="w-24 h-24 bg-emerald-100 rounded-lg flex-shrink-0"></div>
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase">
                    {art.kategori}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 my-1">
                    {art.judul}
                  </h3>
                  <p className="text-gray-600 text-sm">{art.ringkasan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-emerald-50 p-8 rounded-2xl h-fit">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">
            Agenda Terdekat
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-emerald-500"
              >
                <p className="text-xs font-bold text-emerald-600 uppercase">
                  {event.status}
                </p>
                <h4 className="font-bold text-gray-800">{event.title}</h4>
                <p className="text-gray-500 text-sm">{event.date}</p>
              </div>
            ))}
          </div>
          <Link
            href="/event"
            className="block text-center mt-6 text-emerald-700 font-bold hover:underline"
          >
            Lihat Semua Event
          </Link>
        </div>
      </section>
    </div>
  );
}
