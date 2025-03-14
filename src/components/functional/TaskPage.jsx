import TaskItem from "./TaskItem";

export default function TaskPage() {
    const taskItems = Array.from({ length: 17 }); // Example with 17 items

    return (
        <>
            <header className="h-[7%] w-full">
                <div className="flex justify-between items-center h-full">
                    <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold p-2">
                        Board Title: Category_Header
                    </p>
                </div>
            </header>

            <main className="h-[93%] w-full flex items-center justify-center">
                <div className="h-full w-[99%] max-h-[90vh] grid grid-cols-4 grid-rows-auto gap-2 overflow-y-auto">
                    {taskItems.map((_, index) => (
                        <div key={index} className="h-[22vh] w-full">
                            <TaskItem />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}