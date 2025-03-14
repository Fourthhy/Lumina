import { Button } from "flowbite-react";
import { AiOutlineTeam } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import TaskContainer from "./TaskContainer"

export default function TaskBoard() {
    const categoryHeaders = [
        { categoryID: 1, categoryName: "To Do" },
        { categoryID: 2, categoryName: "In Progress" },
        { categoryID: 3, categoryName: "In Review" },
        { categoryID: 4, categoryName: "Completed" },
    ]

    return (
        <>
            <div className="h-[7%] w-[100%] overflow-y-hidden">
                <div className="flex justify-between items-center w-[100%] h-[100%] overflow-y-hidden">
                    <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold p-[8px]">Board Title</p>
                    <div className="flex items-center h-[100%] m-[8px] gap-3">
                        <Button className="border-[#F5F6F2] bg-[#0b132b] enabled:hover:bg-[#1c2541]"><AiOutlineTeam />Team</Button>
                    </div>
                </div>
            </div>
            <div className="h-[93%] w-[100%] flex items-center justify-center">
                <div className="h-[98%] w-[99%] grid grid-cols-4 gap-2 place-items-center">

                    {categoryHeaders.map((data) => (
                        <div className="h-[100%] w-[98%]" index={data.categoryID}>
                            <div className="h-[5%] w-[100%] rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[5px] rounded-br-[5px] bg-[#dbdbdb] border-[#cecece] border-[2px]">
                                <p className="font-Content text-[1.2vw] text-[#0b132b] pl-[8px] font-bold pt-[5px]">{data.categoryName}</p>
                            </div>
                            <div className="h-[95%] w-[100%]">
                                <TaskContainer />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}