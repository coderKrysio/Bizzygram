"use client";
import Navbar from '@/components/Navigation/Navbar';
import SignUpMain from '@/components/SignUp-In/SignUpMain';
import UserType from '@/components/SignUp-In/UserType';
import { AccountAPI, Client_Account, UserId } from '@/lib/accountapi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SignUp() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [userNo, setUserNo] = useState(-1);
    const [profileIcon, setProfileIcon] = useState(false)
    const [showUserType, setShowUserType] = useState(true);
    const [userType, setUserType] = useState(false);

    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
        type: "",
        userId: "",
    })

    const getSession = async () => {
        AccountAPI.getAccount()
        .then((res: any) => {
            setUser(res)
            if(res != "") getAccount(res);
        })
        .catch((err) => console.log(err));   
    }

    const handleGoogleSignUp = async () => {
        localStorage.setItem("typeValue", details.type)
        AccountAPI.googleSignUp()
    }

    const handleEmailSignUp = () => {
        AccountAPI.emailSignUp(details)
        .then((res: any) => {
            handleSigning(res)
            localStorage.setItem("userId",res.$id)
        }).catch((err: any) => console.log(err))    
        router.push(`/profile/${UserId}`)    
    }

    const handleCreateDocument = (res: any) => {
        AccountAPI.createUserDocument(res)
        .then(() => {
            setDetails((prev: any) => ({
                ...prev,
                userId: res.$id,
            }))
            localStorage.setItem("userId",res.$id)
            localStorage.setItem("type",res.type)
        }).catch((err: any) => console.log(err))
    }

    const handleSigning = (docDetails: any) => {
        AccountAPI.emailLogIn(details)
        .then(() => {
            handleCreateDocument(docDetails)
        })
        .catch((err: any) => {
            console.log(err)
        });
    }

    const getAccount =  (response: any) => {
        AccountAPI.getUserDocument(response)
        .then((res: any) => {
            setUserNo(res.total)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getSession();
    }, [Client_Account])  

    return (
        <>
            <Navbar profileIcon={profileIcon} />
            {user ? 
                <>
                    {router.push(`/login`)}
                </>
            : 
            <div className='flex h-screen w-screen justify-center items-center bg-[#f3fbfb] text-[#272343] pt-[60px]'>
                <div className='flex flex-col justify-start items-center h-full w-fit m-auto'>
                    {showUserType && <UserType {...{
                        details,
                        setDetails,
                        setUserType,
                        setShowUserType
                    }}/>}

                    {!showUserType && userType && <SignUpMain {...{
                            details,
                            setDetails,
                            userNo,
                            setUserNo,
                            setShowUserType,
                            handleEmailSignUp,
                            handleGoogleSignUp,
                        }}/>
                    }
                    <p
                    className="text-center text-md font-medium mb-8"
                    >Already have an account. <Link 
                    href={'/login'} 
                    className='text-[#27b6f6] underline'
                    >Log In</Link> now</p>
                </div>
            </div>}
        </>
    )
}