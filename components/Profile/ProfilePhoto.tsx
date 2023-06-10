const ProfilePhoto = () => {
    return (
      <div
      className="min-[1070px]:hidden flex justify-start items-center gap-[15px]"
      >
          <div 
          className="w-[100px] h-[100px] bg-[#ffd803] rounded-[50px]"
          ></div>
  
          <div>
              <p
              className="text-2xl"
              >John Doe</p>
  
              <p>johndoe@gmail.com</p>
              <p>Individual</p>
          </div>
      </div>
    )
  }
  
  export default ProfilePhoto