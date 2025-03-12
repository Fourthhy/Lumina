import { FaRegBell } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

import TaskCategoryGroup from "../components/TaskCategoryGroup"

export default function BoardPage() {
    return (
        <>
            <div className="h-screen w-screen headerBar-fade-morning ">
                <div className="h-[7vh] w-[100%] flex">
                    <div className="w-[50%] flex items-center">
                        <p className="font-Serif text-[1.9vw] text-[#333332] pl-[8px] font-bold">
                            Lumina: &nbsp;
                        </p>
                        <p className="font-Content font-bold text-[2vw] word-wrap">
                            board title
                        </p>
                    </div>
                    <div className="w-[50%] flex justify-end items-center mr-[8px]">
                        {/* <div className="flex gap-[2px] justify-end">
                            <img src="/profiles/aquarius.png" alt="profile image" className="size-[3.3vw]" />
                            <img src="/profiles/aries.png" alt="profile image" className="size-[3.3vw]" />
                            <img src="/profiles/leo.png" alt="profile image" className="size-[3.3vw]" />
                        </div> */}
                        <RiLogoutBoxLine className="size-[2.5vw] mr-[3px]"/>
                    </div>
                </div>


                <div className="w-[100%] h-[93vh] flex items-center">
                    <div className="h-[93vh] w-[100%] flex items-center justify-center">
                        <div className="h-[97%] w-[97%]">
                            <div>
                                <div className="grid grid-cols-4 gap-[5px] h-[90vh]">
                                    <TaskCategoryGroup header="To do"/>
                                    <TaskCategoryGroup header="In Progress"/>
                                    <TaskCategoryGroup header="In Review"/>
                                    <TaskCategoryGroup header="Completed"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}