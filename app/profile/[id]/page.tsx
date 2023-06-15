"use client";
import Navbar from '@/components/Navigation/Navbar';
import ProfileForm from '@/components/ProfileForm/ProfileForm';
import UserProfile from '@/components/UserProfile';
import { AccountAPI } from '@/lib/accountapi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Profile = () => {
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [profileUser, setProfileUser] = useState(0);
    const [profileIcon, setProfileIcon] = useState(false)
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
                    type: localStorage.getItem("type"),
                }))
                setProfileUser(response.total)
            })
            localStorage.setItem("userId", res.$id)
            AccountAPI.gettingTypeValue(res.$id)
        })
        .catch((err) => console.log(err));     
    }

    useEffect(() => {
        getSession()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(profileUser==1) {
            setProfileIcon(true)
        } 
    },[profileUser])

    return (
        <>            
            {profileDetails.userId != "" ?         
                <>
                {profileUser == 0 ? 
                    <div className='flex w-screen h-screen overflow-hidden'>
                        <div className='flex flex-col h-screen w-full pt-[60px]'>
                            <Navbar profileIcon={profileIcon} />
                            <ProfileForm />
                        </div>
                    </div>
                    : 
                    <UserProfile />
                }</>:
                router.push("/")
            }
        </>
    )
}

export default Profile