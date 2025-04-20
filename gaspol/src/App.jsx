import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Component/NavbarPages";

// Pages tujuan navigasi
import LaporLangsung from "./pages/LaporLangsung";
import KinerjaDosen from "./pages/KinerjaDosen";
import KebijakanKampus from "./pages/KebijakanKampus";
import KerusakanFasilitas from "./pages/KerusakanFasilitas";
import AspirasiOrmawa from "./pages/AspirasiOrmawa";
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="max-w-7xl w-full">
          <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/laporan/lapor-langsung" element={<LaporLangsung />} />
          <Route path="/laporan/kinerja-dosen" element={<KinerjaDosen />} />
          <Route path="/laporan/kebijakan-kampus" element={<KebijakanKampus />} />
          <Route path="/laporan/kerusakan-fasilitas" element={<KerusakanFasilitas />} />
          <Route path="/laporan/aspirasi-ormawa" element={<AspirasiOrmawa />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
