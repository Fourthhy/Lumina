export default function DateToday() {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = monthsOfYear[monthIndex];
    const year = currentDate.getFullYear();

    return (
        <>
            <div className="border-white border-[1px] w-[10vw] h-[20vh] flex flex-col items-start justify-evenly pl-[5px] rounded-[8px]">
                <p className="font-Content text-[1.5vw]">
                    <span className="font-bold text-[#E1DFDB]">{dayOfWeek}</span>
                </p>
                <p className="font-Content text-[1.2vw] text-[#E1DFDB] items-start flex flex-col justify-evenly">
                    <span className="font-bold">{currentMonth}</span>
                    <span>{dayOfMonth}</span>
                    <span>{year}</span>
                </p>
            </div>
        </>
    )
}