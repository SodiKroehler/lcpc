import Image from "next/image";
import Header from "./components/Header"

export default function Home() {
  return (
    <main className="h-full w-full flex-col items-center justify-between bg-white">
      <div className={`absolute top-0 mt-40 w-full bg-fg`}>
        <Header />
      </div>  
      <Image src='/img.jpg' alt='Picture of the funeral home' width={1000} height={1000} className={`h-lvh w-full object-cover`}></Image>
      <div className={`absolute flex-row text-center items-center justify-between bottom-0 w-full p-5 bg-fg`}>
        <div className={`text-center p-5 inline-block`}>
          <p>Panebaker Funeral Home & Cremation Care Center, Inc. </p>
          <p>311 Broadway</p>
          <p>Hanover, PA  17331</p>
          <p>(717) 637-5194 - Phone</p>
          <p>www.PanebakerFuneralHome.com</p>
        </div>  
        <div className={`text-center p-5 inline-block`}>
          <p>Loyal Companion Pet Cremation, Inc. </p>
          <p>43 Amy Way</p>
          <p>Hanover, PA 17331</p>
          <p>(717) 698-1970 - Phone</p>
          <p>www.LoyalCompanionPetCremation.com</p>
        </div>  
      </div>  
    </main>
  );
}
