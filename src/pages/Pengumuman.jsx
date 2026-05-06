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
      <section className="bg-gradient-to-br from-cobalt-700 to-cobalt-900 py-20 relative overflow-hidden">
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">Informasi Resmi</span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">Pengumuman</h1>
          <p className="text-cobalt-200 max-w-xl mx-auto">Informasi, pengumuman, dan berita terbaru dari KMSGD</p>
        </div>
      </section>

      <section className="py-16 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari berita atau pengumuman..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cobalt-300 focus:border-cobalt-400"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {kategoriList.map(k => (
                <button
                  key={k}
                  onClick={() => setFilter(k)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === k
                    ? 'bg-cobalt-500 text-white shadow-md shadow-cobalt-500/25'
                    : 'bg-white text-slate-600 hover:bg-cobalt-50 hover:text-cobalt-600 border border-slate-200'
                    }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p className="text-5xl mb-4">🔍</p>
              <p className="font-display font-semibold text-lg">Tidak ada hasil ditemukan</p>
              <p className="text-sm mt-1">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(b => <BeritaCard key={b.id} berita={b} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
