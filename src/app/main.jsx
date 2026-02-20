import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './styles/index.css'
import { GlobalData } from './context/GlobalContext.jsx'
import { Portafolio } from '../pages/portafolio/Portafolio.jsx'
import App from '../pages/app/App.jsx'

//usar outlet en caso de elementos 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalData>
        <Routes>
          <Route path="/" element={<Portafolio />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </GlobalData>
    </BrowserRouter>
  </StrictMode>
);
