
import React from "react";
import {
  Shirt,
  WashingMachine,
  Zap,
  Truck,
} from "lucide-react";

const services = [
  { icon: Shirt, title: "Iron Service" },
  { icon: WashingMachine, title: "Wash & Iron Service" },
  { icon: Zap, title: "Express Delivery" },
  { icon: Truck, title: "Home Drop & Pickup" },
];

const Service = () => {
  return (
    <section id="services" className="bg-[#FFF9F1] py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-[#F4A548] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            What We Offer
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-[22px]
                min-h-[150px] flex flex-col items-center justify-center
                gap-3 p-5 text-center group hover:-translate-y-2
                transition-all duration-300 hover:shadow-xl"
              >
                {/* Decorative Circle */}
                <div className="absolute -top-5 -right-5 w-16 h-16
                  bg-[#F4A548]/20 rounded-full
                  group-hover:scale-125 transition-transform duration-300"
                />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-2xl
                  bg-[#F4A548] flex items-center justify-center
                  shadow-lg shadow-[#F4A548]/30">
                  <Icon size={25} strokeWidth={2.2} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-sm md:text-base
                  font-bold text-gray-800 leading-5">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Service;
