import React from 'react'

const CardInfo = () => {
    const inputStyle = "rounded-md border border-slate-300 py-1 px-3 text-lg mb-2 bg-[#bae8e8] text-[#272343] font-medium focus:outline-none focus:ring-[#272343] focus:ring-2 max-[550px]:mb-[20px]";

    return (
        <div className='flex flex-col justify-center items-center'>
            <div 
            className='grid grid-cols-[150px_minmax(150px,_300px)] items-center gap-[15px] max-[550px]:grid-cols-1 max-[550px]:gap-[5px]'
            >
                <p
                className='text-xl font-medium'
                >Profession</p>
                <input
                className={inputStyle}
                value={"Student"}
                type='text'
                />

                <p
                className='text-xl font-medium'
                >Organisation</p>
                <input
                className={inputStyle}
                value={"VIT Bhopal University"}
                type='text'
                />

                <p
                className='text-xl font-medium'
                >Firm Type</p>
                <input
                className={inputStyle}
                value={"Education"}
                type='text'
                />

                <p
                className='text-xl font-medium'
                >Contact No</p>
                <input
                className={inputStyle}
                value={"0123456789"}
                type='text'
                />
            </div>

            <button
            className='text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-7 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803] max-[1180px]:relative'
            >Next</button>
        </div>
    )
}

export default CardInfo