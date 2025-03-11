import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import BoardSelection from "../context/ModalBoardProvider"
import Board from "../pages/BoardPage"

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/boardselection" element={<BoardSelection />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </>
  )
}