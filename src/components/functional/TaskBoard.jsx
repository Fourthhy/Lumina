import { Button, Modal, TextInput, Radio, Label, Checkbox } from "flowbite-react";
import { AiOutlineTeam } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import TaskContainer from "./TaskContainer";
import { useState } from "react";

import Example from './Chart'
import MemberCard from "./MemberCard";

export default function TaskBoard() {
    const [openModal, setOpenModal] = useState(false);
    const [openAddMember, setOpenAddMember] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);

    const categoryHeaders = [
        { categoryID: 1, categoryName: "To Do", categoryColor: "#0d2818" },
        { categoryID: 2, categoryName: "In Progress", categoryColor: "#04471c" },
        { categoryID: 3, categoryName: "In Review", categoryColor: "#058c42" },
        { categoryID: 4, categoryName: "Completed", categoryColor: "#16db65" },
    ];

    const profileImages = [
        { image: "/profiles/aquarius.png", id: "aquarius" },
        { image: "/profiles/aries.png", id: "aries" },
        { image: "/profiles/cancer.png", id: "cancer" },
        { image: "/profiles/capricorn.png", id: "capricorn" },
        { image: "/profiles/gemini.png", id: "gemini" },
        { image: "/profiles/leo.png", id: "leo" },
        { image: "/profiles/libra.png", id: "libra" },
        { image: "/profiles/pisces.png", id: "pisces" },
        { image: "/profiles/sagrittarius.png", id: "sagrittarius" },
        { image: "/profiles/scorpio.png", id: "scorpio" },
        { image: "/profiles/taurus.png", id: "taurus" },
        { image: "/profiles/virgo.png", id: "virgo" },
    ];

    const itemsPerColumn = 4;
    const columns = 3; // Fixed 3 columns

    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size={"7xl"}>
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

            <Modal show={openAddMember} onClose={() => setOpenAddMember(false)} size={"lg"}>
                <Modal.Header>
                    <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold">Add Member</p>
                </Modal.Header>
                <div className="flex">
                    <Modal.Body>
                        <div className="my-[5px]">
                            <TextInput
                                type="text"
                                placeholder="Input Name"
                                className="font-Content text-[1.5vw] text-[#0b132b] my-[3px]"
                                required
                            />
                        </div>
                        <div className="my-[5px]">
                            <TextInput
                                type="text"
                                placeholder="Input Role"
                                className="font-Content text-[1.5vw] text-[#0b132b] my-[3px]"
                                required
                            />
                        </div>
                        <p className="font-Content text-base text-[#0b132b] my-[6px]">Select Profile </p>
                        <fieldset className="flex max-w-md flex-row gap-4">
                            {Array.from({ length: columns }, (_, columnIndex) => (
                                <div key={columnIndex} className="flex flex-col gap-4 place-items-center w-full">
                                    {profileImages
                                        .slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
                                        .map((profile) => (
                                            <div key={profile.id} className="flex items-center gap-2">
                                                <Radio
                                                    id={profile.id}
                                                    value={profile.id}
                                                    checked={selectedProfile === profile.id}
                                                    onChange={() => setSelectedProfile(profile.id)}>
                                                </Radio>
                                                    <img src={`${profile.image}`} alt="profile picture" className="w-[4vw]" />
                                            </div>
                                        ))}
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
            </Modal>

            <div className="overflow-y-hidden">
                <div className="h-[6vh] w-[100%] overflow-y-hidden">
                    <div className="flex justify-between items-center w-[100%] h-[100%] overflow-y-hidden">
                        <p className="font-Serif text-[1.9vw] text-[#F5F6F2] font-bold pt-[10px] px-[8px]">Board Title</p>
                        <div className="flex items-center h-[100%] m-[8px] gap-3">
                        </div>
                    </div>
                </div>
                <div className="h-[90vh] w-[100%] flex items-center justify-center mt-[20px]">
                    <div className="h-[100%] w-[99%] grid grid-cols-4 gap-2 place-items-center">
                        {categoryHeaders.map((data) => (
                            <div className="h-[100%] w-[98%]" key={data.categoryID}>
                                <div className="h-[100%] w-[100%]">
                                    <TaskContainer categoryName={data.categoryName} categoryID={data.categoryID} categoryColor={data.categoryColor}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}