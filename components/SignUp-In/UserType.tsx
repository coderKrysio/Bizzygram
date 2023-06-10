import { useEffect, useState } from "react"

const UserType = ({details, setDetails, setUserType, setShowUserType}: any) => {
    const [addBorder1, setAddBorder1] = useState(false)
    const [addBorder2, setAddBorder2] = useState(false)
    const [border1, setBorder1] = useState("");
    const [border2, setBorder2] = useState("");
    const [typeValue, setTypeValue] = useState("");
    const [errMsg, setErrMsg] = useState("");

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
        } else if (typeValue == "Organisation or Local Business") {
            setAddBorder1(false)
            setAddBorder2(prev => !prev)
        }
        setDetails((prev: any) => ({
            ...prev,
            type: typeValue,
        }))
    }, [typeValue])

    const handleUserTypeSubmit = () => {
        if(details.type == "") setErrMsg("Please choose any one option")
        else {
            setShowUserType(false)
            setUserType(true)
            setErrMsg("")
        }
    }

    return (
        <div className="flex flex-col p-5 w-fit h-[472px] max-[675px]:h-fit mt-[30px] mb-[60px]">
            <h3
            className="text-3xl font-medium mb-5 pl-4"
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
                        <img src="https://res.cloudinary.com/db7nrltsv/image/upload/v1685813832/user_uicuhb.png" width={"50px"} />
                        <span
                        className="text-center text-xl font-semibold"
                        >                       
                            Individual
                        </span>
                    </div>
                    
                </div>

                <div
                className={`flex justify-center items-center hover:cursor-pointer border-2 border-[#17242a] rounded-lg m-3 w-[250px] ${border2}`}
                >
                    <div
                    className="flex flex-col justify-center items-center gap-3 w-full h-full p-3"
                    onClick={() => setTypeValue("Organisation or Local Business")}
                    >
                        <img src="https://res.cloudinary.com/db7nrltsv/image/upload/v1685813846/multiple-users-silhouette_y1qxao.png" width={"50px"} />
                        <span
                        className="text-center text-xl font-semibold"
                        >
                            Organisation or Local Business
                        </span>
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