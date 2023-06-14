import { useState } from "react"
import CardInfo from "./CardInfo"
import SocialsInfo from "./SocialInfo"

const ProfileForm = () => {
    const [openSocials, setOpenSocials] = useState(false);

    return (
        <div className="grid justify-center items-center p-5 h-screen">
            <div className='h-[30px] mb-5'>
                {openSocials && <button 
                className='w-fit ml-0'
                onClick={() => setOpenSocials(false)}
                ><img 
                    src='https://res.cloudinary.com/db7nrltsv/image/upload/v1686363947/left-arrow_lmf6jf.png' 
                    width={"25px"} 
                /></button>}
            </div>

            <div className="flex flex-col justify-center items-center h-[80px] mb-5">
                <h1
                className="text-3xl font-semibold tracking-wide"
                >Setting your Profile</h1>

                <p
                className="mb-4 text-center"
                >Kindly enter your information to complete your profile setup.</p>
            </div>

            <div
            className="flex h-[500px] items-start justify-center p-1 overflow-scroll"
            >
                {!openSocials ? <CardInfo setOpenSocials={setOpenSocials} /> :
                <SocialsInfo />}
            </div>
        </div>
    )
}

export default ProfileForm