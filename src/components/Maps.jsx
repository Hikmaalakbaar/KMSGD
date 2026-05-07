import { useEffect, useRef } from "react";
import { HiMapPin, HiPhone, HiEnvelope, HiClock, HiBuildingLibrary } from "react-icons/hi2"

const LOCATION = {
  lat: -6.905977,
  lng: 107.613144,
  label: "Asrama Al-Hikmah",
  address: "Jl. Padasuka No. 45, Cibeunying Kidul, Bandung",
  city: "Kota Bandung, Jawa Barat 40125",
  phone: "+62 812-3456-7890",
  email: "info@asramaalhikmah.id",
  hours: "Senin – Jumat: 08.00 – 20.00 WIB",
  hours2: "Sabtu – Minggu: 09.00 – 17.00 WIB",
};

function LeafletMap() {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const initMap = () => {
      if (instanceRef.current || !mapRef.current) return;
      const L = window.L;
      const map = L.map(mapRef.current, {
        center: [LOCATION.lat, LOCATION.lng],
        zoom: 16,
        scrollWheelZoom: true,
        zoomControl: true,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const icon = L.divIcon({
        className: "",
        html: `
          <div style="display:flex;flex-direction:column;align-items:center;">
            <div style="background:#5C3317;color:#fff;padding:6px 12px;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;white-space:nowrap;box-shadow:0 4px 14px rgba(92,51,23,0.35);">
              📍 ${LOCATION.label}
            </div>
            <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #5C3317;margin-top:-1px;"></div>
          </div>`,
        iconAnchor: [60, 52],
        popupAnchor: [0, -52],
      });

      L.marker([LOCATION.lat, LOCATION.lng], { icon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family:'DM Sans',sans-serif;min-width:180px;padding:4px 2px;">
            <div style="font-weight:700;font-size:14px;color:#5C3317;margin-bottom:4px;">🏫 ${LOCATION.label}</div>
            <div style="font-size:12px;color:#7A6E61;line-height:1.5;">${LOCATION.address}</div>
            <a href="https://www.google.com/maps/search/?api=1&query=${LOCATION.lat},${LOCATION.lng}"
              target="_blank" rel="noopener noreferrer"
              style="display:inline-block;margin-top:10px;background:#5C3317;color:#fff;padding:5px 12px;border-radius:6px;font-size:12px;text-decoration:none;font-weight:500;">
              Buka di Google Maps →
            </a>
          </div>`, { maxWidth: 240 })
        .openPopup();

      instanceRef.current = map;
    };

    if (window.L) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = initMap;
      document.head.appendChild(script);
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100%", minHeight: "320px" }} />;
}

/* ── Info Card ── */
function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-3 p-4 bg-white border rounded-xl sm:gap-3.5 sm:p-5 sm:rounded-2xl border-black/5 shadow-[0_2px_12px_rgba(92,51,23,0.06)]">
      <div className="flex items-center justify-center w-10 h-10 text-white rounded-lg shrink-0 sm:w-11 sm:h-11 sm:rounded-xl" style={{ background: "#C8990A" }}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold sm:text-sm" style={{ color: "#1A1510" }}>{title}</div>
        <div className="text-xs leading-relaxed sm:text-sm" style={{ color: "#7A6E61" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Maps() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ background: "#F0F2F5", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── JUDUL ── */}
      <div className="mb-8 text-center sm:mb-12 lg:mb-14">
        <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 rounded-full" style={{
          background: "#FDF8F0",
          color: "#C9973A",
          border: "1.5px solid #E8C97A",
        }}>
          • Lokasi
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight mb-2" style={{ color: "#1A1510", letterSpacing: "-0.5px" }}>
          Temukan Kami
        </h2>
        <p className="text-sm sm:text-[15px]" style={{ color: "#C8990A" }}>
          Kunjungi asrama kami di Bandung
        </p>
      </div>

      {/* ── SPLIT LAYOUT ── */}
      <div className="flex flex-col max-w-[1100px] mx-auto px-4 sm:px-6 gap-6 sm:gap-8 lg:flex-row lg:items-stretch">

        {/* KIRI — Info Alamat */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:flex-1 lg:justify-center">
          <InfoCard icon={HiMapPin} title="Alamat">
            {LOCATION.address}<br />{LOCATION.city}
          </InfoCard>

          <InfoCard icon={HiPhone} title="WhatsApp">
            <a href={`https://wa.me/6281234567890`} className="no-underline" style={{ color: "#C9973A" }}>{LOCATION.phone}</a>
          </InfoCard>

          <InfoCard icon={HiEnvelope} title="Email">
            <a href={`mailto:${LOCATION.email}`} className="no-underline" style={{ color: "#C9973A" }}>{LOCATION.email}</a>
          </InfoCard>

          <InfoCard icon={HiClock} title="Jam Tamu">
            {LOCATION.hours}<br />{LOCATION.hours2}
          </InfoCard>

          {/* Tombol */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${LOCATION.lat},${LOCATION.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-sm font-medium text-center text-white no-underline transition-opacity rounded-full sm:py-3.5 hover:opacity-90"
            style={{ background: "#C8990A" }}
          >
            Buka di Google Maps →
          </a>
        </div>

        {/* KANAN — Peta */}
        <div className="lg:flex-1 min-h-[280px] sm:min-h-[350px] lg:min-h-[420px] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(92,51,23,0.15)] border border-black/10 relative z-20">
          <LeafletMap />
        </div>
      </div>
    </section>
  );
}