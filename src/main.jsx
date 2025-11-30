import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { MissProvider } from "./context/MissContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MissProvider>
      <App />
    </MissProvider>
  </StrictMode>,
)
