import { asramaInfo } from '../data'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

export default function Kontak() {
  return (
    <div className="pt-[4.69rem]">
      <section className="bg-gradient-to-br from-cobalt-600 to-cobalt-800 py-20 relative overflow-hidden">
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
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">Hubungi Kami</span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">Kontak</h1>
          <p className="text-cobalt-200 max-w-xl mx-auto">Punya pertanyaan atau ingin bergabung? Kami siap membantu kamu!</p>
        </div>
      </section>

      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <h2 className="font-display font-bold text-slate-800 text-2xl mb-6">Informasi Kontak</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Alamat', value: asramaInfo.location, href: null },
                  { icon: Mail, label: 'Email', value: asramaInfo.email, href: `mailto:${asramaInfo.email}` },
                  { icon: Phone, label: 'WhatsApp', value: asramaInfo.whatsapp, href: `https://wa.me/${asramaInfo.whatsapp.replace(/\D/g, '')}` },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-cobalt-50 flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-cobalt-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-slate-700 font-medium hover:text-cobalt-500 transition-colors">{c.value}</a>
                      ) : (
                        <p className="text-slate-700 font-medium">{c.value}</p>
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
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="font-display font-bold text-slate-800 text-2xl mb-6">Kirim Pesan</h2>
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
