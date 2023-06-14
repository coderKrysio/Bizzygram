import { TypeValue } from "@/lib/accountapi";

const UserInformation = ({userDetails}: any) => {
    const inputStyle = "rounded-md border border-slate-300 py-1 px-3 text-lg mb-2 bg-[#bae8e8] text-[#272343] font-medium focus:outline-none focus:ring-[#272343] focus:ring-2 max-[550px]:mb-[20px]";

    return (
        <div className="max-[1070px]:hidden border-b-2 border-slate-300">
            <h3
            className='text-lg font-semibold'
            >User Information</h3>
    
            <div
            className='flex flex-col p-5 justify-center'
            >
                <div className='grid grid-cols-[150px_minmax(150px,_300px)] items-center gap-[15px] max-[550px]:grid-cols-1 max-[550px]:gap-[5px]'>
                {TypeValue == "Individual" ? <>
                    <p
                    className="text-lg font-medium"
                    >Name</p>
    
                    <input 
                    className={inputStyle}
                    type="text"
                    value={userDetails.name}
                    readOnly
                    />
                </> : <>
    
                    <p
                    className="text-lg font-medium"
                    >Firm Name</p>
    
                    <input 
                    className={inputStyle}
                    type="text"
                    value={userDetails.name}
                    readOnly
                    />
                </>}
    
                    <p
                    className="text-lg font-medium"
                    >Email</p>
    
                    <input 
                    className={inputStyle}
                    type="email"
                    value={userDetails.email}
                    readOnly
                    />
    
                    <p
                    className="text-lg font-medium"
                    >Type</p>
    
                    <input 
                    className={inputStyle}
                    type="text"
                    value={userDetails.type}
                    readOnly
                    />
                </div>
            </div>
        </div>
    )
}
  
export default UserInformation