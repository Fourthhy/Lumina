import { FaRegBell } from "react-icons/fa";

export default function BoardPage() {
    return (
        <>
            <div className="h-screen w-screen bg-[#f3ede5] ">
                <div className="h-[7vh] w-[100%] flex bg-[#F5F6F2]">
                    <div className="w-[50%] flex items-center">
                        <p className="font-Serif text-[1.9vw] text-[#333332] pl-[8px] font-bold"> Lumina </p>
                    </div>
                    <div className="w-[50%] flex justify-end items-center mr-[8px]">
                        <FaRegBell className="text-[2.2vw] text-[#403127]" />
                    </div>
                </div>


                <div className="w-[100%] h-[93vh] flex items-center">
                    <div className="h-[93vh] w-[85%] flex items-center justify-center">
                        <div className="h-[97%] w-[97%]">
                            <div className="h-[8vh] w-[100%] flex">
                                <div className="h-[100%] w-[50%]">
                                    <p className="font-Content font-bold text-[2vw] word-wrap">
                                        board title
                                    </p>
                                </div>
                                <div className="h-[100%] w-[50%]">
                                    <div className="flex gap-[2px] justify-end">
                                        <img src="/profiles/aquarius.png" alt="profile image" className="size-[3.3vw]" />
                                        <img src="/profiles/aries.png" alt="profile image" className="size-[3.3vw]" />
                                        <img src="/profiles/leo.png" alt="profile image" className="size-[3.3vw]" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="grid grid-cols-3 gap-[5px] h-[80vh]">
                                    <div className="h-[100%] w-[100%] border-black border-[1px]"> content </div>
                                    <div className="h-[100%] w-[100%] border-black border-[1px]"> content </div>
                                    <div className="h-[100%] w-[100%] border-black border-[1px]"> content </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="h-[100%] w-[15%]">
                        <div className="h-[100%] relative">
                            <img src="/bookmark_morning.jpg" alt="bookmark image" className="h-[100%] object-cover blur-[1.5px]" />
                        </div>
                        <div className="absolute top-0 w-[15%] mt-[8vh]">
                            <div>
                                sample content
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}