import { useEffect, useState } from 'react'
import Navbar from './Navigation/Navbar'
import SideNavigation from './Navigation/SideNavigation'
import ProfilePanel from './Profile/ProfilePanel'
import Connections from './Connections/Connections'
import UserCard from './UserCard/UserCard'
import UpdateCard from './UpdateCard/UpdateCard'
import Help from './Settings/Help'
import QRCode from './UserCard/QRCode'
import LowerNavigation from './Navigation/LowerNavigation'
import Setting from './Settings/Setting'
import ProfileModal from './Navigation/ProfileModal'
import ScannerModal from './Navigation/ScannerModal'
import { AccountAPI } from '@/lib/accountapi'
import { useRouter } from 'next/navigation'

const UserProfile = () => {
    const router = useRouter();
    const [showProfile, setShowProfile] = useState(false)
    const [showConnections, setShowConnections] = useState(true)
    const [showUserCard, setShowUserCard] = useState(false)
    const [showUpdateCard, setShowUpdateCard] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [showHelp, setShowHelp] = useState(false)
    const [showSetting, setShowSetting] = useState(false)
    const [showQR, setShowQR] = useState(false)
    const [profileModal, setProfileModal] = useState(false)
    const [scannerModal, setScannerModal] = useState(false)
    const [profileIcon, setProfileIcon] = useState(true)
    const [profilePhoto, setProfilePhoto] = useState();
    const [qrCode, setQRCode] = useState();
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        type: "",
    })

    const [cardInfo, setCardInfo] = useState({
        profession: "",
        organisation: "",
        firmType: "",
        contactNo: "",
        socials: [],
    })

    useEffect(()=>{
        AccountAPI.getUserInformation()
        .then((res: any) => {
            if(res.total==0) router.push('/signup')
            const data = res.documents[0]
            setUserDetails((prev: any) => ({
                ...prev,
                name: data.name,
                email: data.email,
                type: data.type,
            }))
            AccountAPI.userInitials(data.name).then((res: any) => {
                setProfilePhoto(res)
            })
        })

        AccountAPI.fetchingProfile()
        .then((res: any) => {
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

        AccountAPI.userQRCode()
        .then((res: any) => setQRCode(res))
    },[])

    useEffect(() => {
        if(showUpdate) {
            <UpdateCard {...{
                setShowUserCard,
                setShowUpdateCard,
                setShowUpdate,
            }}/>
        }
    },[showUpdate])

    return (
        <div 
        className="bg-[#f3fbfb] text-[#272343] flex w-screen h-screen overflow-hidden"
        >
            <Navbar {...{
                profileIcon,
                profilePhoto,
                setScannerModal,
                setProfileModal,
            }}/>

            {scannerModal && <ScannerModal {...{
                setScannerModal
            }}/>}

            {profileModal && <ProfileModal {...{
                setShowProfile,
                setShowConnections,
                setShowUserCard,
                setShowSetting,
                setShowUpdateCard,
                setShowUpdate,
                setShowQR,
            }}/>}

            <SideNavigation {...{
                showProfile,
                setShowProfile,
                showConnections,
                setShowConnections,
                showUserCard,
                setShowUserCard,
                showUpdateCard,
                setShowUpdateCard,
                setShowSetting,
                setShowHelp,
                setShowQR,
                setProfileModal,
                profilePhoto,
                userDetails,
            }}/>

            {showQR ? <QRCode {...{
                qrCode,
            }}/> : 
                showUpdate ? <UpdateCard {...{
                    setShowUserCard,
                    setShowUpdateCard,
                    setShowUpdate,
                    userDetails,
                    cardInfo,
                }}/> :
                <>
                    {showProfile && <ProfilePanel {...{
                        profilePhoto,
                        userDetails,
                        cardInfo,
                        setCardInfo,
                    }}/>}

                    {showConnections && <Connections />}

                    {showUserCard && <UserCard {...{
                        setShowQR,
                        setShowUpdate,
                        userDetails,
                        cardInfo,
                    }}/>}

                    {showUpdateCard && <UpdateCard {...{
                        setShowUserCard,
                        setShowUpdateCard,
                        setShowUpdate,
                    }}/>}

                    {showHelp && <Help />}

                    {showSetting && <Setting {...{
                        setShowConnections,
                        setShowProfile,
                        setShowUserCard,
                        setShowQR,
                        setShowUpdateCard,
                        setShowSetting,
                        setShowHelp,
                        setProfileModal,
                    }}/>}

                </>
            }            

            <LowerNavigation {...{
                showProfile,
                setShowProfile,
                showConnections,
                setShowConnections,
                showUserCard,
                setShowUserCard,
                showSetting,
                setShowSetting,
                setShowQR,
                setShowUpdate,
                setProfileModal,
            }}/>
        </div>
    )
}

export default UserProfile