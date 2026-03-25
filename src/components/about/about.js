import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-20 px-4 md:px-24 overflow-hidden font-poppins">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">

        <div className="z-10 lg:w-5/12 relative">
          <h2 className="font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl mb-12">
            Unfolding the <br /> Experience
          </h2>
        </div>

        <div className="relative lg:w-1/2 flex justify-end w-full">
          <div className="relative w-full max-w-[745px]">
            <div className="relative w-full aspect-[745/406] overflow-hidden rounded-lg">
              <Image
                src="/about/unfolding-experience.jpg"
                alt="Unfolding the Experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-[1.02]"
                priority
              />
              <div className="absolute top-0 left-0 w-9 h-8 bg-background -translate-x-0 -translate-y-0"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="text-text text-lg md:text-3xl font-medium leading-normal whitespace-pre-wrap">
          OSSome Hacks 3.0 is a 36-hour hackathon uniting passionate tech enthusiasts to tackle challenges with creativity and ingenuity. Building on a legacy of innovation and collaboration, it goes beyond just competition, it sparks learning, problem-solving, and impactful thinking. Celebrating the spirit of open-source development, it empowers participants to create solutions that truly make a difference.
        </p>
      </div>
    </section>
  );
}
