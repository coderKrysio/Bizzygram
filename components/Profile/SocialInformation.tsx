const SocialInformation = () => {
    const inputStyle = "rounded-md border border-slate-300 py-1 px-3 text-lg mb-2 bg-[#bae8e8] text-[#272343] font-medium focus:outline-none focus:ring-[#272343] focus:ring-2 max-[550px]:mb-[20px]";
  
    return (
        <div className="border-b-2 border-slate-300">
            <h3
            className='text-lg font-semibold'
            >Social Information</h3>
    
            <div
            className='flex flex-col p-5 justify-center'
            >
                <div className='grid grid-cols-[150px_minmax(150px,_300px)] items-center gap-[15px] max-[550px]:grid-cols-1 max-[550px]:gap-[5px]'>
                <p
                    className="text-lg font-medium"
                    >Portfolio</p>
    
                    <input 
                    className={inputStyle}
                    type='url'
                    value="johndoe.com"
                    />
    
                    <p
                    className="text-lg font-medium"
                    >LinkedIn</p>
    
                    <input 
                    className={inputStyle}
                    type='url'
                    value="johndoe.com"
                    />
    
                    <p
                    className="text-lg font-medium"
                    >Twitter</p>
    
                    <input 
                    className={inputStyle}
                    type='url'
                    value="johndoe.com"
                    />
    
                    <p
                    className="text-lg font-medium"
                    >Instagram</p>
    
                    <input 
                    className={inputStyle}
                    type='url'
                    value="johndoe.com"
                    />
    
                    <p
                    className="text-lg font-medium"
                    >Github</p>
    
                    <input 
                    className={inputStyle}
                    type='url'
                    value="johndoe.com"
                    />
    
                    <p
                    className="text-lg font-medium"
                    >Facebook</p>
    
                    <input 
                    className={inputStyle}
                    type='url'
                    value="johndoe.com"
                    />
    
                    <p
                    className="text-lg font-medium"
                    >Discord</p>
    
                    <input 
                    className={inputStyle}
                    type='url'
                    value="johndoe.com"
                    />
    
                    <p
                    className="text-lg font-medium"
                    >Telegram</p>
    
                    <input 
                    className={inputStyle}
                    type='url'
                    value="johndoe.com"
                    />
                </div>
            </div>
      </div>
    )
}
  
export default SocialInformation