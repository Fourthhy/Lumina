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
    ];

    const memberList = [
        { memberID: 1, memberName: "member name 1", memberImage: "/profiles/aquarius.png" },
        { memberID: 2, memberName: "member name 2", memberImage: "/profiles/leo.png" },
        { memberID: 3, memberName: "member name 3", memberImage: "/profiles/virgo.png" },
        { memberID: 4, memberName: "member name 4", memberImage: "/profiles/gemini.png" },
    ]

    return (
        <>
            <Modal dismissible show={openAddTags} size="md" onClose={() => setOpenAddTags(false)} popup>
                <Modal.Header>
                    <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold">Select Tags</p>
                </Modal.Header>
                <Modal.Body>
                    <fieldset className="flex max-w-md flex-col gap-4">
                        {tagList.map((tag) => (
                            <div className="flex items-center gap-2">
                                <Checkbox id="united-state" value="USA" />
                                <div
                                    className="w-4 h-4 rounded-[3px]"
                                    style={{ backgroundColor: tag.tagColor }}
                                ></div>
                                <p className="font-Content text-base text-[#0b132b]">{tag.tagName}</p>
                            </div>
                        ))}
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenAddTags(false)}>
                            <p className="text-base leading-relaxed text-[#0b132b]">Add Tags</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            <Modal dismissible show={openAddMembers} size="md" onClose={() => setOpenAddMembers(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <fieldset className="flex max-w-md flex-col gap-4">
                        <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold">Select Contributors</p>

                        {memberList.map((member) => (
                        <div className="flex items-center gap-2">
                            <Checkbox id="united-state" value="USA" />
                            <img src={`${member.memberImage}`} alt="profile picture" className="w-[1.9vw]" />
                            <Label htmlFor="united-state">{member.memberName}</Label>
                        </div>
                    ))}
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenAddMembers(false)}>
                            <p className="text-base leading-relaxed text-[#0b132b]">Add Members</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            <div onClick={() => setOpenModal(true)}>
                <div className="h-[18.5vh] w-[100%] border-[1px] border-[#b4a192] my-[3px] border-dashed rounded-[8px]">
                    <div className="h-[100%] w-[100%] flex items-center flex-col justify-center">
                        <CiSquarePlus className="text-[#b4a192] text-[2.6vw]" />
                        <p className="font-Content text-[1.5vw] text-[#b4a192] font-bold">
                            Add Task
                        </p>
                    </div>
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size={'3xl'}>
                <Modal.Header>
                    <div className="flex items-center h-[100%] gap-2" onClick={() => setOpenAddTags(true)}>
                        <CiSquarePlus className="text-[#b4a192] text-[1.6vw]" />
                        <p className="font-Content text-[1.2vw] text-[#b4a192]">
                            Add Tags
                        </p>
                    </div>

                </Modal.Header>
                <div className="flex">
                    <Modal.Body>
                        <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold">Add Task</p>
                        <div className="my-[5px]">
                            <TextInput type="text" placeholder="Input Title" className="font-Content text-[1.5vw] text-[#0b132b] font-bold my-[3px]" required />
                        </div>
                        <div className="my-[5px]">
                            <Textarea id="comment" placeholder="Enter Task Description" required rows={4} />
                        </div>
                        <div className="space-y-6 text-base leading-relaxed text-[#0b132b]">
                            {/* <p className="text-base leading-relaxed text-[#0b132b]">
                            <i>
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </i>
                        </p> */}
                        </div>
                        {/* <p className="font-Content text-[1.5vw] text-[#0b132b] font-bold">Contributors</p>
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
                    </div> */}
                        <div className="my-[5px]">
                            <p className="font-Content text-base text-[#0b132b]">Target Due: </p>
                        </div>
                        <TextInput type="text" placeholder="Add Due Date" className="font-Content text-[1.5vw] text-[#0b132b] my-[3px]" required />
                        <p className="font-Content text-base text-[#0b132b] my-[6px]">Contributors </p>
                        <div className="flex items-center gap-2" onClick={() => setOpenAddMembers(true)}>
                            <CiSquarePlus className="text-[#b4a192] text-[1.6vw]" />
                            <p className="font-Content text-[1.2vw] text-[#b4a192]">
                                Add Contributors
                            </p>
                        </div>
                    </Modal.Body>
                    {/* <Modal.Body>
                        <fieldset className="flex max-w-md flex-col gap-4">
                            <legend className="mb-4">Choose your favorite countries</legend>
                            <div className="flex items-center gap-2">
                                <Checkbox id="united-state" value="USA" />
                                <Label htmlFor="united-state">United States</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="germany" value="Germany" />
                                <Label htmlFor="germany">Germany</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="spain" value="Spain" />
                                <Label htmlFor="spain">Spain</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="uk" value="United Kingdom" />
                                <Label htmlFor="uk">United Kingdom</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="china" value="China" disabled />
                                <Label htmlFor="china" disabled>
                                    China (disabled)
                                </Label>
                            </div>
                        </fieldset>
                    </Modal.Body> */}
                </div>
                <Modal.Footer>
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            <p className="text-base leading-relaxed text-[#0b132b]">Add Task</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal >
        </>
    )
}