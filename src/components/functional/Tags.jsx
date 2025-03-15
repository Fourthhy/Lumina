import { IoMdAdd } from "react-icons/io";
import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function Tags() {
    const [openAddTags, setOpenAddTags] = useState(false);
    const tagList = [
        { tagID: 1, tagName: "red tag", tagColor: "#ff0000" },
        { tagID: 2, tagName: "cyan tag", tagColor: "#00ffff" },
        { tagID: 3, tagName: "green tag", tagColor: "#00ff00" },
        { tagID: 4, tagName: "yellow tag", tagColor: "#ffff00" },
        { tagID: 5, tagName: "blue tag", tagColor: "#0000ff" },
        { tagID: 6, tagName: "purple tag", tagColor: "#800080" },
        { tagID: 7, tagName: "orange tag", tagColor: "#ffa500" },
        { tagID: 8, tagName: "pink tag", tagColor: "#ffc0cb" },
        { tagID: 9, tagName: "brown tag", tagColor: "#a52a2a" },
        { tagID: 10, tagName: "gray tag", tagColor: "#808080" },
        { tagID: 11, tagName: "lime tag", tagColor: "#00ff00" },
        { tagID: 12, tagName: "teal tag", tagColor: "#008080" },
        { tagID: 13, tagName: "teal tag", tagColor: "#008080" },
        { tagID: 14, tagName: "another tag", tagColor: "#a0522d" },
        { tagID: 15, tagName: "yet another tag", tagColor: "#d2691e" },
        { tagID: 16, tagName: "more tags", tagColor: "#b8860b" },
        { tagID: 17, tagName: "even more tags", tagColor: "#2f4f4f" },
        { tagID: 18, tagName: "tag galore", tagColor: "#483d8b" },
        { tagID: 19, tagName: "tag mania", tagColor: "#8b008b" },
        { tagID: 20, tagName: "tag fest", tagColor: "#8b4513" },
        { tagID: 21, tagName: "tag party", tagColor: "#dc143c" },
        { tagID: 22, tagName: "tag time", tagColor: "#ff1493" },
        { tagID: 23, tagName: "tag day", tagColor: "#1e90ff" },
        { tagID: 24, tagName: "tag night", tagColor: "#00ced1" },
        { tagID: 25, tagName: "tag dawn", tagColor: "#00fa9a" },
        { tagID: 26, tagName: "tag dusk", tagColor: "#adff2f" },
    ];

    const itemsPerColumn = 6;
    const columns = Math.ceil(tagList.length / itemsPerColumn);

    return (
        <>
            <Modal dismissible show={openAddTags} size={"3xl"} onClose={() => setOpenAddTags(false)}>
                <Modal.Header>
                    <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold py-[13px]">Your Tags</p>
                </Modal.Header>
                <Modal.Body>
                    <fieldset className="flex max-w-4xl flex-row gap-4">
                        {Array.from({ length: columns }, (_, columnIndex) => (
                            <div key={columnIndex} className="flex flex-col gap-4">
                                {tagList
                                    .slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
                                    .map((tag) => (
                                        <div key={tag.tagID} className="flex items-center gap-2">
                                            <div
                                                className="w-4 h-4 rounded-[3px]"
                                                style={{ backgroundColor: tag.tagColor }}
                                            ></div>
                                            <p className="font-Content text-base text-[#0b132b]">{tag.tagName}</p>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </fieldset>
                    <div className="flex h-[100%] items-center gap-3 mt-[10px]">
                        <TextInput className="font-Content text-base text-[#0b132b] w-[50%]" placeholder="Add Tag" />
                        <input type="color" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenAddTags(false)}>
                            <p className="text-base leading-relaxed text-[#0b132b]">Add Tag</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            <div>
                <div className="border-solid border-[1px] w-[70%] h-full rounded-[8px] mt-[8px]" onClick={() => setOpenAddTags(true)}>
                    <button className="w-[100%]">
                        <div className="flex items-center justify-center h-full gap-1">
                            <p className="text-center font-Content text-[1.2vw] text-[#E1DFDB] mt-[2px]">View All Tags</p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}