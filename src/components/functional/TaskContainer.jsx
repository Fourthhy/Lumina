import TempItem from "./TempItem";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { Link, useParams } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";
import { fetchTaskItems } from "../../functions/functions";

export default function TaskContainer({ categoryID, categoryName, categoryColor }) {
    const { boardCode } = useParams();
    const [taskItems, setTaskItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch task items for this category
    const getTaskItems = useCallback(async () => {
        try {
            const fetchedTaskItems = await fetchTaskItems(boardCode);
            // Filter tasks belonging to this category
            const filteredTasks = fetchedTaskItems.filter(task => task.task_status === categoryID);
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

    return (
        <div className="h-full w-full">
            {/* Category Header */}
            <div className="h-[5vh] w-full rounded-[8px] flex justify-between overflow-hidden" style={{ backgroundColor: categoryColor }}>
                <div className="flex w-[60%]">
                    <p className="font-Content text-[1.2vw] text-[#F5F6F2] pl-[8px] font-bold pt-[5px]">
                        {isLoading ? "" : categoryName}
                    </p>
                    <p className="font-Content text-[1vw] text-[#F5F6F2] pl-[8px] pt-[5px] mt-[5px]">
                        ({taskItems.length})
                    </p>
                </div>
                <div className="items-center flex h-full pr-[8px]">
                    <Link to={`/mainpage/taskpage/${categoryID}`}>
                        <BsThreeDotsVertical className="text-[#F5F6F2] cursor-pointer hover:text-white" />
                    </Link>
                </div>
            </div>

            {/* Task Items */}
            {taskItems.map(task => (
                <TaskItem key={task.id} 
                taskID={task.id}
                taskTitle={task.task_title}
                taskDesc={task.task_desc}
                taskDue={task.task_due}
                taskStatus={task.task_status}
                taskTags={task.tags}
                taskConts={task.contributors}
                 />
            ))}
            {categoryID === 1 && <AddTask />}
        </div>
    );
}
