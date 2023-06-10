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

// import { AccountAPI, TypeValue } from '@/lib/accountapi'

// const ProfileForm = ({profileDetails , setProfileDetails, setProfileForm}: any) => {
//     function handleChange(e: any) {
//         const {name, value} = e.target
//         setProfileDetails((prev: any) => ({
//             ...prev,
//             [name]: value,
//         }))
//     }

//     const handleNextBtn = () => {
//         setProfileForm(false)
//         AccountAPI.addingNewProfile(profileDetails)
//     }

//     return (
//         <div>
//             {TypeValue == "Individual" ? <>
//                 <input 
//                     type='text' 
//                     placeholder='profession'
//                     name='profession'
//                     onChange={handleChange}
//                 />
//                 <input 
//                     type='text' 
//                     placeholder='organisation'
//                     name='organisation'
//                     onChange={handleChange}
//                 /> 
//             </> :
//             <input 
//                 type='text' 
//                 placeholder='firmType'
//                 name='firmType'
//                 onChange={handleChange}
//             />}
//             <input 
//                 type='text' 
//                 placeholder='contactNo'
//                 name='contactNo'
//                 onChange={handleChange}
//             />
//             <button
//             onClick={handleNextBtn}
//             >next</button>
//             <br /> <br />
//         </div>
//     )
// }

// export default ProfileForm