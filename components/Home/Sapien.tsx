"use client";
import Image from "next/image";
import Button from "../ui/button";

export default function Sapien() {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <div className="max-w-[590px]">
            <h1 className="font-inter font-medium text-[15px] leading-[18px] tracking-[3px] mb-4">
              OVERLINE
            </h1>
            <h1 className="text font-bold mb-[32px]">
              Sapien ipsum scelerisque convallis fusce
            </h1>
            <p className="text-[16px] font-inter font-normal tracking-[0.2px] mb-[48px]">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button style="primary">Get started</Button>
              <Button style="secondary"> Learn more</Button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
