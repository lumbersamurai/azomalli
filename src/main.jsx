import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PerfilTerapeuta from './components/PerfilTerapeuta.jsx'
import ReferenciasPage from './components/ReferenciasPage.jsx'
import AvisoPrivacidad from './components/AvisoPrivacidad.jsx'
import TerminosCondiciones from './components/TerminosCondiciones.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
        <Route path="/terapeuta/:id" element={<PerfilTerapeuta />} />
        <Route path="/referencias" element={<ReferenciasPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
