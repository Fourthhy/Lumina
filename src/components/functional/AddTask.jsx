import { CiSquarePlus } from "react-icons/ci";

export default function AddTask() {
    return (
        <>
            <div className="h-[20%] w-[100%] border-[1px] border-[#b4a192] border-dashed my-[7px] rounded-[8px]">
                <div className="h-[100%] w-[100%] flex items-center flex-col justify-center">
                    <CiSquarePlus className="text-[#b4a192] text-[2.6vw]"/>
                    <p className="font-Content text-[1.5vw] text-[#b4a192] font-bold">
                        Add Task
                    </p>
                </div>
            </div>
        </>
    )
}