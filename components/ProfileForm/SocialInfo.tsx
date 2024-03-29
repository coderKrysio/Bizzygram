import { AccountAPI } from "@/lib/accountapi"
import { useRouter } from "next/navigation";

const SocialsInfo = ({user, setProfileUser}: any) => {
    const router = useRouter()
    const links: any = ["","", "", "", "", "", "", ""]

    const inputStyle = "rounded-md border border-slate-300 py-1 px-3 text-lg mb-2 bg-[#bae8e8] text-[#272343] font-medium focus:outline-none focus:ring-[#272343] focus:ring-2 max-[550px]:mb-[20px]";

    const handleNextBtn = () => {       
        AccountAPI.updatingSocials(user.$id, links)
        setProfileUser(1)
    }

    return (
        <div className='flex flex-col justify-center items-center overflow-scroll mb-[40px] p-4'>
            <div 
            className='grid grid-cols-[150px_minmax(150px,_300px)] items-center gap-[15px] max-[550px]:grid-cols-1 max-[550px]:gap-[5px]'
            >
                <p
                className='text-xl font-medium'
                >Website</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='Website'
                name='0'
                onChange={(e: any) => {links[0] = e.target.value}}
                />

                <p
                className='text-xl font-medium'
                >LinkedIn</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='LinkedIn'
                name='1'
                onChange={(e: any) => {links[1] = e.target.value}}
                />

                <p
                className='text-xl font-medium'
                >Twitter</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='Twitter'
                name='2'
                onChange={(e: any) => {links[2] = e.target.value}}
                />

                <p
                className='text-xl font-medium'
                >Instagram</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='Instagram'
                name='3'
                onChange={(e: any) => {links[3] = e.target.value}}
                />

                <p              
                className='text-xl font-medium'
                >Github</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='Github'
                name='4'
                onChange={(e: any) => {links[4] = e.target.value}}
                />

                <p              
                className='text-xl font-medium'
                >Facebook</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='Facebook'
                name='5'
                onChange={(e: any) => {links[5] = e.target.value}}
                />

                <p              
                className='text-xl font-medium'
                >Discord</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='Discord'
                name='6'
                onChange={(e: any) => {links[6] = e.target.value}}
                />

                <p              
                className='text-xl font-medium'
                >Telegram</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='Telegram'
                name='7'
                onChange={(e: any) => {links[7] = e.target.value}}
                />
            </div>

            <button
            className='text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-3 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803] max-[1180px]:relative'
            onClick={handleNextBtn}
            >Done</button>
        </div>
    )
}

export default SocialsInfo

