import Image from "next/image";
import { useEffect, useState } from "react"

const UserType = ({details, setDetails, setUserType, setShowUserType}: any) => {
    const [addBorder1, setAddBorder1] = useState(false)
    const [addBorder2, setAddBorder2] = useState(false)
    const [border1, setBorder1] = useState("");
    const [border2, setBorder2] = useState("");
    const [typeValue, setTypeValue] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const handleUserTypeSubmit = () => {
        if(details.type == "") setErrMsg("Please choose any one option")
        else {
            setShowUserType(false)
            setUserType(true)
            setErrMsg("")
        }
    }

    useEffect(() => {
        if(addBorder1) setBorder1("border-4")
        else setBorder1("")
    }, [addBorder1])

    useEffect(() => {
        if(addBorder2) setBorder2("border-4")
        else setBorder2("")
    }, [addBorder2])
    
    useEffect(() => {
        if(typeValue == "Individual") { 
            setAddBorder2(false)
            setAddBorder1(prev => !prev)
            setDetails((prev: any) => ({
            ...prev,
            type: typeValue,
        }))
        } else if (typeValue == "Organisation or Local Business") {
            setAddBorder1(false)
            setAddBorder2(prev => !prev)
            setDetails((prev: any) => ({
            ...prev,
            type: typeValue,
        }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeValue])

    return (
        <div className="flex flex-col p-5 w-fit h-[472px] max-[675px]:h-fit mt-[30px] mb-[60px]">
            <h3
            className="text-center text-3xl font-semibold mb-5 pl-4"
            >Select user type</h3>

            <div
            className="grid grid-rows-1 grid-flow-col gap-x-8 max-[675px]:grid-rows-2 p-3 w-fit"
            >
                <div
                className={`flex justify-center items-center hover:cursor-pointer border-2 border-[#17242a] rounded-lg m-3 w-[250px] ${border1}`}
                >
                    <div
                    className="flex flex-col justify-center items-center gap-3 w-full h-full p-3"
                    onClick={() => setTypeValue("Individual")}
                    >
                        <Image 
                        src="/images/user.png" 
                        alt="Individual"
                        width={50}
                        height={50}
                        />
                        <span
                        className="text-center text-xl font-semibold"
                        >Individual</span>
                    </div>
                    
                </div>

                <div
                className={`flex justify-center items-center hover:cursor-pointer border-2 border-[#17242a] rounded-lg m-3 w-[250px] ${border2}`}
                >
                    <div
                    className="flex flex-col justify-center items-center gap-3 w-full h-full p-3"
                    onClick={() => setTypeValue("Organisation or Local Business")}
                    >
                        <Image 
                        src="/images/multiple-users.png" 
                        alt="Organisation or Local Business"
                        width={50} 
                        height={50}
                        />
                        <span
                        className="text-center text-xl font-semibold"
                        >Organisation or Local Business</span>
                    </div>
                    
                </div>
            </div>

            <p
            className="text-center text-md text-red-500 font-medium"
            >{errMsg}</p>

            <button 
            className='w-fit border-2 font-semibold border-[#17242a] rounded-md px-9 py-3 m-auto mb-3 mt-5 hover:bg-[#ffd803] hover:border-transparent'
            onClick={handleUserTypeSubmit}>Next</button>
        </div>
    )
}

export default UserType