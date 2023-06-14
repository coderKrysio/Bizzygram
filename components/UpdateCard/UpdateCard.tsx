import ColorPalette from "./ColorPalette"
import Themes from "./Themes"

const UpdateCard = ({
    setShowUserCard, 
    setShowUpdate, 
    setShowUpdateCard,
    userDetails,
    cardInfo,
}: any) => {

    const handlePreviewBtn = () => {
        setShowUpdateCard(false)
        setShowUpdate(false)
        setShowUserCard(true)
    }

    return (
        <div
        className='flex flex-col gap-[25px] h-screen w-full pt-[85px] p-7 ml-3 overflow-hidden max-[1070px]:pb-[70px] max-[470px]:ml-0'
        >
            <div className="flex border-b-2 border-slate-300 pb-5">
                <h1
                className='text-3xl font-semibold '
                >Update Card</h1>

                <div className="max-[580px]:hidden absolute right-0 mr-5 flex gap-[30px]">
                    <button
                    className='border-2 border-[#272343] rounded-lg font-semibold py-1 w-[150px] hover:bg-[#ffd803] hover:border-[#ffd803]'
                    onClick={handlePreviewBtn}
                    >Preview</button>

                    <button
                    className='border-2 border-[#272343] rounded-lg font-semibold py-1 w-[150px] hover:bg-[#ffd803] hover:border-[#ffd803]'
                    >Save</button>
                </div>
                
            </div>

            <div className="flex flex-col gap-[35px] overflow-scroll overflow-x-hidden max-[580px]:gap-[20px]">
                <Themes userDetails={userDetails} cardInfo={cardInfo} />
                <ColorPalette />

                <div className="min-[580px]:hidden flex gap-[30px] justify-center items-center">
                    <button
                    className='text-xl w-[150px] font-semibold tracking-wide border-2 border-[#272343] m-2 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803]'
                    onClick={handlePreviewBtn}
                    >Preview</button>

                    <button
                    className='text-xl w-[150px] font-semibold tracking-wide border-2 border-[#272343] m-2 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803]'
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard