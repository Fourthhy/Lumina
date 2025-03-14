import { Button, Modal, TextInput, Radio, Label, Checkbox } from "flowbite-react";
import { AiOutlineTeam } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import TaskContainer from "./TaskContainer"
import { useState } from "react";

import MemberCard from "./MemberCard"

export default function TaskBoard() {
    const [openModal, setOpenModal] = useState(false);
    const [openAddMember, setOpenAddMember] = useState(false)

    const categoryHeaders = [
        { categoryID: 1, categoryName: "To Do" },
        { categoryID: 2, categoryName: "In Progress" },
        { categoryID: 3, categoryName: "In Review" },
        { categoryID: 4, categoryName: "Completed" },
    ]

    const profileImages = [ 
        {image: "/profiles/aquarius.png" },
        {image: "/profiles/aries.png" },
        {image: "/profiles/cancer.png" },
        {image: "/profiles/capricorn.png" },
        {image: "/profiles/gemini.png" },
        {image: "/profiles/leo.png" },
        {image: "/profiles/libra.png" },
        {image: "/profiles/pisces.png" },
        {image: "/profiles/sagrittarius.png" },
        {image: "/profiles/scorpio.png" },
        {image: "/profiles/taurus.png" },
        {image: "/profiles/virgo.png" }
    ]

    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size={'7xl'}>
                <Modal.Header>Meet The Team</Modal.Header>
                <div className="flex">
                    <Modal.Body>
                        <div className="space-y-6">
                            <MemberCard />
                        </div>
                    </Modal.Body>
                    <Modal.Body>
                        <div className="space-y-6">
                            <MemberCard />
                        </div>
                    </Modal.Body>
                    <Modal.Body>
                        <div className="space-y-6">
                            <MemberCard />
                        </div>
                    </Modal.Body>
                    <Modal.Body>
                        <div className="space-y-6">
                            <MemberCard />
                        </div>
                    </Modal.Body>
                </div>
                <Modal.Footer>
                    <Button color="gray" onClick={() => setOpenAddMember(true)}>
                        Add Member
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={openAddMember} onClose={() => setOpenAddMember(false)} size={'3xl'}>
                <Modal.Header>
                    <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold">Add Members</p>

                </Modal.Header>
                <div className="flex">
                    <Modal.Body>
                        <div className="my-[5px]">
                            <TextInput type="text" placeholder="Input Name" className="font-Content text-[1.5vw] text-[#0b132b] font-bold my-[3px]" required />
                        </div>
                        <p className="font-Content text-base text-[#0b132b] my-[6px]">Select Profile </p>
                        <fieldset className="flex max-w-md flex-col gap-4">
                            <legend className="mb-4">Choose Profile Picture</legend>
                            {profileImages.map((profile) => (
                                <div className="flex items-center gap-2">
                                    <Checkbox id="united-state" value="USA" />
                                    <img src={`${profile.image}`} alt="profile picture" className="w-[1.9vw]" />
                                </div>
                            ))}
                        </fieldset>
                    </Modal.Body>
                </div>
                <Modal.Footer>
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenAddMember(false)}>
                            <p className="text-base leading-relaxed text-[#0b132b]">Add Member</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal >

            <div className="h-[7%] w-[100%] overflow-y-hidden">
                <div className="flex justify-between items-center w-[100%] h-[100%] overflow-y-hidden">
                    <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold p-[8px]">Board Title</p>
                    <div className="flex items-center h-[100%] m-[8px] gap-3">
                        <Button onClick={() => setOpenModal(true)} className="border-[#F5F6F2] bg-[#0b132b] enabled:hover:bg-[#1c2541]"><AiOutlineTeam />Team</Button>
                    </div>
                </div>
            </div>
            <div className="h-[93%] w-[100%] flex items-center justify-center">
                <div className="h-[98%] w-[99%] grid grid-cols-4 gap-2 place-items-center">

                    {categoryHeaders.map((data) => (
                        <div className="h-[100%] w-[98%]" index={data.categoryID}>
                            <div className="h-[5%] w-[100%] rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[5px] rounded-br-[5px] bg-[#dbdbdb] border-[#cecece] border-[2px]">
                                <p className="font-Content text-[1.2vw] text-[#0b132b] pl-[8px] font-bold pt-[5px]">{data.categoryName}</p>
                            </div>
                            <div className="h-[95%] w-[100%]">
                                <TaskContainer />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}