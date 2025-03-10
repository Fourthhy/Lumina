import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"


export default function LandingPage() {

    return (
        <>
            <div className="grid h-screen place-items-center overflow-y-hidden relative">
                <img src="/hero_background.jpg" alt="hero background image" className="max-w-full h-auto" />
            </div>
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-0 h-screen w-screen flex flex-col justify-center items-center "> {/*CONTENT*/}
                <div className="w-[40vw] h-[10vh] flex items-center justify-evenly flex-col">
                    <p className="font-Serif text-4xl text-[#F9F9F9]"> Lumina </p>
                    <p className="font-Header text-m text-[#D8D8D8]"> personal and group task manager </p>
                </div>

                <div className="w-[35vw] h-[70vh] border-[#D8D8D8] border-[1px] rounded-[5px] glass">

                    <div className="h-[10%] flex items-center justify-center">
                        <p className="font-Header text-[#D8D8D8] text-2xl">It's nice to have you here!</p>
                    </div>

                    <div className="h-[80%] w-[100%] flex items-center justify-evenly flex-col">

                        <div className="w-[90%] h-[50%] flex flex-col items-start justify-center gap-[1vh]">
                            <p className="font-Content text-m text-[#D8D8D8] px-[5px] font-bold">username</p>
                            <input type="text" className="font-Content w-[100%] h-[40px] px-[7px] bg-[#F9F9F9] rounded-[8px]" placeholder="enter username" />
                            <p className="font-Content text-m text-[#D8D8D8] px-[5px] font-bold">password</p>
                            <input type="password" className="font-Content w-[100%] h-[40px] px-[7px] bg-[#F9F9F9] rounded-[8px]" placeholder="enter password" />
                        </div>

                        <div className="w-[100%] ml-[10%]">
                            <Link to="/boardselection">
                                <button type="submit" className="border-[2px] w-[90%] h-[40px] border-[#A5B2BB] bg-[#A5B2BB] rounded-[8px] cursor-pointer 
                                hover:bg-[#C8D9E0] hover:border-[#C8D9E0] hover:text-[#494038] flex justify-center items-center gap-2" >
                                    <p className="text-white font-Content text-m text-[#333332]">
                                        Submit Credentials
                                    </p>
                                </button>
                            </Link>
                        </div>
                        <div className="w-[90%] h-[10%] flex items-center justify-center">
                            <hr className="border-[1px] w-[100%]" />
                            <p className="text-[#F9F9F9] px-[20px] font-Content text-lg">Or </p>
                            <hr className="border-[1px] w-[100%]" />
                        </div>
                        <button
                            className="border-[2px] w-[90%] h-[40px] border-[#A5B2BB] bg-[#A5B2BB] rounded-[8px] cursor-pointer 
                            hover:bg-[#C8D9E0] hover:border-[#C8D9E0] hover:text-[#494038] flex justify-center items-center gap-2" >
                            <FcGoogle className="size-[25px]" />
                            <p className="text-white font-Content text-m text-[#333332]">Continue with Google</p>
                        </button>
                        <div>
                            <p className="text-[#D8D8D8]">Sign in now, it's free</p>
                        </div>
                    </div>

                    <div className="h-[10%] flex justify-center items-end">
                        <p className="text-[#D8D8D8] text-lg font-Content">designed and created by Fourthhy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

