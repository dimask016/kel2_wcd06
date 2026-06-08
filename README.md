
# 🚀 Web CV Portofolio Interaktif 

> Portfolio 3D Web dengan dukungan dua bahasa (ID/EN) dan latar belakang Three.js.

---

## 📌 1. Nama & Deskripsi Proyek

**Nama Proyek:** Web CV Portofolio Interaktif   
**Kelompok 2 – Web Client Development (WCD) 06**

**Deskripsi:**  
Sebuah website portofolio personal yang menampilkan profil, keahlian, pengalaman, proyek, sertifikasi, dan kontak dari seorang profesional di bidang teknologi informasi. Halaman ini dibangun dengan latar belakang 3D interaktif (Three.js), responsif untuk semua perangkat, dan mendukung pergantian bahasa (Indonesia/Inggris) secara dinamis.

**Anggota Tim dan Akun Github:**
- Deva Agriani (Ketua)
- Gempur Mahya Reksa - reksamahya@gmail.com
- Fajar Muhammad Ramadhan
- Dimas Kurniawan - dimas.kurniawan@cakrwala.ac.id
- Dharma Satriadi

---

## 📸 2. Tangkapan Layar (Screenshots)

> **Catatan:** Screenshot di bawah hanya contoh – silakan ganti dengan hasil tangkapan layar asli dari proyek Anda.

| Halaman | Tampilan |
|---------|----------|
| **Home** | ![Home](./screenshots/home.png) |
| **Tentang** | ![Tentang](./screenshots/tentang.png) |
| **Keahlian** | ![Keahlian](./screenshots/keahlian.png) |
| **Pengalaman** | ![Pengalaman](./screenshots/pengalaman.png) |
| **Proyek** | ![Proyek](./screenshots/proyek.png) |
| **Sertifikasi** | ![Sertifikasi](./screenshots/sertifikasi.png) |
| **Kontak** | ![Kontak](./screenshots/kontak.png) |

> 💡 *Jika belum memiliki folder `screenshots`, buatlah folder tersebut dan tempatkan gambar dengan nama sesuai di atas.*  
> *Anda juga bisa menggunakan layanan seperti [imgur](https://imgur.com/) dan mengganti path-nya.*

---

## 🛠️ 3. Teknologi yang Digunakan

| Teknologi | Keterangan |
|-----------|-------------|
| **HTML5** | Struktur halaman |
| **CSS3** | Styling, grid, flexbox, efek glassmorphism |
| **JavaScript (ES6)** | Logika interaktif, translasi, event handling |
| **Three.js** | Latar belakang 3D (bola mengorbit, partikel, bintang) |
| **Font Awesome** | Ikon-ikon profesional |
| **Google Fonts** | Font *Space Grotesk* modern |

---

## 💻 4. Cara Menjalankan Proyek secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan website ini di komputer Anda:

### Prasyarat
- Web browser modern (Chrome, Firefox, Edge)
- (Opsional) Live Server extension jika menggunakan VS Code

### Langkah-langkah

1. **Clone repository ini**
   ```bash
   git clone https://github.com/dimask016/kel2_wcd06.git
Masuk ke folder proyek

## 🔄 Langkah-langkah Kerja dengan Git

Ikuti urutan perintah di bawah ini untuk berkontribusi pada proyek ini.

Langkah-langkah Kerja dengan Git
Ikuti urutan perintah di bawah ini untuk berkontribusi pada proyek ini.

Langkah	Perintah	Penjelasan
1. Clone repository	git clone https://github.com/dimask016/kel2_wcd06.git	Mengunduh semua file proyek ke komputer lokal.
2. Masuk ke folder proyek	cd kel2_wcd06	Berpindah ke direktori hasil clone.
3. Perbarui kode lokal	git pull origin main / git pull https://github.com/dimask016/kel2_wcd06.git main	Mengambil perubahan terbaru dari GitHub sebelum mulai bekerja.
4. Cek status file	git status	Menampilkan file yang baru, diubah, atau dihapus.
5. Tambahkan perubahan	git add . atau git add <file>	Menambahkan file ke staging area (persiapan commit).
6. Simpan perubahan (commit)	git commit -m "Pesan perubahan"	Merekam snapshot ke riwayat proyek.
7. Tarik perubahan terbaru (wajib)	git pull origin main	Menghindari konflik sebelum push.
8. Kirim ke GitHub	git push origin main	Mengunggah commit ke repository remote.


⚠️ Catatan penting:

Pastikan koneksi internet aktif karena Three.js diambil dari CDN.

Jika gambar tidak muncul (misal foto-saya.jpeg), ganti dengan foto Anda sendiri.

🌐 5. Tautan Live Demo (GitHub Pages)
Website ini sudah di‑deploy menggunakan GitHub Pages dan dapat diakses publik melalui tautan berikut:

🔗 https://dimask016.github.io/kel2_wcd06/home.html

| Tautan | Deskripsi |
| :--- | :--- |
| 🌐 **Live Demo** | 🔗[https://dimask016.github.io/kel2_wcd06/home.html](https://dimask016.github.io/kel2_wcd06/home.html) |
| 🎨 **Wireframe / Desain Figma** | [Klik di sini untuk melihat desain di Figma](https://www.figma.com/design/kpRJ78bmtzMSTtH1hq3NM8/kel2_wcd06?node-id=0-1&t=2bCSBcfKEAcEsIex-1) |

> **Catatan:** Tautan Figma digunakan untuk melihat wireframe dan purwarupa desain antarmuka proyek ini sebelum dikembangkan. [reference:0]

Klik tautan di atas untuk melihat demo langsung dari portofolio interaktif ini.




## 📁 6. Struktur File

| Nama File / Folder | Keterangan |
|-----------|-------------|
| **home.html** | Halaman utama (beranda) |
| **tentang.html** | Halaman profil / tentang saya |
| **keahlian.html** | Halaman daftar keahlian |
| **pengalaman.html** | Halaman riwayat pengalaman kerja |
| **proyek.html** | Halaman proyek unggulan |
| **sertifikasi.html** | Halaman sertifikasi profesional |
| **kontak.html** | Halaman informasi kontak |
| **README.md** | Dokumentasi proyek |
| **screenshots/** | Folder berisi tangkapan layar |


---
Catatan: Semua halaman menggunakan Three.js yang sama dan sistem translasi yang terintegrasi.

👥 Kontributor :

Deva Agriani – Ketua tim, koordinasi proyek

Gempur Mahya Reksa – Pengembangan UI/UX

Fajar Muhammad Ramadhan – Implementasi Three.js & animasi

Dimas Kurniawan – Konten, sertifikasi, dan pengalaman profesional

Dharma Satriadi – Dokumentasi & deployment





📄 Lisensi
Proyek ini dibuat untuk keperluan tugas Web Class Design (WCD06) dan boleh digunakan sebagai referensi pembelajaran.

Terima kasih telah mengunjungi portofolio Dimas Kurniawan!
💼 "Infrastruktur tanpa downtime, solusi IT modern."

text
