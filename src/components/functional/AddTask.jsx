import { CiSquarePlus } from "react-icons/ci";
import { Button, Modal, Tooltip, Checkbox, Label } from "flowbite-react";
import { useState, useEffect } from "react";
import { fetchTags, fetchContributors, createTaskItem} from "../../functions/functions"
import { useParams } from "react-router-dom"

export default function AddTask() {
    const [openModal, setOpenModal] = useState(false);
    const [openAddTags, setOpenAddTags] = useState(false);
    const [openAddMembers, setOpenAddMembers] = useState(false);

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDue, setTaskDue] = useState("")

    const [tags, setTags] = useState([]);
    const [contributors, setContributors] = useState([])

    const [selectedTags, setSelectedTags] = useState([])
    const [selectedContributors, setSelectedContributors] = useState([]);

    const [isLoading, setIsLoading] = useState(true)
    const [reloader, setReloader] = useState(true)
    const { boardCode } = useParams()


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

    const handleSelectedTags = (tag) => {
        setSelectedTags((prevSelected) => {
            const isSelected = prevSelected.some(selectedTag => selectedTag.id === tag.id);
            if (isSelected) {
                // If the tag is already selected, remove it
                return prevSelected.filter(selectedTag => selectedTag.id !== tag.id);
            } else {
                // If the tag is not selected, add it
                return [...prevSelected, tag];
            }
        });
    };

    const handleSelectedContributors = (member) => {
        setSelectedContributors((prevSelected) => {
            const isSelected = prevSelected.some(selectedMember => selectedMember.id === member.id);
            if (isSelected) {
                // If the contributor is already selected, remove it
                return prevSelected.filter(selectedMember => selectedMember.id !== member.id);
            } else {
                // If the contributor is not selected, add it with id, name, and profile
                return [...prevSelected, { id: member.id, contributor_name: member.contributor_name, contributor_profile: member.contributor_profile }];
            }
        });
    };

    const handleCreateTaskItem = async () => {
        if (taskTitle === "" ) {
            alert("Please input Task Title")
            return;
        } 
        if (taskDescription === "" ) {
            alert("Please input Task Description")
            return;
        } 
        if (taskDue === "" ) {
            alert("Please input task Due")
            return;
        } 
        if (selectedTags.length === 0 ) {
            alert("Please Select at least 1 tag")
            return;
        } 
        if (selectedContributors.length === 0 ) {
            alert("Select at least 1 contributor")
            return;
        } 
        try {
            await createTaskItem(boardCode, taskTitle, taskDescription, taskDue, selectedTags, selectedContributors);
            alert("Task Created")
            setTaskTitle("")
            setTaskDescription("")
            setTaskDue("")
            setSelectedTags([])
            setSelectedContributors([])
        } catch (error) {
            alert("Error Creating Task", error)
        }
    }

    const itemsPerColumn = 6;
    const columns = Math.ceil(tags.length / itemsPerColumn);

    useEffect(() => {

        const getTags = async () => {
            setIsLoading(true); // Set loading to true
            try {
                const fetchedTags = await fetchTags(boardCode);
                setTags(fetchedTags);
            } catch (error) {
                console.error("Error in fetching tags", error);
                setError(error);
            } finally {
                setIsLoading(false); // Set loading to false
            }
        };

        const getContributors = async () => {
            setIsLoading(true); // Set loading to true
            try {
                const fetchedContributors = await fetchContributors(boardCode);
                setContributors(fetchedContributors)
            } catch (error) {
                console.error("Error in fetching contributors", error);
                setError(error);
            } finally {
                setIsLoading(false); // Set loading to false
            }
        }

        getTags();
        getContributors();
    }, [reloader, openAddTags]);

    return (
        <>
            <Modal show={openAddTags} size={'lg'} onClose={() => setOpenAddTags(false)} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#35383D] overflow-y-hidden">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[100%] h-[100%] overflow-visible">
                        Select Tags
                    </p>
                </Modal.Header>
                <Modal.Body className="w-[100%] h-[100%] bg-[#35383D]">
                    {isLoading ? (
                        <div className="w-[18vh] h-auto">
                            <p className="font-Content text-[1.2vw] text-[#E1DFDB]">Loading</p>
                        </div>
                    ) : (
                        <fieldset className="flex max-w-md flex-col gap-4 mt-[10px]">
                            {Array.from({ length: columns }, (_, columnIndex) => (
                                <div key={columnIndex} className="flex flex-col gap-4">
                                    {tags
                                        .slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
                                        .map((tag) => (
                                            <div key={tag.id} className="flex items-center gap-2">
                                                <Checkbox
                                                    value={tag.tag_name}
                                                    checked={selectedTags.some(selectedTag => selectedTag.id === tag.id)} // Check if the tag is selected
                                                    onChange={() => handleSelectedTags({ id: tag.id, tag_name: tag.tag_name, tag_color: tag.tag_color })} // Pass the entire tag object
                                                />
                                                <div
                                                    className="w-4 h-4 rounded-[3px]"
                                                    style={{ backgroundColor: tag.tag_color }}
                                                ></div>
                                                <p className="font-Content text-base text-[#E1DFDB]">{tag.tag_name}</p>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </fieldset>)}
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
                        {contributors.map((member) => (
                            <div className="flex items-center gap-2" key={member.id}>
                                <Checkbox
                                    id={`contributor-${member.id}`} // Unique ID for each checkbox
                                    value={member.contributor_name}
                                    checked={selectedContributors.some(selectedMember => selectedMember.id === member.id)} // Check if the contributor is selected
                                    onChange={() => handleSelectedContributors(member)} // Pass the entire member object
                                />
                                <img src={contributorProfileDisplay(member.contributor_profile)} alt="profile picture" className="w-[1.9vw]" />
                                <Label htmlFor={`contributor-${member.id}`} className="text-[#E1DFDB] font-Content text-[1.1vw] text-base">
                                    {member.contributor_name}
                                </Label>
                            </div>
                        ))}
                    </fieldset>
                </Modal.Body>
                <Modal.Footer className="w-[100%] bg-[#414449]">
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenAddMembers(false)} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
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
                            <input type="text" className="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400 text-[1.5vw] font-bold" placeholder="Task Title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
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
                                <input type="text" className="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400" placeholder="Month Day, Year" value={taskDue} onChange={(e) => setTaskDue(e.target.value)}/>
                            </div>

                            <div className="flex h-[100%] w-[100%] items-center">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Tags:
                                </p>
                                <div className="flex items-center gap-1 cursor-pointer" onClick={() => { setOpenAddTags(true) }}>
                                    {selectedTags.length === 0 ? (
                                        <p className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1">
                                            <CiSquarePlus />
                                            Select Tags
                                        </p>
                                    ) : (
                                        <>
                                            {selectedTags.map((tag) => (
                                                <Tooltip content={tag.tag_name} className="overflow-y-hidden overflow-x-hidden">
                                                    <div
                                                        className="w-4 h-4 rounded-[3px]"
                                                        style={{ backgroundColor: `${tag.tag_color}` }}
                                                    >
                                                    </div>
                                                </Tooltip>
                                            ))}
                                            <p className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1">
                                                <CiSquarePlus />
                                                Modify
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="flex">
                                <p className="font-Content text-base text-[#E1DFDB] w-[22%]">
                                    Contributors:
                                </p>
                                {selectedContributors.length === 0 ? (
                                    <p onClick={() => { setOpenAddMembers(true) }} className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1">
                                        <CiSquarePlus />
                                        Select Contributors
                                    </p>
                                ) : (
                                    <>
                                        {selectedContributors.map((member) => (
                                            <Tooltip content={member.contributor_name} className="overflow-x-hidden overflow-y-hidden">
                                                <img src={contributorProfileDisplay(member.contributor_profile)} alt="profile picture" className="w-[1.9vw]" />
                                            </Tooltip>
                                        ))}
                                        <p onClick={() => { setOpenAddMembers(true) }} className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1">
                                            <CiSquarePlus />
                                            Modify
                                        </p>
                                    </>
                                )}
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
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={handleCreateTaskItem} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
                            <p className="text-base leading-relaxed text-[#E1DFDB] hover:text-[#414449]">Add Task</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}