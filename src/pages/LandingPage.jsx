import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function LandingPage() {
    const [adminCode, setAdminCode] = useState("");
    const [promptMessage, setPromptMessage] = useState("Enter Board Code")
    const navigate = useNavigate()

    const handleSubmitAdminCode = () => {
        if (adminCode === import.meta.env.VITE_ADMIN_KEY) {
            navigate('/mainpage/5508')
        } else {
            setPromptMessage('Wrong Code, Try Again')
        }
    }


    return (
        <>
            <div className="grid h-screen place-items-center overflow-y-hidden relative">
                <img src="/hero_background.jpg" alt="hero background image" className="max-w-full h-auto" />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-0 h-screen w-screen flex flex-col justify-center items-center "> {/*CONTENT*/}
                <div className="w-[30vw] h-[10vh] flex items-center justify-evenly flex-col">
                    <p className="font-Serif text-4xl text-[#F9F9F9] overflow-y-hidden"> Lumina </p>
                    <p className="font-Header text-m text-[#D8D8D8]"> personal and group task manager </p>
                </div>

                <div className="w-[35vw] h-[70vh] border-[#D8D8D8] border-[1px] rounded-[5px] glass">

                    <div className="h-[80%] w-[100%] flex items-center justify-evenly flex-col">

                        <div className="w-[90%] h-[100%] flex flex-col items-start justify-center gap-4 mt-[20px]">
                            <p className="font-Content text-m text-[#D8D8D8] px-[5px] font-bold">{promptMessage}</p>
                            {/* <TextInput type="text" placeholder="e.g. 1234" required shadow className="font-Content w-[100%] px-[7px] rounded-[8px]"/> */}
                            <input type="text" className="focus:border-b-2 focus:border-gray-300 focus:ring-0 bg-transparent border-0 border-b-2 border-gray-500 w-[100%] font-Content text-base text-[#E1DFDB] placeholder:text-gray-400 text-[1.5vw]" placeholder="e.g. 1234" value={adminCode} onChange={(e) => {setAdminCode(e.target.value)}}/>
                            {/* <p className="font-Content text-m text-[#D8D8D8] px-[5px] font-bold">password</p>
                            <input type="password" className="font-Content w-[100%] h-[40px] px-[7px] bg-[#F9F9F9] rounded-[8px]" placeholder="enter password" /> */}
                            <div className="w-[100%]">
                                {/* <Link to="/boardselection"> */}
                                    <button onClick={handleSubmitAdminCode}type="submit" className="border-[2px] w-[100%] h-[40px] border-[#A5B2BB] bg-[#A5B2BB] rounded-[8px] cursor-pointer hover:bg-[#C8D9E0] hover:border-[#C8D9E0] hover:text-[#494038] flex justify-center items-center gap-2" >
                                        <p className="text-white font-Content text-m text-[#333332]">
                                            Enter Code
                                        </p>
                                    </button>
                                {/* </Link> */}
                            </div>
                            {/* <div className="w-[100%] flex items-center justify-center">
                                <hr className="border-[1px] w-[100%]" />
                                <p className="text-[#F9F9F9] px-[20px] font-Content text-lg">Or </p>
                                <hr className="border-[1px] w-[100%]" />
                            </div>
                            <button type="submit" className="border-[2px] w-[100%] h-[40px] border-[#A5B2BB] bg-[#A5B2BB] rounded-[8px] cursor-pointer hover:bg-[#C8D9E0] hover:border-[#C8D9E0] hover:text-[#494038] flex justify-center items-center gap-2" >
                                <p className="text-white font-Content text-m text-[#333332]">
                                    Create Room
                                </p>
                            </button> */}
                        </div>

                    </div>

                    <div className="h-[10%] flex justify-end items-center flex-col">
                        <div className="w-[100%] flex justify-center">
                            <p className="text-[#D8D8D8]">Collaborate now it's free</p>
                        </div>
                        <p className="text-[#D8D8D8] text-sm font-Serif">designed and created by Fourthhy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

