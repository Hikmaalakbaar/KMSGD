import { HiUserGroup, HiAcademicCap, HiCalendar, HiLibrary } from 'react-icons/hi'


// ============================================================
// DATA MOCK — ganti dengan API call ke backend Express kamu
// ============================================================

export const asramaInfo = {
  name: 'Keluarga Mahasiswa Sunan Gunung Djati',
  tagline: 'Membentuk Generasi Berilmu, Berakhlak, dan Berkarya',
  founded: '2005',
  location: 'Jl. Pesantren No. 12, Cirebon, Jawa Barat',
  email: 'info@KMSGD.ac.id',
  whatsapp: '+62 812-3456-7890',
  description:
    'KMSGD adalah hunian resmi bagi mahasiswa dan santri yang mengedepankan nilai-nilai akademik, spiritual, dan sosial. Berdiri sejak 2005, kami telah membina ratusan generasi berprestasi.',
}

export const berita = [
  {
    id: 1,
    judul: 'Pengumuman Penerimaan Anggota Baru 2025',
    tanggal: '2025-10-05',
    kategori: 'Pengumuman',
    ringkasan:
      'KMSGD membuka pendaftaran anggota baru untuk tahun akademik 2025/2026. Pendaftaran dibuka mulai 10 Oktober hingga 31 Oktober 2025.',
    gambar: '/bg_home.png',
    penting: true,
    penulis: 'Admin KMSGD',
    konten: `
Assalamu'alaikum Warahmatullahi Wabarakatuh,

Dengan penuh semangat, **Keluarga Mahasiswa Sunan Gunung Djati (KMSGD)** resmi membuka **Penerimaan Anggota Baru Tahun Akademik 2025/2026**.

## Persyaratan Umum

Calon anggota yang ingin mendaftar wajib memenuhi persyaratan berikut:

- Mahasiswa aktif di perguruan tinggi di Cirebon dan sekitarnya
- Beragama Islam
- Berkomitmen mengikuti program dan kegiatan KMSGD
- Mendapat izin dari orang tua/wali

## Dokumen yang Dibutuhkan

1. Fotokopi KTM (Kartu Tanda Mahasiswa)
2. Fotokopi KTP
3. Pas foto 3×4 berwarna (2 lembar)
4. Surat pernyataan kesanggupan bermaterai
5. Mengisi formulir pendaftaran online

## Jadwal Pendaftaran

| Tahap | Periode |
|---|---|
| Pendaftaran Online | 10 – 31 Oktober 2025 |
| Seleksi Berkas | 1 – 5 November 2025 |
| Wawancara | 7 – 10 November 2025 |
| Pengumuman | 12 November 2025 |
| Daftar Ulang | 13 – 20 November 2025 |

## Cara Mendaftar

**Online:** Isi formulir melalui link yang tersedia di bio Instagram @kmsgd_official atau hubungi admin di WhatsApp +62 812-3456-7890.

**Langsung:** Datang ke sekretariat KMSGD di Jl. Pesantren No. 12, Cirebon setiap hari Senin–Sabtu pukul 09.00–16.00 WIB.

Bergabunglah bersama kami dan jadilah bagian dari keluarga besar KMSGD!

Wassalamu'alaikum Warahmatullahi Wabarakatuh.
    `.trim(),
  },
  {
    id: 2,
    judul: 'Seminar Nasional: Kepemimpinan Santri di Era Digital',
    tanggal: '2025-09-28',
    kategori: 'Kegiatan',
    ringkasan:
      'Seminar yang menghadirkan narasumber dari berbagai universitas terkemuka, membahas peran santri dalam transformasi digital bangsa.',
    gambar: '/bg_home.png',
    penting: false,
    penulis: 'Divisi Pendidikan',
    konten: `
Assalamu'alaikum Warahmatullahi Wabarakatuh,

**KMSGD** dengan bangga menyelenggarakan **Seminar Nasional: Kepemimpinan Santri di Era Digital** — sebuah forum ilmiah yang mempertemukan pemikiran akademik dan nilai pesantren dalam menghadapi tantangan zaman.

## Detail Acara

**Tanggal:** Sabtu, 28 September 2025
**Waktu:** 08.00 – 16.00 WIB
**Tempat:** Aula Utama Universitas Islam Cirebon
**Tema:** *"Santri Memimpin, Teknologi Mengiringi"*

## Narasumber

| Nama | Asal Institusi | Topik |
|---|---|---|
| Prof. Dr. H. Syamsul Arifin | UIN Sunan Gunung Djati | Kepemimpinan Berbasis Nilai Pesantren |
| Dr. Rizki Amaliah, M.Kom | ITB | Transformasi Digital untuk Pemuda |
| Ust. Hasan Basri, M.Pd | PP. Buntet Cirebon | Peran Santri di Era Industri 4.0 |

## Rundown Acara

1. 08.00 — Registrasi peserta & pembukaan
2. 09.00 — Sesi 1: Kepemimpinan Berbasis Nilai Pesantren
3. 10.30 — Coffee break & networking
4. 11.00 — Sesi 2: Transformasi Digital untuk Pemuda
5. 12.00 — Ishoma
6. 13.00 — Sesi 3: Peran Santri di Era Industri 4.0
7. 14.30 — Panel diskusi & tanya jawab
8. 16.00 — Penutupan & foto bersama

## Pendaftaran

Seminar ini **terbuka untuk umum**. Peserta non-anggota KMSGD dikenakan biaya registrasi Rp 25.000. Daftar melalui link di bio Instagram @kmsgd_official.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.
    `.trim(),
  },
  {
    id: 3,
    judul: 'Juara 1 Lomba Debat Antar Asrama Se-Jawa Barat',
    tanggal: '2025-09-15',
    kategori: 'Prestasi',
    ringkasan:
      'Tim debat KMSGD berhasil meraih juara pertama dalam kompetisi debat antar asrama se-Jawa Barat yang diikuti 24 tim.',
    gambar: '/bg_home.png',
    penting: false,
    penulis: 'Tim Redaksi',
    konten: `
Assalamu'alaikum Warahmatullahi Wabarakatuh,

Alhamdulillah, puji syukur ke hadirat Allah SWT!

**Tim Debat KMSGD** berhasil meraih **Juara 1** dalam **Kompetisi Debat Antar Asrama Se-Jawa Barat 2025** yang diselenggarakan di Universitas Pendidikan Indonesia (UPI) Bandung, 12–15 September 2025.

## Perjalanan Tim

Kompetisi ini diikuti oleh **24 tim** dari berbagai asrama dan pondok pesantren se-Jawa Barat. Tim KMSGD melewati:

- **Babak Penyisihan** — Menang 3 dari 3 sesi
- **Perempat Final** — Menang mutlak (motion: Peran Pesantren di Era Digital)
- **Semi Final** — Menang 4-1 (motion: Pendidikan Karakter vs Akademik)
- **Final** — Menang 3-2 atas PP. Darul Hikmah Tasikmalaya

## Anggota Tim

| Nama | Peran |
|---|---|
| Muhammad Haikal | Ketua Tim / Pembicara 1 |
| Rizky Firmansyah | Pembicara 2 |
| Anisa Rahmawati | Pembicara 3 / Reply Speech |

**Pembimbing:** Ust. Ahmad Fauzan Ridho

## Pesan Ketua Umum

*"Ini bukan hanya kemenangan tim debat, tapi kemenangan seluruh keluarga besar KMSGD. Semoga prestasi ini menjadi motivasi untuk terus belajar dan berprestasi."*

— Ahmad Fauzan Ridho, Ketua Umum KMSGD

Selamat kepada seluruh tim dan pembimbing! 🏆

Wassalamu'alaikum Warahmatullahi Wabarakatuh.
    `.trim(),
  },
  {
    id: 4,
    judul: 'Bakti Sosial & Bazar Ramadan 2025',
    tanggal: '2025-09-01',
    kategori: 'Kegiatan',
    ringkasan:
      'Kegiatan bakti sosial dan bazar amal dalam rangka memperingati bulan Ramadan, melibatkan seluruh warga asrama dan masyarakat sekitar.',
    gambar: '/bg_home.png',
    penting: false,
    penulis: 'Divisi Sosial & Humas',
    konten: `
Assalamu'alaikum Warahmatullahi Wabarakatuh,

Dalam rangka menyambut dan memeriahkan bulan suci Ramadan 1447 H, **KMSGD** menyelenggarakan **Bakti Sosial & Bazar Ramadan 2025** yang melibatkan seluruh warga asrama dan masyarakat sekitar.

## Detail Acara

**Tanggal:** Senin, 1 September 2025
**Waktu:** 08.00 – 17.00 WIB
**Lokasi:** Halaman Asrama & Lapangan RW 05, Jl. Pesantren, Cirebon

## Rangkaian Kegiatan

### Bakti Sosial (08.00 – 12.00)
- Pembagian 300 paket sembako untuk warga kurang mampu
- Donor darah bekerja sama dengan PMI Kota Cirebon
- Pemeriksaan kesehatan gratis

### Bazar Ramadan (13.00 – 17.00)
- 30+ stand kuliner dan produk UMKM anggota asrama
- Hasil penjualan sebagian disumbangkan ke panti asuhan
- Hiburan: tilawah, nasyid, dan perlombaan anak

## Laporan Donasi

| Sumber | Jumlah |
|---|---|
| Donasi anggota KMSGD | Rp 4.200.000 |
| Hasil bazar amal | Rp 7.850.000 |
| Sponsor eksternal | Rp 3.000.000 |
| **Total** | **Rp 15.050.000** |

Dana tersalurkan ke 300 keluarga penerima manfaat dan 2 panti asuhan di Cirebon.

Terima kasih kepada seluruh pihak yang telah berpartisipasi dan berdonasi.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.
    `.trim(),
  },
  {
    id: 5,
    judul: 'Rapat Koordinasi Pengurus Periode 2025–2026',
    tanggal: '2025-08-20',
    kategori: 'Pengumuman',
    ringkasan:
      'Seluruh pengurus baru diundang hadir dalam rapat koordinasi perdana untuk menyusun program kerja satu tahun ke depan.',
    gambar: '/bg_home.png',
    penting: false,
    penulis: 'Sekretariat KMSGD',
    konten: `
Assalamu'alaikum Warahmatullahi Wabarakatuh,

Diberitahukan kepada seluruh **Pengurus KMSGD Periode 2025–2026** bahwa rapat koordinasi perdana akan segera dilaksanakan.

**Hari/Tanggal:** Rabu, 20 Agustus 2025
**Waktu:** 19.30 – 22.00 WIB
**Tempat:** Ruang Rapat Sekretariat KMSGD

## Agenda Rapat

1. Pembukaan & perkenalan pengurus baru
2. Sambutan Ketua Umum
3. Pemaparan visi dan misi kepengurusan
4. Penyusunan program kerja masing-masing divisi
5. Penetapan kalender kegiatan 2025–2026
6. Pembagian tugas dan tanggung jawab
7. Penutup & doa bersama

## Peserta yang Wajib Hadir

- Ketua Umum dan Wakil Ketua
- Sekretaris dan Bendahara
- Seluruh Kepala Divisi
- Staf Divisi masing-masing

Kehadiran seluruh pengurus **sangat wajib**. Jika berhalangan, harap konfirmasi ke sekretariat paling lambat **18 Agustus 2025**.

Dress code: Batik atau pakaian rapi sopan.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.
    `.trim(),
  },
  {
    id: 6,
    judul: 'Workshop Literasi Digital untuk Anggota Asrama',
    tanggal: '2025-08-10',
    kategori: 'Kegiatan',
    ringkasan:
      'Workshop praktis tentang keamanan digital, media sosial yang sehat, dan pemanfaatan teknologi untuk produktivitas akademik.',
    gambar: '/bg_home.png',
    penting: false,
    penulis: 'Divisi Pendidikan',
    konten: `
Assalamu'alaikum Warahmatullahi Wabarakatuh,

**Divisi Pendidikan KMSGD** menyelenggarakan **Workshop Literasi Digital** sebagai bagian dari program peningkatan kapasitas anggota di era teknologi informasi.

## Detail Workshop

**Tanggal:** Minggu, 10 Agustus 2025
**Waktu:** 09.00 – 15.00 WIB
**Tempat:** Lab Komputer Gedung B, Lantai 2
**Peserta:** Seluruh anggota KMSGD (wajib hadir)

## Materi Workshop

### Sesi 1 — Keamanan Digital (09.00–11.00)
- Mengenali phishing, hoaks, dan penipuan online
- Keamanan akun media sosial dan email
- Privasi data di dunia digital

### Sesi 2 — Media Sosial yang Sehat (11.00–12.00)
- Etika bermedia sosial sebagai santri/mahasiswa
- Membangun personal branding yang positif
- Menghindari konten negatif dan polarisasi

### Sesi 3 — Produktivitas Digital (13.00–15.00)
- Tools produktivitas: Notion, Google Workspace, Canva
- Manajemen referensi akademik dengan Mendeley/Zotero
- Pemanfaatan AI untuk belajar yang efektif

## Pemateri

| Nama | Keahlian |
|---|---|
| Rizky Firmansyah | Keamanan Siber |
| Nurul Hidayah | Konten Digital & Media Sosial |
| Bagas Prasetyo | Tools Produktivitas |

Peserta yang hadir penuh akan mendapat **sertifikat digital** dari KMSGD.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.
    `.trim(),
  },
]

export const kegiatan = [
  {
    id: 1,
    nama: 'Kajian Ilmiah Mingguan',
    deskripsi: 'Forum diskusi ilmiah setiap Kamis malam yang mengangkat tema-tema kontemporer dari perspektif akademik dan keagamaan.',
    jadwal: 'Setiap Kamis, 20.00 WIB',
    kategori: 'Rutin',
    gambar: '../public/kajian.jpg',
  },
  {
    id: 2,
    nama: 'Olahraga Pagi Bersama',
    deskripsi: 'Kegiatan olahraga bersama di lapangan asrama untuk menjaga kebugaran dan mempererat kebersamaan antar anggota.',
    jadwal: 'Setiap Minggu, 06.00 WIB',
    kategori: 'Rutin',
    gambar: '../public/olahraga.jpg',
  },
  {
    id: 3,
    nama: 'Bimbingan Belajar',
    deskripsi: 'Program tutor sebaya untuk membantu anggota yang membutuhkan pendampingan akademik di berbagai mata kuliah.',
    jadwal: 'Senin–Jumat, 19.00 WIB',
    kategori: 'Rutin',
    gambar: '../public/belajar.jpg',
  },
  {
    id: 4,
    nama: 'Pelatihan Kepemimpinan',
    deskripsi: 'Pelatihan tahunan untuk membentuk karakter pemimpin yang amanah, tangguh, dan berwawasan luas.',
    jadwal: 'Tahunan (Oktober)',
    kategori: 'Tahunan',
    gambar: '../public/pelatihan.jpg',
  },
]

export const strukturOrganisasi = [
  { jabatan: 'Ketua Umum', nama: 'Ahmad Fauzan Ridho', angkatan: '2022', foto: '/avatar.jpg' },
  { jabatan: 'Wakil Ketua', nama: 'Siti Nur Aisyah', angkatan: '2022', foto: '/avatar.jpg' },
  { jabatan: 'Sekretaris', nama: 'Muhammad Haikal', angkatan: '2023', foto: '/avatar.jpg' },
  { jabatan: 'Bendahara', nama: 'Fatimah Az-Zahra', angkatan: '2023', foto: '/avatar.jpg' },
  { jabatan: 'Div. Pendidikan', nama: 'Rizky Firmansyah', angkatan: '2023', foto: '/avatar.jpg' },
  { jabatan: 'Div. Keagamaan', nama: 'Nurul Hidayah', angkatan: '2023', foto: '/avatar.jpg' },
  { jabatan: 'Div. Olahraga & Seni', nama: 'Bagas Prasetyo', angkatan: '2024', foto: '/avatar.jpg' },
  { jabatan: 'Div. Sosial & Humas', nama: 'Anisa Rahmawati', angkatan: '2024', foto: '/avatar.jpg' },
]

export const galeri = [
  { id: 1, judul: 'Seminar Nasional 2025', kategori: 'Seminar', warna: 'from-cobalt-500 to-cobalt-700' },
  { id: 2, judul: 'Bakti Sosial Ramadan', kategori: 'Sosial', warna: 'from-orange-400 to-orange-600' },
  { id: 3, judul: 'Lomba Debat Juara 1', kategori: 'Prestasi', warna: 'from-cobalt-400 to-cobalt-600' },
  { id: 4, judul: 'Olahraga Pagi Bersama', kategori: 'Rutin', warna: 'from-orange-300 to-orange-500' },
  { id: 5, judul: 'Workshop Literasi Digital', kategori: 'Workshop', warna: 'from-cobalt-600 to-cobalt-800' },
  { id: 6, judul: 'Malam Keakraban 2025', kategori: 'Sosial', warna: 'from-orange-400 to-orange-700' },
]


export const stats = [
  { label: 'Anggota Aktif', value: '128', icon: HiUserGroup },
  { label: 'Alumni', value: '600+', icon: HiAcademicCap },
  { label: 'Kegiatan/Tahun', value: '40+', icon: HiCalendar },
  { label: 'Tahun Berdiri', value: '20+', icon: HiLibrary },
]
