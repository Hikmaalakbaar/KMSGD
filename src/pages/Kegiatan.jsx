import { kegiatan } from '../data'
import SectionHeader from '../components/SectionHeader'
import { Clock, Tag } from 'lucide-react'

export default function Kegiatan() {
  return (
    <div className="pt-[4.69rem]">
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 py-20 relative overflow-hidden">
                <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg_home.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">Program Asrama</span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">Kegiatan & Program</h1>
          <p className="text-orange-100 max-w-xl mx-auto">Berbagai program yang dirancang untuk membentuk karakter dan kompetensi anggota secara menyeluruh</p>
        </div>
      </section>

      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Semua Program" title="Program Kegiatan" subtitle="Pilih program yang sesuai dengan minat dan kebutuhanmu" />
          <div className="grid sm:grid-cols-2 gap-7">
            {kegiatan.map((k) => (
              <div key={k.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-cobalt-500/10 transition-all duration-300 hover:-translate-y-1 flex gap-0">
                <div className="w-2 bg-gradient-to-b from-cobalt-400 to-cobalt-600 shrink-0 rounded-l-2xl" />
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="text-4xl">{k.icon}</div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      <span className="flex items-center gap-1 text-xs font-semibold text-cobalt-600 bg-cobalt-50 px-2.5 py-1 rounded-full">
                        <Tag size={10} /> {k.kategori}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-xl mb-2">{k.nama}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{k.deskripsi}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-50 px-3 py-2 rounded-lg w-fit">
                    <Clock size={12} className="text-cobalt-400" /> {k.jadwal}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
