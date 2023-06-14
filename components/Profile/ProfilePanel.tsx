import UserInformation from './UserInformation'
import CardInformation from './CardInformation'
import SocialInformation from './SocialInformation'
import ProfilePhoto from './ProfilePhoto'
import { AccountAPI } from '@/lib/accountapi'

const ProfilePanel = ({
    profilePhoto,
    userDetails,
    cardInfo,
    setCardInfo,
}: any) => {

    const updateProfile = () => {
        AccountAPI.updatingProfile(cardInfo)
    }
    
    return (
        <div
        className='flex flex-col gap-[25px] h-screen w-full pt-[85px] p-7 ml-3 max-[1070px]:pb-[70px] max-[470px]:ml-0'
        >
            <h1
            className='text-3xl font-semibold border-b-2 border-slate-300 pb-5'
            >Profile</h1>

            <div className='grid grid-flow-row grid-cols-[minmax(500px,_1fr)_250px] overflow-hidden mt-3 max-[1180px]:grid-cols-1'>
                <div
                className='flex flex-col gap-[35px] overflow-scroll overflow-x-hidden'
                >
                    <ProfilePhoto profilePhoto={profilePhoto} userDetails={userDetails} />
                    <UserInformation userDetails={userDetails} />
                    <CardInformation cardInfo={cardInfo} setCardInfo={setCardInfo} />
                    <SocialInformation cardInfo={cardInfo} />

                    <button
                    className='min-[1070px]:hidden text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-auto mb-5 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803] max-[1180px]:relative'
                    onClick={updateProfile}
                    >Save</button>
                </div>

                <div
                className='w-[250px] flex flex-col items-center p-8 max-[1180px]:absolute max-[1180px]:right-0 max-[1180px]:mr-[40px] max-[1180px]:bg-[#f3fbfb] max-[1070px]:hidden'
                >
                    <div
                    className='w-[200px] h-[200px] rounded-[100px] bg-[#fff] overflow-hidden'
                    ><img 
                        src={profilePhoto}
                        alt='Profile'
                    /></div>

                    <button
                    className='absolute bottom-0 mb-7 text-xl w-fit font-semibold tracking-wide border-2 border-[#272343] m-5 px-7 py-2 rounded-xl hover:bg-[#ffd803] hover:border-[#ffd803] max-[1180px]:relative'
                    onClick={updateProfile}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePanel