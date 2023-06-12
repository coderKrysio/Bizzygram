import { useState } from "react"
import CardInfo from "./CardInfo"
import SocialsInfo from "./SocialInfo"

const ProfileForm = ({profileDetails, setProfileDetails, setProfileForm}: any) => {
    const [openSocials, setOpenSocials] = useState(false);

    return (
        <div className="grid justify-center items-center gap-[10px] p-5 h-screen">

            <div className="flex flex-col justify-center items-center h-[80px]">
                <h1
                className="text-3xl font-semibold tracking-wide"
                >Setting your Profile</h1>

                <p
                className="mb-4 text-center"
                >Kindly enter your information to complete your profile setup.</p>
            </div>

            <div
            className="flex h-[500px] items-start overflow-scroll justify-center"
            >{!openSocials ? <CardInfo setOpenSocials={setOpenSocials} /> :
            <SocialsInfo />}</div>
        </div>
    )
}

export default ProfileForm