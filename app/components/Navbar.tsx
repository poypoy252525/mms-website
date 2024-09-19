"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOnTop, setOnTop] = useState<boolean>(true);
  useEffect(() => {
    if (window.scrollY === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full h-[80px] z-50 bg-gradient-to-b from-black/75 px-4 ${
        !isOnTop && "!bg-black/40 !backdrop-blur !h-[64px]"
      } transition-all duration-300`}
    >
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center">
          <Image
            alt="logo"
            src={Logo}
            width={60}
            height={60}
            className="w-[60px] h-[60px] mr-2"
          />
          <p className="text-lg font-semibold">SV8B</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
