import { useState } from "react"
import CardInfo from "./CardInfo"
import SocialsInfo from "./SocialInfo"
import Image from "next/image";

const ProfileForm = ({user}: any) => {
    const [openSocials, setOpenSocials] = useState(false);

    return (
        <div className="grid justify-center items-center p-5 h-screen">
            <div className='h-[30px] mb-5'>
                {openSocials && <button 
                className='w-fit ml-0'
                onClick={() => setOpenSocials(false)}
                ><Image 
                    src='/images/back.png' 
                    alt="Back"
                    width={25} 
                    height={25}
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
                {!openSocials ? <CardInfo user={user} setOpenSocials={setOpenSocials} /> :
                <SocialsInfo {...{user}} />}
            </div>
        </div>
    )
}

export default ProfileForm