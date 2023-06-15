"use client";
import Navbar from '@/components/Navigation/Navbar';
import LogInMain from '@/components/SignUp-In/LogInMain';
import { AccountAPI, Client_Account } from '@/lib/accountapi';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState()
    const [userNo, setUserNo] = useState(0);
    const [profileIcon, setProfileIcon] = useState(false)
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
        type: "",
        userId: "",
    })

    const getSession = () => {
        AccountAPI.getAccount()
        .then((res: any) => {
            getAccount(res)
            setUser(res)
        })
        .catch((err) => console.log(err));
    }

    const handleGoogleSignUp = () => {
        AccountAPI.googleLogIn();
    } 

    const getAccount =  (response: any) => {
        AccountAPI.getUserDocument(response)
        .then((res) => {
            if(res.total == 1) {
                setDetails((prev: any) => ({
                    ...prev,
                    name: res.documents[0].name,
                    userId: res.documents[0].userId,
                    type: res.documents[0].type,
                }))
            }
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        if(details.userId != "") router.push(`/profile/${details.userId}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[details.userId])

    useEffect(() => {
        getSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Client_Account])  

    return (
        <>
            <Navbar profileIcon={profileIcon} />
            <div className='flex h-screen w-screen justify-center items-center bg-[#f3fbfb] text-[#272343] pt-[60px]'>
                <div className='h-full pt-[30px] w-fit m-auto'>
                    {user ? 
                        <></>
                        : 
                        <LogInMain {...{
                            details,
                            setDetails,
                            userNo,
                            setUserNo,
                            handleGoogleSignUp,
                        }}/>
                    }        
                </div>
            </div>
        </>
    )
}