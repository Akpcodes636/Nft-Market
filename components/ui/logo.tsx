import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="w-[213px] h-[34px] ">
        <Image
          src="/image/Logo (1).png"
          width={500}
          height={500}
          alt="logo"
          className="w-full  h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
