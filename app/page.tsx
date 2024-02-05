import Image from "next/image";
import Header from "./components/Header"

export default function Home() {
  return (
    <main className="h-full w-full flex-col items-center justify-between bg-white">
      
      <div className={`absolute top-0 mt-40 w-full`}>
        <Header />
      </div>  
      <Image src='/img.jpg' alt='Picture of the funeral home' width={1000} height={1000} className={`h-lvh w-full object-cover`}></Image>
      <div className={`flex-row text-center bg-fg items-center justify-around w-full p-5`}>
        <div className={`text-center p-5 inline-block`}>
          <p className={`text-light`} >Panebaker Funeral Home & Cremation Care Center, Inc. </p>
          <p className={`text-light`} >C. Michael Newman, Supervisor </p>
          <p className={`text-light`} >311 Broadway</p>
          <p className={`text-light`} >Hanover, PA  17331</p>
          <p className={`text-light`} >(717) 637-5194 - Phone</p>
          <p className={`text-light`} >www.PanebakerFuneralHome.com</p>
        </div>  
        <Image src='/selected_independent.png' alt='Selected Indended Funeral Homes Logo' width={1000} height={1000} className={`w-32 -top-16 mx-60 relative inline object-cover`}></Image>
        <div className={`text-center p-5 inline-block`}>
          <p className={`text-light`} >Loyal Companion Pet Cremation, Inc. </p>
          <p className={`text-light`} >Kristin K. Newman, General Manager</p>
          <p className={`text-light`} >43 Amy Way</p>
          <p className={`text-light`} >Hanover, PA 17331</p>
          <p className={`text-light`} >(717) 698-1970 - Phone</p>
          <p className={`text-light`} >www.LoyalCompanionPetCremation.com</p>
        </div>  
      </div>  
    </main>
  );
}
