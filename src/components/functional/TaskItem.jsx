import { Button, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { updateTaskStatus } from "../../functions/functions"
import { useParams } from "react-router-dom"

export default function TaskItem({ taskTitle, taskDesc, taskDue, taskStatus, taskTags, taskConts, onReload, taskID  }) {
    const [openModal, setOpenModal] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [newTaskDue, setNewTaskDue] = useState('')
    const { boardCode } = useParams()

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

    const contributorProfileDisplay = (id) => {
        switch (id) {
            case 1:
                return "/profiles/aquarius.png";
            case 2:
                return "/profiles/aries.png";
            case 3:
                return "/profiles/cancer.png";
            case 4:
                return "/profiles/capricorn.png";
            case 5:
                return "/profiles/gemini.png";
            case 6:
                return "/profiles/leo.png";
            case 7:
                return "/profiles/libra.png";
            case 8:
                return "/profiles/pisces.png";
            case 9:
                return "/profiles/sagrittarius";
            case 10:
                return "/profiles/scorpio.png";
            case 11:
                return "/profiles/taurus.png";
            case 12:
                return "/profiles/virgo.png";
            default:
                return "/profiles/zephyr.png";
        }
    }

    const taskName = (categoryID) => {
        switch (categoryID) {
            case 1:
                return "To Do"
            case 2:
                return "In Progress"
            case 3:
                return "In Review"
            case 4:
                return "Completed"
            default:
                return 0;
        }
    };

    const handleChangeStatus = async () => {
        if (newTaskDue == "") {
            alert('Input New Task Due')
            return;
        }
        try {
            await updateTaskStatus(boardCode, taskID, newTaskDue)
            alert('Task Status Updated!')
            setOpenConfirmModal(false)
            onReload();
        } catch (error) {
            console.error("Error updating task")
        }
    }

    return (
        <>
            <Modal show={openConfirmDelete} size="md" onClose={() => setOpenConfirmDelete(false)} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#414449]" />
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
                <Modal.Header className="h-[100%] w-[100%] bg-[#414449]" />
                <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-Content text-[#E1DFDB] dark:text-gray-400">
                            Update the Due date to proceed to <br />
                            <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                {taskName(taskStatus + 1)}
                            </p>
                        </h3>
                        <input type="text" class="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400 text-[1.5vw]" placeholder="Month Day, Year" value={newTaskDue} onChange={(e) => setNewTaskDue(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex justify-evenly w-[100%]">
                        <Button color="gray" onClick={() => setOpenConfirmModal(false)}>
                            cancel
                        </Button>
                        {taskStatus === 4 ? "" : (
                            <Button color="success" onClick={handleChangeStatus}>
                                Update Task
                            </Button>
                        )}
                    </div>
                </Modal.Footer>
            </Modal>

            <div>
                <div className="h-[15vh] w-[100%] bg-[#414449] my-[3px] rounded-[8px] flex flex-col justify-evenly">

                    <div className="flex gap-1 items-center ml-[10px]">
                        {taskTags.map((tag) => (
                            <TagItem tagColor={tag.tag_color} tagTooltip={tag.tag_name} />
                        ))}
                    </div>

                    <div className="w-[100%] flex justify-between ml-[10px]">
                        <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[90%] h-[100%] font-bold overflow-hidden whitespace-nowrap text-ellipsis">
                            {taskTitle}
                        </p>
                    </div>

                    <div className="ml-[10px]">
                        <p className="font-Content text-[0.9vw] text-[#E1DFDB]">
                            Due: {taskDue}
                        </p>
                    </div>

                    <div className="w-[100%] flex justify-between">
                        <div className="flex items-center gap-1 ml-[10px]">
                            {taskConts.map((cont) => (
                                <Tooltip content={cont.contributor_name} className="overflow-x-hidden overflow-y-hidden">
                                    <img src={contributorProfileDisplay(cont.contributor_profile)} alt="profile picture" className="w-[1.9vw]" />
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
                                {taskTitle}
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Category:
                                </p>
                                <p className="font-Content text-base text-[#E1DFDB]">
                                    {taskName(taskStatus)}
                                </p>
                            </div>
                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Due:
                                </p>
                                <p className="font-Content text-base text-[#E1DFDB]">
                                    {taskDue}
                                </p>
                            </div>

                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Tags:
                                </p>
                                <p className="font-Content text-base text-[#E1DFDB]">
                                    <div className="flex items-center h-[100%]">

                                        <div className="flex gap-1 items-center">
                                            {taskTags.map((tag) => (
                                                <TagItem tagColor={tag.tag_color} tagTooltip={tag.tag_name} />
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
                                    {taskConts.map((cont) => (
                                        <div className="h-[100%] flex items-center gap-3">
                                            <img src={contributorProfileDisplay(cont.contributor_profile)} alt="profile picture" className="w-[1.9vw]" />
                                            <p className="font-Content text-base text-[#E1DFDB]">{cont.contributor_name}</p>
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
                                {taskDesc}
                            </i>
                        </p>
                    </div>

                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex w-[100%] justify-between">
                        {taskStatus === 4 ? (
                            <p className="font-Content text-[1.2vw] text-[#E1DFDB] font-bold">
                                Task Accomplished!
                            </p>
                        ) : (
                            <>
                                <Button color="failure" onClick={() => setOpenConfirmDelete(true)}>Reject Task</Button>
                                <Button color="gray" onClick={() => setOpenConfirmModal(true)} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
                                    <p className="text-base leading-relaxed text-[#E1DFDB] hover:text-[#414449]">
                                        Update Task
                                    </p>
                                </Button>
                            </>
                        )}
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}