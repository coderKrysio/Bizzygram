const ProfileModal = ({setShowProfile, setShowConnections, setShowUserCard, setShowSetting}: any) => {
    const btnStyle = 'border-b-2 border-slate-300 p-2 text-lg font-medium tracking-wide hover:font-semibold';

    const updatePanel = (arg: any) => {
        if(arg == "Profile") {
            setShowUserCard(false)
            setShowSetting(false)
            setShowConnections(false)
            setShowProfile(true)
        } else if(arg == "Card") {
            setShowProfile(false)
            setShowSetting(false)
            setShowConnections(false)
            setShowUserCard(true)
        } else if(arg == "Settings") {
            setShowProfile(false)
            setShowUserCard(false)
            setShowConnections(false)
            setShowSetting(true)     
        }
    }

    return (
        <div
        className='absolute top-[60px] w-[150px] right-0 mr-5 p-3 rounded-lg flex flex-col bg-[#272343] text-[#bae8e8] border border-slate-300 z-10'
        >
            <button
            className={btnStyle}
            onClick={() => updatePanel("Profile")}
            >Profile</button>

            <button
            className={btnStyle}
            onClick={() => updatePanel("Card")}
            >Your Card</button>

            <button
            className={`${btnStyle} min-[1070px]:hidden`}
            onClick={() => updatePanel("Settings")}
            >Settings</button>

            <button
            className='p-2 text-lg font-medium tracking-wide hover:font-semibold'
            >Log Out</button>
        </div>
    )
}

export default ProfileModal