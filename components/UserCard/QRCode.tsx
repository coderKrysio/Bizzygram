import Image from "next/image"

const QRCode = ({qrCode}: any) => {
    
    return (
        <div
        className='flex flex-col gap-[25px] h-screen w-full pt-[85px] p-7 ml-3 max-[1070px]:pb-[70px] max-[470px]:ml-0'
        >
            <h1
            className='text-3xl font-semibold border-b-2 border-slate-300 pb-5'
            >QR Code</h1>
    
            <div className="flex flex-col justify-center items-center">
                <div
                className="w-[250px] h-[250px] bg-white m-7"
                ><Image 
                    src={qrCode}
                    alt="QR Code"
                    width={250}
                    height={250}
                /></div>
    
                <div className="flex gap-[30px] max-[440px]:flex-col max-[440px]:gap-[5px] justify-center items-center">
                    <button
                    className='text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-5 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803]'
                    ><a
                        href={qrCode}
                        target="_blank"
                        >Download</a>
                    </button>
    
                    {/* <button
                    className='text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-5 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803]'
                    >Share</button> */}
                </div>
            </div>
      </div>
    )
  }
  
  export default QRCode