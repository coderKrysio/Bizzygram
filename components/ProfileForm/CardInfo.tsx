import { AccountAPI, TypeValue } from '@/lib/accountapi'
import { useState } from 'react'


const CardInfo = ({setOpenSocials}: any) => {
    const [profileDetails, setProfileDetails] = useState({
        contactNo: "",
        profession: "",
        organisation: "",
        firmType: "",
    })

    function handleChange(e: any) {
        const {name, value} = e.target
        setProfileDetails((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleNextBtn = () => {
        setOpenSocials(true)
        AccountAPI.addingNewProfile(profileDetails)
    }

    const inputStyle = "rounded-md border border-slate-300 py-1 px-3 text-lg mb-2 bg-[#bae8e8] text-[#272343] font-medium focus:outline-none focus:ring-[#272343] focus:ring-2 max-[550px]:mb-[20px]";

    return (
        <div className='flex flex-col justify-center items-center'>
            <div 
            className='grid grid-cols-[150px_minmax(150px,_300px)] items-center gap-[15px] max-[550px]:grid-cols-1 max-[550px]:gap-[5px]'
            >
                {TypeValue == "Individual" ? <>
                    <p
                    className='text-xl font-medium'
                    >Profession</p>
                    <input
                    className={inputStyle}
                    type='text'
                    placeholder='Profession'
                    name='profession'
                    onChange={handleChange}
                    />

                    <p
                    className='text-xl font-medium'
                    >Organisation</p>
                    <input
                    className={inputStyle}
                    type='text'
                    placeholder='Organisation'
                    name='organisation'
                    onChange={handleChange}
                    />
                </>:
                <>
                    <p
                    className='text-xl font-medium'
                    >Firm Type</p>
                    <input
                    className={inputStyle}
                    type='text'
                    placeholder='Firm Category'
                    name='firmType'
                    onChange={handleChange}
                    />
                </>}

                <p
                className='text-xl font-medium'
                >Contact No</p>
                <input
                className={inputStyle}
                type='text'
                placeholder='Contact No'
                name='contactNo'
                onChange={handleChange}
                />
            </div>

            <button
            className='text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-7 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803] max-[1180px]:relative'
            onClick={handleNextBtn}
            >Next</button>
        </div>
    )
}

export default CardInfo