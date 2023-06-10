import React from 'react'

const Navbar = ({setScannerModal, setProfileModal}: any) => {
    return (
        <div
        className='fixed left-0 top-0 flex justify-center items-center w-screen h-[60px] z-10 border-b-[3px] border-slate-300 bg-[#bae8e8] max-[550px]:justify-start max-[1070px]:bg-[#ffe65b]'
        >
            <h1
            className='text-2xl tracking-wide font-bold max-[550px]:ml-4'
            >Bizzygram</h1>

            <button
            className='hidden absolute right-0 mr-5 rounded-md font-semibold py-1 px-5 hover:bg-[#272343] hover:text-[#f3fbfb] max-[550px]:mr-4'
            >Log Out</button> 

            <div
            className='absolute right-0 mr-5 flex gap-[30px] max-[470px]:gap-[20px]'
            >
            <button><img
                src='https://res.cloudinary.com/db7nrltsv/image/upload/v1686135910/barcode-scanner_jhr8js.png'
                width={"30px"}
                onClick={() => setScannerModal((prev: any) => !prev)}
            /></button>

            <div
            className='w-[44px] h-[44px] bg-[#ffd803] rounded-[22px] border-[3px] border-red-500 hover:border-[#272323] hover:cursor-pointer focus:border-[#272323]'
            onClick={() => setProfileModal((prev: any) => !prev)}
            ></div>
            </div>
            
        </div>
    )
}

export default Navbar