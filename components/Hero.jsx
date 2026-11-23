
import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fff5e6]">
      <div className="mx-auto grid min-h-[520px] max-w-7xl grid-cols-1 items-center px-6 md:grid-cols-2 md:px-0">

        {/* Left Content */}
        <div className="z-10 py-16 md:pl-16 lg:pl-20">

          <h1 className="max-w-xl text-4xl font-black tracking-tight text-[#111827] md:text-5xl lg:text-6xl">
            <span className="text-red-600">Best</span> Laundry
            <br />

            <span className="text-3xl font-light">
              Delivering
              excellence every
              <br />
              step ahead
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
            Experience premium laundry care with attention to every detail.
            We make your clothes fresh, clean, and ready for every day.
          </p>

          <a
            href="https://wa.me/8801986808725"
            className="mt-7 inline-block cursor-pointer rounded-full bg-[#F4A548] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-lg"
          >
            Book Laundry Service
          </a>

        </div>

        {/* Right Image Section */}
        <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[520px]">

          {/* Laundry Image */}
          <Image
            src="/image.png"
            alt="Freshly folded colorful laundry"
            width={800}
            height={600}
            priority
            className="absolute right-[-5%] top-1/2 h-auto w-[110%] max-w-none -translate-y-1/2 object-contain md:right-[-12%] md:w-[125%] lg:right-[-18%] lg:w-[135%]"
          />

          {/* Bottom Feature */}
          <div className="absolute bottom-[5%] left-[5%] z-20 flex flex-col items-center text-center">

            <Sparkles
              size={34}
              strokeWidth={1.8}
              className="text-[#334155]"
            />

            <p className="mt-2 text-xs font-medium leading-4 text-black">
              Expertly dry-cleaned
              <br />
              for pristine results
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
