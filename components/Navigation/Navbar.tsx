import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = ({
    profileIcon,
    profilePhoto,
    setScannerModal,
    setProfileModal,
}: any) => {

    const router = useRouter()

    return (
        <div
        className='fixed left-0 top-0 flex justify-center items-center w-screen h-[60px] z-10 border-b-[3px] border-slate-300 bg-[#bae8e8] max-[550px]:justify-start'
        >
            <h1
            className='text-2xl tracking-wide font-bold max-[550px]:ml-4 hover:cursor-pointer'
            onClick={() => router.push('/')}
            >Bizzygram</h1>

            <button
            className='hidden absolute right-0 mr-5 rounded-md font-semibold py-1 px-5 hover:bg-[#272343] hover:text-[#f3fbfb] max-[550px]:mr-4'
            >Log Out</button> 

            <div
            className='absolute right-0 mr-5 flex gap-[30px] max-[470px]:gap-[20px]'
            >
            <button><Image
                src='/images/scanner.png'
                width={30}
                height={30}
                onClick={() => setScannerModal((prev: any) => !prev)}
                alt='Scanner'
            /></button>

            {profileIcon && <div
            className='w-[46px] h-[46px] bg-[#fff] rounded-[23px] border-[3px] border-[#272323] hover:cursor-pointer overflow-hidden'
            onClick={() => setProfileModal((prev: any) => !prev)}
            ><Image 
                src={profilePhoto}
                alt='Profile'
                width={46}
                height={46}
            /></div>}
            </div>
            
        </div>
    )
}

export default Navbar