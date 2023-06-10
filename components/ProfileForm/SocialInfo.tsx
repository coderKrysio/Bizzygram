import { AccountAPI } from "@/lib/accountapi"

const SocialsInfo = ({setSocialsData}: any) => {
    const links: any = []

    const handleNextBtn = () => {       
        AccountAPI.updatingSocials(links)
        setSocialsData(true)
    }

    return (
        <div>
            <input 
                type='text' 
                placeholder='linkedin'
                name='0'
                onChange={(e: any) => {links[0] = e.target.value}}
            />
            <input 
                type='text' 
                placeholder='twitter'
                name='1'
                onChange={(e: any) => {links[1] = e.target.value}}
            />
            <button
            onClick={handleNextBtn}
            >next</button>
        </div>
    )
}

export default SocialsInfo