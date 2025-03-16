import DateToday from "../../components/functional/DateToday"
import Analytics from "../../components/functional/Analytics"
import Tags from "../../components/functional/Tags"
import TaskBoard from "../../components/functional/TaskBoard"
import TaskPage from "../../components/functional/TaskPage"
import BoardInfo from "../../components/functional/BoardInfo"
import { Outlet } from "react-router-dom"
export default function MainPage() {
    return (
        <>
            <div className="w-screen h-screen gradient-evening">
                <div className="w-[100%] h-[100%] flex">
                    <div className="h-[100%] w-[12%]">
                        <div className="h-[100%] relative">
                            <img src="/bookmark_evening.jpg" alt="bookmark image" className="h-[100%] object-cover" />
                        </div>

                        <div className="absolute top-0 w-[15%] m-[10px]">
                            <DateToday />
                            <hr className="w-[65%] bg-[#E1DFDB] my-[10px]" />
                            <BoardInfo />
                        </div>
                    </div>
                    <div className="h-[100%] w-[88%]">
                        {/* <TaskBoard /> */}
                        {/* <TaskPage /> */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}