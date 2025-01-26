"use client";
import Image from "next/image";
import { Roboto_Slab, Roboto, Poppins } from "next/font/google";
import { Dot } from "lucide-react";
import logo from "../public/lfc-logo.png";


const roboto_slab = Roboto_Slab({ weight: ["800"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex gap-6 items-center bg-[url(../public/bgmine.jpg)] bg-center relative justify-center w-full h-[32rem] shadow-lg">
      <div className="absolute inset-0 bg-black/40" > </div> 
      <div className="relative flex items-center gap-8 z-10">
        <Image 
        src={logo} 
        width={120} 
            height={120} 
            alt="LFC Kaduna" 
            className="drop-shadow-md"
          />
          <span className="text-4xl relative flex flex-col items-center justify-center h-fit text-white">
            <span className={`${roboto_slab.className} tracking-widest mb-3`}>
              LIVING FAITH CHURCH, KADUNA.
            </span>
            <hr className="border-2 w-full border-white/80 mb-3" />
            <span className={`${poppins.className} text-[28px]`}>
              APPLICATION FORM FOR MEMBERSHIP OF ACTIVITY UNIT
            </span>
          </span>
        </div>
      </div>
      {/* main selection section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <p className={`${poppins.className} text-2xl font-bold text-center mb-8 text-gray-800`}>
          SELECT THE UNIT YOU WOULD LIKE TO JOIN
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {[
            "Teens Church Technical Crew",
            "Hospitality Unit",
            "Surveillance Unit",
            "Ushering Unit",
            "Crowd Control Unit",
            "Decoration Unit"
          ].map((unit, index) => (
            <div
              key={index}
              onClick={() => window.location.href = '/form'}
              className="w-full py-3 px-6 flex items-center justify-between h-14 
              border-2 border-blue-500 rounded-2xl bg-white hover:bg-blue-50
              transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span className={`text-xl ${roboto.className} text-gray-700`}>
              {unit}
              </span>
              <Dot size={40} className="text-blue-500" />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
