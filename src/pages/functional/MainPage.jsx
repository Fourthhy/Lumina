import DateToday from "../../components/functional/DateToday"

export default function MainPage() {
    return (
        <>
            <div className="w-screen h-screen gradient-evening">
                <div className="w-[100%] h-[100%] flex">
                    <div className="h-[100%] w-[12%]">
                        <div className="h-[100%] relative">
                            <img src="/bookmark_evening.jpg" alt="bookmark image" className="h-[100%] object-cover" />
                        </div>
                        <div className="absolute top-0 w-[15%]">
                            <DateToday />
                            <hr className="w-[65%] bg-[#E1DFDB] m-[10px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}