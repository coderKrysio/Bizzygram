import Image from "next/image";

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
                <Image 
                className="mb-1"
                src={showConnections ? 
                    "/images/link-fill.png" : 
                    "/images/link.png"
                }
                width={25}
                height={25}
                alt="Connections"
                />
                Connections
            </button>

            <button
            className={showProfile ? `${btnStyle} font-semibold` : btnStyle}
            onClick={() => updatePanel("Profile")}
            >
                <Image 
                className="mb-1 scale-110"
                src={showProfile ? 
                    "/images/profile-fill.png" : 
                    "/images/profile.png"
                }
                width={25}
                height={25}
                alt="Profile"
                />
                Profile
            </button>

            <button
            className={showUserCard ? `${btnStyle} font-semibold` : btnStyle}
            onClick={() => updatePanel("Card")}
            >
                <Image 
                className="mb-1 scale-[1.3]"
                src={showUserCard ? 
                    "/images/card-fill.png" : 
                    "/images/card.png"
                }
                width={25}
                height={25}
                alt="Card"
                />
                Card
            </button>

            <button
            className={showSetting ? `${btnStyle} font-semibold` : btnStyle}
            onClick={() => updatePanel("Settings")}
            >
                <Image 
                className="mb-1 scale-105"
                src={showSetting ? 
                    "/images/setting-fill.png" : 
                    "/images/setting.png"
                }
                width={25}
                height={25}
                alt="Settings"
                />
                Settings
            </button>
        </div>
    )
}

export default LowerNavigation