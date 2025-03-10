export default function LandingPage() {

    return (
        <>
            <div className="grid h-screen place-items-center overflow-y-hidden relative">
                <img src="/hero_background.jpg" alt="hero background image" className="max-w-full h-auto" />
            </div>
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-0 h-screen w-screen flex justify-center items-center"> {/*CONTENT*/}
                <div className="w-[40vw] h-[60vh] border-black border-[1px]">
                    content
                </div>
            </div>
        </>
    )
}

