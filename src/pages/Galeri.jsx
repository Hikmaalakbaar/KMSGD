import { useState, useEffect } from 'react'
import { galeri } from '../data'
import SectionHeader from '../components/SectionHeader'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const gradients = [
  'from-cobalt-400 to-cobalt-700',
  'from-orange-300 to-orange-600',
  'from-cobalt-500 to-cobalt-800',
  'from-orange-400 to-orange-700',
  'from-cobalt-300 to-cobalt-600',
  'from-orange-300 to-orange-500',
]

export default function Galeri() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected === null) return
    const onKey = (e) => {
      if (e.key === 'Escape')      setSelected(null)
      if (e.key === 'ArrowRight')  setSelected(i => (i + 1) % galeri.length)
      if (e.key === 'ArrowLeft')   setSelected(i => (i - 1 + galeri.length) % galeri.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <div className="pt-[4.69rem]">

      {/* ── LIGHTBOX ───────────────────────────────────────── */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-0 z-10 flex items-center justify-center text-white transition-colors rounded-full -top-11 w-9 h-9 bg-white/15 hover:bg-white/30"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              onClick={() => setSelected(i => (i - 1 + galeri.length) % galeri.length)}
              className="absolute z-10 flex items-center justify-center text-white transition-colors -translate-y-1/2 rounded-full left-3 top-1/2 w-9 h-9 bg-black/40 hover:bg-black/70"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={() => setSelected(i => (i + 1) % galeri.length)}
              className="absolute z-10 flex items-center justify-center text-white transition-colors -translate-y-1/2 rounded-full right-3 top-1/2 w-9 h-9 bg-black/40 hover:bg-black/70"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image */}
            <div className={`w-full aspect-video rounded-t-2xl bg-gradient-to-br ${gradients[selected % gradients.length]} flex items-center justify-center`}>
              <span className="text-8xl opacity-40">🖼️</span>
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between px-6 py-4 bg-white rounded-b-2xl">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cobalt-600 bg-cobalt-50 border border-cobalt-100 px-2.5 py-1 rounded-full">
                  {galeri[selected].kategori}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug font-display text-slate-800">
                  {galeri[selected].judul}
                </h3>
              </div>
              <span className="ml-4 text-xs text-slate-400 shrink-0">
                {selected + 1} / {galeri.length}
              </span>
            </div>
          </div>

          {/* Dot indicator */}
          <div className="absolute flex gap-2 -translate-x-1/2 bottom-5 left-1/2">
            {galeri.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setSelected(i) }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === selected ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg_galeri.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Dokumentasi
          </span>
          <h1 className="mb-4 text-4xl font-extrabold text-white font-display sm:text-5xl">Galeri</h1>
          <p className="max-w-xl mx-auto text-slate-300">Dokumentasi kegiatan dan momen berharga KMSGD</p>
        </div>
      </section>

      {/* ── GRID ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeader label="Galeri Foto" title="Dokumentasi Kegiatan" />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galeri.map((g, i) => (
              <div
                key={g.id}
                onClick={() => setSelected(i)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 transition-all duration-300 bg-black/20 group-hover:bg-black/40" />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-white/20 backdrop-blur-sm border-white/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>

                {/* Caption slide up */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 translate-y-1 bg-gradient-to-t from-black/70 to-transparent group-hover:translate-y-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-white mb-2 inline-block">
                    {g.kategori}
                  </span>
                  <p className={`font-display font-bold text-white drop-shadow leading-snug ${i === 0 ? 'text-xl' : 'text-sm'}`}>
                    {g.judul}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-center text-slate-400">
            Klik foto untuk melihat lebih besar · Gunakan ← → atau keyboard untuk navigasi
          </p>
        </div>
      </section>
    </div>
  )
}