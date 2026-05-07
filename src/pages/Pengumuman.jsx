import { useState } from 'react'
import { berita } from '../data'
import BeritaCard from '../components/BeritaCard'
import SectionHeader from '../components/SectionHeader'
import { Search } from 'lucide-react'

const kategoriList = ['Semua', 'Pengumuman', 'Kegiatan', 'Prestasi']

export default function Pengumuman() {
  const [filter, setFilter] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = berita.filter(b => {
    const matchKat = filter === 'Semua' || b.kategori === filter
    const matchSearch = b.judul.toLowerCase().includes(search.toLowerCase()) ||
      b.ringkasan.toLowerCase().includes(search.toLowerCase())
    return matchKat && matchSearch
  })

  return (
    <div className="pt-[4.69rem]">
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-yellow-700 to-yellow-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg_pengumuman.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">Informasi Resmi</span>
          <h1 className="mb-4 text-4xl font-extrabold text-white font-display sm:text-5xl">Pengumuman</h1>
          <p className="max-w-xl mx-auto text-yellow-200">Informasi, pengumuman, dan berita terbaru dari KMSGD</p>
        </div>
      </section>

      <section className="py-16 bg-[#F1F5F9]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-col gap-4 mb-10 sm:flex-row">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari berita atau pengumuman..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {kategoriList.map(k => (
                <button
                  key={k}
                  onClick={() => setFilter(k)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === k
                    ? 'bg-yellow-500 text-white shadow-md shadow-yellow-500/25'
                    : 'bg-white text-slate-600 hover:bg-yellow-50 hover:text-yellow-600 border border-slate-200'
                    }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center text-slate-400">
              <p className="mb-4 text-5xl">🔍</p>
              <p className="text-lg font-semibold font-display">Tidak ada hasil ditemukan</p>
              <p className="mt-1 text-sm">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(b => <BeritaCard key={b.id} berita={b} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
