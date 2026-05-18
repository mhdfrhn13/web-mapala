// app/actions/artikel.js
"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache"; // Tambahkan ini
import { redirect } from "next/navigation";

// Fungsi untuk mengambil semua artikel
export async function getSemuaArtikel() {
  const { data, error } = await supabase
    .from("artikel")
    .select("*")
    .order("tanggal", { ascending: false });

  if (error) {
    console.error("Gagal mengambil artikel:", error.message);
    return [];
  }

  return data;
}

// Fungsi untuk mengambil detail satu artikel berdasarkan ID
export async function getArtikelById(id) {
  const { data, error } = await supabase
    .from("artikel")
    .select("*") // Pastikan ada .select('*')
    .eq("id", id) // PERBAIKAN: Gunakan .eq() bukan .where()
    .single(); // Mengambil satu data saja

  if (error) {
    console.error("Gagal mengambil detail artikel:", error.message);
    return null;
  }

  return data;
}

export async function simpanArtikel(formData) {
  const judul = formData.get("judul");
  const kategori = formData.get("kategori");
  const ringkasan = formData.get("ringkasan");
  const konten = formData.get("konten");
  const penulis = formData.get("penulis");

  const { data, error } = await supabase
    .from("artikel")
    .insert([{ judul, kategori, ringkasan, konten, penulis }]);

  if (error) {
    console.error("Gagal simpan:", error.message);
    return { error: error.message };
  }

  // Membersihkan cache agar artikel baru langsung muncul di halaman publik
  revalidatePath("/artikel");
  revalidatePath("/admin/artikel");

  // Arahkan kembali ke daftar artikel admin
  redirect("/admin/artikel");
}
