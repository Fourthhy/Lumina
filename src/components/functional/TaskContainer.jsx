import TaskItem from "./TaskItem"
import AddTask from "./AddTask"
import { Link } from "react-router-dom"

export default function TaskContainer({ categoryID, categoryName }) {

    const CategoryHeader = () => {
        return (
            <>
                <div className="h-[5%] w-[100%] rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[5px] rounded-br-[5px] bg-[#dbdbdb] border-[#cecece] border-[2px] overflow-y-hidden">
                    <p className="font-Content text-[1.2vw] text-[#0b132b] pl-[8px] font-bold pt-[5px]">{categoryName}</p>
                </div>
            </>
        )
    }

    const CategoryFooter = () => {
        return (
            <>
                <Link to="/taskpage">
                    <div className="h-[5%] w-[100%] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[15px] rounded-br-[15px] bg-[#dbdbdb] border-[#cecece] border-[2px]">
                        <p className="font-Content text-[1vw] text-[#0b132b] font-bold pt-[5px] text-center">View All Task</p>
                    </div>
                </Link>
            </>
        )
    }
    return (
        <>
            <div className="h-[100%] w-[100%]">
                <CategoryHeader />
                <TaskItem />
                <TaskItem />
                <TaskItem />
                {categoryID !== 1 ? (<TaskItem />) : ''}
                {categoryID === 1 ? (<AddTask />) : ''}
                <CategoryFooter />
            </div>
        </>
    )
}