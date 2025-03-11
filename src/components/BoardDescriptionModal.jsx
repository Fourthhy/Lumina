import { BsBoxArrowRight } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function BoardDescriptionModal({ onClose }) {
    return (
        <>
            <div className="w-[50vw] h-[60vh] border-[#b1acac] border-[1px] rounded-[8px]">
                <div className="h-[20%] w-[100%] p-[8px] flex">
                    <div className="h-[100%] w-[50%]">
                        <p className="font-Content font-bold text-[3vw] word-wrap">
                            board title
                        </p>
                        <p className="font-Content text-[1.2vw] text-[#333332] word-wrap mt-[-5px]">
                            September 11, 2001
                        </p>
                    </div>
                    <div className="w-[50%] h-[100%] flex items-start justify-end">
                        <RxCross2 onClick={onClose} className="size-[2vw] text-[#333332] cursor-pointer hover:text-[#494948]"/>
                    </div>
                </div>
                <div className="h-[70%] w-[100%]">
                    <div className="h-[40%]">
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
                        <div className="h-[100%] w-[70%] flex flex-col justify-evenly items-start pl-[8px]">
                            <p className="font-Content text-[1.5vw]">10 task/s</p>
                            <p className="font-Content text-[1.5vw]">5  task/s</p>
                            <p className="font-Content text-[1.5vw]">3  task/s</p>
                            <p className="font-Content text-[1.5vw]">2  task/s</p>
                        </div>
                    </div>
                </div>
                <div className="h-[10%]w-[100%]">
                    <div className="flex h-[100%] items-center gap-[1vw] w-[100%] justify-between">
                        <button className="flex h-[100%] w-[10vw] justify-center items-center ml-[8px] bg-[#ec4040] rounded-[8px] hover:bg-[#cf3434]">
                            <MdOutlineDelete className="text-[#333332]" />
                            <span className="font-Content text-[1.5vw] text-[#333332] word-wrap py-[2px] mt-[1px]">
                                delete
                            </span>
                        </button>
                        <button className="flex h-[100%] w-[12vw] justify-evenly items-center mr-[8px] bg-[#333332] rounded-[8px] hover:bg-[#494948]">
                            <span className="font-Content text-[1.5vw] text-[#D1CECA] word-wrap py-[2px] mt-[1px]">
                                view board
                            </span>
                            <BsBoxArrowRight className="text-[#D1CECA]"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}