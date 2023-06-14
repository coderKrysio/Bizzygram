"use client";
import Navbar from '@/components/Navigation/Navbar';
import SignUpMain from '@/components/SignUp-In/SignUpMain';
import UserType from '@/components/SignUp-In/UserType';
import { AccountAPI, Client_Account } from '@/lib/accountapi';
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
            console.log(res)
            handleSigning(res)            
            // router.push(`/profile/${details.userId}`)
        }).catch((err: any) => console.log(err))        
    }

    const handleCreateDocument = (res: any) => {
        console.log(res, "in doc creation")
        // AccountAPI.createUserDocument(res)
        // .then(() => {
        //     console.log("created")
        //     // setDetails((prev: any) => ({
        //     //     ...prev,
        //     //     userId: res.$id,
        //     // }))
        // }).catch((err: any) => console.log(err))
    }

    const handleSigning = (docDetails: any) => {
        console.log(docDetails, "docdetails")
        AccountAPI.emailLogIn(details)
        .then((res: any) => {
            console.log(res, "logging in")
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

    useEffect(() => {
        if(userNo == 0) handleCreateDocument(user)
    }, [userNo])

    return (
        <>
            <Navbar profileIcon={profileIcon} />
            {user && details.userId != "" ? 
                <>
                    {router.push(`/profile/${details.userId}`)}
                </>
            : 
            <div className='flex h-screen w-screen justify-center items-center bg-[#f3fbfb] text-[#272343] pt-[60px]'>
                <div className='flex flex-col justify-start items-center h-full w-fit m-auto'>
                    {showUserType && <UserType details={details} setDetails={setDetails} setUserType={setUserType} setShowUserType={setShowUserType} />}
                    {!showUserType && userType && <SignUpMain
                        details={details}
                        setDetails={setDetails}
                        userNo={userNo}
                        setUserNo={setUserNo}
                        setShowUserType={setShowUserType}
                        handleEmailSignUp={handleEmailSignUp}
                        handleGoogleSignUp={handleGoogleSignUp} />
                    }
                    <p
                    className="text-center text-md font-medium mt-4"
                    >Already have an account. <Link href={'/login'} className='text-[#5fc9f8] underline'>Log In</Link> now</p>
                </div>
            </div>}
        </>
    )
}