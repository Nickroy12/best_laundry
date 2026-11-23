
import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="mb-4 inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
            About Our Company
          </span>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            We Provide The Best
            <span className="text-red-600"> Laundry & Dry Cleaning </span>
            Services In Uttara
          </h2>

          <p className="mb-5 leading-7 text-gray-600">
            With over 12 years of experience, we are committed to providing
            the best laundry and auto dry cleaning services. Our expert team
            takes care of your clothes with professional cleaning techniques
            and modern equipment.
          </p>

          <p className="mb-8 leading-7 text-gray-600">
            From everyday laundry to delicate garment care, we ensure
            freshness, cleanliness and quality in every wash. Your clothes
            deserve the best care, and we are here to deliver it.
          </p>

          {/* Features */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-xl text-red-600 shrink-0" />
              <span className="font-medium text-gray-700">
                12+ Years Experience
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-xl text-red-600 shrink-0" />
              <span className="font-medium text-gray-700">
                Expert Cleaning Team
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-xl text-red-600 shrink-0" />
              <span className="font-medium text-gray-700">
                Quality Service
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-xl text-red-600 shrink-0" />
              <span className="font-medium text-gray-700">
                Affordable Pricing
              </span>
            </div>

          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-md bg-[#F4A548] px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
          >
            Contact Us
            <FaArrowRight />
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">

          <Image
            src="/shop.jpg"
            alt="Professional Laundry Service"
            width={600}
            height={600}
            className="h-[400px] w-full rounded-2xl object-contain shadow-xl md:h-[520px]"
          />

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -left-3 rounded-xl bg-[#F4A548] px-7 py-5 text-white shadow-xl sm:-left-6">
            <h3 className="text-4xl font-bold">12+</h3>
            <p className="mt-1 text-sm font-medium">
              Years Of Experience
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
