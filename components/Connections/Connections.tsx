import ConnectionCard from "./ConnectionCard"

const Connections = () => {
    return (
        <div
        className='flex flex-col gap-[25px] h-screen w-full pt-[85px] p-7 ml-3 max-[1070px]:pb-[70px] max-[470px]:ml-0'
        >
            <div className="flex border-b-2 border-slate-300 pb-5 max-[600px]:grid max-[600px]:grid-cols-1 max-[600px]:gap-[20px]">
                <h1
                className='text-3xl font-semibold '
                >Your Connections</h1>

                <input 
                className="placeholder:text-slate-400 absolute right-0 mr-5 rounded-md border border-slate-300 py-1 px-3 text-lg mb-2 bg-[#bae8e8] text-[#272343] font-medium focus:outline-none focus:ring-[#272343] focus:ring-2 max-[600px]:relative"
                type="text"
                placeholder="Search"
                />
            </div>

            <div
            className="grid grid-cols-2 gap-y-[25px] items-center p-5 w-full h-full overflow-scroll overflow-x-hidden max-[950px]:flex max-[950px]:flex-col max-[950px]:p-0 max-[950px]:items-center max-[400px]:gap-y-[10px]"
            >
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
            </div>
        </div>
    )
}

export default Connections