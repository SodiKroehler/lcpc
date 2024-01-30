import Image from "next/image";
import Header from "./components/Header"

export default function Home() {
  return (
    <main className="h-full w-full flex-col items-center justify-between bg-white">
      <h1 className={`text-fg`}>Coming Soon!</h1>
      {/* <div className={`absolute top-0 py-5 mt-20 w-full bg-fg`}>
        <Header />
      </div>  
      <Image src='/img.png' alt='Picture of the funeral home' width={1000} height={1000} className={`h-lvh w-full object-cover`}></Image> */}
    </main>
  );
}
