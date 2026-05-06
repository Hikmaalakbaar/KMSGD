# Website Asrama Al-Hikmah 🏛️

Website resmi organisasi asrama berbasis React + Vite + Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 + Vite 5
- **Styling**: Tailwind CSS v3
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans (headings) + DM Sans (body)

## Color Palette

| Nama | Hex |
|------|-----|
| Cobalt Blue (primary) | `#3B82F6` |
| Warm Orange (accent) | `#FB923C` |
| Background | `#F1F5F9` |
| Dark text | `#1e293b` |

## Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server
npm run dev

# 3. Build untuk produksi
npm run build

# 4. Preview build
npm run preview
```

## Struktur Halaman

| Route | Halaman |
|-------|---------|
| `/` | Beranda (Hero + Berita Terbaru + Kegiatan + CTA) |
| `/tentang` | Sejarah, Visi Misi, Struktur Organisasi |
| `/kegiatan` | Daftar program & kegiatan rutin |
| `/pengumuman` | Berita & pengumuman dengan filter & search |
| `/galeri` | Galeri foto kegiatan |
| `/kontak` | Form kontak + info |

## Struktur File

```
src/
├── components/
│   ├── Navbar.jsx       # Navigasi responsive
│   ├── Footer.jsx       # Footer
│   ├── Badge.jsx        # Badge kategori
│   ├── BeritaCard.jsx   # Card berita/pengumuman
│   └── SectionHeader.jsx
├── pages/
│   ├── Home.jsx         # Halaman utama
│   ├── Tentang.jsx
│   ├── Kegiatan.jsx
│   ├── Pengumuman.jsx
│   ├── Galeri.jsx
│   └── Kontak.jsx
├── data.js              # Mock data (ganti dengan API call)
├── App.jsx              # Router
└── main.jsx             # Entry point
```

## Integrasi Backend (Express)

Data di `src/data.js` adalah mock data. Untuk integrasi dengan backend Express:

1. Buat file `src/api.js`:
```js
const BASE_URL = 'http://localhost:3000/api'

export const getBerita   = () => fetch(`${BASE_URL}/berita`).then(r => r.json())
export const getKegiatan = () => fetch(`${BASE_URL}/kegiatan`).then(r => r.json())
```

2. Gunakan `useEffect` + `useState` di setiap page untuk fetch data.

## Login Admin

- **Username**: `admin`
- **Password**: `admin123`

Panel admin bisa dikembangkan di route `/admin` (belum termasuk dalam scope ini).
