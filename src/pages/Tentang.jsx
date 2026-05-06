import { asramaInfo, strukturOrganisasi } from "../data";
import SectionHeader from "../components/SectionHeader";
import { Target, Eye, Heart } from "lucide-react";
import Maps from "../components/maps";

export default function Tentang() {
  return (
    <div className="pt-[4.69rem]">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 py-20 relative overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Profil Asrama
          </span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">
            Tentang Kami
          </h1>
          <p className="text-amber-100/80 max-w-xl mx-auto">
            {asramaInfo.tagline}
          </p>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Sejarah"
                title="Perjalanan KMSGD"
                align="left"
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                KMSGD berdiri pada tahun {asramaInfo.founded} atas prakarsa para
                civitas akademika yang peduli terhadap pembinaan mahasiswa
                secara holistik — akademik, moral, dan sosial.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Selama lebih dari dua dekade, asrama ini telah menjadi rumah
                kedua bagi ratusan mahasiswa dari berbagai penjuru Indonesia,
                mencetak generasi yang berilmu, berakhlak, dan berkarya nyata.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Kami percaya bahwa lingkungan yang baik adalah kunci pembentukan
                karakter. Itulah mengapa setiap program dirancang untuk
                menyeimbangkan prestasi akademik dengan pengembangan diri.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Tahun Berdiri", value: asramaInfo.founded },
                  { label: "Anggota Aktif", value: "128" },
                  { label: "Alumni", value: "600+" },
                  { label: "Program/Tahun", value: "40+" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center p-4 bg-[#F1F5F9] rounded-xl"
                  >
                    <p className="font-display font-extrabold text-cobalt-500 text-3xl">
                      {item.value}
                    </p>
                    <p className="text-slate-500 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Nilai"
            title="Visi & Misi"
            subtitle="Landasan gerak dan arah perjuangan KMSGD"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                color: "cobalt",
                judul: "Visi",
                isi: "Menjadi asrama terdepan dalam melahirkan generasi Muslim yang unggul secara akademik, mantap secara spiritual, dan bermanfaat bagi masyarakat luas.",
              },
              {
                icon: Target,
                color: "orange",
                judul: "Misi",
                isi: "Menyelenggarakan program pembinaan yang komprehensif, membangun budaya belajar yang kondusif, dan memperkuat ukhuwah antar anggota asrama.",
              },
              {
                icon: Heart,
                color: "cobalt",
                judul: "Nilai",
                isi: "Ilmu, integritas, kebersamaan, dan pengabdian — empat pilar yang menjadi fondasi setiap langkah gerak organisasi dan anggotanya.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#F1F5F9] rounded-2xl p-7">
                <div
                  className={`w-12 h-12 rounded-xl ${item.color === "cobalt" ? "bg-cobalt-500" : "bg-orange-400"} flex items-center justify-center mb-5 shadow-lg ${item.color === "cobalt" ? "shadow-cobalt-500/25" : "shadow-orange-400/25"}`}
                >
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-slate-800 text-xl mb-3">
                  {item.judul}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.isi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Pengurus"
            title="Struktur Organisasi"
            subtitle="Periode 2025–2026"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strukturOrganisasi.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-14 h-14 mx-auto mb-4">
                  <img
                    src={s.foto} // pastikan ada properti foto di data
                    alt={s.nama}
                    className="w-full h-full object-cover rounded-full shadow-md"
                  />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-orange-500 mb-1">
                  {s.jabatan}
                </p>
                <p className="font-display font-semibold text-slate-800">
                  {s.nama}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Angkatan {s.angkatan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Maps />
    </div>
  );
}
