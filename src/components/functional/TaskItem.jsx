import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

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
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this task?
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
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to the status?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="gray" onClick={() => setOpenConfirmModal(false)}>
                                No, cancel
                            </Button>
                            <Button color="success" onClick={() => setOpenConfirmModal(false)}>
                                {"Yes, I'm sure"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <div onClick={() => setOpenModal(true)} className="cursor-pointer">
                <div className="h-[20vh] w-[100%] border-[1px] border-white my-[3px] rounded-[8px]">

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

                    <div className="h-[20%] flex gap-1 items-center pl-[8px]">
                        {tagItems.map((tag) => (
                            <TagItem tagColor={tag.tagColor} />
                        ))}
                    </div>
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>
                    <div className="flex items-center h-[100%]">

                        <div className="h-[20%] flex gap-1 items-center">
                            {tagItems.map((tag) => (
                                <TagItem tagColor={tag.tagColor} />
                            ))}
                        </div>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold">Task Item</p>
                    <p className="font-Content text-base text-[#0b132b]">Category: To Do</p>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-[#0b132b]">
                            <i>
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </i>
                        </p>
                        <p className="font-Content text-base text-[#0b132b]">Due: {dueDate}</p>
                        <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold">Contributors</p>
                        <div className="gap-2 flex flex-col">
                            <div className="h-[100%] flex items-center gap-3">
                                <img src="/profiles/aquarius.png" alt="profile picture" className="w-[1.9vw]" />
                                <p className="font-Content text-base text-[#0b132b]">Aquarius</p>
                            </div>
                            <div className="h-[100%] flex items-center gap-3">
                                <img src="/profiles/leo.png" alt="profile picture" className="w-[1.9vw]" />
                                <p className="font-Content text-base text-[#0b132b]">Leo</p>
                            </div>
                            <div className="h-[100%] flex items-center gap-3">
                                <img src="/profiles/virgo.png" alt="profile picture" className="w-[1.9vw]" />
                                <p className="font-Content text-base text-[#0b132b]">Virgo</p>
                            </div>
                            <div className="h-[100%] flex items-center gap-3">
                                <img src="/profiles/gemini.png" alt="profile picture" className="w-[1.9vw]" />
                                <p className="font-Content text-base text-[#0b132b]">Gemini</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
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