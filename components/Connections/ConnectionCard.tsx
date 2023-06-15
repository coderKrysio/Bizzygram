import { AccountAPI } from "@/lib/accountapi"
import Template1 from "@/lib/templates/template1"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const ConnectionCard = ({cardId}: any) => {
    const router = useRouter()
    const themeStyle = "absolute -top-[44px] -left-[73px] w-[475px] h-[282px] bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] rounded-xl scale-[0.7] z-20";
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        type: "",
        userId: "",
    })

    const [cardInfo, setCardInfo] = useState({
        profession: "",
        organisation: "",
        firmType: "",
        contactNo: "",
        socials: [],
    })

    useEffect(() => {
        AccountAPI.getUserCardDocument(cardId).then((res: any) => {
          console.log(res, "user")
          const data = res.documents[0]
          setUserDetails((prev: any) => ({
              ...prev,
              name: data.name,
              email: data.email,
              type: data.type,
              userId: data.userId,
          }))
        })

        AccountAPI.fetchingProfile(cardId).then((res: any) => {
          console.log(res,"profile")
          if(res.total != 0) {
              const data = res.documents[0]
              setCardInfo((prev: any) => ({
                  ...prev,
                  profession: data.profession,
                  organisation: data.organisation,
                  firmType: data.firmType,
                  contactNo: data.contactNo,
                  socials: data.socials,
              }))
          }
        })
        console.log(userDetails)
        console.log(cardInfo)      
    },[])
    console.log(userDetails)
    console.log(cardInfo)

    return (
      <div
      className="h-[225px] w-[375px] m-auto flex flex-col justify-center items-center max-[470px]:scale-[0.87] max-[400px]:scale-[0.85] max-[470px]:m-0"
      >
          <div 
          onClick={() => router.push(`/card/${cardId}`)}
          className="relative w-[333px] h-[198px] rounded-lg hover:cursor-pointer">
              {userDetails.name != "" && <div
              className={themeStyle}
              ><Template1 {...{
                  userDetails,
                  cardInfo,
              }}/></div>}
          </div>
      </div>
    )
  }
  
  export default ConnectionCard