import { BsBoxArrowRight } from "react-icons/bs";

export default function BoardDescriptionModal() {
    return (
        <>
            <div className="w-[50vw] h-[60vh] border-[#b1acac] border-[1px] rounded-[8px]">
                <div className="h-[20%] border-black border-[1px] w [100%] p-[8px]">
                    <p className="font-Content font-bold text-[3vw] word-wrap">
                        board title
                    </p>
                    <p className="font-Content text-[1.2vw] text-[#333332] word-wrap mt-[-5px]">
                        September 11, 2001
                    </p>
                </div>
                <div className="h-[70%] border-black border-[1px] w [100%]">
                    <div className="h-[40%] border-black border-[1px]">
                        <p className="font-Content text-[1.5vw] text-[#333332] p-[8px] word-wrap">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta totam consequuntur ullam inventore eum! Placeat, temporibus doloribus. Velit eum quos nulla distinctio perspiciatis, ullam dolores omnis ut, labore minus quae?
                        </p>
                    </div>
                    <div className="h-[60%] w-[100%] flex">
                        <div className="h-[100%] w-[30%] flex flex-col justify-evenly text-right pr-[8px]">
                            <p className="font-Header text-[1.8vw] pl-[8px] font-bold">Total Tasks:</p>
                            <p className="font-Header text-[1.8vw] pl-[8px] font-bold">To do:</p>
                            <p className="font-Header text-[1.8vw] pl-[8px] font-bold">Pending:</p>
                            <p className="font-Header text-[1.8vw] pl-[8px] font-bold">Completed:</p>
                        </div>
                        <div className="h-[100%] w-[70%] border-black border-[1px]">

                        </div>
                    </div>
                </div>
                <div className="h-[10%] border-black border-[1px] w-[100%]">
                    <div>
                        <button>delete</button>
                        <button>view board</button>
                    </div>
                </div>
            </div>
        </>
    )
}