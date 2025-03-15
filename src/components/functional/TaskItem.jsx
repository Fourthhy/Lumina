import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TaskItem() {
    const [openModal, setOpenModal] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

    const dueDate = "September 11, 2001"

    const tagItems = [
        { tagID: 1, tagColor: "#ff0000" },
        { tagID: 2, tagColor: "#00ffff" },
        { tagID: 3, tagColor: "#00ff00" },
        { tagID: 4, tagColor: "#ffff00" },
    ]

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
            <Modal show={openConfirmDelete} size="md" onClose={() => setOpenConfirmDelete(false)} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#414449]"/>
                <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-Content text-[#E1DFDB] dark:text-gray-400">
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
                        <TextInput type="text" placeholder="Month Day, Year" required className="font-Content bg-gray-500"/>
                    </div>
                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex justify-evenly w-[100%]">
                        <Button color="gray" onClick={() => setOpenConfirmModal(false)}>
                            No, cancel
                        </Button>
                        <Button color="success" onClick={() => setOpenConfirmModal(false)}>
                            Yes, I'm sure
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <div>
                <div className="h-[15vh] w-[100%] bg-[#414449] my-[3px] rounded-[8px] flex flex-col justify-evenly">

                    <div className="flex gap-1 items-center ml-[10px]">
                        {tagItems.map((tag) => (
                            <TagItem tagColor={tag.tagColor} />
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
                            <img src="/profiles/aquarius.png" alt="profile picture" className="w-[1.9vw]" />
                            <img src="/profiles/leo.png" alt="profile picture" className="w-[1.9vw]" />
                            <img src="/profiles/virgo.png" alt="profile picture" className="w-[1.9vw]" />
                            <img src="/profiles/gemini.png" alt="profile picture" className="w-[1.9vw]" />
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
                    {/* <div className="flex items-center h-[100%]">

                        <div className="h-[20%] flex gap-1 items-center">
                            {tagItems.map((tag) => (
                                <TagItem tagColor={tag.tagColor} />
                            ))}
                        </div>
                    </div> */}

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
                                <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                    To do
                                </p>
                            </div>
                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Due:
                                </p>
                                <p className="font-Content text-base text-[#E1DFDB] font-bold">
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
                                                <TagItem tagColor={tag.tagColor} />
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
                                    <div className="h-[100%] flex items-center gap-3">
                                        <img src="/profiles/aquarius.png" alt="profile picture" className="w-[1.9vw]" />
                                        <p className="font-Content text-base text-[#E1DFDB]">Aquarius</p>
                                    </div>
                                    <div className="h-[100%] flex items-center gap-3">
                                        <img src="/profiles/leo.png" alt="profile picture" className="w-[1.9vw]" />
                                        <p className="font-Content text-base text-[#E1DFDB]">Leo</p>
                                    </div>
                                    <div className="h-[100%] flex items-center gap-3">
                                        <img src="/profiles/virgo.png" alt="profile picture" className="w-[1.9vw]" />
                                        <p className="font-Content text-base text-[#E1DFDB]">Virgo</p>
                                    </div>
                                    <div className="h-[100%] flex items-center gap-3">
                                        <img src="/profiles/gemini.png" alt="profile picture" className="w-[1.9vw]" />
                                        <p className="font-Content text-base text-[#E1DFDB]">Gemini</p>
                                    </div>
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
                        <Button color="failure" onClick={() => setOpenConfirmDelete(true)}>Delete Task</Button>
                        <Button color="gray" onClick={() => setOpenConfirmModal(true)}>
                            <p className="text-base leading-relaxed text-[#0b132b]">Update Status</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}