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

  return <div ref={mapRef} style={{ width: "100%", height: "100%", minHeight: "420px" }} />;
}

export default function Maps() {
  return (
    <section style={{
      background: "#F0F2F5",
      padding: "80px 5%",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* ── JUDUL ── */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{
          display: "inline-block",
          background: "#FDF8F0",
          color: "#C9973A",
          border: "1.5px solid #E8C97A",
          borderRadius: 100,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "5px 16px",
          marginBottom: 16,
        }}>
          • Lokasi
        </span>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          color: "#1A1510",
          margin: "0 0 10px",
          letterSpacing: "-0.5px",
          lineHeight: 1.2,
        }}>
          Temukan Kami
        </h2>
        <p style={{ fontSize: 15, color: "#C8990A", margin: 0 }}>
          Kunjungi asrama kami di Bandung
        </p>
      </div>

      {/* ── SPLIT LAYOUT ── */}
      <div style={{
        display: "flex",
        gap: 32,
        alignItems: "stretch",
        maxWidth: 1100,
        margin: "0 auto",
        flexWrap: "wrap",
      }}>

        {/* KIRI — Info Alamat 50% */}
        <div style={{
          flex: "1 1 300px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
        }}>
          {/* Alamat */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "22px 24px",
            border: "1px solid rgba(92,51,23,0.1)",
            boxShadow: "0 2px 12px rgba(92,51,23,0.06)",
            display: "flex", gap: 14, alignItems: "flex-start",
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#C8990A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, color: "white" }}>
              < HiMapPin />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1510", marginBottom: 4 }}>Alamat</div>
              <div style={{ fontSize: 14, color: "#7A6E61", lineHeight: 1.6 }}>
                {LOCATION.address}<br />{LOCATION.city}
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "22px 24px",
            border: "1px solid rgba(92,51,23,0.1)",
            boxShadow: "0 2px 12px rgba(92,51,23,0.06)",
            display: "flex", gap: 14, alignItems: "flex-start",
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#C8990A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, color: "white" }}>
              <HiPhone />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1510", marginBottom: 2 }}>WhatsApp</div>
              <a href={`https://wa.me/6281234567890`} style={{ fontSize: 14, color: "#C9973A", textDecoration: "none" }}>{LOCATION.phone}</a>
            </div>
          </div>

          {/* Email */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "22px 24px",
            border: "1px solid rgba(92,51,23,0.1)",
            boxShadow: "0 2px 12px rgba(92,51,23,0.06)",
            display: "flex", gap: 14, alignItems: "flex-start",
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#C8990A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, color: "white" }}>
              <HiEnvelope />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1510", marginBottom: 2 }}>Email</div>
              <a href={`mailto:${LOCATION.email}`} style={{ fontSize: 14, color: "#C9973A", textDecoration: "none" }}>{LOCATION.email}</a>
            </div>
          </div>

          {/* Jam Tamu */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "22px 24px",
            border: "1px solid rgba(92,51,23,0.1)",
            boxShadow: "0 2px 12px rgba(92,51,23,0.06)",
            display: "flex", gap: 14, alignItems: "flex-start",
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#C8990A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, color: "white" }}>
              <HiClock />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1510", marginBottom: 2 }}>Jam Tamu</div>
              <div style={{ fontSize: 14, color: "#7A6E61", lineHeight: 1.6 }}>{LOCATION.hours}<br />{LOCATION.hours2}</div>
            </div>
          </div>

          {/* Tombol */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${LOCATION.lat},${LOCATION.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#C8990A",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Buka di Google Maps →
          </a>
        </div>

        {/* KANAN — Peta 50% */}
        <div style={{
          flex: "1 1 400px",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(92,51,23,0.15)",
          border: "1px solid rgba(92,51,23,0.12)",
          minHeight: 420,
          position: "relative",
          zIndex: 20,
        }}>
          <LeafletMap />
        </div>
      </div>
    </section>
  );
}