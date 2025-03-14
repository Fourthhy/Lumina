export default function TaskItem() {
    const dueDate = "September 11, 2001"

    const tagItems = [
        { tagID: 1, tagColor: "#ff0000" },
        { tagID: 2, tagColor: "#00ffff" },
        { tagID: 3, tagColor: "#00ff00" },
        { tagID: 4, tagColor: "#ffff00" },
    ]

    const TagItem = ({tagColor}) => {
        return (
            <div
                className="w-4 h-4 rounded-[3px]"
                style={{ backgroundColor: `${tagColor}` }}
            >
            </div>
        )
    }
    return (
        <>
            <div className="h-[22%] w-[100%] border-[1px] border-white my-[7px] rounded-[8px]">

                <div className="h-[26%] w-[100%] flex justify-between">
                    <p className="font-Header text-[1.2vw] text-[#E1DFDB] p-[5px] w-[50%] h-[100%]">
                        Task Item
                    </p>

                    <div className="h-[100%] flex items-center w-[50%] justify-end gap-1">
                        <img src="/profiles/aquarius.png" alt="profile picture" className="w-[1.9vw]" />
                        <img src="/profiles/leo.png" alt="profile picture" className="w-[1.9vw]" />
                        <img src="/profiles/virgo.png" alt="profile picture" className="w-[1.9vw]" />
                        <img src="/profiles/gemini.png" alt="profile picture" className="w-[1.9vw]" />
                    </div>
                </div>

                <hr className="bg-[#b4a192] mt-[-2px] h-[1%]" />

                <p className="font-Content text-[1.1vw] text-[#E1DFDB] p-[5px] h-[40%]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing eli elit elit
                </p>

                <p className="font-Content text-[0.9vw] text-[#E1DFDB] h-[15%] pl-[5px]">
                    Due: {dueDate}
                </p>

                <div className="h-4 flex gap-1 items-center pl-[5px]">
                    {tagItems.map((tag) => (
                        <TagItem tagColor={tag.tagColor}/>
                    ))}
                </div>
            </div>
        </>
    )
}