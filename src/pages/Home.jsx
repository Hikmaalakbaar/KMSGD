import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Users,
  BookOpen,
  Star,
  Clock,
} from "lucide-react";
import { berita, kegiatan, stats, asramaInfo } from "../data";
import BeritaCard from "../components/BeritaCard";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
  const featuredBerita = berita[0];
  const recentBerita = berita.slice(1, 4);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Decorative blobs */}
        <div
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-[80px] pointer-events-none"
          style={{ backgroundColor: "rgba(200, 153, 10, 0.15)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full blur-[80px] pointer-events-none"
          style={{ backgroundColor: "rgba(192, 24, 90, 0.10)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg_home.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3.5 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                Penerimaan Anggota Baru 2025 Dibuka!
              </div>

              <h1 className="flex flex-col">
                <span className="font-display font-extrabold text-white sm:text-6xl leading-[1.1]">
                  KMSGD
                </span>
                <span
                  className="text-2xl font-medium text-start mb-6"
                  style={{ color: "#C8990A" }}
                >
                  Keluarga Mahasiswa Sunan Gunung Djati
                </span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                {asramaInfo.tagline}. Bergabunglah bersama kami dan jadilah
                bagian dari komunitas yang inspiratif.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/tentang"
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-xl hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#C8990A",
                    boxShadow: "0 8px 24px rgba(200, 153, 10, 0.35)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#A07C08")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#C8990A")
                  }
                >
                  Tentang Kami <ArrowRight size={16} />
                </Link>
                <Link
                  to="/pengumuman"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Lihat Pengumuman <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right — Stats cards */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-200">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p className="font-display font-extrabold text-white text-3xl">
                    {s.value}
                  </p>
                  <p className="text-slate-400 text-sm mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
              fill="#F1F5F9"
            />
          </svg>
        </div>
      </section>

      {/* ── BERITA TERBARU ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              label="Terbaru"
              title="Berita & Pengumuman"
              subtitle="Informasi terkini dari KMSGD"
              align="left"
            />
            <Link
              to="/pengumuman"
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-3 transition-all shrink-0 mb-1"
              style={{ color: "#C8990A" }}
            >
              Lihat semua <ArrowRight size={14} />
            </Link>
          </div>

          {/* Featured */}
          <div className="mb-6">
            <BeritaCard berita={featuredBerita} featured />
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBerita.map((b) => (
              <BeritaCard key={b.id} berita={b} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/pengumuman"
              className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition-colors"
              style={{
                color: "#C8990A",
                border: "1px solid #E8C84A",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#FFF4CC")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              Lihat semua pengumuman <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── KEGIATAN UNGGULAN ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Program"
            title="Kegiatan Unggulan"
            subtitle="Berbagai program rutin yang membentuk karakter dan kompetensi anggota"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kegiatan.map((k, i) => (
              <div
                key={k.id}
                className="group bg-[#F1F5F9] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${i * 100}ms` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#C8990A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#F1F5F9")
                }
              >
                <div className="text-4xl mb-4">{k.icon}</div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ color: "#A07C08", backgroundColor: "#FFF4CC" }}
                >
                  {k.kategori}
                </span>
                <h3 className="font-display font-bold text-slate-800 group-hover:text-white text-lg mt-3 mb-2">
                  {k.nama}
                </h3>
                <p className="text-slate-500 group-hover:text-yellow-100 text-sm leading-relaxed mb-4">
                  {k.deskripsi}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-yellow-200">
                  <Clock size={12} /> {k.jadwal}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/kegiatan"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: "#C8990A",
                boxShadow: "0 8px 24px rgba(255, 255, 255, 0.25)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#A07C08")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#C8990A")
              }
            >
              Lihat semua kegiatan <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA REKRUTMEN ──────────────────────────────────────── */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-3xl overflow-hidden px-8 md:px-14 py-14"
            style={{
              background:
                "linear-gradient(to right, #1A1A1A, #3D2E00, #1A1A1A)",
            }}
          >
            {/* Decoration */}
            <div
              className="absolute -top-8 -right-8 w-48 h-48 rounded-full blur-2xl pointer-events-none"
              style={{ backgroundColor: "rgba(200, 153, 10, 0.25)" }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full blur-2xl pointer-events-none"
              style={{ backgroundColor: "rgba(192, 24, 90, 0.20)" }}
            />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Star
                    size={16}
                    style={{ color: "#C8990A" }}
                    fill="currentColor"
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#E8C84A" }}
                  >
                    Bergabung Sekarang
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl mb-3">
                  Daftar Jadi Anggota Baru
                </h2>
                <p
                  className="leading-relaxed max-w-lg"
                  style={{ color: "#D4B483" }}
                >
                  Jadilah bagian dari keluarga besar KMSGD. Pendaftaran anggota
                  baru untuk tahun akademik 2025/2026 telah dibuka.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center gap-2 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                  style={{
                    backgroundColor: "#C8990A",
                    boxShadow: "0 8px 24px rgba(200, 153, 10, 0.35)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#A07C08")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#C8990A")
                  }
                >
                  <Users size={18} /> Daftar Sekarang
                </Link>
                <Link
                  to="/tentang"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
                >
                  <BookOpen size={16} /> Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
