import React from "react";
import Header from "../header";
import Image from "next/image";
import Input from "../ui/input";
import { Logos } from "../../utils/HomepageContents";

export default function Hero() {
  return (
    <section className="bg-pattern min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        {/* Text Image */}
        <div className="flex items-center justify-center py-12 sm:py-16 lg:pt-[182px] lg:pb-[55px]">
          <Image
            src="/image/Text.png"
            alt="images of the text"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>

        {/* Search Input */}
        <div className="flex items-center justify-center pb-[222px]">
          <Input />
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-[110px]">
          {Logos.map(
            (logo, index) =>
              logo.image && (
                <div
                  key={index}
                  className="w-[60px] h-[30px] sm:w-[75px] sm:h-[40px] lg:w-[85px] lg:h-[45px]"
                >
                  <Image
                    src={logo.image}
                    alt={`logo ${index + 1}`}
                    width={85}
                    height={45}
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
