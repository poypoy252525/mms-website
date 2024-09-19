import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur sticky top-0 z-50">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center">
          <Image
            alt="logo"
            src={Logo}
            width={60}
            height={60}
            className="w-14 h-14 mr-2"
          />
          <p className="text-lg font-semibold">SV8B</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
