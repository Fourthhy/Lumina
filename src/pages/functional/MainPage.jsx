import DateToday from "../../components/functional/DateToday"
import Analytics from "../../components/functional/Analytics"
import Tags from "../../components/functional/Tags"
import TaskBoard from "../../components/functional/TaskBoard"
export default function MainPage() {
    return (
        <>
            <div className="w-screen h-screen gradient-evening">
                <div className="w-[100%] h-[100%] flex">
                    <div className="h-[100%] w-[12%]">
                        <div className="h-[100%] relative">
                            <img src="/bookmark_evening.jpg" alt="bookmark image" className="h-[100%] object-cover" />
                        </div>

                        <div className="absolute top-0 w-[15%] m-[10px]">
                            <DateToday />
                            <hr className="w-[65%] bg-[#E1DFDB] my-[10px]" />

                            <div className="w-[70%]">
                                <Analytics />
                            </div>
                            <hr className="w-[65%] bg-[#E1DFDB] my-[10px]" />
                            <Tags />
                            <hr className="w-[65%] bg-[#E1DFDB] my-[10px]" />
                            <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold">Lumina</p>
                            <p className="font-Content text-[1.2vw] text-[#E1DFDB] pt-[-3px]">by Fourthhy</p>
                        </div>
                    </div>
                    <div className="h-[100%] w-[88%]">
                        <TaskBoard />
                    </div>
                </div>
            </div>
        </>
    )
}