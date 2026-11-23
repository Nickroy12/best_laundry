import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Service/>
   <Pricing/>
   <Contact/>
   </>
  );
}
