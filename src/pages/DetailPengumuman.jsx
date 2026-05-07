import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { berita } from '../data'

// ── Inline markdown renderer (no extra library needed) ──────────────────────
function renderKonten(text) {
  const lines = text.split('\n')
  const els = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // ## Heading
    if (line.startsWith('## ')) {
      els.push(
        <h2 key={i} className="pb-2 mt-10 mb-3 text-xl font-bold border-b font-display text-slate-800 border-slate-200">
          {line.slice(3)}
        </h2>
      )
      i++; continue
    }

    // ### Sub-heading
    if (line.startsWith('### ')) {
      els.push(
        <h3 key={i} className="mb-2 text-lg font-semibold font-display text-slate-700 mt-7">
          {line.slice(4)}
        </h3>
      )
      i++; continue
    }

    // Table (| header | ... followed by |---|)
    if (line.startsWith('|') && lines[i + 1]?.startsWith('|---')) {
      const headers = line.split('|').filter(Boolean).map(h => h.trim())
      i += 2
      const rows = []
      while (i < lines.length && lines[i].startsWith('|')) {
        rows.push(lines[i].split('|').filter(Boolean).map(c => c.trim()))
        i++
      }
      els.push(
        <div key={`tbl-${i}`} className="my-6 overflow-x-auto border rounded-xl border-slate-200">
          <table className="w-full text-sm">
            <thead className="text-white bg-yellow-600">
              <tr>
                {headers.map((h, j) => (
                  <th key={j} className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2.5 text-slate-600 border-t border-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    // Numbered list (1. item)
    if (/^\d+\.\s/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''))
        i++
      }
      els.push(
        <ol key={`ol-${i}`} className="flex flex-col gap-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-600">
              <span className="font-bold text-yellow-600 min-w-[22px] text-base leading-none mt-0.5">
                {j + 1}.
              </span>
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ol>
      )
      continue
    }

    // Unordered list (- item)
    if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      els.push(
        <ul key={`ul-${i}`} className="my-4 flex flex-col gap-1.5">
          {items.map((item, j) => (
            <li key={j} className="flex gap-2.5 text-slate-600 text-sm leading-relaxed">
              <span className="text-yellow-500 mt-1.5 shrink-0 text-xs">●</span>
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Italic blockquote (*"...")
    if (line.startsWith('*"') || line.startsWith('— ')) {
      els.push(
        <blockquote key={i} className="py-1 pl-5 my-6 text-base italic border-l-4 border-yellow-400 text-slate-500">
          <span dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
        </blockquote>
      )
      i++; continue
    }

    // Empty line
    if (line.trim() === '') { i++; continue }

    // Normal paragraph
    els.push(
      <p key={i} className="my-3 text-sm leading-relaxed text-slate-600"
        dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
      />
    )
    i++
  }

  return els
}

// **bold**, *italic*, ~~strike~~
function inlineFormat(text) {
  return text
    .replace(/~~(.*?)~~/g, '<del class="text-slate-400">$1</del>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-800">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}

// ── Format tanggal "2025-10-05" → "5 Oktober 2025" ─────────────────────────
function formatTanggal(str) {
  if (!str) return ''
  const bulan = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  const [y, m, d] = str.split('-')
  return `${parseInt(d)} ${bulan[parseInt(m)]} ${y}`
}

// ── Badge warna per kategori ────────────────────────────────────────────────
const katBadge = {
  Pengumuman: 'bg-yellow-100 text-yellow-700',
  Kegiatan:   'bg-orange-100 text-orange-700',
  Prestasi:   'bg-emerald-100 text-emerald-700',
}

// ────────────────────────────────────────────────────────────────────────────

export default function DetailPengumuman() {
  const { id }     = useParams()
  const navigate   = useNavigate()
  const item       = berita.find(b => b.id === Number(id))
  const related    = berita.filter(b => b.id !== Number(id)).slice(0, 3)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [id])

  // ── 404 ──
  if (!item) {
    return (
      <div className="pt-[4.69rem] min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="text-6xl">📭</p>
        <h1 className="text-2xl font-bold font-display text-slate-800">Artikel Tidak Ditemukan</h1>
        <p className="text-sm text-slate-400">Artikel dengan ID #{id} tidak tersedia.</p>
        <Link
          to="/pengumuman"
          className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors no-underline"
        >
          ← Kembali ke Pengumuman
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-[4.69rem]">

      {/* ── HERO ── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-yellow-700 to-yellow-900">
        {item.gambar && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${item.gambar}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
          </>
        )}

        <div className="relative z-10 max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs font-medium text-white/50">
            <Link to="/" className="no-underline transition-colors hover:text-white/80 text-white/50">Beranda</Link>
            <span>/</span>
            <Link to="/pengumuman" className="no-underline transition-colors hover:text-white/80 text-white/50">Pengumuman</Link>
            <span>/</span>
            <span className="text-white/70 truncate max-w-[200px]">{item.judul}</span>
          </div>

          {/* Badge kategori */}
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5 ${katBadge[item.kategori] || 'bg-white/15 text-white'}`}>
            {item.penting && <span>📌</span>}
            {item.kategori}
          </span>

          {/* Judul */}
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white font-display sm:text-4xl lg:text-5xl">
            {item.judul}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/55">
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-300">✦</span>
              {item.penulis}
            </span>
            <span>·</span>
            <span>{formatTanggal(item.tanggal)}</span>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="bg-[#F1F5F9] py-12">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

            {/* ── Artikel utama ── */}
            <article className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-200">
              {/* Ringkasan highlight */}
              <div className="px-6 py-4 m-6 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-xl">
                <p className="text-sm italic leading-relaxed text-yellow-800">
                  {item.ringkasan}
                </p>
              </div>

              {/* Konten */}
              <div className="px-6 pb-8">
                {item.konten
                  ? renderKonten(item.konten)
                  : (
                    <p className="text-sm italic text-slate-400">
                      Konten lengkap belum tersedia.
                    </p>
                  )
                }
              </div>

              {/* Footer artikel */}
              <div className="flex flex-col items-start justify-between gap-3 px-6 py-4 border-t border-slate-100 sm:flex-row sm:items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="text-sm text-slate-400 hover:text-yellow-600 transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center gap-1.5"
                >
                  ← Kembali
                </button>
                <button
                  onClick={() => navigator.clipboard?.writeText(window.location.href)}
                  className="text-xs font-semibold text-yellow-600 border border-yellow-200 hover:bg-yellow-50 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer bg-transparent"
                >
                  Salin Link
                </button>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="flex flex-col gap-5">

              {/* Info box */}
              <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
                <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-4">
                  Info Artikel
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Tanggal',   value: formatTanggal(item.tanggal) },
                    { label: 'Kategori',  value: item.kategori },
                    { label: 'Penulis',   value: item.penulis },
                  ].map(info => (
                    <div key={info.label} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-sm font-semibold text-slate-700">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artikel terkait */}
              <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
                <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-4">
                  Artikel Lainnya
                </p>
                <div className="flex flex-col gap-0 divide-y divide-slate-100">
                  {related.map(rel => (
                    <Link
                      key={rel.id}
                      to={`/pengumuman/${rel.id}`}
                      className="block py-3.5 no-underline group"
                    >
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 ${katBadge[rel.kategori] || 'bg-slate-100 text-slate-500'}`}>
                        {rel.kategori}
                      </span>
                      <p className="text-sm font-semibold leading-snug transition-colors text-slate-700 group-hover:text-yellow-600">
                        {rel.judul}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{formatTanggal(rel.tanggal)}</p>
                    </Link>
                  ))}
                </div>

                <Link
                  to="/pengumuman"
                  className="mt-3 w-full block text-center text-xs font-semibold text-yellow-600 border border-yellow-200 hover:bg-yellow-50 py-2.5 rounded-xl transition-colors no-underline"
                >
                  Lihat Semua →
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}