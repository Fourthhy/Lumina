import TaskItem from "./TaskItem"
import AddTask from "./AddTask"
import { Link } from "react-router-dom"
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TaskContainer({ categoryID, categoryName, categoryColor }) {

    const taskCount = 0;

    const CategoryHeader = () => {
        return (
            <>
                <div className={`h-[5vh] w-[100%] rounded-[8px] overflow-y-hidden flex justify-between`} 
                style={{
                    backgroundColor: `${categoryColor}`
                }}
                >
                    <div className="flex w-[60%] justify-betwen">
                        <p className="font-Content text-[1.2vw] text-[#F5F6F2] pl-[8px] font-bold pt-[5px]">{categoryName}</p>
                        <p className="font-Content text-[1vw] text-[#F5F6F2] pl-[8px] pt-[5px]">({taskCount})</p>
                    </div>
                    <div className="items-center flex h-[100%] pr-[8px]">
                        <Link to="/mainpage/taskpage">
                            <BsThreeDotsVertical className="text-[#F5F6F2] cursor-pointer hover:text-white"/>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="h-[100%] w-[100%]">
                <CategoryHeader />
                {/* <TaskItem /> */}
                {/* <TaskItem /> */}
                {/* <TaskItem /> */}
                {/* <TaskItem /> */}
                {/* {categoryID !== 1 ? (<TaskItem />) : ''} */}
                {categoryID === 1 ? (<AddTask />) : ''}
            </div>
        </>
    )
}