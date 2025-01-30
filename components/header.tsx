"use client";
import React, { useState } from "react";
import Logo from "./ui/logo";
import { NavLinks } from "@/utils/HomepageContents";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import Button from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="flex items-center justify-between  w-full h-[117px] px-4">
        <div className="">
          <Logo />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center justify-between gap-16 text-[16px] leading-[20px] tracking-[0.2px] text-white-10">
            {NavLinks?.map((l, index) => (
              <Link key={index} href={l.router}>
                {l.title}
              </Link>
            ))}
          </ul>
        </nav>
        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center justify-center gap-[16px]">
          <Button style="secondary" width="w-[145px]" height="h-[52px]">
            Contact
          </Button>
          <Button style="primary" width="w-[145px]" height="h-[52px]">
            My account
          </Button>
        </div>
        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-white-10 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[117px] left-0 right-0 bg-transparent bg-opacity-95 p-4 lg:hidden">
            <nav className="flex flex-col space-y-4">
              <ul className="flex flex-col space-y-4 text-[16px] leading-[20px] tracking-[0.2px] text-white-10">
                {NavLinks?.map((l, index) => (
                  <Link
                    key={index}
                    href={l.router}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {l.title}
                  </Link>
                ))}
              </ul>
              <div className="flex flex-col space-y-3 pt-4">
                <Button style="secondary" width="w-full" height="h-[52px]">
                  Contact
                </Button>
                <Button style="primary" width="w-full" height="h-[52px]">
                  My account
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
