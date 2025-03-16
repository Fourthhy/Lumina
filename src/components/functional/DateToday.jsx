export default function DateToday() {
    return (
        <>
            <div className="border-white border-[1px] w-[10vw] h-[20vh] flex flex-col items-start justify-evenly pl-[5px] rounded-[8px]">
                <p className="font-Content text-[1.5vw]">
                    <span className="font-bold text-[#E1DFDB]">Wednesday</span>
                </p>
                <p className="font-Content text-[1.2vw] text-[#E1DFDB] items-start flex flex-col justify-evenly">
                    <span className="font-bold">September</span>
                    <span>11</span>
                    <span>2001</span>
                </p>
            </div>
        </>
    )
}