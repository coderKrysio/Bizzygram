const ScannerModal = ({setScannerModal}: any) => {
    return (
        <div className="fixed w-full h-full mt-[60px] pb-[60px] z-20 bg-black bg-opacity-[0.25] flex justify-center items-center">
            <div
            className="relative w-fit h-fit p-8 bg-white flex flex-col justify-center items-center rounded-[16px]"
            >
                <button
                className="absolute right-0 top-0 m-5"
                onClick={() => setScannerModal(false)}
                ><img
                src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686137191/close_uq5hed.png"
                width={"22px"}
                /></button>

                <h1
                className="text-2xl font-semibold mt-5 mb-7"
                >Scan QR Code</h1>

                <div
                className="h-[325px] w-[325px] bg-[#ffd803] rounded-[8px] max-[470px]:w-[275px] max-[470px]:h-[275px]"
                ></div>
            </div>
        </div>
    )
}

export default ScannerModal