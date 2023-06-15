import { useEffect, useState } from "react"
import ProfileForm from "./ProfileForm/ProfileForm"
import { AccountAPI, Client_Account } from "@/lib/accountapi"

const CreatingProfile = () => {
  const [user,setUser] = useState()

  const getSession = () => {
    AccountAPI.getAccount()
    .then((res: any) => {
      setUser(res)
    }).catch((err: any) => console.log(err))
  }

  useEffect(() => {
    getSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Client_Account])

  return (
    <div
    className="bg-[#f3fbfb] text-[#272343] flex w-screen h-screen overflow-hidden justify-center items-center"
    >
        <ProfileForm {...{user}} />
    </div>
  )
}

export default CreatingProfile