import { FaRegBell } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";

export default function BoardSelectio() {
    return (
        <>
            <div className="h-screen w-screen flex">
                <div className="h-[100%] w-[15%]">
                    <div className="h-[100%] relative">
                        <img src="/bookmark_morning.jpg" alt="bookmark image" className="h-[100%] object-cover" />
                    </div>
                    <div className="absolute top-0 w-[15%]">
                        <div>
                            <p className="font-Content text-[2vw] pl-[5px]">
                                <span className="text-[1.6vw] text-[#333332]">Today is: </span>
                                <br />
                                <span className="font-bold text-[#333332]">Monday</span>
                            </p>
                            <p className="font-Content text-[1.5vw] text-[#333332] pl-[5px]">
                                September 11, 2001
                            </p>
                        </div>

                    </div>
                </div>
                <div className="h-[100%] w-[85%] gradient-morning">
                    <div className="w-full py-[5px] flex items-center"> {/* HEADER BAR */}
                        <p className="font-Content text-[2.5vw] font-bold text-[#403127] pl-[10px] flex-grow border-1 border-black">
                            Good Morning, username
                        </p>
                        <div className="flex gap-[40px] justify-end items-center border-1 mr-[8px]">
                            <LuSearch className="text-[2.2vw] text-[#403127b]" />
                            <FaRegBell className="text-[2.2vw] text-[#403127]" />
                            <MdOutlinePersonOutline className="text-[2.6vw] text-[#403127]" />
                        </div>
                    </div>
                    <div className="mt-[10px] pl-[15px] font-Content text-[1.5vw] text-[#333332]">
                        Select your board and be creative
                    </div>
                </div>
            </div>
        </>
    )
}