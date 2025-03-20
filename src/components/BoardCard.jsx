import { MdOutlineDelete } from "react-icons/md";

function BoardCard() {
    return (
        <>
            <div className="w-[100%] h-[20vh] border-[1.5px] border-[#d1cec8] rounded-[5px] bg-[#E2DFDA]">
                <div className="w-[100%] h-[100%] flex">
                    <div className="w-[90%] h-[100%] flex justify-center items-start flex-col">
                        <p className="font-Content font-bold text-[2vw] word-wrap p-[8px]">
                            board title
                        </p>
                        <p className="font-Content text-[1vw] text-[#333332] pl-[8px] mt-[-12px]">
                                September 11, 2001
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoardCard