import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './components/about/about.tsx'
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";

createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
  <StrictMode>
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/About" element={<About/>} />
  
    </Routes>
  </StrictMode>,
  </BrowserRouter>
)
