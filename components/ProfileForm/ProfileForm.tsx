import CardInfo from "./CardInfo"

const ProfileForm = () => {
  return (
    <div className="flex flex-col gap-[10px] p-5 h-screen">
        <h1
        className="text-3xl font-semibold tracking-wide mt-9"
        >Setting your Profile</h1>

        <p
        className="mb-4"
        >Kindly enter your information to complete your profile setup.</p>

        <CardInfo />
    </div>
  )
}

export default ProfileForm