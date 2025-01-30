"use client";
import { ArrowBigDown } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Input() {
  return (
    <div className="min-w-[300px] sm:min-w-[400px] lg:min-w-[643px] h-[84px] bg-[#FFFFFF] rounded-[16px] box-shadow: 0px 25px 75px 0px #0607141A;">
      <div className="outline-none border-none flex items-center justify-between p-7">
        <div className="bg-yellow-700 w-[240px] h-[24px]">
          <input
            type="text"
            placeholder="Items, collections and creators"
            className="w-full h-full outline-none"
          />
        </div>
        <div className="flex items-center justify-between w-[162px] h-[28px] border-l-2 border-white-30 p-2">
          <span className="inter-font text-white-90">Category</span>
          <ChevronDown color="grey" />
        </div>
        <div className="">
          <Image
            src="/image/Search.png"
            alt="search icon"
            width={20}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
