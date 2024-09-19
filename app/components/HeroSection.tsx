import { Button } from "@/components/ui/button";
import Image from "next/image";
import Cover from "@/assets/pic1.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-[300px]">
      <Image
        src={Cover}
        alt="cover. cemetery overview"
        width={270}
        height={270}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1 left-0 w-full h-full bg-gradient-to-t from-black border-0">
        <div className="flex flex-col justify-end h-full w-full p-4 pb-10 space-y-2">
          <span className="text-2xl font-bold">Southville 8B Cemetery</span>
          <p className="text-muted-foreground text-sm max-w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            sapiente.
          </p>
          <div>
            <Button>Download</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
