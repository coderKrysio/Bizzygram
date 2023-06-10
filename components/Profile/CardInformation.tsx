const CardInformation = () => {
    const inputStyle = "rounded-md border border-slate-300 py-1 px-3 text-lg mb-2 bg-[#bae8e8] text-[#272343] font-medium focus:outline-none focus:ring-[#272343] focus:ring-2 max-[550px]:mb-[20px]";
  
    return (
      <div className="border-b-2 border-slate-300">
          <h3
          className='text-lg font-semibold'
          >Card Information</h3>
  
          <div
          className='flex flex-col p-5 justify-center'
          >
              <div className='grid grid-cols-[150px_minmax(150px,_300px)] items-center gap-[15px] max-[550px]:grid-cols-1 max-[550px]:gap-[5px]'>
                  <p
                  className="text-lg font-medium"
                  >Profession</p>
  
                  <input 
                  className={inputStyle}
                  type='text'
                  value="Student"
                  />
  
                  <p
                  className="text-lg font-medium"
                  >Organisation</p>
  
                  <input 
                  className={inputStyle}
                  type='text'
                  value="VIT Bhopal University"
                  />
  
                  <p
                  className="text-lg font-medium"
                  >Firm Category</p>
  
                  <input 
                  className={inputStyle}
                  type='text'
                  value="Education"
                  />
  
                  <p
                  className="text-lg font-medium"
                  >Contact No</p>
  
                  <input 
                  className={inputStyle}
                  type='text'
                  value="0123456789"
                  />
              </div>
          </div>
      </div>
    )
}
  
export default CardInformation