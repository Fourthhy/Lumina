import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import BoardSelection from "../pages/BoardSelection"
export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/boardselection" element={<BoardSelection />} />
        </Routes>
      </Router>
    </>
  )
}