import { Button, Modal, Tooltip  } from "flowbite-react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TaskItem() {
    const [openModal, setOpenModal] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

    const dueDate = "September 11, 2001"

    const tagItems = [
        { tagID: 1, tagName: "red tag", tagColor: "#ff0000" },
        { tagID: 2, tagName: "cyan tag", tagColor: "#00ffff" },
        { tagID: 3, tagName: "green tag", tagColor: "#00ff00" },
        { tagID: 4, tagName: "yellow tag", tagColor: "#ffff00" },
    ]

    const memberList = [
        { memberID: 1, memberRole: "Project Manager", memberName: "member name 1", memberImage: "/profiles/aquarius.png" },
        { memberID: 2, memberRole: "Developer", memberName: "member name 2", memberImage: "/profiles/leo.png" },
        { memberID: 3, memberRole: "UI/UX Designer", memberName: "member name 3", memberImage: "/profiles/virgo.png" },
        { memberID: 4, memberRole: "System QA", memberName: "member name 4", memberImage: "/profiles/gemini.png" },
    ]

    const TagItem = ({ tagColor, tagTooltip }) => {
        return (
            <Tooltip content={tagTooltip} className="overflow-y-hidden overflow-x-hidden">
                <div
                    className="w-4 h-4 rounded-[3px]"
                    style={{ backgroundColor: `${tagColor}` }}
                >
                </div>
            </Tooltip>
        )
    }
    return (
        <>
            <Modal show={openConfirmDelete} size="md" onClose={() => setOpenConfirmDelete(false)} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#414449]"/>
                <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-Content text-base text-[#E1DFDB] dark:text-gray-400">
                            Are you sure you want to reject this task?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => setOpenConfirmDelete(false)}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenConfirmDelete(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={openConfirmModal} size="md" onClose={() => setOpenConfirmModal(false)} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#414449]"/>
                <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-Content text-[#E1DFDB] dark:text-gray-400">
                            Update the Due date to proceed to <br />
                            <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                    To do
                            </p>
                        </h3>
                        <input type="text" class="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400 text-[1.5vw]" placeholder="Month Day, Year" />
                    </div>
                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex justify-evenly w-[100%]">
                        <Button color="gray" onClick={() => setOpenConfirmModal(false)}>
                            cancel
                        </Button>
                        <Button color="success" onClick={() => setOpenConfirmModal(false)}>
                            Update Task
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <div>
                <div className="h-[15vh] w-[100%] bg-[#414449] my-[3px] rounded-[8px] flex flex-col justify-evenly">

                    <div className="flex gap-1 items-center ml-[10px]">
                        {tagItems.map((tag) => (
                            <TagItem tagColor={tag.tagColor} tagTooltip={tag.tagName}/>
                        ))}
                    </div>

                    <div className="w-[100%] flex justify-between ml-[10px]">
                        <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[90%] h-[100%] font-bold overflow-hidden whitespace-nowrap text-ellipsis">
                            Task Item Task Item Task Item Item
                        </p>
                    </div>

                    <div className="ml-[10px]">
                        <p className="font-Content text-[0.9vw] text-[#E1DFDB]">
                            Due: {dueDate}
                        </p>
                    </div>

                    <div className="w-[100%] flex justify-between">
                        <div className="flex items-center gap-1 ml-[10px]">
                            {memberList.map((member) => (
                                <Tooltip content={member.memberName} className="overflow-x-hidden overflow-y-hidden">
                                    <img src={member.memberImage} alt="profile picture" className="w-[1.9vw]" />
                                </Tooltip>
                            ))}
                        </div>
                        <div className="mr-[8px] mt-[5px]">
                            <BsThreeDotsVertical className="text-[#E1DFDB] cursor-pointer" onClick={() => setOpenModal(true)} />
                        </div>
                    </div>


                </div>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)} position={'center-right'} size={'xl'} popup >
                <Modal.Header className="h-[100%] w-[100%] bg-[#35383D]">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[100%] h-[100%] overflow-visible">
                        View Task
                    </p>

                </Modal.Header>
                <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="mt-[15px] flex flex-col gap-2">
                        <div>
                            <p className="font-Content text-[1.5vw] text-[#E1DFDB] font-bold">
                                Task Item Task Item Task Item Item
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Category:
                                </p>
                                <p className="font-Content text-base text-[#E1DFDB]">
                                    To do
                                </p>
                            </div>
                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Due:
                                </p>
                                <p className="font-Content text-base text-[#E1DFDB]">
                                    January 1, 2001
                                </p>
                            </div>

                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Tags:
                                </p>
                                <p className="font-Content text-base text-[#E1DFDB]">
                                    <div className="flex items-center h-[100%]">

                                        <div className="flex gap-1 items-center">
                                            {tagItems.map((tag) => (
                                                <TagItem tagColor={tag.tagColor} tagTooltip={tag.tagName}/>
                                            ))}
                                        </div>
                                    </div>
                                </p>
                            </div>

                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Contributors:
                                </p>
                                <div className="gap-2 flex flex-col">
                                    {memberList.map((member) => (
                                        <div className="h-[100%] flex items-center gap-3">
                                            <img src={member.memberImage} alt="profile picture" className="w-[1.9vw]" />
                                            <p className="font-Content text-base text-[#E1DFDB]">{member.memberName}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-[15px]">
                        <p className="font-Content text-[1.2vw] text-[#E1DFDB] font-bold">
                            Description
                        </p>
                        <p className="text-base leading-relaxed text-[#E1DFDB]">
                            <i>
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </i>
                        </p>
                    </div>

                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex w-[100%] justify-between">
                        <Button color="failure" onClick={() => setOpenConfirmDelete(true)}>Reject Task</Button>
                        <Button color="gray" onClick={() => setOpenConfirmModal(true)} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
                            <p className="text-base leading-relaxed text-[#E1DFDB] hover:text-[#414449]">
                                Update Task
                            </p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}