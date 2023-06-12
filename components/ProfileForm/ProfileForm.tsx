import { useState } from "react"
import CardInfo from "./CardInfo"
import SocialsInfo from "./SocialInfo"

const ProfileForm = ({profileDetails, setProfileDetails, setProfileForm}: any) => {
    const [openSocials, setOpenSocials] = useState(false);

    return (
        <div className="grid grid-rows-[331px_auto] border-2 border-black gap-[10px] p-5 h-screen bg-yellow-300">

            <div className="border-2 border-black flex flex-col bg-red-300 h-[331px]">
                <h1
                className="text-3xl font-semibold tracking-wide mt-9"
                >Setting your Profile</h1>

                <p
                className="mb-4"
                >Kindly enter your information to complete your profile setup.</p>
            </div>

            {!openSocials ? <CardInfo setOpenSocials={setOpenSocials} /> :
            <SocialsInfo />}
        </div>
    )
}

export default ProfileForm