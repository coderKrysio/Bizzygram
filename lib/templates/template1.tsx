import Image from "next/image"
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
                    <Image
                    width={25}
                    height={25}
                    src="/images/website.png"
                    alt="Website"
                    />
                </Link>}
                
                {cardInfo.socials[1] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[1]}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    />
                </Link>}
                
                {cardInfo.socials[2] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[2]}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/twitter.png"
                    alt="Twitter"
                    />
                </Link>}

                {cardInfo.socials[3] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[3]}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/instagram.png"
                    alt="Instagram"
                    />
                </Link>}

                {cardInfo.socials[4] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[4]}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/github.png"
                    alt="Github"
                    />
                </Link>}

                {cardInfo.socials[5] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[5]}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/facebook.png"
                    alt="Facebook"
                    />
                </Link>}

                {cardInfo.socials[6] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[6]}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/discord.png"
                    alt="Discord"
                    />
                </Link>}

                {cardInfo.socials[7] != "" && <Link 
                target="_blank"
                href={cardInfo.socials[7]}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/telegram.png"
                    alt="Telegram"
                    />
                </Link>}

                <Link 
                target="_blank"
                href={`mailto:${userDetails.email}`}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/email.png"
                    alt="Email"
                    />
                </Link>

                {cardInfo.contactNo !="" && <Link 
                target="_blank"
                href={`tel:${cardInfo.contactNo}`}>
                    <Image
                    width={25}
                    height={25}
                    src="/images/phone.png"
                    alt="Contact No"
                    />
                </Link>}
            </div>
        </div>
    )
}

export default Template1