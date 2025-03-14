import { Progress } from "flowbite-react";

export default function Analytics() {
    const categoryList = [
        { categoryID: 1, categoryName: "To Do", taskNumber: 10 },
        { categoryID: 2, categoryName: "In Progress", taskNumber: 1 },
        { categoryID: 3, categoryName: "In Review", taskNumber: 3 },
        { categoryID: 4, categoryName: "Completed", taskNumber: 5 },
        { categoryID: 5, categoryName: "Reject", taskNumber: 0 },
    ]

    return (
        <>
            {categoryList.map((data) => (
                <div className="my-[10px]">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB]">
                        {`${data.categoryName}: `}<span className="font-bold">{data.taskNumber}</span>
                    </p>
                    <Progress progress={data.taskNumber} size="sm" color="gray" />
                </div>
            ))}
        </>
    )
}