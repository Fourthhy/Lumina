import { CiSquarePlus } from "react-icons/ci";
import { Button, Modal, TextInput, Textarea, Checkbox, Label } from "flowbite-react";
import { useState } from "react";

export default function AddTask() {
    const [openModal, setOpenModal] = useState(false);
    const [openAddTags, setOpenAddTags] = useState(false);
    const [openAddMembers, setOpenAddMembers] = useState(false);

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

    const memberList = [
        { memberID: 1, memberName: "member name 1", memberImage: "/profiles/aquarius.png" },
        { memberID: 2, memberName: "member name 2", memberImage: "/profiles/leo.png" },
        { memberID: 3, memberName: "member name 3", memberImage: "/profiles/virgo.png" },
        { memberID: 4, memberName: "member name 4", memberImage: "/profiles/gemini.png" },
    ]

    const itemsPerColumn = 6;
    const columns = Math.ceil(tagList.length / itemsPerColumn);

    const TagItem = ({ tagColor }) => {
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
            <Modal show={openAddTags} size={'lg'} onClose={() => setOpenAddTags(false)} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#35383D] overflow-y-hidden">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[100%] h-[100%] overflow-visible">
                        Select Tags
                    </p>
                </Modal.Header>
                <Modal.Body className="w-[100%] h-[100%] bg-[#35383D]">
                    <fieldset className="flex max-w-md flex-col gap-4 mt-[10px]">
                        {Array.from({ length: columns }, (_, columnIndex) => (
                            <div key={columnIndex} className="flex flex-col gap-4">
                                {tagList
                                    .slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
                                    .map((tag) => (
                                        <div key={tag.tagID} className="flex items-center gap-2">
                                            <Checkbox value={`${tag.tagName}`} />
                                            <div
                                                className="w-4 h-4 rounded-[3px]"
                                                style={{ backgroundColor: tag.tagColor }}
                                            ></div>
                                            <p className="font-Content text-base text-[#E1DFDB]">{tag.tagName}</p>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </fieldset>
                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449] overflow-y-hidden">
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenAddTags(false)} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
                            <p className="text-base leading-relaxed text-[#E1DFDB] hover:text-[#414449]">
                                Add Tags
                            </p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={openAddMembers} size="md" onClose={() => setOpenAddMembers(false)} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#35383D] overflow-y-hidden">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[100%] h-[100%] overflow-visible">
                        Select Contributors
                    </p>
                </Modal.Header>
                <Modal.Body className="w-[100%] h-[100%] bg-[#35383D]">
                    <fieldset className="flex max-w-md flex-col gap-4 mt-[10px]">
                        {memberList.map((member) => (
                            <div className="flex items-center gap-2">
                                <Checkbox id="united-state" value="USA" />
                                <img src={`${member.memberImage}`} alt="profile picture" className="w-[1.9vw]" />
                                <Label htmlFor="united-state" className="text-[#E1DFDB] font-Content text-[1.1vw] text-base">{member.memberName}</Label>
                            </div>
                        ))}
                    </fieldset>
                </Modal.Body>
                <Modal.Footer className="w-[100%] bg-[#414449]">
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenAddTags(false)} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
                            <p className="text-base leading-relaxed text-[#E1DFDB] hover:text-[#414449]">
                                Add Contributors
                            </p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/*MAIN COMPONENT*/}
            <div onClick={() => setOpenModal(true)}>
                <div className="h-[15vh] w-[100%] border-[1px] border-[#b4a192] my-[3px] border-dashed rounded-[8px] cursor-pointer hover:border-[#E1DFDB]">
                    <div className="h-[100%] w-[100%] flex items-center flex-col justify-center">
                        <CiSquarePlus className="text-[#b4a192] text-[2.6vw] hover:border-[#E1DFDB]" />
                        <p className="font-Content text-[1.5vw] text-[#b4a192] font-bold hover:border-[#E1DFDB]">
                            Add Task
                        </p>
                    </div>
                </div>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)} position={'center-right'} size={'xl'} popup >
                <Modal.Header className="h-[100%] w-[100%] bg-[#35383D]">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[100%] h-[100%] overflow-visible">
                        Add Task
                    </p>

                </Modal.Header>
                <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="mt-[15px] flex flex-col gap-2">
                        <div>
                            <input type="text" class="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400 text-[1.5vw] font-bold" placeholder="Task Title" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Category:
                                </p>
                                <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                    To do
                                </p>
                            </div>
                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Due:
                                </p>
                                <input type="text" class="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400" placeholder="Month Day, Year" />
                            </div>

                            <div className="flex h-[100%] w-[100%] items-center">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Tags:
                                </p>
                                <div className="flex items-center gap-1 cursor-pointer" onClick={() => { setOpenAddTags(true) }}>
                                    <p className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1">
                                        <CiSquarePlus />
                                        Select Tags
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Contributors:
                                </p>
                                <p onClick={() => { setOpenAddMembers(true) }} className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1">
                                    <CiSquarePlus />
                                    Select Contributors
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="mt-[15px]">
                        <p className="font-Content text-[1.2vw] text-[#E1DFDB] font-bold">
                            Description
                        </p>
                        <div>
                            <textarea
                                rows="4"
                                cols="50"
                                className="focus:ring-0 focus:border-gray-300 focus:border-1 bg-transparent border-1 border-gray-500 rounded-[9px] w-full font-Content text-base text-[#E1DFDB] italic"
                                placeholder="Enter Task Description"
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenConfirmModal(true)} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
                            <p className="text-base leading-relaxed text-[#E1DFDB] hover:text-[#414449]">Add Task</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}