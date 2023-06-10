const LowerNavigation = ({
    showProfile, 
    setShowProfile, 
    showConnections, 
    setShowConnections, 
    showUserCard,
    setShowUserCard, 
    showSetting,
    setShowSetting,
    setShowUpdate,
    setShowQR,
    setProfileModal,
}: any) => {
    const btnStyle = "flex flex-col justify-center items-center text-sm m-auto";

    const updatePanel = (arg: any) => {
        setProfileModal(false)
        if(arg == "Connections") {
            setShowProfile(false)
            setShowUserCard(false)
            setShowUpdate(false)
            setShowQR(false)
            setShowSetting(false)
            setShowConnections(true)
        } else if(arg == "Profile") {
            setShowConnections(false)
            setShowUserCard(false)
            setShowUpdate(false)
            setShowQR(false)
            setShowSetting(false)
            setShowProfile(true)
        } else if(arg == "Card") {
            setShowConnections(false)
            setShowProfile(false)
            setShowUpdate(false)
            setShowQR(false)
            setShowSetting(false)
            setShowUserCard(true)
        } else if(arg == "Settings") {
            setShowConnections(false)
            setShowProfile(false)
            setShowUserCard(false)
            setShowUpdate(false)
            setShowQR(false)    
            setShowSetting(true)     
        }
    }

    return (
        <div
        className="min-[1070px]:hidden fixed bottom-0 z-10 bg-[#bae8e8] w-screen h-[65px] pt-1 grid grid-cols-4 rounded-t-xl"
        >
            <button
            className={showConnections ? `${btnStyle} font-semibold` : btnStyle}
            onClick={() => updatePanel("Connections")}
            >
                <img 
                className="mb-1"
                src={showConnections ? "https://res.cloudinary.com/db7nrltsv/image/upload/v1686057885/link_3_ja7wu9.png" : "https://res.cloudinary.com/db7nrltsv/image/upload/v1686049321/link_2_d2xsux.png"}
                width={"25px"}
                />
                Connections
            </button>

            <button
            className={showProfile ? `${btnStyle} font-semibold` : btnStyle}
            onClick={() => updatePanel("Profile")}
            >
                <img 
                className="mb-1 scale-110"
                src={showProfile ? "https://res.cloudinary.com/db7nrltsv/image/upload/v1686057882/user_5_dqcsci.png" : "https://res.cloudinary.com/db7nrltsv/image/upload/v1686047999/user_3_y0ugew.png"}
                width={"25px"}
                />
                Profile
            </button>

            <button
            className={showUserCard ? `${btnStyle} font-semibold` : btnStyle}
            onClick={() => updatePanel("Card")}
            >
                <img 
                className="mb-1 scale-[1.3]"
                src={showUserCard ? "https://res.cloudinary.com/db7nrltsv/image/upload/v1686057883/credit-card_2_bfsabs.png" : "https://res.cloudinary.com/db7nrltsv/image/upload/v1686048101/credit-card_erbjpe.png"}
                width={"25px"}
                />
                Card
            </button>

            <button
            className={showSetting ? `${btnStyle} font-semibold` : btnStyle}
            onClick={() => updatePanel("Settings")}
            >
                <img 
                className="mb-1 scale-105"
                src={showSetting ? "https://res.cloudinary.com/db7nrltsv/image/upload/v1686057881/gear_2_ivskth.png" : "https://res.cloudinary.com/db7nrltsv/image/upload/v1686048212/gear_dndbea.png"}
                width={"25px"}
                />
                Settings
            </button>
        </div>
    )
}

export default LowerNavigation