"use client";
import React from "react";
import Header from "../header";

export default function Hero() {
  const circles = [
    { size: "w-[300px] h-[300px]", opacity: "opacity-[0.03]" },
    { size: "w-[450px] h-[450px]", opacity: "opacity-[0.03]" },
    { size: "w-[630px] h-[630px]", opacity: "opacity-[0.02]" },
    { size: "w-[818px] h-[818px]", opacity: "opacity-[0.02]" },
    { size: "w-[990px] h-[990px]", opacity: "opacity-[0.01]" },
    { size: "w-[1144px] h-[1144px]", opacity: "opacity-[0.01]" },
    { size: "w-[1300px] h-[1300px]", opacity: "opacity-[0.01]" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#070B16]">
      <Header />

      {/* Gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#070B16]/50" />

      {/* Circles container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`${circle.size} ${circle.opacity} border border-white/10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm`}
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.005) 100%)",
              boxShadow: "0 0 75px 15px rgba(255,255,255,0.01)",
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto relative z-10 pt-20">
        <div className="text-center">
          <h1 className="text-white text-6xl font-bold mb-4">
            A new NFT Experience
          </h1>
          <p className="text-gray-400 text-xl">Discover, collect and sell</p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-2 flex items-center">
              <input
                type="text"
                placeholder="Items, collections and creators"
                className="w-full bg-transparent border-none outline-none text-white px-4 py-2"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
