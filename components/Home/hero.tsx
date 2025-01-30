import React from 'react'
import Header from '../header'
import Image from 'next/image'
import Input from '../ui/input';

export default function Hero() {
  return (
    <section className="bg-pattern min-h-screen">
      <div className="container mx-auto">
        <Header />
        <div className="flex items-center justify-center pt-[182px] pb-[55px]">
          <Image
            src="/image/Text.png"
            alt="images of the text"
            width={500}
            height={500}
          />
        </div>
        <div className="flex items-center justify-center pb-[222px]">
          <Input />
        </div>
        <div className="flex items-center justify-center gap-[110px]">
          <div className="w-[85px] h-[45px] object-cover">
            <Image
              src="/image/RitterSport.png"
              alt="logos"
              width={500}
              height={500}
            />
          </div>
          <div className="w-[85px] h-[45px] object-cover">
            <Image src="/image/Vector.png" alt="logos" width={500} height={500} />
          </div>
          <div className='w-[85px] h-[45px] object-cover'>
            <Image
              src="/image/Vector(1).png"
              alt="logos"
              width={500}
              height={500}
            />
          </div>
          <div className='w-[85px] h-[45px] object-cover' >
            <Image
              src="/image/Vector(2).png"
              alt="logos"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
