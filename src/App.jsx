import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Kegiatan from './pages/Kegiatan'
import Pengumuman from './pages/Pengumuman'
import Galeri from './pages/Galeri'
import Kontak from './pages/Kontak'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/tentang"    element={<Tentang />} />
          <Route path="/kegiatan"   element={<Kegiatan />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="/galeri"     element={<Galeri />} />
          <Route path="/kontak"     element={<Kontak />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
