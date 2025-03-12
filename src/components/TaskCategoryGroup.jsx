import TaskItem from "./TaskItem"

export default function TaskCategoryGroup({header}) {
    return (
        <>
            <div className="h-[100%] w-[100%] border-[#F5F6F2] border-[1px] rounded-[8px] white-fade-to-bottom">
                <div className="h-[6%] w-[100%]">
                    <div className="h-[100%] flex items-center pl-[8px]">
                    <p className="font-Content font-bold text-[1.5vw] word-wrap">
                        {header}
                    </p>
                    </div>
                </div>
                <div className="h-[94%] flex flex-col items-center gap-[10px]">
                    <TaskItem />
                </div>
            </div>
        </>
    )
}