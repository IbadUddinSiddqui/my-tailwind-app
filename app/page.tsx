'use client';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from 'react';
import HeroSection1 from "./components/HeroSections/HeroSection1/HeroSection1";
import HeroSection2 from "./components/HeroSections/HeroSection2/HeroSection2";
import HeroSection3 from "./components/HeroSections/HeroSection3/HeroSection3";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the transition when the component mounts
  }, []);

  return (<>
    <Header />
    <div
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
    <HeroSection1/>  
    <HeroSection2/>
     <HeroSection3/>
     <Footer />
    </div></>
  );
};

export default HomePage;