import TaskContainer from "./TaskContainer";
import { useState, useEffect } from "react"
import { fetchBoardInfo } from "../../functions/functions"
import { useParams } from "react-router-dom"

export default function TaskBoard() {
    const [boardInfo, setBoardInfo] = useState({
        board_title: "",
        to_do: 0,
        in_progress: 0,
        in_review: 0,
        completed: 0,
        reject: 0,
        description: ""
    });
    const [isLoading, setIsLoading] = useState(true)
    const { boardCode } = useParams()
    const categoryHeaders = [
        { categoryID: 1, categoryName: "To Do", categoryColor: "#0d2818" },
        { categoryID: 2, categoryName: "In Progress", categoryColor: "#04471c" },
        { categoryID: 3, categoryName: "In Review", categoryColor: "#058c42" },
        { categoryID: 4, categoryName: "Completed", categoryColor: "#16db65" },
    ];

    useEffect(() => {
        const getBoardInfo = async () => {
            setIsLoading(true); // Set loading to true
            try {
                const fetchedBoardInfo = await fetchBoardInfo(boardCode);
                setBoardInfo(fetchedBoardInfo);
            } catch (error) {
                alert("Cannot fetch board information")
            } finally {
                setIsLoading(false); // Set loading to false
            }
        };

        getBoardInfo()
    }, [])

    return (
        <>
            <div className="overflow-y-hidden">
                <div className="h-[6vh] w-[100%] overflow-y-hidden">
                    <div className="flex justify-between items-center w-[100%] h-[100%] overflow-y-hidden">
                        <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold pt-[10px] px-[8px]">{isLoading ? "loading" : boardInfo.board_title}</p>
                        <div className="flex items-center h-[100%] m-[8px] gap-3">
                        </div>
                    </div>
                </div>
                <div className="h-[90vh] w-[100%] flex items-center justify-center mt-[20px]">
                    <div className="h-[100%] w-[99%] grid grid-cols-4 gap-2 place-items-center">
                        {categoryHeaders.map((data) => (
                            <div className="h-[100%] w-[98%]" key={data.categoryID}>
                                <div className="h-[100%] w-[100%]">
                                    <TaskContainer categoryName={data.categoryName} categoryID={data.categoryID} categoryColor={data.categoryColor}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}