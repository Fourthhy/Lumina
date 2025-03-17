import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import BoardSelection from "../context/ModalBoardProvider"
import Board from "../pages/BoardPage"
import MainPage from "../pages/functional/MainPage"
import TaskBoard from "../components/functional/TaskBoard"
import TaskPage from "../components/functional/TaskPage"
import TestPage from "../pages/TestPage"

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TestPage />}> 
            <Route index element={<TaskBoard />} />
            <Route path="/taskpage" element={<TaskPage />} />          
          </Route>/
          <Route path="/boardselection" element={<BoardSelection />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </>
  )
}