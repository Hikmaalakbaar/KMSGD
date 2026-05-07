import { kegiatan } from '../data'
import SectionHeader from '../components/SectionHeader'
import { Clock, Tag } from 'lucide-react'

export default function Kegiatan() {
  return (
    <div className="pt-[4.69rem]">
      <section className="relative py-14 overflow-hidden sm:py-20 bg-gradient-to-br from-orange-500 to-orange-700">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg_kegiatan.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Program Asrama
          </span>

          <h1 className="mb-4 text-3xl font-extrabold text-white font-display sm:text-4xl lg:text-5xl">
            Kegiatan & Program
          </h1>

          <p className="max-w-xl mx-auto text-orange-100">
            Berbagai program yang dirancang untuk membentuk karakter dan kompetensi anggota secara menyeluruh
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeader
            label="Semua Program"
            title="Program Kegiatan"
            subtitle="Pilih program yang sesuai dengan minat dan kebutuhanmu"
          />

          <div className="grid gap-7 lg:grid-cols-2">
            {kegiatan.map((k) => (
              <div
                key={k.id}
                className="flex overflow-hidden transition-all duration-300 bg-white shadow-sm rounded-2xl hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1"
              >
                <div className="w-2 bg-gradient-to-b from-yellow-400 to-yellow-600 shrink-0" />

                <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
                  <img
                    src={k.gambar}
                    alt={k.nama}
                    className="object-cover w-full rounded-xl sm:w-56 h-44 sm:h-44 shrink-0"
                  />

                  <div className="flex-1">
                    <div className="flex justify-end mb-4">
                      <span className="flex items-center gap-1 text-xs font-semibold text-yellow-600 bg-yellow-50 px-2.5 py-1 rounded-full">
                        <Tag size={10} />
                        {k.kategori}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold font-display text-slate-800">
                      {k.nama}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-slate-500">
                      {k.deskripsi}
                    </p>

                    <div className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg text-slate-400 bg-slate-50 w-fit">
                      <Clock size={12} className="text-yellow-400" />
                      {k.jadwal}
                    </div>
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