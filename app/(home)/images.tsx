"use client";

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export function ImageCarousel() {
  const images = [
    { src: '/images-ejunz/pict1.png', alt: 'Ejunz Screenshot 1' },
    { src: '/images-ejunz/pict2.png', alt: 'Ejunz Screenshot 2' },
    { src: '/images-ejunz/pict3.png', alt: 'Ejunz Screenshot 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="relative rounded-lg overflow-hidden bg-fd-subtle mb-12 aspect-[16/10]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority={index === currentIndex || index === (currentIndex + 1) % images.length}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
