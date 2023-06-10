import { ColorPalette1, ColorPalette2, ColorPalette3, ColorPalette4 } from "@/lib/colortemplates";

const ColorPalette = () => {
    const paletteStyle = "h-[130px] w-[130px] rounded-[65px] border-[5px] border-[#f3fbfb]";
    const selectedColor = "hover:border-[#17242a]"

    return (
        <div className="border-b-2 border-slate-300 pb-3">
            <h3
            className='text-lg font-semibold'
            >Color Palette</h3>

            <div
            className='grid grid-flow-col gap-[40px] p-5 overflow-hidden mx-[40px] max-[580px]:mx-[5px] max-[580px]:p-3'
            >
                <div
                className={`${paletteStyle} ${ColorPalette1} hover:border-[#17242a] hover:cursor-pointer`}
                ></div>
                <div
                className={`${paletteStyle} ${ColorPalette2} hover:border-[#17242a] hover:cursor-pointer`}
                ></div>
                <div
                className={`${paletteStyle} ${ColorPalette3} hover:border-[#17242a] hover:cursor-pointer`}
                ></div>
                <div
                className={`${paletteStyle} ${ColorPalette4} hover:border-[#17242a] hover:cursor-pointer`}
                ></div>
                <div
                className={paletteStyle}
                ></div>
                <div
                className={paletteStyle}
                ></div>
            </div>
        </div>
    )
}

export default ColorPalette