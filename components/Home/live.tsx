"use client";
import React from 'react'
import AutionCard from '../ui/AutionCard';

export default function Live() {
  return (
    <section className="pt-[65px] min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-white-10 text-center text-3xl mb-[117px]">Latest live auctions</h1>
        <div>
            <AutionCard />
        </div>
      </div>
    </section>
  );
}
