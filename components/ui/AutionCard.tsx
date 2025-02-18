"use client";
import React from 'react';
import Image from 'next/image';

export default function AutionCard() {
  return (
    <div className="w-[448px] h-[767px] border-[1px] border-[#262840] p-6 rounded-[20px]">
      <div className="w-[400px] h-[520px] mb-6">
        <Image
          src="/image/image.png"
          width={500}
          height={500}
          alt="product image"
          className="rounded-[20px]"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[#FFFFFF] w-[276px] text-[20px]">
          Vulputate felis purus viverra morbi facilisi eget
        </h1>
        <div className="px-[8px] py-[14px] bg-[#514CFF26]">
          <h5 className="text-[#514CFF] text-[16px]">3.19 ETH</h5>
        </div>
      </div>
      <div className="flex items-center justify-start gap-[8px] mb-[28px]">
        <div>
          <Image
            src="/image/clock.png"
            alt="clock picture"
            width={14}
            height={16}
            className="object-contain"
          />
        </div>
        <p className="inter-font font-normal text-[#FFFFFF] text-[14px]">
          2:41 min left
        </p>
      </div>
      <div className="border-b-[1px] border-[#262840] mb-[20px]"></div>
      <div className="flex items-center justify-start">
        <div className="w-[32px] h-[32px] border-5 border-[#060714]">
          <Image
            src="/image/01.png"
            alt="images of the customer"
            width={500}
            height={500}
          />
        </div>
        <div className="w-[32px] h-[32px] border-5 border-[#060714]">
          <Image
            src="/image/01.png"
            alt="images of the customer"
            width={500}
            height={500}
          />
        </div>
        <div className="w-[32px] h-[32px] border-5 border-[#060714]">
          <Image
            src="/image/01.png"
            alt="images of the customer"
            width={500}
            height={500}
          />
        </div>
        <div className="w-[32px] h-[32px]">
          <Image
            src="/image/01.png"
            alt="images of the customer"
            width={500}
            height={500}
            className="border-5 border-[#060714]"
          />
        </div>
      </div>
    </div>
  );
}
