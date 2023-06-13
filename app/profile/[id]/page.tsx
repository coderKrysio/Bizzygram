"use client";
import Navbar from '@/components/Navigation/Navbar';
import ProfileForm from '@/components/ProfileForm/ProfileForm';
import SocialsInfo from '@/components/ProfileForm/SocialInfo';
import UserProfile from '@/components/UserProfile';
import { AccountAPI, Client_Account, TypeValue } from '@/lib/accountapi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Profile = () => {
    const router = useRouter();
    const [seeDetails, setSeeDetails] = useState(false);   
    const [user, setUser] = useState(null)
    const [profileUser, setProfileUser] = useState(-1);
    const [profileIcon, setProfileIcon] = useState(false)
    const [profileForm, setProfileForm] = useState(true);
    const [socialsData, setSocialsData] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState();
    const [QRCode, setQRCode] = useState();
    const [profileDetails, setProfileDetails] = useState({
        userId: "",
        type: "",
    })

    const getSession =async () => {
        AccountAPI.getAccount()
        .then((res: any) => {
            setUser(res)
            AccountAPI.findingUser(res).then((response: any) => {
                setProfileDetails((prev: any) => ({
                    ...prev,
                    userId: res.$id,
                    type: TypeValue,
                }))
                setProfileUser(response.total)
            })
            localStorage.setItem("userId", res.$id)
            AccountAPI.gettingTypeValue()
        })
        .catch((err) => console.log(err));     
    }

    useEffect(() => {
        getSession()
    }, [Client_Account])

    useEffect(() => {
        if(profileUser==1) {
            // AccountAPI.userQRCode()
            // .then((res: any) => setQRCode(res))
            setProfileIcon(true)
        } 
    },[profileUser])

    return (
        <>            
            {user &&            
                profileUser == 0 ? 
                    <div className='flex w-screen h-screen overflow-hidden'>
                        <div className='flex flex-col h-screen w-full pt-[60px]'>
                            <Navbar profileIcon={profileIcon} />
                            <ProfileForm />
                        </div>
                    </div>
                    : 
                <UserProfile />
            }
        </>
    )
}

export default Profile