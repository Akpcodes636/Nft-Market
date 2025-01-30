"use client";
import { ArrowBigDown } from "lucide-react";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function Input() {
  return (
    <div className="w-[643px] h-[84px] bg-white rounded-[16px] box-shadow: 0px 25px 75px 0px #0607141A;">
      <div className="outline-none border-none flex items-center justify-between">
        <div>
          <input
            type="text"
            placeholder="Items, collections and creators"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center justify-between w-[162px] h-[28px] ">
          <span>Category</span>
          <ArrowBigDown />
        </div>
        <div>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
