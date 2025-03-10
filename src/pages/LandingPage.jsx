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
                <div className="w-[35vw] h-[70vh] border-[#D8D8D8] border-[2px] rounded-[5px]">
                    <div className="h-[30%] flex items-center justify-center">
                        <p className="font-Header text-[#D8D8D8] text-3xl">It's nice to have you here!</p>
                    </div>
                    <div className="h-[30%] w-[100%] flex items-center justify-center flex-col">
                        <button 
                            className="border-[2px] w-[95%] h-[40px] border-[#C8D9E0] bg-[#C8D9E0] rounded-[8px] cursor-pointer hover:bg-[#A5B2BB] hover:border-[#A5B2BB] hover:text-[#494038]">
                            <p className="text-white font-Content text-lg text-[#333332]">Continue with Google</p>
                        </button>
                        <div>
                            <p className="text-[#D8D8D8]">Sign in now, it's free</p>
                        </div>
                    </div>
                    <div className="h-[30%] flex justify-center items-end">
                        <p className="text-[#D8D8D8] text-lg font-Content">designed and created by Fourthhy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

