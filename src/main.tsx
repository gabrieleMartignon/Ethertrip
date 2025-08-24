import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './Pages/about.tsx'
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import SuccessPage from './Pages/succespage.tsx'

createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
  <StrictMode>
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Success" element={<SuccessPage/>} />
    </Routes>
  </StrictMode>,
  </BrowserRouter>
)
