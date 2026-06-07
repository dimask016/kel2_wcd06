1. Konsep & Tema Aplikasi
Web CV Portofolio Interaktif

2. UI/UX Wireframe (Sketsa Visual)
| Tautan | Deskripsi |
| :--- | :--- |
| 🌐 **Live Demo** | 🔗[https://dimask016.github.io/kel2_wcd06/home.html](https://dimask016.github.io/kel2_wcd06/home.html) |
| 🎨 **Wireframe / Desain Figma** | [Klik di sini untuk melihat desain di Figma](https://www.figma.com/design/kpRJ78bmtzMSTtH1hq3NM8/kel2_wcd06?node-id=0-1&t=2bCSBcfKEAcEsIex-1) |


3. Setup "Mesin Waktu" (Repository GitHub)
https://dimask016.github.io/kel2_wcd06/


4.

Kelayakan UI/UX (40%): Apakah tata letaknya masuk akal, proporsional, dan nyaman
dilihat oleh pengguna?

 Kelebihan UI/UX:
Navigasi konsisten di semua halaman – Menu tetap di bagian atas (fixed navbar), sehingga pengguna dapat berpindah halaman kapan saja tanpa perlu scroll ke atas.

Responsif – Menggunakan clamp() untuk ukuran font, grid dan flex-wrap pada menu serta kartu-kartu konten, serta media query untuk layar ≤768px (menu jadi kolom, padding diperkecil). Tampilan tetap rapi di HP maupun desktop.

Background 3D interaktif – Efek Three.js dengan gerakan mengikuti kursor memberikan kesan modern dan profesional, namun tidak mengganggu keterbacaan teks karena ada lapisan overlay gelap.

Hierarki informasi jelas – Setiap halaman memiliki judul dengan garis dekoratif (::after), konten dikelompokkan dalam kartu atau blok dengan latar transparan dan blur (glassmorphism), membuat teks kontras dengan latar belakang dinamis.

Feedback interaktif – Hover efek pada kartu (naik sedikit, perubahan warna border), tombol bahasa aktif, dan alert saat mengklik kartu keahlian atau proyek memberikan respons langsung kepada pengguna.

Fitur salin kontak – Pengguna cukup klik pada item kontak (alamat, telepon, email) untuk menyalin ke clipboard – efisien dan intuitif.

Dukungan dua bahasa (ID/EN) – Pilihan bahasa disimpan di localStorage, sehingga preferensi tetap terjaga antar halaman. Tombol bahasa aktif ditandai dengan warna biru dan bayangan.

⚠️ Saran perbaikan kecil (opsional):
Kecepatan loading Three.js – Background 3D cukup berat untuk perangkat lama. Bisa ditambahkan loading="lazy" atau fallback warna statis, tetapi secara umum masih dapat diterima untuk portofolio.

Aksesibilitas – Belum ada aria-label pada tombol-tombol interaktif. Meskipun demikian, struktur HTML semantik (nav, section, button) sudah cukup baik.

Kesimpulan UI/UX: Layak dan nyaman digunakan – Desain modern, responsif, interaksi jelas, dan memudahkan pencari kerja/klien melihat profil, keahlian, pengalaman, serta kontak.


• Kesiapan Infrastruktur (30%): Apakah Repository GitHub sudah berhasil dibuat dan
didokumentasikan dengan rapi?

✅ Yang sudah dilakukan (berdasarkan standar proyek):
Struktur file jelas – Terdapat 7 file HTML: home.html, tentang.html, keahlian.html, pengalaman.html, proyek.html, sertifikasi.html, kontak.html. Penamaan konsisten dan mudah dipahami.

Deployed dengan GitHub Pages – URL https://dimask016.github.io/kel2_wcd06/home.html menunjukkan organisasi repo yang baik: user dimask016, repository kel2_wcd06, dan file home.html sebagai entry point.

Dokumentasi dalam kode – Setiap file memiliki komentar singkat (misal <!-- Three.js Script (sama untuk semua halaman) -->). Bahasa terjemahan dan event handler ditulis rapi di bagian <script> terpisah.


• Komunikasi & Presentasi (30%): Seberapa jelas kalian meyakinkan Client tentang alur aplikasi tersebut.

Berikut adalah cara meyakinkan client tentang alur aplikasi web portfolio ini dengan penjelasan yang jelas dan detail:

🎯 Poin utama yang disampaikan ke client:
"Web ini bukan sekadar CV digital, tetapi sebuah pengalaman interaktif yang mencerminkan profesionalisme Anda di bidang Informasi dan Teknologi."

💡 Langkah meyakinkan client:
Tunjukkan alur navigasi yang logis

"Client dapat langsung melihat profil Anda di halaman Home. Menu di atas memudahkan mereka menelusuri: Tentang, Keahlian, Pengalaman, Proyek, Sertifikasi, dan Kontak – semuanya tanpa perlu reload halaman (kecuali berpindah file, karena ini multi-page)."

Demonstrasi efek 3D yang elegan

"Background bola dengan orbit berwarna (merah, biru, kuning, hijau) merepresentasikan stabilitas dan konektivitas. Gerakan kamera mengikuti kursor memberi kesan teknologi mutakhir, namun tetap tidak mengganggu teks berkat lapisan gelap."

Tunjukkan keunggulan fungsional

"Client bisa mengganti bahasa Indonesia/Inggris dengan satu klik, dan pilihan tersimpan – sangat membantu jika Anda melamar ke perusahaan multinasional."

"Pada halaman Kontak, cukup klik pada nomor telepon atau email, otomatis tersalin ke clipboard. Tombol media sosial langsung membuka LinkedIn atau GitHub Anda."

"Setiap kartu keahlian dan proyek jika diklik menampilkan informasi detail (alert) – ini bisa dikembangkan lebih lanjut menjadi modal yang berisi studi kasus."

Tekankan responsivitas dan aksesibilitas

"Tampilan di smartphone tetap rapi – menu melipat ke bawah, teks dan kartu menyesuaikan lebar layar. Client dari mana saja bisa mengakses portofolio Anda dengan nyaman."

Jelaskan kemudahan maintenance dan pengembangan

"Kode ditulis dalam satu file per halaman – mudah diubah kontennya. Background Three.js bisa diganti atau dihilangkan kapan saja tanpa merusak struktur. Sistem terjemahan dapat ditambah bahasa lain hanya dengan menambahkan objek di translations."

