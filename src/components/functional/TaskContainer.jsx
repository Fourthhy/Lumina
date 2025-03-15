import TaskItem from "./TaskItem"
import AddTask from "./AddTask"
import { Link } from "react-router-dom"

export default function TaskContainer({ categoryID, categoryName }) {

    const CategoryHeader = () => {
        return (
            <>
                <div className="h-[5vh] w-[100%] rounded-[8px] bg-[#35383D] overflow-y-hidden">
                    <p className="font-Content text-[1.2vw] text-[#F5F6F2] pl-[8px] font-bold pt-[5px]">{categoryName}</p>
                </div>
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
                <TaskItem />
                {categoryID !== 1 ? (<TaskItem />) : ''}
                {categoryID === 1 ? (<AddTask />) : ''}
            </div>
        </>
    )
}