import { IoMdAdd } from "react-icons/io";

export default function Tags() {
    const tagList = [
        { tagID: 1, tagName: "red tag", tagColor: "#ff0000" },
        { tagID: 2, tagName: "cyan tag", tagColor: "#00ffff" },
        { tagID: 3, tagName: "green tag", tagColor: "#00ff00" },
        { tagID: 4, tagName: "yellow tag", tagColor: "#ffff00" },
    ];

    return (
        <>
            <div>
                <p className="font-Content text-[1.2vw] text-[#E1DFDB] font-bold">Tags / Categories</p>
                {tagList.map((data) => (
                    <div key={data.tagID} className="flex items-center gap-2 my-[10px]">
                        <div>
                            <div
                                className="w-4 h-4 rounded-[3px]"
                                style={{ backgroundColor: data.tagColor }}
                            ></div>
                        </div>
                        <div>
                            <p className="font-Content text-[1.2vw] text-[#E1DFDF]">
                                {data.tagName}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="border-dashed border-[1px] w-[70%] h-full rounded-[8px]">
                    <button className="w-[100%]" onClick={() => { alert('Clicked') }}>
                        <div className="flex items-center justify-center h-full gap-1">
                            <IoMdAdd className="text-[#E1DFDB]" />
                            <p className="text-center font-Content text-[1.2vw] text-[#E1DFDB] mt-[2px]">Add Tag </p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}