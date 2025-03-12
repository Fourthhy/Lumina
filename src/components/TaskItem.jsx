import { MdOutlineNavigateNext } from "react-icons/md";

export default function TaskItem() {
    return (
        <>
            <div className="w-[96%] task-face-bg-color rounded-[8px]">
                <p className="font-Content font-bold text-[1.3vw] word-wrap p-[5px]">
                    Task Item
                </p>

                <p className="font-Content text-[1.2vw] word-wrap p-[5px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, doloribus.
                </p>
                <div className="flex items-center justify-between">
                    <p className="font-Content text-[1vw] word-wrap p-[5px]">
                        Due: September 11, 2001
                    </p>
                    <MdOutlineNavigateNext className="size-[2vw]"/>
                </div>


            </div>
        </>
    )
}
