import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between">
      <div
        style={{
          position: "relative",
          width: "100vw", // Optional: Set width for full viewport width
          height: "100vh", // Optional: Set height for full viewport height
        }}
        className="flex flex-col items-center justify-center gap-4" // Changed justify-end to justify-center
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('/home.jpg')`,
            backgroundSize: "cover", // Adjust background size as needed
            backgroundPosition: "center", // Adjust background position as needed
            filter: "blur(8px)", // Adjust the blur effect as needed
            zIndex: -1,
          }}
        ></div>

        <div className="absolute top-5">
          <Navbar />
        </div>
        <img src="/tunisia.png" alt="logo" className="h-24 w-24" />
        <strong className="text-[44px] font-bold text-white text-center">
          Explore Tunisia's ancient wonders
        </strong>
        <p className="text-[20px] text-center">
          Step into history with VR tourism and join us now, a lot of fun is
          waiting!
        </p>
        <Link href="/tours">
          <button className="border border-solid border-white text-[20px] mt-12 font-semibold px-4 py-2 rounded-2xl">
            Explorer
          </button>
        </Link>
      </div>
    </main>
  );
}
