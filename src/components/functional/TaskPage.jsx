import TaskItem from "./TaskItem";
import AddTask from "./AddTask"
import { CiLogout } from "react-icons/ci";
import { Link, useParams } from "react-router-dom"

export default function TaskPage() {
    const taskItems = Array.from({ length: 0 }); // Example with 17 items
    const { categoryID } = useParams();

    const headerName = () => {
        switch (categoryID) {
            case "1":
                return "To Do";
            case "2":
                return "In Progress";
            case "3":
                return "In Review";
            case "4":
                return "Completed"
            default:
                return ""
        }
    }

    return (
        <>
            <header className="h-[7%] w-full overflow-y-hidden">
                <div className="flex justify-between items-center h-full overflow-y-hidden">
                    <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold p-2">
                        Items {headerName()}
                    </p>
                    <div>
                        <Link to="/mainpage">
                            <CiLogout className="text-[3vw] text-[#F5F6F2] cursor-pointer mr-[8px]" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="h-[93%] w-full flex items-center justify-center">
                <div className="w-[99%] max-h-[90vh] grid grid-cols-4 grid-rows-auto gap-2 overflow-y-auto">
                    <AddTask />
                    {taskItems.map((_, index) => (
                        <TaskItem />
                    ))}
                </div>
            </main>
        </>
    );
}