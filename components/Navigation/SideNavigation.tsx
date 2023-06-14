import Image from "next/image"

const SideNavigation = ({
    showProfile, 
    setShowProfile, 
    showConnections, 
    setShowConnections, 
    showUserCard,
    setShowUserCard, 
    showUpdateCard, 
    setShowUpdateCard,
    setShowSetting,
    setShowHelp,
    setShowQR,
    setProfileModal,
    profilePhoto,
    userDetails,
}: any) => {

    const btnDesign = 'text-[#272343] text-xl font-semibold tracking-wide w-full py-3 rounded-xl hover:bg-[#ffd803] hover:border-0'

    const selectedBtn = "font-semibold tracking-wide w-full py-3 rounded-xl bg-[#ffd803] text-[#272343] text-xl focus:outline-none"

    const updatePanel = (arg: any) => {
        setShowQR(false)
        setProfileModal(false)
        if(arg == "Connections") {
            setShowProfile(false)
            setShowUserCard(false)
            setShowUpdateCard(false)
            setShowHelp(false)
            setShowSetting(false)
            setShowConnections(true)
        } else if(arg == "Profile") {
            setShowConnections(false)
            setShowUserCard(false)
            setShowUpdateCard(false)
            setShowHelp(false)
            setShowSetting(false)
            setShowProfile(true)
        } else if(arg == "UserCard") {
            setShowConnections(false)
            setShowProfile(false)
            setShowUpdateCard(false)
            setShowHelp(false)
            setShowSetting(false)
            setShowUserCard(true)
        } else if(arg == "UpdateCard") {
            setShowConnections(false)
            setShowProfile(false)
            setShowUserCard(false)
            setShowSetting(false)
            setShowHelp(false)
            setShowUpdateCard(true)            
        } else if(arg == "Settings") {
            setShowConnections(false)
            setShowProfile(false)
            setShowUserCard(false)
            setShowUpdateCard(false) 
            setShowSetting(false)
            setShowHelp(false)    
            setShowSetting(true)    
        } else if(arg == "Help") {
            setShowConnections(false)
            setShowProfile(false)
            setShowUserCard(false)
            setShowUpdateCard(false)
            setShowSetting(false)
            setShowHelp(true)        
        }
    }
    
    return (
        <div 
        className='relative left-0 flex flex-col gap-[25px] h-screen w-[325px] border-r-2 border-slate-300 p-5 pt-[75px] max-[1070px]:hidden'
        >
            <div
            className='flex flex-col justify-center items-center gap-[15px] border-b-2 border-slate-300'
            >
                <div 
                className='w-[100px] h-[100px] rounded-[50px] bg-[#fff] overflow-hidden'
                ><Image 
                    src={profilePhoto}
                    alt="Profile"
                    width={100}
                    height={100}
                /></div>
                <p
                className='font-semibold text-2xl tracking-wide text-center mb-3'
                >
                    {userDetails.name} <br />
                    <span
                    className='font-medium text-[14px] tracking-wide'
                    >{userDetails.type}</span>
                </p>
            </div>

            <div
            className='flex flex-col justify-center items-center gap-[20px] p-2'
            >
                <button
                className={showConnections ? selectedBtn : btnDesign}
                onClick={() => updatePanel("Connections")}
                >Connections</button>

                <button
                className={showProfile ? selectedBtn : btnDesign}
                onClick={() => updatePanel("Profile")}
                >Profile</button>

                <button
                className={showUserCard ? selectedBtn : btnDesign}
                onClick={() => updatePanel("UserCard")}
                >Your Card</button>

                <button
                className={showUpdateCard ? selectedBtn : btnDesign}
                onClick={() => updatePanel("UpdateCard")}
                >Update Card</button>
            </div>

            <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 flex w-fit gap-[20px]"
            >
                <button
                className="font-semibold"
                onClick={() => updatePanel("Settings")}
                ><Image 
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686057881/gear_2_ivskth.png"
                    title="Settings"
                    width={25}
                    height={25}
                    alt="Settings"
                /></button>

                <button
                className="font-semibold"
                onClick={() => updatePanel("Help")}
                ><Image 
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686068779/help-web-button_ehv5qe.png"
                    title="Help"
                    width={25}
                    height={25}
                    alt="Help"
                /></button>
            </div>            
        </div>
    )
}

export default SideNavigation