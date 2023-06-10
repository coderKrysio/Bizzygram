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

const UserProfile = () => {
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

    useEffect(() => {
        if(showUpdate) {
            <UpdateCard 
                setShowUserCard={setShowUserCard}
                setShowUpdateCard={setShowUpdateCard}
                setShowUpdate={setShowUpdate}
            />
        }
    },[showUpdate])

    return (
        <div 
        className="bg-[#f3fbfb] text-[#272343] flex w-screen h-screen overflow-hidden"
        >
            <Navbar
                setScannerModal={setScannerModal}
                setProfileModal={setProfileModal}
            />

            {scannerModal && <ScannerModal 
                setScannerModal={setScannerModal}
            />}

            {profileModal && <ProfileModal
                setShowProfile={setShowProfile}
                setShowConnections={setShowConnections}
                setShowUserCard={setShowUserCard}
                setShowSetting={setShowSetting}
            />}

            <SideNavigation
            showProfile={showProfile}
            setShowProfile={setShowProfile}
            showConnections={showConnections}
            setShowConnections={setShowConnections}
            showUserCard={showUserCard}
            setShowUserCard={setShowUserCard}
            showUpdateCard={showUpdateCard}
            setShowUpdateCard={setShowUpdateCard}
            setShowSetting={setShowSetting}
            setShowHelp={setShowHelp}
            setShowQR={setShowQR}
            setProfileModal={setProfileModal}
            />

            {showQR ? <QRCode /> : 
                showUpdate ? <UpdateCard 
                    setShowUserCard={setShowUserCard}
                    setShowUpdateCard={setShowUpdateCard}
                    setShowUpdate={setShowUpdate}
                /> :
                <>
                    {showProfile && <ProfilePanel />}
                    {showConnections && <Connections />}
                    {showUserCard && <UserCard 
                        setShowQR={setShowQR} 
                        setShowUpdate={setShowUpdate}
                    />}
                    {showUpdateCard && <UpdateCard
                        setShowUserCard={setShowUserCard}
                        setShowUpdateCard={setShowUpdateCard}
                        setShowUpdate={setShowUpdate}
                    />}
                    {showHelp && <Help />}
                    {showSetting && <Setting
                        setShowConnections={setShowConnections}
                        setShowProfile={setShowProfile}
                        setShowUserCard={setShowUserCard}
                        setShowQR={setShowQR}
                        setShowUpdateCard={setShowUpdateCard}
                        setShowSetting={setShowSetting}
                        setShowHelp={setShowHelp}
                        setProfileModal={setProfileModal}
                    />}

                </>
            }            

            <LowerNavigation
                showProfile={showProfile}
                setShowProfile={setShowProfile}
                showConnections={showConnections}
                setShowConnections={setShowConnections}
                showUserCard={showUserCard}
                setShowUserCard={setShowUserCard}
                showSetting={showSetting}
                setShowSetting={setShowSetting}
                setShowQR={setShowQR}
                setShowUpdate={setShowUpdate}
                setProfileModal={setProfileModal}
            />
        </div>
    )
}

export default UserProfile