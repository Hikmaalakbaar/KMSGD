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
    gambar: '../public/bg_home.png',
    penting: true,
  },
  {
    id: 2,
    judul: 'Seminar Nasional: Kepemimpinan Santri di Era Digital',
    tanggal: '2025-09-28',
    kategori: 'Kegiatan',
    ringkasan:
      'Seminar yang menghadirkan narasumber dari berbagai universitas terkemuka, membahas peran santri dalam transformasi digital bangsa.',
    gambar: '../public/bg_home.png',
    penting: false,
  },
  {
    id: 3,
    judul: 'Juara 1 Lomba Debat Antar Asrama Se-Jawa Barat',
    tanggal: '2025-09-15',
    kategori: 'Prestasi',
    ringkasan:
      'Tim debat KMSGD berhasil meraih juara pertama dalam kompetisi debat antar asrama se-Jawa Barat yang diikuti 24 tim.',
    gambar: '../public/bg_home.png',
    penting: false,
  },
  {
    id: 4,
    judul: 'Bakti Sosial & Bazar Ramadan 2025',
    tanggal: '2025-09-01',
    kategori: 'Kegiatan',
    ringkasan:
      'Kegiatan bakti sosial dan bazar amal dalam rangka memperingati bulan Ramadan, melibatkan seluruh warga asrama dan masyarakat sekitar.',
    gambar: '../public/bg_home.png',
    penting: false,
  },
  {
    id: 5,
    judul: 'Rapat Koordinasi Pengurus Periode 2025–2026',
    tanggal: '2025-08-20',
    kategori: 'Pengumuman',
    ringkasan:
      'Seluruh pengurus baru diundang hadir dalam rapat koordinasi perdana untuk menyusun program kerja satu tahun ke depan.',
    gambar: '../public/bg_home.png',
    penting: false,
  },
  {
    id: 6,
    judul: 'Workshop Literasi Digital untuk Anggota Asrama',
    tanggal: '2025-08-10',
    kategori: 'Kegiatan',
    ringkasan:
      'Workshop praktis tentang keamanan digital, media sosial yang sehat, dan pemanfaatan teknologi untuk produktivitas akademik.',
    gambar: '../public/bg_home.png',
    penting: false,
  },
]

export const kegiatan = [
  {
    id: 1,
    nama: 'Kajian Ilmiah Mingguan',
    deskripsi: 'Forum diskusi ilmiah setiap Kamis malam yang mengangkat tema-tema kontemporer dari perspektif akademik dan keagamaan.',
    jadwal: 'Setiap Kamis, 20.00 WIB',
    kategori: 'Rutin',
    icon: '📚',
  },
  {
    id: 2,
    nama: 'Olahraga Pagi Bersama',
    deskripsi: 'Kegiatan olahraga bersama di lapangan asrama untuk menjaga kebugaran dan mempererat kebersamaan antar anggota.',
    jadwal: 'Setiap Minggu, 06.00 WIB',
    kategori: 'Rutin',
    icon: '⚽',
  },
  {
    id: 3,
    nama: 'Bimbingan Belajar',
    deskripsi: 'Program tutor sebaya untuk membantu anggota yang membutuhkan pendampingan akademik di berbagai mata kuliah.',
    jadwal: 'Senin–Jumat, 19.00 WIB',
    kategori: 'Rutin',
    icon: '🎓',
  },
  {
    id: 4,
    nama: 'Pelatihan Kepemimpinan',
    deskripsi: 'Pelatihan tahunan untuk membentuk karakter pemimpin yang amanah, tangguh, dan berwawasan luas.',
    jadwal: 'Tahunan (Oktober)',
    kategori: 'Tahunan',
    icon: '🏆',
  },
]

export const strukturOrganisasi = [
  { jabatan: 'Ketua Umum', nama: 'Ahmad Fauzan Ridho', angkatan: '2022' },
  { jabatan: 'Wakil Ketua', nama: 'Siti Nur Aisyah', angkatan: '2022' },
  { jabatan: 'Sekretaris', nama: 'Muhammad Haikal', angkatan: '2023' },
  { jabatan: 'Bendahara', nama: 'Fatimah Az-Zahra', angkatan: '2023' },
  { jabatan: 'Div. Pendidikan', nama: 'Rizky Firmansyah', angkatan: '2023' },
  { jabatan: 'Div. Keagamaan', nama: 'Nurul Hidayah', angkatan: '2023' },
  { jabatan: 'Div. Olahraga & Seni', nama: 'Bagas Prasetyo', angkatan: '2024' },
  { jabatan: 'Div. Sosial & Humas', nama: 'Anisa Rahmawati', angkatan: '2024' },
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
  { label: 'Anggota Aktif', value: '128', icon: '👥' },
  { label: 'Alumni', value: '600+', icon: '🎓' },
  { label: 'Kegiatan/Tahun', value: '40+', icon: '📅' },
  { label: 'Tahun Berdiri', value: '20+', icon: '🏛️' },
]
