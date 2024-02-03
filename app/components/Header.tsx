import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className={`flex w-full justify-center items-center`}>
            <Image src='/logo_with_text.png' alt='Picture of the cremation care center' width={1000} height={1000} className={`h-full w-60 object-cover`}></Image>
            <Link href="/"  className={`text-light p-10 text-lg hover:bg-dark`}>
                <span className="text-white">Home</span>
            </Link>
            <Link href="https://www.panebakerfuneralhome.com/plan-ahead/online-pre-planning-form"  className={`text-light p-10 text-lg hover:bg-dark`}>
                <span className="text-white">Planning Ahead</span>
            </Link>
            <Link href="https://www.panebakerfuneralhome.com/about-us/cremation-care-center"  className={`text-light p-10 text-lg hover:bg-dark`}>
                <span className="text-white">Cremation Options</span>
            </Link>
            <Link href="https://www.panebakerfuneralhome.com/"  className={`text-light p-10 text-lg hover:bg-dark`}>
                <span className="text-white">Our Funeral Home</span>
            </Link>
            <Link href="https://www.loyalcompanionpetcremation.com/"  className={`text-light p-10 text-lg hover:bg-dark`}>
                <span className="text-white">Our Pet Crematory</span>
            </Link>
        </div>
    )
}


///footer with address