import { Button } from "@/components/ui/button";
import Image from "next/image";
import Cover from "@/assets/pic1.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-[380px] lg:h-[580px]">
      <Image
        src={Cover}
        alt="cover. cemetery overview"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1 left-0 w-full h-full bg-gradient-to-t from-black border-0">
        <div className="container mx-auto flex flex-col justify-end h-full w-full p-4 pb-14 lg:px-10 lg:pb-20 space-y-2 lg:space-y-4">
          <span className="text-2xl lg:text-5xl font-bold">
            Southville 8B Cemetery
          </span>
          <p className="text-white/60 text-sm leading-tight lg:leading-tight lg:text-lg max-w-[300px] lg:max-w-[550px] line-clamp-2 lg:line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            obcaecati sunt iure sequi voluptatum quidem, animi odit explicabo
            consequuntur at?
          </p>
          <div>
            <a
              href="https://github.com/poypoy252525/mms-mobile/releases/download/v1.0.0/GravestoneGPS.apk"
              download
            >
              <Button>Download</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
