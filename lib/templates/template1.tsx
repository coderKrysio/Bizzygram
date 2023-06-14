import Link from "next/link"

const Template1 = ({scale, userDetails, cardInfo}: any) => {
    return (
        <div
        className={`relative w-full h-full p-5 flex flex-col rounded-[16px] justify-center items-center backdrop-blur-lg bg-gradient-to-br from-[#ffffff66] to-[#ffffff33] ${scale}`}
        >
            <div
            className="flex flex-col justify-center items-center mb-[15px]"
            >
                <h3
                className="text-2xl font-bold"
                >{userDetails.name}</h3>

                <h3
                className="text-lg font-medium"
                >{cardInfo.profession}</h3>

                <p
                className="text-md font-medium"
                >{cardInfo.organisation}</p>
            </div>

            <div
            className="absolute bottom-0 mb-5 w-full flex justify-center items-center gap-[25px]"
            >
                {cardInfo.socials[0] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[0]}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686664678/web_gcandf.png"
                    alt="Website"
                    />
                </Link>}
                
                {cardInfo.socials[1] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[1]}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288647/linkedin_b20ye2.png"
                    alt="LinkedIn"
                    />
                </Link>}
                
                {cardInfo.socials[2] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[2]}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288648/twitter_q1bm12.png"
                    alt="Twitter"
                    />
                </Link>}

                {cardInfo.socials[3] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[3]}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288648/instagram_d9iojt.png"
                    alt="Instagram"
                    />
                </Link>}

                {cardInfo.socials[4] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[4]}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288650/github_ddqtuo.png"
                    alt="Github"
                    />
                </Link>}

                {cardInfo.socials[5] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[5]}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288872/facebook-app-symbol_flf5yh.png"
                    alt="Facebook"
                    />
                </Link>}

                {cardInfo.socials[6] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[6]}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288873/discord_ftcfae.png"
                    alt="Discord"
                    />
                </Link>}

                {cardInfo.socials[7] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[7]}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686288874/telegram_pgcok3.png"
                    alt="Telegram"
                    />
                </Link>}

                <Link 
                target="_blank"
                href={`mailto:${userDetails.email}`}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686312654/email_tajpoz.png"
                    alt="Email"
                    />
                </Link>

                {cardInfo.contactNo !="" && <Link 
                target="_blank"
                href={`tel:${cardInfo.contactNo}`}>
                    <img
                    width={"25px"}
                    src="https://res.cloudinary.com/db7nrltsv/image/upload/v1686354043/phone-call_nad0u4.png"
                    alt="Contact No"
                    />
                </Link>}
            </div>
        </div>
    )
}

export default Template1