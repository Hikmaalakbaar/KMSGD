import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react'
import { asramaInfo } from '../data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-cobalt-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/logo.jpeg"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">KMSGD</p>
                <p className="text-[10px] text-cobalt-400">Keluarga Mahasiswa Sunan Gunung Djati</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              {asramaInfo.tagline}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-cobalt-500 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-400 flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Beranda' },
                { to: '/tentang', label: 'Tentang Kami' },
                { to: '/kegiatan', label: 'Kegiatan & Program' },
                { to: '/pengumuman', label: 'Pengumuman' },
                { to: '/galeri', label: 'Galeri' },
                { to: '/kontak', label: 'Kontak' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-slate-400 hover:text-cobalt-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cobalt-500"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-cobalt-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">{asramaInfo.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-cobalt-400 shrink-0" />
                <a href={`mailto:${asramaInfo.email}`} className="text-sm text-slate-400 hover:text-cobalt-400 transition-colors">
                  {asramaInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-cobalt-400 shrink-0" />
                <a href={`https://wa.me/${asramaInfo.whatsapp.replace(/\D/g,'')}`} className="text-sm text-slate-400 hover:text-cobalt-400 transition-colors">
                  {asramaInfo.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-5 sm:mt-10 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} KMSGD. Hak cipta dilindungi.
          </p>
          <p className="text-xs text-slate-500">
            Dibuat dengan <span className="text-orange-400">♥</span> oleh Tim IT KMSG
          </p>
        </div>
      </div>
    </footer>
  )
}
