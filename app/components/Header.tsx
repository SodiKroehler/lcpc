import Link from "next/link";

export default function Header() {
    return (
        <div className={`flex w-full justify-center items-center`}>
            <Link href="/"  className={`text-light p-1`}>
                <span className="text-white">Home</span>
            </Link>
            <Link href="https://www.panebakerfuneralhome.com/plan-ahead/"  className={`text-light p-1`}>
                <span className="text-white">Planning Ahead</span>
            </Link>
            <Link href="https://www.panebakerfuneralhome.com/about-us/cremation-care-center"  className={`text-light p-1`}>
                <span className="text-white">Cremation Options</span>
            </Link>
            <Link href="https://www.panebakerfuneralhome.com/"  className={`text-light p-1`}>
                <span className="text-white">Our Funeral Home</span>
            </Link>
            <Link href="https://www.loyalcompanionpetcremation.com/"  className={`text-light p-1`}>
                <span className="text-white">Our Pet Crematory</span>
            </Link>
        </div>
    )
}