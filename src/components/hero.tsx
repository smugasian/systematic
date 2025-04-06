import React from "react";
import { Button } from "./ui/button";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative flex flex-col w-full ">
      <video
        width={1920}
        height={1080}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/public/bg.mp4" type="video/mp4" />
      </video>
      <div className="p-24 flex flex-col gap-">
        <h1 className="text-5xl font-bold">
          Build Systematically,
        </h1>
        <h1 className="text-5xl font-bold text-gray-300">
          Scale Dynamically.
        </h1>
        <Button className="w-24 mt-4">
          Get Started
        </Button>
      </div>

    </div>
  );
}

export default Hero;
