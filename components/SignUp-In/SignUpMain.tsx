import { useEffect, useState } from "react"
import { UserAPI } from "@/lib/userapi";
import Image from "next/image";

const SignUpMain = ({details, setDetails, userNo, setUserNo, setShowUserType, handleEmailSignUp, handleGoogleSignUp}: any) => {
    const [showOptions, setShowOptions] = useState(false);
    const [btnIcon, setBtnIcon] = useState('/images/eye.png')
    const [gotError, setGotError] = useState(false);
    const [errorType, setErrorType] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [show, setShow] = useState(false)
    const [nextBtn, setNextBtn] = useState(false);

    const handleDetails = (e: any) => {
        const {name, value} = e.target
        setDetails((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleBackBtn = () => {
        if(showOptions) {
            setShowOptions(false)
            setNextBtn(false)
        }
        else setShowUserType(true)
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
            setGotError(true);
            setErrorType("Account already exits. Please Log In.")
        }
    },[userNo])

    useEffect(() => {
        if(nextBtn) setShowOptions(true)
    }, [nextBtn])

    useEffect(() => {
        UserAPI.searchUser(details, setUserNo) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [details.email])

    return (
        <div 
        className="flex flex-col p-5 w-[350px]"
        >
            <div className='h-[30px] mb-5'>
                <button 
                className='w-fit ml-0'
                onClick={handleBackBtn}
                ><Image 
                    src='/images/left-arrow.png' 
                    width={25} 
                    height={25}
                    alt="Back"
                /></button>
            </div>

            <div className='flex flex-col h-[450px]'>        
                <h1
                className="text-3xl font-semibold mb-7"
                >Sign Up</h1>

                <button 
                className='flex justify-center items-center border-2 font-semibold border-[#17242a] rounded-md p-3 m-2 mb-5 hover:bg-white hover:font-bold'
                onClick={handleGoogleSignUp}
                >
                    <Image 
                    className='mr-4'
                    src='/images/google.png' 
                    width={25}
                    height={25}
                    alt="Google"
                    />
                    Continue with Google
                </button>

                <p className="text-center font-medium text-lg">OR</p>

                {!showOptions ? <div className="flex flex-col mt-2">
                    <p
                    className="text-left font-semibold tracking-wide mb-1"
                    >Enter your Name</p>

                    <input 
                    className="placeholder:text-slate-400 rounded-md w-full border border-slate-300 py-2 pl-3 pr-3 focus:outline-none focus:border-[#5fc9f8] focus:ring-[#5fc9f8] focus:ring-2 mb-2 text-[#17242A] font-medium"
                    placeholder='Enter your name'
                    type='text'
                    name='name'
                    autoComplete="on"
                    onChange={handleDetails}
                    />

                    <button 
                    className='w-fit border-2 font-semibold border-[#17242a] rounded-md px-7 py-2 m-auto mb-5 mt-3 hover:bg-[#ffd803] hover:border-transparent'
                    onClick={() => setNextBtn(true)}
                    >Next</button>
                </div>
                :
                <div className="flex flex-col">
                    <div
                    className='relative flex flex-col mt-2 mb-4'
                    >            
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
                        <p
                        className="text-left font-medium tracking-wide mb-1 mt-3"
                        >Password</p>

                        <form
                        onSubmit={(e) => {
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
                            onClick={() => setShow(prev => !prev)}
                            ><Image 
                                src={btnIcon} 
                                width={25}
                                height={25}
                                alt="Show Password"
                            /></button>
                        </form>
                    </div>

                    {gotError && <p className="text-center text-md text-red-500 font-medium">
                        {errorType}
                    </p>}

                    <button 
                    className='w-fit border-2 font-semibold border-[#17242a] rounded-md px-7 py-2 m-auto mb-5 mt-3 hover:bg-[#ffd803] hover:border-transparent'
                    onClick={handleEmailSignUp}>SignUp</button>
                </div>}        
            </div>
        </div>
    )
}

export default SignUpMain