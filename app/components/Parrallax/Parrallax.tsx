'use client';
import { useEffect } from 'react';
import React, {  useState } from 'react';

const ParallaxTree = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/tree.png)', // replace with your tree image
          transform: `translateY(${offsetY * 0.5}px)`, // adjust parallax speed
        }}
      ></div>
      <div className="relative h-full flex items-center justify-center text-white text-3xl">
        <h1 className="z-10">Scroll Parallax Tree</h1>
      </div>
    </div>
  );
};

export default ParallaxTree;
