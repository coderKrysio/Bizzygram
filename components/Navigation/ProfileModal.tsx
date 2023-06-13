import { AccountAPI } from "@/lib/accountapi";
import { useRouter } from "next/navigation"

const ProfileModal = ({setShowProfile, setShowConnections, setShowUserCard, setShowSetting}: any) => {
    const btnStyle = 'border-b-2 border-slate-300 p-2 text-lg font-medium tracking-wide hover:font-semibold';
    const router = useRouter()

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

    const handleLogOut = async () => {
        localStorage.setItem("userId", "");
        localStorage.setItem("type", "");
        AccountAPI.deleteSession()
        router.push('/login');
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
            onClick={handleLogOut}
            >Log Out</button>
        </div>
    )
}

export default ProfileModal