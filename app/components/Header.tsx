import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
            <div className={`flex w-full bg-sec items-center justify-center`}>
                <div className={`flex inline-block`}>
                    <Link href="https://www.panebakerfuneralhome.com/plan-ahead/online-pre-planning-form"  className={`text-fg`}>
                        <p className={`text-fg p-10 text-lg in-line hover:bg-fg hover:text-light`}>Planning Ahead</p>
                    </Link>
                    <Link href="https://www.panebakerfuneralhome.com/about-us/cremation-care-center"  className={`text-fg`}>
                        <p className="text-fg p-10 text-lg in-line hover:bg-fg hover:text-light">Cremation Options</p>
                    </Link>
                </div>

                <div className={`flex w-40 inline-block`}></div>
                <Image src='/logo_just_lamp.png' alt='Picture of the cremation care center' width={1000} height={1000} className={`w-48 z-10 absolute -top-16 leftobject-cover`}></Image>

                <div className={`flex inline-block`}>
                    
                    <Link href="https://www.panebakerfuneralhome.com/"  className={`text-fg `}>
                        <p className="text-fg p-10 text-lg in-line hover:bg-fg hover:text-light">Our Funeral Home</p>
                    </Link>
                    <Link href="https://www.loyalcompanionpetcremation.com/"  className={`text-fg`}>
                        <p className={`text-fg p-10 text-lg in-line hover:bg-fg hover:text-light`}>Our Pet Crematory</p>
                    </Link>
                </div>
            </div>
    )
}


///footer with address