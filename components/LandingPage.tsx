import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({ 
  weight: '500',
  subsets: ['latin'],
})

const LandingPage = () => {
    const router = useRouter();

    return (
        <div
        className={`w-screen h-screen bg-[#8BD3DD] flex justify-center items-center overflow-hidden ${montserrat.className}`}
        >
            <div
            className='absolute top-0 left-0 w-screen h-screen flex justify-center items-start bg-contain overflow-hidden'
            ><Image 
                src='/images/landingpage.png'
                className='max-[550px]:scale-[3] max-[550px]:translate-y-[166px] max-[800px]:scale-[1.5] max-[800px]:translate-y-[92px]'
                alt='cards'
                width={2160}
                height={1000}
            /></div>

            <div className='absolute bottom-0 m-[10px] mb-[70px] flex flex-col gap-[25px] justify-center items-center max-[550px]:mb-[100px]'>
                <h1 className="text-6xl font-semibold text-center">
                    Bizzygram
                </h1>

                <h3 className="text-2xl text-center">
                    Connect with a Tap,
                    <br />
                    Your Network in One Snap!
                </h3>

                <button
                className='bg-[#272343] border-4 border-[#272343] mt-[25px] py-3 px-7 rounded-[56px] text-white text-xl hover:bg-transparent hover:text-[#272343] hover:font-semibold'
                onClick={() => router.push('/signup')}
                >Get Started</button>
            </div>
        </div>
    )
}

export default LandingPage