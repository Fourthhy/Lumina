import { Modal, Button, Label, Radio } from "flowbite-react"
import { useState, useEffect } from "react"
import { CiSquarePlus } from "react-icons/ci";
import { createTag, fetchBoardInfo } from "../../functions/functions"
import { useParams } from "react-router-dom"

export default function BoardInfo() {
    const [openModal, setOpenModal] = useState(false);
    const [openAddTags, setOpenAddTags] = useState(false);
    const [openAddMember, setOpenAddMember] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [tagColor, setTagColor] = useState("")
    const [tagName, setTagName] = useState("")
    const { boardCode } = useParams()
    
    const [boardInfo, setBoardInfo] = useState({})

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
            try {
                const fetchedBoardInfo = await fetchBoardInfo(1444);
                setBoardInfo(fetchedBoardInfo);
            } catch (error) {
                setError(error);
            }
        };

        getBoardInfo(); 
    }, []);

    const tagList = [
        // { tagID: 1, tagName: "red tag", tagColor: "#ff0000" },
        // { tagID: 2, tagName: "cyan tag", tagColor: "#00ffff" },
        // { tagID: 3, tagName: "green tag", tagColor: "#00ff00" },
        // { tagID: 4, tagName: "yellow tag", tagColor: "#ffff00" },
        // { tagID: 5, tagName: "blue tag", tagColor: "#0000ff" },
        // { tagID: 6, tagName: "purple tag", tagColor: "#800080" },
        // { tagID: 7, tagName: "orange tag", tagColor: "#ffa500" },
        // { tagID: 8, tagName: "pink tag", tagColor: "#ffc0cb" },
        // { tagID: 9, tagName: "brown tag", tagColor: "#a52a2a" },
        // { tagID: 10, tagName: "gray tag", tagColor: "#808080" },
        // { tagID: 11, tagName: "lime tag", tagColor: "#00ff00" },
        // { tagID: 12, tagName: "teal tag", tagColor: "#008080" },
        // { tagID: 13, tagName: "teal tag", tagColor: "#008080" },
        // { tagID: 14, tagName: "another tag", tagColor: "#a0522d" },
        // { tagID: 15, tagName: "Chapter 1", tagColor: "#d2691e" },
        // { tagID: 16, tagName: "more tags", tagColor: "#b8860b" },
        // { tagID: 17, tagName: "Implementation", tagColor: "#2f4f4f" },
        // { tagID: 18, tagName: "tag galore", tagColor: "#483d8b" },
        // { tagID: 19, tagName: "tag mania", tagColor: "#8b008b" },
        // { tagID: 20, tagName: "tag fest", tagColor: "#8b4513" },
        // { tagID: 21, tagName: "tag party", tagColor: "#dc143c" },
        // { tagID: 22, tagName: "tag time", tagColor: "#ff1493" },
        // { tagID: 23, tagName: "tag day", tagColor: "#1e90ff" },
        // { tagID: 24, tagName: "tag night", tagColor: "#00ced1" },
        // { tagID: 25, tagName: "tag dawn", tagColor: "#00fa9a" },
        // { tagID: 26, tagName: "tag dusk", tagColor: "#adff2f" },
    ];

    const memberList = [
        // { memberID: 1, memberRole: "Project Manager", memberName: "member name 1", memberImage: "/profiles/aquarius.png" },
        // { memberID: 2, memberRole: "Developer", memberName: "member name 2", memberImage: "/profiles/leo.png" },
        // { memberID: 3, memberRole: "UI/UX Designer", memberName: "member name 3", memberImage: "/profiles/virgo.png" },
        // { memberID: 4, memberRole: "System QA", memberName: "member name 4", memberImage: "/profiles/gemini.png" },
    ]

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
    const columns = Math.ceil(tagList.length / itemsPerColumn);

    const itemsPerColumnMember = Math.ceil(profileImages.length / 4);
    const columnsMember = 4;

    const handleColorChange = (event) => {
        setTagColor(event.target.value); // Update the state with the selected color
    };

    const handleTagNameChange = (event) => {
        setTagName(event.target.value); // Update the state with the entered tag name
    };

    return (
        <>
            <div className="w-[18vh] h-auto">
                <button className="w-[100%] h-[100%] border-[#b4a192] hover:border-[#E1DFDB] border-[1px] rounded-[8px] flex justify-center text-[#b4a192] hover:text-[#E1DFDB] leading-relaxed" onClick={() => { setOpenModal(true) }}>
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
                            <p onClick={() => { setOpenAddTags(true) }} className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1 cursor-pointer">
                                <CiSquarePlus />
                                Add Tag
                            </p>
                        </p>
                        <div className="flex flex-wrap gap-4 mt-[5px]">
                            {Array.from({ length: columns }, (_, columnIndex) => (
                                <div key={columnIndex} className="flex flex-col gap-4 w-full md:w-1/6"> {/* Adjust width as needed */}
                                    {tagList
                                        .slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
                                        .map((tag) => (
                                            <div key={tag.tagID} className="flex items-center gap-2">
                                                <div
                                                    className="w-4 h-4 rounded-[3px]"
                                                    style={{ backgroundColor: tag.tagColor }}
                                                ></div>
                                                <p className="font-Content text-base text-[#E1DFDB]">{tag.tagName}</p>
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
                                <p onClick={() => { setOpenAddMember(true) }} className="font-Content text-base text-[#b4a192] text-[1.3vw] mt-[1px] hover:text-[#E1DFDB] flex items-center gap-1 cursor-pointer">
                                    <CiSquarePlus />
                                    Add Contributor
                                </p>
                            </p>
                            {memberList.map((member) => (
                                <div className="flex items-center gap-2">
                                    <img src={`${member.memberImage}`} alt="profile picture" className="w-[1.9vw]" />
                                    <Label className="text-[#E1DFDB] font-Content text-[1.1vw] text-base w-[28%]">{member.memberName}</Label>
                                    <Label className="text-[#E1DFDB] font-Content text-[1.1vw] text-base w-[30%]">{member.memberRole}</Label>
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
