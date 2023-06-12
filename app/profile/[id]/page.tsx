"use client";
import Navbar from '@/components/Navigation/Navbar';
import Scanner from '@/components/Navigation/Scanner';
import ProfileForm from '@/components/ProfileForm/ProfileForm';
import SocialsInfo from '@/components/ProfileForm/SocialInfo';
import { AccountAPI, Client_Account, TypeValue } from '@/lib/accountapi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Profile = () => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState<any>(null);
    const [seeDetails, setSeeDetails] = useState(false);   
    const [user, setUser] = useState(null)
    const [profileUser, setProfileUser] = useState(-1);
    const [profileForm, setProfileForm] = useState(true);
    const [socialsData, setSocialsData] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState();
    const [QRCode, setQRCode] = useState();
    const [profileDetails, setProfileDetails] = useState({
        userId: "",
        type: "",
        contactNo: "",
        profession: "",
        organisation: "",
        firmType: "",
    })

    const getSession =async () => {
        AccountAPI.getAccount()
        .then((res: any) => {
            setUser(res)
            checkAccount(res)
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

    const checkAccount = (response: any) => {
        AccountAPI.getUserDocument(response)
        .then((res) => {
            if(res.total==0) router.push('/signup')
            const data = res.documents[0]
            setUserDetails(data)
        })
    }

    const handleLogOut = async () => {
        AccountAPI.deleteSession()
        router.push('/login');
    }

    useEffect(() => {
        getSession()
    }, [Client_Account])

    useEffect(() => {
        if(profileUser==1) {
            AccountAPI.userInitials()
            .then((res: any) => setProfilePhoto(res))
            AccountAPI.userQRCode()
            .then((res: any) => setQRCode(res))
        } 
    },[profileUser])

    return (
        <div className='flex w-screen h-screen overflow-hidden'>
            <Navbar />
            <div className='flex flex-col h-screen w-full pt-[60px]'>
            {user &&            
            //     profileUser == 0 ? 
            //         <>
            //             {profileForm ? <ProfileForm profileDetails={profileDetails} setProfileDetails={setProfileDetails} setProfileForm={setProfileForm} />
            //             : <SocialsInfo setSocialsData={setSocialsData} />}
            //         </>
            //         : 
            //         <div>
            //             <p>Profile</p>
            //         </div>
            // }   
            /* <div>
                <p>Profile</p>
                <br />

                <div>
                    user initials
                    <img 
                    src={profilePhoto}
                    />

                    <img 
                    width={"250px"}
                    src={QRCode}
                    />
                </div>
                <Scanner />
                <button onClick={handleLogOut}>
                    Logout
                </button>
            </div>      */
            <ProfileForm profileDetails={profileDetails} setProfileDetails={setProfileDetails} setProfileForm={setProfileForm} />}
            </div>
        </div>
    )
}

export default Profile