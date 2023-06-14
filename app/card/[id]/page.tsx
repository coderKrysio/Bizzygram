"use client";
import Navbar from '@/components/Navigation/Navbar';
import { AccountAPI } from '@/lib/accountapi';
import Template1 from '@/lib/templates/template1';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Card({params}: any) {
    const router = useRouter()
    const [cardHeading, setCardHeading] = useState("")
    const [cardUser, setCardUser] = useState(false);
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
        AccountAPI.getCardUser(params.id)
        .then((res: any) => {
            if(res.total == 0) {
                setCardHeading("No user found. Please check url.")
                setCardUser(false);
            } else {
                const docData = res.documents[0]
                setUserDetails((prev: any) => ({
                    ...prev,
                    name: docData.name,
                    email: docData.email,
                    type: docData.type,
                }))
                AccountAPI.gettingCardUserProfile(params.id)
                .then((result: any) => {
                    const data = result.documents[0]
                    setCardInfo((prev: any) => ({
                        ...prev,
                        profession: data.profession,
                        organisation: data.organisation,
                        firmType: data.firmType,
                        contactNo: data.contactNo,
                        socials: data.socials,
                    }))
                })
            }
        }).catch((err: any) => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        if(userDetails.name != "") {
            setCardHeading(`${userDetails.name}'s card`)
            setCardUser(true)
        }
    },[userDetails, cardInfo])
    
    return (
        <div>
            <Navbar />
            <div className='flex flex-col h-screen w-screen justify-center items-center bg-[#f3fbfb] text-[#272343] pt-[60px]'>
                <h1
                className='text-3xl font-semibold pb-5'
                >{cardHeading}</h1>

                {cardUser && <div
                className="relative w-[475px] h-[282px] rounded-[16px] m-7 max-[470px]:scale-[0.80] max-[400px]:scale-[0.70] max-[400px]:m-4 bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4]"
                >
                    {cardInfo.socials.length !=0 && <Template1 userDetails={userDetails} cardInfo={cardInfo} />}
                </div>}

                <button
                className='w-fit border-2 font-semibold border-[#17242a] rounded-md px-9 py-3 m-auto mb-3 mt-5 hover:bg-[#ffd803] hover:border-transparent'
                >Add</button>
            </div>
        </div>
    )
}