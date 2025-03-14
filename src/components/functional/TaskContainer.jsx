import TaskItem from "./TaskItem"
import AddTask from "./AddTask"

export default function TaskContainer() {
    const CategoryView = () => {
        return (
            <>
                <div className="h-[5%] w-[100%] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[15px] rounded-br-[15px] bg-[#dbdbdb] border-[#cecece] border-[2px]">
                    <p className="font-Content text-[1vw] text-[#0b132b] font-bold pt-[5px] text-center">View All </p>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="h-[100%] w-[100%]">
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <AddTask />
                <CategoryView />
            </div>
        </>
    )
}