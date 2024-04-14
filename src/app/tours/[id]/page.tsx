import React from "react";
import Navbar from "@/components/Navbar";
import { getTourById } from "@/data/tours";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const tour = getTourById(Number.parseInt(params.id ?? "1"));
  return (
    <div className="relative w-full h-screen">
      <div className="absolute z-50 top-2 w-full flex flex-row justify-center">
        <Navbar />
      </div>
      <video
        style={{
          position: "absolute", // Make the video positioned absolutely
          top: 0,
          left: 0,
          width: "100vw", // Set width to 100% of the viewport width
          height: "100vh", // Set height to 100% of the viewport height
          objectFit: "cover", // Ensure the video covers the entire viewport
        }}
        muted
        loop
        autoPlay
      >
        <source src={tour.video} type="video/mp4" />
      </video>
      <div className="absolute top-60 flex flex-col gap-8 items-center left-[30%] max-w-[800px]">
        <strong className="text-[48px] text-center font-bold">
          Explore {tour.title}
        </strong>
        <p className="text-[28px] text-center max-w-[600px]">
          {tour.callToAction}
        </p>
        <Link href={tour.vr ? `/vr/${tour.id}` : "#"} target="_blank">
          <button className="px-4 py-2 mt-8 border border-white border-solid rounded-2xl">
            Visit the monument
          </button>
        </Link>
      </div>
    </div>
  );
}
