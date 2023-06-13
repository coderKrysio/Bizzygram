import { AccountAPI } from "@/lib/accountapi"
import router from "next/router"
import { useState, useEffect } from "react"
import Template1 from "../../lib/templates/template1"

const UserCard = ({setShowQR, setShowUpdate}: any) => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        type: "",
    })

    const [cardInfo, setCardInfo] = useState({
        profession: "",
        organisation: "",
        firmType: "",
        contactNo: "",
        socials: [],
    })
    
    useEffect(()=>{
        AccountAPI.getUserInformation()
        .then((res: any) => {
            if(res.total==0) router.push('/signup')
            const data = res.documents[0]
            setUserDetails((prev: any) => ({
                ...prev,
                name: data.name,
                email: data.email,
                type: data.type,
            }))
        })

        AccountAPI.fetchingProfile()
        .then((res: any) => {
            const data = res.documents[0]
            setCardInfo((prev: any) => ({
                ...prev,
                profession: data.profession,
                organisation: data.organisation,
                firmType: data.firmType,
                contactNo: data.contactNo,
                socials: data.socials,
            }))
        })
    },[])

    return (
        <div
        className='flex flex-col gap-[25px] h-screen w-full pt-[85px] p-7 ml-3 max-[1070px]:pb-[70px] max-[470px]:ml-0'
        >
            <h1
            className='text-3xl font-semibold border-b-2 border-slate-300 pb-5'
            >Your Card</h1>

            <div
            className="flex flex-col justify-center items-center"
            >
                {cardInfo.socials.length != 0 && <div
                className="relative w-[475px] h-[282px] rounded-[16px] m-7 max-[470px]:scale-[0.80] max-[400px]:scale-[0.70] max-[400px]:m-4 bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4]"
                ><Template1 userDetails={userDetails} cardInfo={cardInfo} /></div>}

                <button
                className='text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-5 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803]'
                onClick={() => setShowQR(true)}
                >Get QR Code</button>

                <button
                className='min-[1070px]:hidden text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-4 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803]'
                onClick={() => setShowUpdate(true)}
                >Update</button>
            </div>
        </div>
    )
}

export default UserCard