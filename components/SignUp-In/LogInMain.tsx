import { AccountAPI } from '@/lib/accountapi';
import { UserAPI } from '@/lib/userapi';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LogInMain = ({details, setDetails, userNo, setUserNo, handleGoogleSignUp}: any) => {
    const [btnIcon, setBtnIcon] = useState('/images/eye.png')
    const [gotError, setGotError] = useState(false);
    const [errorType, setErrorType] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [showField, setShowField] = useState(false);
    const [show, setShow] = useState(false)
    const [nextBtn, setNextBtn] = useState(false);

    const handleNextBtn = () => {
        setNextBtn((prev: any) => !prev)        
        if(userNo==0) setErrorType("Account does not exist. Please SignUp.")
    }

    const handleEmailLogIn = () => {
        AccountAPI.emailLogIn(details)
        .then(() => {
            AccountAPI.getAccount()
            .then((res: any) => {
                getUserAccountDetails(res)
                console.log(res)
            })
            // {router.push(`/profile/${details.userId}`)}
        })
        .catch((err: any) => {
            handleLogInError(err)
        });      
    }

    const handleLogInError = (err: any) => {
        setGotError(true)
        if(err == "AppwriteException: Invalid credentials. Please check the email and password.") setErrorType("Invalid credentials. Please check the email and password or Continue with Google")
        else if(err == "AppwriteException: Invalid password: Password must be at least 8 characters") setErrorType("Password must be at least 8 characters")
        else console.log(err)
    }

    const getUserAccountDetails = (response: any) => {
        AccountAPI.getUserDocument(response)
        .then((res: any) => {
            setDetails((prev: any) => ({
                ...prev,
                name: res.documents[0].name,
                userName: res.documents[0].userName,
                type: res.documents[0].type,
            }))
        })
    }

    const handleDetails = (e: any) => {
        const {name, value} = e.target
        setDetails((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    useEffect(() => {
        if(show) {
            setPasswordType("text");
            setBtnIcon('/images/hidden.png');
        } else {
            setPasswordType("password");
            setBtnIcon('/images/eye.png');
        }
    }, [show])

    useEffect(() => {
        if(userNo == 1) {
            setShowField(true);
            setGotError(false)
        }
    }, [userNo])

    useEffect(() => {
        setGotError(true);
    }, [errorType])
    
    useEffect(() => {
        UserAPI.searchUser(details, setUserNo) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextBtn])

    return (
        <div 
        className="grid grid-rows-1 p-5 w-[350px]"
        >
            <div className='h-[30px] mb-5'>
                {showField && <button 
                className='w-fit ml-0'
                onClick={() => setShowField(false)}
                ><Image 
                    src='/images/back.png' 
                    width={25} 
                    height={25}
                    alt='Back'
                /></button>}
            </div>

            <div className='flex flex-col'>
                <h1
                className="text-3xl font-semibold mb-9"
                >Log In</h1>
                
                <button 
                className='flex justify-center items-center border-2 font-semibold border-[#17242a] rounded-md p-3 m-2 mb-5 hover:bg-white hover:font-bold'
                onClick={handleGoogleSignUp}
                >
                    <Image 
                    className='mr-4'
                    src='/images/google.png' 
                    width={25}
                    height={25}
                    alt='Google'
                    />
                    Continue with Google
                </button>

                <p className="text-center font-medium text-lg">OR</p>
                
                <div
                className='relative flex flex-col mt-2 mb-4'
                >
                    {!showField && <>
                        <p
                        className="text-left font-medium tracking-wide mb-1"
                        >Email</p>
                        <input 
                            className="placeholder:text-slate-400 rounded-md w-full border border-slate-300 py-2 pl-3 pr-3 focus:outline-none focus:border-[#5fc9f8] focus:ring-[#5fc9f8] focus:ring-2 mb-2 text-[#17242A] font-medium"
                            placeholder='Enter your email'
                            type='email'
                            name='email'
                            autoComplete="on"
                            onChange={handleDetails}
                        />
                    </>}
                    
                    {showField && <>
                        <p
                        className="text-left font-medium tracking-wide mb-1"
                        >Password</p>
                        <form
                        onSubmit={(e: { preventDefault: () => void; }) => {
                            e.preventDefault()
                        }}
                        className='relative flex justify-center items-center mb-2'
                        >
                            <input 
                                className="placeholder:text-slate-400 rounded-md w-full border border-slate-300 py-2 pl-3 pr-10 focus:outline-none focus:border-[#5fc9f8] focus:ring-[#5fc9f8] focus:ring-2 text-[#17242A] font-medium"
                                placeholder='Enter your password'
                                type={passwordType}
                                name='password'
                                autoComplete="on"
                                onChange={handleDetails}
                            />
                            <button
                            className='w-fit absolute left-[90%] translate-x-[-20%] flex items-center'
                            onClick={() => setShow((prev: any) => !prev)}
                            ><Image 
                                src={btnIcon} 
                                width={25}
                                height={25}
                                alt='Show Password'
                            /></button>
                        </form>
                    </>}
                </div>

                {gotError && <p className="text-center text-md text-red-500 font-medium">
                    {errorType}
                </p>}

                {!showField && <button 
                className='w-fit border-2 font-semibold border-[#17242A] rounded-md px-7 py-2 m-auto mb-5 mt-3 hover:bg-[#ffd803] hover:border-transparent'
                onClick={handleNextBtn}
                >Next</button>}

                {showField && <button 
                className='w-fit border-2 font-semibold border-[#17242A] rounded-md px-7 py-2 m-auto mb-5 mt-3 hover:bg-[#ffd803] hover:border-transparent'
                onClick={handleEmailLogIn}
                >Log In</button>}

                <p
                className='text-center text-md font-medium mt-2'
                >Don&#39;t have an account. <Link 
                href={'/signup'} 
                className='text-[#27b6f6] underline'
                >SignUp</Link> now</p>
            </div>
        </div>
    )
}

export default LogInMain