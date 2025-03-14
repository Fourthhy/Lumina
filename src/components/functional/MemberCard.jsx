export default function MemberCard() {
    return (
        <>
            <div className="h-[100%] w-[100%]">
                <div className="h-[13vh] w-[100%] flex items-center justify-center">
                    <img src="/profiles/aquarius.png" alt="profile image" className="size-[7vw]"/>
                </div>
                <div>
                    <p className="font-Content text-[1.9vw] text-[#0b132b] font-bold pl-[8px]">Member Name</p>
                    <p className="font-Content text-[1.5vw] text-[#0b132b] pl-[8px]">Member Role</p>
                    <p className="font-Serif text-[1.3vw] text-[#0b132b] pl-[8px] pt-[20px]">
                        <i>
                        The best way to predict your future is to create it.
                        </i>
                    </p>
                </div>
            </div>
        </>
    )
}