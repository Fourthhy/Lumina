import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState, useEffect } from "react";
import { fetchBoardInfo, fetchTaskItems } from "../../functions/functions";
import { useParams } from "react-router-dom";

export default function TaskContainer({ categoryID, categoryName, categoryColor }) {
    const [boardInfo, setBoardInfo] = useState({
        board_title: "",
        to_do: 0,
        in_progress: 0,
        in_review: 0,
        completed: 0,
        reject: 0,
        description: ""
    });
    const { boardCode } = useParams();
    const [taskItems, setTaskItems] = useState([]); // State to hold fetched task items
    const [groupedTasks, setGroupedTasks] = useState({}); // State to hold grouped tasks
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getBoardInfo = async () => {
            setIsLoading(true); // Set loading to true
            try {
                const fetchedBoardInfo = await fetchBoardInfo(boardCode);
                setBoardInfo(fetchedBoardInfo);
            } catch (error) {
                console.error("Cannot fetch board information", error);
            } finally {
                setIsLoading(false); // Set loading to false
            }
        };

        const getTaskItems = async () => {
            setIsLoading(true); // This will reset loading state
            try {
                const fetchedTaskItems = await fetchTaskItems(boardCode);
                setTaskItems(fetchedTaskItems); // Set fetched task items
                console.log(fetchedTaskItems); // Log the fetched data
                groupTasksByStatus(fetchedTaskItems); // Group tasks after fetching
            } catch (error) {
                console.error("Error fetching tasks", error);
            } finally {
                setIsLoading(false); // Set loading to false
            }
        };

        getTaskItems();
        getBoardInfo();
    }, [boardCode]); // Add boardCode to the dependency array

    const groupTasksByStatus = (tasks) => {
        const grouped = tasks.reduce((acc, task) => {
            const status = task.task_status; // Assuming task_status is a number (1, 2, 3, 4)
            if (!acc[status]) {
                acc[status] = []; // Initialize an empty array for this status
            }
            acc[status].push(task); // Push the task into the corresponding status array
            return acc; // Return the accumulator for the next iteration
        }, {});
        setGroupedTasks(grouped); // Set the grouped tasks in state
    };

    const taskCount = (categoryID) => {
        switch (categoryID) {
            case 1:
                return boardInfo.to_do;
            case 2:
                return boardInfo.in_progress;
            case 3:
                return boardInfo.in_review;
            case 4:
                return boardInfo.completed;
            default:
                return 0; // Handle unexpected categoryID
        }
    };

    const CategoryHeader = () => {
        return (
            <div className={`h-[5vh] w-[100%] rounded-[8px] overflow-y-hidden flex justify-between`} 
                style={{
                    backgroundColor: `${categoryColor}`
                }}
            >
                <div className="flex w-[60%] justify-between"> {/* Fixed typo here */}
                    <p className="font-Content text-[1.2vw] text-[#F5F6F2] pl-[8px] font-bold pt-[5px]">{isLoading ? "" : categoryName}</p>
                    <p className="font-Content text-[1vw] text-[#F5F6F2] pl-[8px] pt-[5px]">({taskCount(categoryID)})</p>
                </div>
                <div className="items-center flex h-[100%] pr-[8px]">
                    <Link to={`/mainpage/taskpage/${categoryID}`}>
                        <BsThreeDotsVertical className="text-[#F5F6F2] cursor-pointer hover:text-white"/>
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="h-[100%] w-[100%]">
                <CategoryHeader />
                {/* Render grouped tasks based on categoryID */}
                {groupedTasks[categoryID ] ? groupedTasks[categoryID].map(task => (
                    <TaskItem key={task.id} task={task} />
                )) : null}
                {categoryID === 1 ? <AddTask /> : ''}
            </div>
        </>
    );
}