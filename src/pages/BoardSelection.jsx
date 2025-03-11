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
                    <div className="w-[100%] border-[2px] border-black flex">
                        <p className="font-Header text-[3vw] font-bold text-[#333332] pl-[5px] w-auto border-[1px] border-black">
                            Good Morning, username
                        </p>
                        <div>
                            icon icon
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}