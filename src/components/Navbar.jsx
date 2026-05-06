import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Info,
  Calendar,
  Bell,
  Image,
  Phone,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Beranda", icon: Home },
  { to: "/tentang", label: "Tentang", icon: Info },
  { to: "/kegiatan", label: "Kegiatan", icon: Calendar },
  { to: "/pengumuman", label: "Pengumuman", icon: Bell },
  { to: "/galeri", label: "Galeri", icon: Image },
  { to: "/kontak", label: "Kontak", icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed shadow-[0_4px_10px_rgba(0,0,0,0.2)] top-0 inset-x-0 z-50 transition-all duration-300 py-2 ${scrolled
          ? "bg-white/80 backdrop-blur-md"
          : "bg-white/95 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setOpen(false)}
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/logo.jpeg"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="font-display font-bold text-slate-800 text-base">
                KMSGD
              </p>
              <p className="text-sm font-medium -mt-0.5 flex flex-col" style={{ color: "#A07C08" }}>
                Keluarga Mahasiswa Sunan Gunung Djati <span className="text-xs">Jabodetabek</span>
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${isActive
                    ? "text-slate-900 shadow-md shadow-yellow-500/30"
                    : "text-slate-600 hover:text-yellow-800"
                  }`
                }
                onMouseEnter={e => {
                  if (!e.currentTarget.classList.contains("active")) {
                    e.currentTarget.style.backgroundColor = "#FFF4CC";
                  }
                }}
                onMouseLeave={e => {
                  if (!e.currentTarget.style.backgroundColor?.includes("C8990A")) {
                    e.currentTarget.style.backgroundColor = "";
                  }
                }}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-yellow-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="bg-white border-t border-slate-100 px-4 py-3 space-y-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-yellow-800"
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? { backgroundColor: "#C8990A", color: "#1A1A1A" }
                  : {}
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}