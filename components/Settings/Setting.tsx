const Setting = ({
    setShowConnections,
    setShowProfile,
    setShowUserCard,
    setShowQR,
    setShowUpdateCard, 
    setShowSetting,
    setShowHelp,
    setProfileModal
}: any) => {
    const btnStyle = 'text-2xl text-left py-3 font-medium'

    const updatePanel = (arg: string) => {
        setShowConnections(false)
        setShowProfile(false)
        setShowUserCard(false)
        setShowQR(false)
        setShowSetting(false)
        setProfileModal(false)
        if(arg == "Card") {
            setShowHelp(false) 
            setShowUpdateCard(true)     
        } else if(arg == "Help") {
            setShowUpdateCard(false)
            setShowHelp(true)     
        }
    }
    return (
        <div
        className='relative flex flex-col gap-[25px] h-screen w-full pt-[85px] p-7 ml-3 max-[1070px]:pb-[70px] max-[470px]:ml-0'
        >
            <h1
            className='text-3xl font-semibold border-b-2 border-slate-300 pb-5'
            >Settings</h1>

            <div
            className='grid grid-cols-1 ml-3'
            >
                <button
                className={btnStyle}
                >-&nbsp;&nbsp;Change Profile</button>

                <button
                className={btnStyle}
                onClick={() => updatePanel("Card")}
                >-&nbsp;&nbsp;Update Card</button>

                <button
                className={btnStyle}
                onClick={() => updatePanel("Help")}
                >-&nbsp;&nbsp;Help</button>

                <button
                className={btnStyle}
                >-&nbsp;&nbsp;Log Out</button>

                <button
                className={btnStyle}
                >-&nbsp;&nbsp;Github Repo</button>

                <button
                className={btnStyle}
                >-&nbsp;&nbsp;Blog</button>
            </div>

            <div
            className='absolute bottom-0 left-1/2 -translate-x-1/2 mb-[70px] min-[1070px]:mb-0'
            >made by coderKrysio</div>
        </div>
    )
}

export default Setting