import Image from "next/image"

const ProfilePhoto = ({
    profilePhoto, 
    userDetails
}: any) => {
    return (
        <div
        className="min-[1070px]:hidden flex justify-start items-center gap-[15px]"
        >
            <div 
            className="w-[100px] h-[100px] bg-[#fff] rounded-[50px] overflow-hidden"
            ><Image 
                src={profilePhoto}
                alt="Profile"
                width={100}
                height={100}
            /></div>
    
            <div>
                <p
                className="text-2xl"
                >{userDetails.name}</p>
    
                <p>{userDetails.email}</p>
                <p>{userDetails.type}</p>
            </div>
        </div>
    )
}
  
export default ProfilePhoto