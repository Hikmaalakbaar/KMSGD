import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { KategoriBadge } from './Badge'

function formatTanggal(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

const kategoriGradient = {
  Pengumuman: 'from-orange-400 to-orange-600',
  Kegiatan:   'from-yellow-500 to-yellow-700',
  Prestasi:   'from-emerald-400 to-emerald-600',
}

const kategoriEmoji = {
  Pengumuman: '📢',
  Kegiatan:   '📅',
  Prestasi:   '🏆',
}

export default function BeritaCard({ berita, featured = false }) {
  const gradient = kategoriGradient[berita.kategori] || 'from-slate-400 to-slate-600'
  const emoji = kategoriEmoji[berita.kategori] || '📰'

  if (featured) {
    return (
      <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className={`relative h-48 md:w-72 md:h-auto flex-shrink-0 flex items-center justify-center ${!berita.gambar ? `bg-gradient-to-br ${gradient}` : ''}`}>
          {berita.penting && (
            <span className="absolute top-3 left-3 z-10 bg-orange-400 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Penting
            </span>
          )}
          {berita.gambar ? (
            <img
              src={berita.gambar}
              alt={berita.judul}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-5xl opacity-60">{emoji}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between gap-3 p-4 sm:p-6 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <KategoriBadge kategori={berita.kategori} />
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar size={11} /> {formatTanggal(berita.tanggal)}
              </span>
            </div>
            <h3
              className="font-display font-bold text-slate-800 text-lg sm:text-xl mb-2 transition-colors leading-snug"
              onMouseEnter={e => e.currentTarget.style.color = '#A07C08'}
              onMouseLeave={e => e.currentTarget.style.color = ''}
            >
              {berita.judul}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">{berita.ringkasan}</p>
            {berita.penulis && (
              <p className="text-xs text-slate-400 mt-3">
                Oleh <span className="font-medium text-slate-600">{berita.penulis}</span>
              </p>
            )}
            {berita.lokasi && (
              <p className="text-xs text-slate-400 mt-1">📍 {berita.lokasi}</p>
            )}
          </div>
          <Link
            to={`/pengumuman/${berita.id}`}
            className="inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-3 transition-all"
            style={{ color: '#C8990A' }}
          >
            Baca selengkapnya <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Thumbnail */}
      <div className={`relative h-36 flex items-center justify-center overflow-hidden ${!berita.gambar ? `bg-gradient-to-br ${gradient}` : ''}`}>
        {berita.penting && (
          <span className="absolute top-3 left-3 z-10 bg-orange-400 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Penting
          </span>
        )}
        {berita.gambar ? (
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl opacity-50">{emoji}</span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <KategoriBadge kategori={berita.kategori} />
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Calendar size={11} /> {formatTanggal(berita.tanggal)}
          </span>
        </div>
        <h3
          className="font-display font-bold text-slate-800 mb-2 transition-colors leading-snug line-clamp-2"
          onMouseEnter={e => e.currentTarget.style.color = '#A07C08'}
          onMouseLeave={e => e.currentTarget.style.color = ''}
        >
          {berita.judul}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {berita.ringkasan}
        </p>
        {berita.penulis && (
          <p className="text-xs text-slate-400 mt-2">
            Oleh <span className="font-medium text-slate-600">{berita.penulis}</span>
          </p>
        )}
        {berita.lokasi && (
          <p className="text-xs text-slate-400 mt-1">📍 {berita.lokasi}</p>
        )}
        <Link
          to={`/pengumuman/${berita.id}`}
          className="inline-flex items-center gap-1.5 font-semibold text-sm mt-4 hover:gap-3 transition-all"
          style={{ color: '#C8990A' }}
        >
          Baca selengkapnya <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}