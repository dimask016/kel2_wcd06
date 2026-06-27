
CyberInfra Solutions – React.js Company Profile
Proyek ini adalah website profil perusahaan CyberInfra Solutions yang dibangun menggunakan React.js, menampilkan layanan IT infrastruktur dan cybersecurity.
Website ini memiliki efek latar belakang Three.js interaktif, multi‑bahasa (ID/EN), dan animasi modern yang responsif.
## 1. Deskripsi Proyek

**Nama Proyek:** Web CV Portofolio Interaktif

Website portofolio personal yang menampilkan profil, keahlian, pengalaman, proyek, sertifikasi, dan kontak dari seorang profesional di bidang teknologi informasi. Halaman dibangun dengan latar belakang 3D interaktif (Three.js), responsif untuk semua perangkat, serta mendukung pergantian bahasa (Indonesia/Inggris) secara dinamis.

---

## 2. Tim dan Kontributor

| Nama | Peran | Email / Akun |
|------|-------|--------------|
| Deva Agriani | Ketua tim, koordinasi proyek | deva.agriani@cakrawala.ac.id |
| Gempur Mahya Reksa | Pengembangan UI/UX | reksamahya@gmail.com |
| Fajar Muhammad Ramadhan | Implementasi Three.js dan animasi | — |
| Dimas Kurniawan | Konten, sertifikasi, dan pengalaman | dimas.kurniawan@cakrwala.ac.id |
| Dharma Satriadi | Dokumentasi dan deployment | dharma.satriadi@cakrawala.ac.id |
📁 Struktur Folder
cyberinfra-app/
├── .env
├── public/
│   └── _redirects
│   └── favicon , icon
|src/                    |
├── assets/              | # Gambar & logo (dimas.jpeg, devaagriani.jpg, cisco-logo.svg)
├── components/
│   ├── Layout.jsx       | # Layout utama (navbar + background Three.js)
│   └── ThreeBackground.jsx |# Komponen latar Three.js (animasi 3D)
│   ├── ApiData.jsx
│   ├── ErrorBoundary.jsx  
│   ├── Footer.jsx
│   ├── Navbar.jsx
├── pages/
│   ├── Home.jsx             | # Halaman beranda
│   ├── Tentang.jsx          | # Halaman tentang perusahaan
│   ├── Keahlian.jsx     | # Halaman layanan (carousel 3D)
│   ├── Pengalaman.jsx   | # Halaman timeline pengalaman
│   ├── Proyek.jsx       | # Halaman proyek unggulan
│   ├── Sertifikasi.jsx  | # Halaman sertifikasi (flip card)
│   ├── Kontak.jsx       | # Halaman kontak + Google Maps
│   └── Engineer.jsx     | # Halaman tim engineer
├── translations.js      | # Data multi‑bahasa (ID & EN)
├── App.jsx              | # Routing utama
├── index.css            | # Global styles
└── main.jsx             | # Entry point
├── package.json
└── vite.config.js (opsional)



🧩 Penjelasan Masing‑masing File JSX
1. App.jsx
Mengelola state bahasa (lang) yang disimpan di localStorage.

Mengimpor semua halaman dan meneruskannya ke React Router.

Membungkus semua rute dengan Layout agar navbar & background Three.js selalu muncul.

2. Layout.jsx
Komponen pembungkus yang merender navbar, background Three.js, dan konten halaman melalui <Outlet />.

Menyediakan tombol toggle bahasa (ID/EN) yang mengubah lang di App.jsx.

3. ThreeBackground.jsx
Menginisialisasi Three.js scene, kamera, renderer, dan semua objek 3D (bola‑bola mengorbit, cincin, partikel, bintang).

Melakukan animasi terus‑menerus:

Warna latar berubah perlahan (transisi warna fajar, siang, sore, aurora).

Bola‑bola mengelilingi pusat dengan kecepatan berbeda.

Kamera bergerak mengikuti pergerakan mouse.

Kode ini sama persis dengan yang ada di home.html agar efeknya konsisten.

4. Home.jsx – Halaman Beranda
Menampilkan:

Judul perusahaan dengan gradasi.

Deskripsi layanan.

Tombol "Pelajari Solusi Kami →" yang mengarah ke /keahlian.

Menggunakan teks dari translations agar mendukung dua bahasa.

5. Tentang.jsx – Halaman Tentang
Menampilkan paragraf visi dan misi perusahaan.

Konten diambil dari t.about_text1 dan t.about_text2.

6. Keahlian.jsx – Halaman Layanan
Menampilkan 6 layanan dalam bentuk carousel 3D interaktif.

Fitur:

Drag kiri/kanan untuk memutar.

Auto‑rotate otomatis (berhenti saat di‑drag).

Indikator dot dan info layanan aktif.

Klik kartu → muncul alert detail solusi.

Data layanan diambil dari translations (judul & deskripsi).

7. Pengalaman.jsx – Halaman Pengalaman
Menampilkan timeline dengan 3 item pengalaman proyek.

Efek scroll reveal: item muncul satu per satu saat di‑scroll (mirip dengan pengalaman.html).

Setiap kartu dapat diklik → muncul alert dengan detail solusi.

8. Proyek.jsx – Halaman Proyek Unggulan
Menampilkan 3 proyek dalam bentuk grid card.

Setiap kartu berisi:

Ikon utama.

Judul proyek.

Deskripsi.

Tag (misal: SIEM, SDDC, Zero‑Trust).

Hover card memberikan efek angkat dan perubahan border.

Klik kartu → alert detail studi kasus.

9. Sertifikasi.jsx – Halaman Sertifikasi
Menampilkan 6 sertifikasi dalam bentuk flip card.

Setiap kartu:

Sisi depan: ikon (Font Awesome atau logo SVG) + judul sertifikasi.

Sisi belakang: deskripsi lengkap + nomor registrasi.

Hover → kartu berputar 180° menampilkan sisi belakang.

Klik → alert detail sertifikasi.

Untuk Cisco, menggunakan file SVG lokal (cisco-logo.svg).
Untuk AWS, menggunakan Font Awesome Brands (fab fa-aws).

10. Kontak.jsx – Halaman Kontak
Terdiri dari dua kolom:

Kiri: informasi kontak (email, telepon, alamat) + Google Maps (iframe dengan filter tema gelap).

Kanan: form kontak (nama, email, subjek, pesan) dengan tombol kirim.

Submit form → alert konfirmasi (tanpa mengirim ke server).

11. Engineer.jsx – Halaman Tim Engineer
Menampilkan 3 engineer dengan:

Foto (dari assets/ atau Unsplash).

Nama, peran (dengan link ke portofolio masing‑masing).

Deskripsi singkat.

Badge sertifikasi (misal: Google Cloud Certified, CEH Master).

Filter dropdown berdasarkan kategori (infra, cyber, devsec).

⚙️ Cara Menjalankan
Clone repository (atau ekstrak file zip).

Buka terminal di folder proyek.

Install dependencies:

bash
npm install
Jalankan development server:

bash
npm run dev
Buka browser di http://localhost:5173


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
