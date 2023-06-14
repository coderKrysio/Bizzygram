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
        // AccountAPI.getUserInformation()
        // .then((res: any) => {
        //     if(res.total==0) router.push('/signup')
        //     const data = res.documents[0]
        //     setUserDetails((prev: any) => ({
        //         ...prev,
        //         name: data.name,
        //         email: data.email,
        //         type: data.type,
        //     }))
        // })

        // AccountAPI.fetchingProfile()
        // .then((res: any) => {
        //     const data = res.documents[0]
        //     setCardInfo((prev: any) => ({
        //         ...prev,
        //         profession: data.profession,
        //         organisation: data.organisation,
        //         firmType: data.firmType,
        //         contactNo: data.contactNo,
        //         socials: data.socials,
        //     }))
        // })

        AccountAPI.getCardUser(params.id)
        .then((res: any) => {
            console.log(res.total,"users")
            if(res.total == 0) {
                setCardHeading("No user found. Please check url.")
                setCardUser(false);
            }
        })
        // console.log(params.id)
    },[])
    
    return (
        <div>
            <Navbar />
            <div className='flex h-screen w-screen justify-center items-center bg-[#f3fbfb] text-[#272343] pt-[60px]'>
                <h1
                className='text-3xl font-semibold pb-5'
                >{cardHeading}</h1>

                {cardUser && <><div
                className="relative w-[475px] h-[282px] rounded-[16px] m-7 max-[470px]:scale-[0.80] max-[400px]:scale-[0.70] max-[400px]:m-4 bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4]"
                >
                    {/* <Template1 userDetails={userDetails} cardInfo={cardInfo} /> */}
                </div></>}
            </div>
        </div>
    )
}