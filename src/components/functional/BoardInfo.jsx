import { Modal, Button, Label, Radio } from "flowbite-react"
import { useState, useEffect } from "react"
import { CiSquarePlus } from "react-icons/ci";
import { createTag, fetchBoardInfo, fetchTags, fetchContributors } from "../../functions/functions"
import { useParams } from "react-router-dom"

export default function BoardInfo() {
    const [openModal, setOpenModal] = useState(false);
    const [openAddTags, setOpenAddTags] = useState(false);
    const [openAddMember, setOpenAddMember] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [tagColor, setTagColor] = useState("")
    const [tagName, setTagName] = useState("")
    const { boardCode } = useParams()

    const [error, setError] = useState(null); // Add error state
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    const [boardInfo, setBoardInfo] = useState({
        board_title: "",
        to_do: 0,
        in_progress: 0,
        in_review: 0,
        completed: 0,
        reject: 0,
        description: ""
    });
    const [tags, setTags] = useState([]);
    const [contributors, setContributors] = useState([])

    const handleCreateTag = async () => {
        try {
            await createTag(boardCode, tagName, tagColor);
            console.log("Tag Created Successfully");
        } catch (error) {
            console.error("Error creating tag", error)
        }
    }

    useEffect(() => {
        const getBoardInfo = async () => {
            setIsLoading(true); // Set loading to true
            try {
                const fetchedBoardInfo = await fetchBoardInfo(boardCode);
                setBoardInfo(fetchedBoardInfo);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false); // Set loading to false
            }
        };

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

        getBoardInfo();
        getTags();
        getContributors();
    }, []);

    const memberList = [
        { memberID: 1, contributor_role: "Project Manager", contributor_name: "member name 1", contributor_profile: 1 },
        { memberID: 2, contributor_role: "Developer", contributor_name: "member name 2", contributor_profile: 2 },
        { memberID: 3, contributor_role: "UI/UX Designer", contributor_name: "member name 3", contributor_profile: 3 },
        { memberID: 4, contributor_role: "System QA", contributor_name: "member name 4", contributor_profile: 13 },
    ]

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

    const profileImages = [
        { image: "/profiles/aquarius.png", id: 1 },
        { image: "/profiles/aries.png", id: 2 },
        { image: "/profiles/cancer.png", id: 3 },
        { image: "/profiles/capricorn.png", id: 4 },
        { image: "/profiles/gemini.png", id: 5 },
        { image: "/profiles/leo.png", id: 6 },
        { image: "/profiles/libra.png", id: 7 },
        { image: "/profiles/pisces.png", id: 8 },
        { image: "/profiles/sagrittarius.png", id: 9 },
        { image: "/profiles/scorpio.png", id: 10 },
        { image: "/profiles/taurus.png", id: 11 },
        { image: "/profiles/virgo.png", id: 12 },
    ];

    const itemsPerColumn = 6;
    const columns = Math.ceil(tags.length / itemsPerColumn);

    const itemsPerColumnMember = Math.ceil(profileImages.length / 4);
    const columnsMember = 4;

    const handleColorChange = (event) => {
        setTagColor(event.target.value); // Update the state with the selected color
    };

    const handleTagNameChange = (event) => {
        setTagName(event.target.value); // Update the state with the entered tag name
    };

    if (isLoading) {
        return (
            <div className="w-[18vh] h-auto">
                <button className="w-[77%] h-[100%] border-[#b4a192] hover:border-[#E1DFDB] border-[1px] rounded-[8px] flex justify-center text-[#b4a192] hover:text-[#E1DFDB] leading-relaxed">
                    <p className="font-Content text-[1.2vw]">Loading</p>
                </button>
            </div>);
    }

    if (error) {
        return (
            <div className="w-[18vh] h-auto">
                <button className="w-[77%] h-[100%] border-[#b4a192] hover:border-[#E1DFDB] border-[1px] rounded-[8px] flex justify-center text-[#b4a192] hover:text-[#E1DFDB] leading-relaxed">
                    <p className="font-Content text-[1.2vw]">Error</p>
                </button>
            </div>);
    }

    return (
        <>
            <div className="w-[18vh] h-auto">
                <button className="w-[77%] h-[100%] border-[#b4a192] hover:border-[#E1DFDB] border-[1px] rounded-[8px] flex justify-center text-[#b4a192] hover:text-[#E1DFDB] leading-relaxed" onClick={() => { setOpenModal(true) }}>
                    <p className="font-Content text-[1.2vw]">Board Info</p>
                </button>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)} position={'center-right'} size={'3xl'} popup >
                <Modal.Header className="h-[100%] w-[100%] bg-[#35383D] overflow-y-hidden">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[100%] h-[100%] overflow-y-hidden">
                        Board Information
                    </p>
                </Modal.Header>
                <div>
                    <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                        <div className="mt-[15px] flex flex-col gap-2">
                            <div>
                                <p className="font-Content text-[1.5vw] text-[#E1DFDB] font-bold">
                                    {boardInfo.board_title}
                                </p>
                            </div>
                            <div className="flex ">
                                <div className="flex flex-col w-[50%] justify-evenly gap-5">
                                    <div className="flex">
                                        <p className="font-Content text-base text-[#E1DFDB] w-[10vw]">
                                            To Do
                                        </p>
                                        <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                            {boardInfo.to_do}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <p className="font-Content text-base text-[#E1DFDB] w-[10vw]">
                                            In Progress
                                        </p>
                                        <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                            {boardInfo.in_progress}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <p className="font-Content text-base text-[#E1DFDB] w-[10vw]">
                                            In Review
                                        </p>
                                        <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                            {boardInfo.in_review}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <p className="font-Content text-base text-[#E1DFDB] w-[10vw]">
                                            Completed
                                        </p>
                                        <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                            {boardInfo.completed}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <p className="font-Content text-base text-[#E1DFDB] w-[10vw]">
                                            Reject
                                        </p>
                                        <p className="font-Content text-base text-[#E1DFDB] font-bold">
                                            {boardInfo.reject}
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="h-[200px] w-[36vw]">
                                    <Chart />
                                </div> */}
                            </div>
                            <div className="mt-[10px]">
                                <p className="font-Content text-[1.2vw] text-[#E1DFDB] font-bold">
                                    Description
                                </p>
                                <p className="text-base leading-relaxed text-[#E1DFDB]">
                                    <i>
                                        {boardInfo.description}
                                    </i>
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                        <p className="font-Content text-[1.5vw] text-[#E1DFDB] font-bold flex justify-between">
                            Board Tags
                            <span onClick={() => { setOpenAddTags(true) }} className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1 cursor-pointer">
                                <CiSquarePlus />
                                Add Tag
                            </span>
                        </p>
                        <div className="flex flex-wrap gap-4 mt-[5px]">
                            {Array.from({ length: columns }, (_, columnIndex) => (
                                <div key={columnIndex} className="flex flex-col gap-4 w-full md:w-1/6">
                                    {tags
                                        .slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
                                        .map((tag) => (
                                            <div key={tag.id} className="flex items-center gap-2">
                                                <div
                                                    className="w-4 h-4 rounded-[3px]"
                                                    style={{ backgroundColor: tag.tag_color }}
                                                ></div>
                                                <p className="font-Content text-base text-[#E1DFDB]">{tag.tag_name}</p>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </Modal.Body>
                    <Modal.Body className="w-[100%] h-[100%] bg-[#414449]">
                        <fieldset className="flex flex-col gap-4 mt-[10px]">
                            <p className="font-Content text-[1.5vw] text-[#E1DFDB] font-bold flex justify-between">
                                Board Contributors
                                <span onClick={() => { setOpenAddMember(true) }} className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1 cursor-pointer">
                                    <CiSquarePlus />
                                    Add Contributor
                                </span>
                            </p>
                            {contributors.map((member) => (
                                <div className="flex items-center gap-2">
                                    <img src={`${contributorProfileDisplay(member.contributor_profile)}`} alt="profile picture" className="w-[1.9vw]" />
                                    <Label className="text-[#E1DFDB] font-Content text-[1.1vw] text-base w-[28%]">{member.contributor_name}</Label>
                                    <Label className="text-[#E1DFDB] font-Content text-[1.1vw] text-base w-[30%]">{member.contributor_role}</Label>
                                </div>
                            ))}
                        </fieldset>
                    </Modal.Body>
                </div>
            </Modal>

            <Modal show={openAddTags} size={"md"} onClose={() => setOpenAddTags(false)} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#35383D] overflow-y-hidden">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[100%] h-[100%] overflow-y-hidden">
                        Add Tag
                    </p>
                </Modal.Header>
                <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex flex-col h-[100%] items-start gap-3 mt-[10px]">
                        <input type="text" className="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400 text-[1.5vw]" placeholder="Enter Tag Name" value={tagName} onChange={handleTagNameChange} />
                        <div className="flex">
                            <p className="font-Content text-base text-[#E1DFDB] w-[10vw]">
                                Select Tag Color, {tagColor}
                            </p>
                            <input type="color" value={tagColor} onChange={handleColorChange} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => {
                            handleCreateTag
                            setOpenAddTags(false)
                        }} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
                            <p className="text-base leading-relaxed text-[#E1DFDB] hover:text-[#414449]">Add Tag</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={openAddMember} onClose={() => setOpenAddMember(false)} size={"lg"} popup>
                <Modal.Header className="h-[100%] w-[100%] bg-[#35383D] overflow-y-hidden">
                    <p className="font-Content text-[1.2vw] text-[#E1DFDB] w-[100%] h-[100%] overflow-y-hidden">
                        Add Contributor
                    </p>
                </Modal.Header>
                <Modal.Body className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="my-[5px]">
                        <input type="text" className="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400 text-[1.5vw]" placeholder="Contributor Name" />
                    </div>
                    <div className="my-[5px]">
                        <input type="text" className="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-[#414449] border-0 border-b-2 border-gray-500 font-Content text-base text-[#E1DFDB] placeholder:text-gray-400 text-[1.5vw]" placeholder="Contributor Role" />
                    </div>

                    <p className="font-Content text-base text-[#E1DFDB] w-[10vw] mt-[15px]">Select Profile</p>
                    <fieldset className="flex max-w-md flex-row gap-4 mt-[15px]">
                        {Array.from({ length: columnsMember }, (_, columnIndex) => (
                            <div key={columnIndex} className="flex flex-col gap-4 w-1/4">
                                {profileImages
                                    .slice(columnIndex * itemsPerColumnMember, (columnIndex + 1) * itemsPerColumnMember)
                                    .map((profile) => (
                                        <div key={profile.id} className="flex items-center gap-2">
                                            <Radio
                                                id={profile.id}
                                                value={profile.id}
                                                checked={selectedProfile === profile.id}
                                                onChange={() => setSelectedProfile(profile.id)}
                                            />
                                            <img src={`${profile.image}`} alt="profile picture" className="w-[4vw]" />
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </fieldset>
                </Modal.Body>
                <Modal.Footer className="h-[100%] w-[100%] bg-[#414449]">
                    <div className="flex w-[100%] justify-end">
                        <Button color="gray" onClick={() => setOpenAddMember(false)} className="w-auto h-[100%] border-white-500 bg-[#414449] border-[2px] border-[#E1DFDB] ">
                            <p className="text-base leading-relaxed text-[#E1DFDB] hover:text-[#414449]">Add Contributor</p>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
