# Web CV Portofolio Interaktif

Website portofolio web 3D dengan dukungan dua bahasa (Indonesia/Inggris) dan latar belakang interaktif berbasis Three.js.

**Kelompok 2 — Web Client Development (WCD) 06**

---

## Daftar Isi

1. [Deskripsi Proyek](#1-deskripsi-proyek)
2. [Tim dan Kontributor](#2-tim-dan-kontributor)
3. [Tangkapan Layar](#3-tangkapan-layar)
4. [Teknologi yang Digunakan](#4-teknologi-yang-digunakan)
5. [Cara Menjalankan secara Lokal](#5-cara-menjalankan-secara-lokal)
6. [Alur Kerja Git](#6-alur-kerja-git)
7. [Tautan Live Demo](#7-tautan-live-demo)
8. [Struktur File](#8-struktur-file)
9. [Lisensi](#9-lisensi)

---

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

---

## 3. Tangkapan Layar

> Catatan: Screenshot di bawah hanya contoh. Silakan ganti dengan hasil tangkapan layar asli dari proyek Anda.

| Halaman | Tampilan |
|---------|----------|
| Home | ![Home](./screenshots/home.png) |
| Tentang | ![Tentang](./screenshots/tentang.png) |
| Keahlian | ![Keahlian](./screenshots/keahlian.png) |
| Pengalaman | ![Pengalaman](./screenshots/pengalaman.png) |
| Proyek | ![Proyek](./screenshots/proyek.png) |
| Sertifikasi | ![Sertifikasi](./screenshots/sertifikasi.png) |
| Kontak | ![Kontak](./screenshots/kontak.png) |

> Jika belum memiliki folder `screenshots`, buat folder tersebut dan tempatkan gambar dengan nama sesuai tabel di atas. Alternatif lain, gunakan layanan seperti [Imgur](https://imgur.com/) dan sesuaikan path-nya.

---

## 4. Teknologi yang Digunakan

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 | Struktur halaman |
| CSS3 | Styling, grid, flexbox, efek glassmorphism |
| JavaScript (ES6) | Logika interaktif, translasi, event handling |
| Three.js | Latar belakang 3D (bola mengorbit, partikel, bintang) |
| Font Awesome | Ikon profesional |
| Google Fonts | Font *Space Grotesk* |

---

## 5. Cara Menjalankan secara Lokal

### Prasyarat

- Web browser modern (Chrome, Firefox, Edge).
- (Opsional) Ekstensi Live Server jika menggunakan VS Code.

### Langkah-langkah

1. Clone repository ini.

   ```bash
   git clone https://github.com/dimask016/kel2_wcd06.git
   ```

2. Masuk ke folder proyek.

   ```bash
   cd kel2_wcd06
   ```

3. Buka proyek di browser.

   - Buka file `index.html` langsung di browser, atau
   - Klik kanan `index.html` lalu pilih **Open with Live Server** (jika memakai VS Code).

> Catatan: Pastikan koneksi internet aktif karena Three.js dimuat dari CDN.

---

## 6. Alur Kerja Git

Ikuti urutan perintah berikut untuk berkontribusi pada proyek ini.

| Langkah | Perintah | Penjelasan |
|---------|----------|------------|
| 1. Clone repository | `git clone https://github.com/dimask016/kel2_wcd06.git` | Mengunduh seluruh file proyek ke komputer lokal. |
| 2. Masuk ke folder proyek | `cd kel2_wcd06` | Berpindah ke direktori hasil clone. |
| 3. Perbarui kode lokal | `git pull origin main` | Mengambil perubahan terbaru sebelum mulai bekerja. |
| 4. Cek status file | `git status` | Menampilkan file yang baru, diubah, atau dihapus. |
| 5. Tambahkan perubahan | `git add .` atau `git add <file>` | Memasukkan file ke staging area. |
| 6. Simpan perubahan | `git commit -m "Pesan perubahan"` | Merekam snapshot ke riwayat proyek. |
| 7. Tarik perubahan terbaru | `git pull origin main` | Menghindari konflik sebelum push. |
| 8. Kirim ke GitHub | `git push origin main` | Mengunggah commit ke repository remote. |

---

## 7. Tautan Live Demo

Website ini di-deploy menggunakan GitHub Pages dan dapat diakses publik melalui tautan berikut.

| Tautan | Deskripsi |
| :--- | :--- |
| Live Demo (Halaman Utama) | [https://dimask016.github.io/kel2_wcd06/](https://dimask016.github.io/kel2_wcd06/) |
| Portofolio Dimas Kurniawan | [https://dimask016.github.io/kel2_wcd06/portofolioDimasKurniawan/home.html](https://dimask016.github.io/kel2_wcd06/portofolioDimasKurniawan/home.html) |
| Wireframe / Desain Figma | [Lihat desain di Figma](https://www.figma.com/design/kpRJ78bmtzMSTtH1hq3NM8/kel2_wcd06?node-id=0-1&t=2bCSBcfKEAcEsIex-1) |

> Catatan: Tautan Figma digunakan untuk melihat wireframe dan purwarupa desain antarmuka sebelum proyek dikembangkan.

---

## 8. Struktur File

| Nama File / Folder | Keterangan |
|--------------------|------------|
| `index.html` | Halaman utama (landing) proyek kelompok |
| `portofolioDevaAgriani/` | Portofolio Deva Agriani |
| `portofolioDimasKurniawan/` | Portofolio Dimas Kurniawan (home, tentang, keahlian, pengalaman, proyek, sertifikasi, kontak) |
| `asssets/` | Aset bersama (CSS dan gambar) |
| `screenshots/` | Tangkapan layar proyek |
| `slidePresentasi/` | Slide presentasi kelompok |
| `NaskhahUTS.md` | Naskah UTS |
| `README.md` | Dokumentasi proyek |

> Catatan: Seluruh halaman menggunakan Three.js dan sistem translasi yang sama dan terintegrasi.

---

## 9. Lisensi

Proyek ini dibuat untuk keperluan tugas mata kuliah Web Client Development (WCD 06) dan dapat digunakan sebagai referensi pembelajaran.
