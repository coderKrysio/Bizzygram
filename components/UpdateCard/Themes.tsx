import Template1 from "@/lib/templates/template1";

const Themes = ({
    userDetails, 
    cardInfo
}: any) => {

    const themeStyle = "absolute -top-[66px] -left-[108px] w-[475px] h-[282px] bg-[#ffd803] rounded-xl scale-[0.55] z-20 hover:cursor-pointer";

    return (
        <div className="border-b-2 border-slate-300 pb-3">
            <h3
            className='text-lg font-semibold '
            >Themes</h3>

            <div
            className='flex p-5 mx-[40px]'
            >
                <div className="relative w-[262px] h-[155px]">
                    <div
                    className={themeStyle}
                    ><Template1 {...{
                        userDetails,
                        cardInfo,
                    }}/></div>
                </div>
                
            </div>
        </div>
    )
}

export default Themes