import React from 'react'

const Help = () => {
    return (
        <div
            className='flex flex-col gap-[25px] h-screen w-full pt-[85px] p-7 ml-3 max-[1070px]:pb-[70px] max-[470px]:ml-0'
            >
                <h1
                className='text-3xl font-semibold border-b-2 border-slate-300 pb-5'
                >Help</h1>

                <p
                className='text-xl font-medium text-center'
                >For any queries, mail us at
                    <br />
                    bizzygram@gmail.com
                </p>
            </div>
    )
}

export default Help