import { asramaInfo } from '../data'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

export default function Kontak() {
  return (
    <div className="pt-[4.69rem]">
      <section className="relative py-14 overflow-hidden sm:py-20 bg-gradient-to-br from-cobalt-600 to-cobalt-800">
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
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">Hubungi Kami</span>
          <h1 className="mb-4 text-3xl font-extrabold text-white font-display sm:text-4xl lg:text-5xl">Kontak</h1>
          <p className="max-w-xl mx-auto text-cobalt-200">Punya pertanyaan atau ingin bergabung? Kami siap membantu kamu!</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold font-display text-slate-800">Informasi Kontak</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Alamat', value: asramaInfo.location, href: null },
                  { icon: Mail, label: 'Email', value: asramaInfo.email, href: `mailto:${asramaInfo.email}` },
                  { icon: Phone, label: 'WhatsApp', value: asramaInfo.whatsapp, href: `https://wa.me/${asramaInfo.whatsapp.replace(/\D/g, '')}` },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white shadow-sm rounded-2xl">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cobalt-50 shrink-0">
                      <c.icon size={18} className="text-cobalt-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-medium transition-colors text-slate-700 hover:text-cobalt-500">{c.value}</a>
                      ) : (
                        <p className="font-medium text-slate-700">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${asramaInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5 w-full"
              >
                <MessageCircle size={20} /> Chat via WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="p-5 bg-white shadow-sm sm:p-8 rounded-2xl">
              <h2 className="mb-6 text-2xl font-bold font-display text-slate-800">Kirim Pesan</h2>
              <form className="space-y-5" onSubmit={e => { e.preventDefault(); alert('Pesan terkirim! Kami akan segera menghubungi kamu.') }}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama lengkap kamu" required
                    className="w-full px-4 py-3 bg-[#F1F5F9] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cobalt-300 focus:border-cobalt-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                  <input type="email" placeholder="email@contoh.com" required
                    className="w-full px-4 py-3 bg-[#F1F5F9] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cobalt-300 focus:border-cobalt-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Keperluan</label>
                  <select className="w-full px-4 py-3 bg-[#F1F5F9] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cobalt-300 focus:border-cobalt-400 transition-colors text-slate-600">
                    <option>Informasi Pendaftaran</option>
                    <option>Pertanyaan Umum</option>
                    <option>Kerjasama</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Pesan</label>
                  <textarea rows={4} placeholder="Tulis pesanmu di sini..." required
                    className="w-full px-4 py-3 bg-[#F1F5F9] border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cobalt-300 focus:border-cobalt-400 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-cobalt-500 hover:bg-cobalt-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-cobalt-500/25 hover:-translate-y-0.5">
                  <Send size={16} /> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
