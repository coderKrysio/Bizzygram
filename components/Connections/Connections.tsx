import { useEffect, useState } from "react"
import ConnectionCard from "./ConnectionCard"
import { AccountAPI } from "@/lib/accountapi"

const Connections = ({userDetails}: any) => {
    const [connections, setConnections] = useState(0)
    const [cardDetails, setCardDetails] = useState({
        userId: "",
        card1: "",
        card2: "",
        card3: "",
        card4: "",
        card5: "",
        card6: "",
    })

    useEffect(() => {
        AccountAPI.fetchingCards(userDetails.userId)
        .then((res: any) => {
            if(res.total == 1){
                const data = res.documents[0]
                setCardDetails((prev: any) => ({
                    ...prev,
                    userId: data.userId,
                    card1: data.card1,
                    card2: data.card2,
                    card3: data.card3,
                    card4: data.card4,
                    card5: data.card5,
                    card6: data.card6,
                }))
                if(data.card1 != "") setConnections(1)
            }            
        })
    },[userDetails.userId])

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
            {connections == 0 ? <p
                className='text-xl font-medium'
                >No connections found
            </p> :
            <div
            className="grid grid-cols-2 gap-y-[25px] content-start items-center p-5 w-full h-full overflow-scroll overflow-x-hidden max-[950px]:flex max-[950px]:flex-col max-[950px]:p-0 max-[950px]:items-center max-[400px]:gap-y-[10px]"
            >
                {cardDetails.card1 && <ConnectionCard cardId={cardDetails.card1} />}
                {cardDetails.card2 && <ConnectionCard cardId={cardDetails.card2} />}
                {cardDetails.card3 && <ConnectionCard cardId={cardDetails.card3} />}
                {cardDetails.card4 && <ConnectionCard cardId={cardDetails.card4} />}
                {cardDetails.card5 && <ConnectionCard cardId={cardDetails.card5} />}
                {cardDetails.card6 && <ConnectionCard cardId={cardDetails.card6} />}
            </div>}
        </div>
    )
}

export default Connections