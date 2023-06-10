"use client";
import LogInMain from '@/components/SignUp-In/LogInMain';
import { AccountAPI, Client_Account } from '@/lib/accountapi';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Login() {
    const router = useRouter();
    const [userNo, setUserNo] = useState(0);
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
        })
        .catch((err) => console.log(err));
    }

    const handleGoogleSignUp = () => {
        AccountAPI.googleLogIn()
    } 

    const getAccount =  (response: any) => {
        AccountAPI.getUserDocument(response)
        .then((res) => {
            setDetails((prev: any) => ({
                ...prev,
                name: res.documents[0].name,
                userId: res.documents[0].userId,
                type: res.documents[0].type,
            }))
        })
    }

    useEffect(() => {
        getSession();
    }, [Client_Account])  

    return (
        <div className='flex h-screen w-screen justify-center items-center bg-[#f3fbfb] text-[#272343]'>
            <div className='h-full pt-[30px] w-fit m-auto'>
                {details.userId !="" ? 
                    <>
                        {router.push(`/profile/${details.userId}`)}
                    </>
                    : 
                    <LogInMain 
                        details={details}
                        setDetails={setDetails}
                        userNo={userNo}
                        setUserNo={setUserNo}
                        handleGoogleSignUp={handleGoogleSignUp}
                    />
                }        
            </div>
        </div>
    )
}