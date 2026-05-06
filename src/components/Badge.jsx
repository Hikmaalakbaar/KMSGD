const variants = {
  blue:   'bg-cobalt-100 text-cobalt-700',
  orange: 'bg-orange-100 text-orange-700',
  green:  'bg-emerald-100 text-emerald-700',
  red:    'bg-red-100 text-red-700',
  gray:   'bg-slate-100 text-slate-600',
}

const kategoriColor = {
  Pengumuman: 'orange',
  Kegiatan:   'blue',
  Prestasi:   'green',
  Rutin:      'gray',
  Tahunan:    'orange',
}

export function Badge({ children, variant = 'gray' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant] || variants.gray}`}>
      {children}
    </span>
  )
}

export function KategoriBadge({ kategori }) {
  const v = kategoriColor[kategori] || 'gray'
  return <Badge variant={v}>{kategori}</Badge>
}
