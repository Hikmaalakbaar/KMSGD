import { galeri } from '../data'
import SectionHeader from '../components/SectionHeader'

const gradients = [
  'from-cobalt-400 to-cobalt-700',
  'from-orange-300 to-orange-600',
  'from-cobalt-500 to-cobalt-800',
  'from-orange-400 to-orange-700',
  'from-cobalt-300 to-cobalt-600',
  'from-orange-300 to-orange-500',
]

export default function Galeri() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',backgroundSize:'40px 40px'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">Dokumentasi</span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">Galeri</h1>
          <p className="text-slate-300 max-w-xl mx-auto">Dokumentasi kegiatan dan momen berharga Asrama Al-Hikmah</p>
        </div>
      </section>

      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Galeri Foto" title="Dokumentasi Kegiatan" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galeri.map((g, i) => (
              <div
                key={g.id}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} transition-all duration-300 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <span className={`${i === 0 ? 'text-6xl' : 'text-4xl'} mb-3 opacity-70`}>🖼️</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full mb-2">{g.kategori}</span>
                  <p className={`font-display font-bold text-center ${i === 0 ? 'text-2xl' : 'text-sm'} drop-shadow`}>{g.judul}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 mt-8">
            * Tambahkan foto asli melalui panel admin untuk menggantikan placeholder
          </p>
        </div>
      </section>
    </div>
  )
}
