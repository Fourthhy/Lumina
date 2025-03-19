import { useState, useEffect, useCallback } from "react";
import { fetchBoardInfo, fetchTaskItems } from "../../functions/functions";
import { useParams, Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

export default function TaskBoard() {
    const { boardCode } = useParams();

    const [boardInfo, setBoardInfo] = useState({
        board_title: "",
        to_do: 0,
        in_progress: 0,
        in_review: 0,
        completed: 0,
        reject: 0,
        description: "",
    });

    const [isLoading, setIsLoading] = useState(true);
    const [taskItems, setTaskItems] = useState([]);

    const categoryHeaders = [
        { categoryID: 1, categoryName: "To Do", categoryColor: "#0d2818" },
        { categoryID: 2, categoryName: "In Progress", categoryColor: "#04471c" },
        { categoryID: 3, categoryName: "In Review", categoryColor: "#058c42" },
        { categoryID: 4, categoryName: "Completed", categoryColor: "#16db65" },
    ];

    // Fetch board info
    useEffect(() => {
        const getBoardInfo = async () => {
            setIsLoading(true);
            try {
                const fetchedBoardInfo = await fetchBoardInfo(boardCode);
                setBoardInfo(fetchedBoardInfo);
            } catch (error) {
                alert("Cannot fetch board information");
            } finally {
                setIsLoading(false);
            }
        };

        getBoardInfo();
    }, [boardCode]);

    // Fetch task items
    const getTaskItems = useCallback(async () => {
        try {
            const fetchedTaskItems = await fetchTaskItems(boardCode);
            setTaskItems(fetchedTaskItems);
        } catch (error) {
            console.error("Error fetching tasks", error);
        }
    }, [boardCode]);

    useEffect(() => {
        getTaskItems();
    }, [getTaskItems]);

    const refreshTasks = () => {
        getTaskItems(); // Re-fetch all tasks
    };

    return (
        <div className="overflow-y-hidden">
            {/* Header Section */}
            <div className="h-[6vh] w-full overflow-y-hidden">
                <div className="flex justify-between items-center w-full h-full overflow-y-hidden">
                    <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold pt-[10px] px-[8px]">
                        {isLoading ? "Loading..." : boardInfo.board_title}
                    </p>
                </div>
            </div>

            {/* Task Containers */}
            <div className="h-[90vh] w-full flex items-center justify-center mt-[20px]">
                <div className="h-full w-[99%] grid grid-cols-4 gap-2 place-items-center">
                    {categoryHeaders.map(({ categoryID, categoryName, categoryColor }) => {
                        // Filter tasks for this category
                        const filteredTasks = taskItems.filter(task => task.task_status === categoryID);

                        return (
                            <div key={categoryID} className="h-full w-[98%]">
                                {/* Category Header */}
                                <div className="h-[5vh] w-full rounded-[8px] flex justify-between overflow-hidden" style={{ backgroundColor: categoryColor }}>
                                    <div className="flex w-[60%]">
                                        <p className="font-Content text-[1.2vw] text-[#F5F6F2] pl-[8px] font-bold pt-[5px]">
                                            {isLoading ? "" : categoryName}
                                        </p>
                                        <p className="font-Content text-[1vw] text-[#F5F6F2] pl-[8px] pt-[5px] mt-[5px]">
                                            ({filteredTasks.length})
                                        </p>
                                    </div>
                                    <div className="items-center flex h-full pr-[8px]">
                                        <Link to={`/mainpage/taskpage/${categoryID}`}>
                                            <BsThreeDotsVertical className="text-[#F5F6F2] cursor-pointer hover:text-white" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Task Items */}
                                {filteredTasks.map(task => (
                                    <TaskItem
                                        key={task.id}
                                        taskID={task.id}
                                        taskTitle={task.task_title}
                                        taskDesc={task.task_desc}
                                        taskDue={task.task_due}
                                        taskStatus={task.task_status}
                                        taskTags={task.tags}
                                        taskConts={task.contributors}
                                        refreshTasks={refreshTasks}
                                    />
                                ))}

                                {/* Add Task (Only for "To Do" Category) */}
                                {categoryID === 1 && <AddTask refreshTasks={refreshTasks} />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
