import Link from "next/link"

const Template1 = ({scale}: any) => {
    return (
        <div
        className={`relative w-full h-full p-5 flex flex-col rounded-[16px] justify-center items-center backdrop-blur-lg bg-gradient-to-br from-[#ffffff66] to-[#ffffff33] ${scale}`}
        >
            <div
            className="flex flex-col justify-center items-center mb-[20px]"
            >
                <h1
                className="text-4xl font-bold text-white"
                >John Doe</h1>

                <h3
                className="text-lg font-medium"
                >Student</h3>

                <p
                className="text-md font-medium"
                >VIT Bhopal University</p>

                <Link 
                className="text-sm font-medium" 
                href={"https://google.com"} 
                target="_blank"
                >johndoe.com</Link>
            </div>

            <div
            className="absolute bottom-0 w-full flex justify-center items-center gap-[25px] pt-[10px] pb-[20px]"
            >
                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288647/linkedin_b20ye2.png"
                    />
                </Link>
                
                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288648/twitter_q1bm12.png"
                    />
                </Link>

                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288648/instagram_d9iojt.png"
                    />
                </Link>

                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288650/github_ddqtuo.png"
                    />
                </Link>

                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288872/facebook-app-symbol_flf5yh.png"
                    />
                </Link>

                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288873/discord_ftcfae.png"
                    />
                </Link>

                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288874/telegram_pgcok3.png"
                    />
                </Link>

                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686312654/email_tajpoz.png"
                    />
                </Link>

                <Link 
                target="_blank"
                href={"https://github.com/coderKrysio"}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686354043/phone-call_nad0u4.png"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Template1