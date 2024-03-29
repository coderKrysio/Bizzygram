const CardInformation = ({
    userDetails,
    cardInfo, 
    setCardInfo,
}: any) => {

    const inputStyle = "rounded-md border border-slate-300 py-1 px-3 text-lg mb-2 bg-[#bae8e8] text-[#272343] font-medium focus:outline-none focus:ring-[#272343] focus:ring-2 max-[550px]:mb-[20px] placeholder:";

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setCardInfo((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }
  
    return (
        <div className="border-b-2 border-slate-300">
            <h3
            className='text-lg font-semibold'
            >Card Information</h3>
    
            <div
            className='flex flex-col p-5 justify-center'
            >
                <div className='grid grid-cols-[150px_minmax(150px,_300px)] items-center gap-[15px] max-[550px]:grid-cols-1 max-[550px]:gap-[5px]'>
                    {userDetails.type == "Individual" ? <>
                        <p
                        className="text-lg font-medium"
                        >Profession</p>
        
                        <input 
                        className={inputStyle}
                        type='text'
                        name="profession"
                        placeholder="Profession"
                        value={cardInfo.profession}
                        onChange={handleChange}
                        />
        
                        <p
                        className="text-lg font-medium"
                        >Organisation</p>
        
                        <input 
                        className={inputStyle}
                        type='text'
                        name="organisation"
                        placeholder="Organisation"
                        value={cardInfo.organisation}
                        onChange={handleChange}
                        /> 
                    </>:
                    <>    
                        <p
                        className="text-lg font-medium"
                        >Firm Category</p>
        
                        <input 
                        className={inputStyle}
                        type='text'
                        name="firmType"
                        placeholder="Firm Type"
                        value={cardInfo.firmType}
                        onChange={handleChange}
                        />
                    </>}
    
                    <p
                    className="text-lg font-medium"
                    >Contact No</p>
    
                    <input 
                    className={inputStyle}
                    type='text'
                    name="contactNo"
                    placeholder="Contact No"
                    value={cardInfo.contactNo}
                    onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}
  
export default CardInformation