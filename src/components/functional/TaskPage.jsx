import { useState, useEffect, useCallback } from "react";
import { fetchTaskItems } from "../../functions/functions";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { CiLogout } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

export default function TaskPage() {
    const { boardCode, categoryID } = useParams();
    const [taskItems, setTaskItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch all tasks and filter by categoryID
    const getTaskItems = useCallback(async () => {
        setIsLoading(true);
        try {
            const fetchedTaskItems = await fetchTaskItems(boardCode);
            // Filter tasks based on categoryID from URL params
            const filteredTasks = fetchedTaskItems.filter(task => task.task_status === Number(categoryID));
            setTaskItems(filteredTasks);
        } catch (error) {
            console.error("Error fetching tasks", error);
        } finally {
            setIsLoading(false);
        }
    }, [boardCode, categoryID]);

    useEffect(() => {
        getTaskItems();
    }, [getTaskItems]);

    const headerName = () => {
        switch (categoryID) {
            case "1":
                return "To Do";
            case "2":
                return "In Progress";
            case "3":
                return "In Review";
            case "4":
                return "Completed";
            default:
                return "";
        }
    };

    return (
        <>
            {/* Header */}
            <header className="h-[7%] w-full overflow-y-hidden">
                <div className="flex justify-between items-center h-full overflow-y-hidden">
                    <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold p-2">
                        {isLoading ? "Loading..." : `Items ${headerName()}`}
                    </p>
                    <div>
                        <Link to={`/mainpage/${boardCode}`}>
                            <CiLogout className="text-[3vw] text-[#F5F6F2] cursor-pointer mr-[8px]" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Task List */}
            <main className="h-[93%] w-full flex items-center justify-center">
                <div className="w-[99%] max-h-[90vh] grid grid-cols-4 grid-rows-auto gap-2 overflow-y-auto">
                    {/* Add Task only if category is "To Do" */}
                    {isLoading ? "" : 
                        categoryID === "1" && <AddTask />
                    }
                    
                    {/* Task Items */}
                    {taskItems.map(task => (
                        <TaskItem
                            key={task.id}
                            taskID={task.id}
                            taskTitle={task.task_title}
                            taskDesc={task.task_desc}
                            taskDue={task.task_due}
                            taskStatus={task.task_status}
                            taskTags={task.tags}
                            taskConts={task.contributors}
                        />
                    ))}

                    {/* No tasks message */}
                    {taskItems.length === 0 && !isLoading && (
                        <p className="text-center text-[#F5F6F2] font-Content col-span-4">
                            No tasks available in this category.
                        </p>
                    )}
                </div>
            </main>
        </>
    );
}
