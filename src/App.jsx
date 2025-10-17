import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer"
import AllMiss from "./pages/AllMiss"
import Les15 from "./pages/Les15"
import Finalistes from "./pages/Finalistes"
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<AllMiss />} />
            <Route path="/les15" element={<Les15 />} />
            <Route path="/finalistes" element={<Finalistes />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}
export default App
