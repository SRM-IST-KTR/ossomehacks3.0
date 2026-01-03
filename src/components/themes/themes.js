"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

const THEMES = [
  {
    id: 1,
    title: 'EdTech',
    titleLines: ['EdTech'],
    image: '/tracks/edtech.png',
  },
  {
    id: 2,
    title: 'AgriTech',
    titleLines: ['AgriTech'],
    image: '/tracks/Agritech.png',
  },
  {
    id: 3,
    title: 'FinTech',
    titleLines: ['FinTech'],
    image: '/tracks/fintech.png',
  },
  {
    id: 4,
    title: 'HealthTech',
    titleLines: ['HealthTech'],
    image: '/tracks/healthtech.png',
  },
  {
    id: 5,
    title: 'Web3 & Crypto',
    titleLines: ['Web3 &', 'Crypto'],
    image: '/tracks/web3.png',
  },
  {
    id: 6,
    title: 'Open Innovation',
    titleLines: ['Open', 'Innovation'],
    image: '/tracks/openinovation.png',
  },
];

const ThemeCard = ({ theme }) => {

  return (
    <motion.div
      className={`relative w-[309px] h-[413px] -font-poppins cursor-pointer group`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        variants={{
          rest: { scale: 1, rotate: 0, filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))" },
          hover: { scale: 1.05, rotate: 1.5, filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.2))" },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative w-full h-full"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/tracks/Stamp frame - Yellow.svg"
            alt="Stamp Frame"
            fill
            className="object-fill"
            priority
          />
        </div>

        <div className="absolute inset-[23px] z-50 rounded-sm overflow-hidden mask-image-source">
          <div className="relative flex h-full w-full flex-col items-center">
            <motion.div
              className="absolute inset-0 -z-10"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/tracks/Rectangle 39469.svg"
                alt="Inner background"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="pointer-events-none absolute inset-4 border-[3px] border-dotted border-[#ffb900]"
              variants={{
                rest: { opacity: 0.8, scale: 1 },
                hover: { opacity: 1, scale: 0.98 }
              }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="relative z-20 mt-6 text-center text-[39px] font-semibold leading-[0.98] text-white drop-shadow-md px-2"
              variants={{
                rest: { y: 0 },
                hover: { y: -5 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {theme.titleLines.length > 1 ? (
                <>
                  {theme.titleLines.map((line, index) => (
                    <p key={index} className={index === 0 ? "mb-1" : ""}>
                      {line}
                    </p>
                  ))}
                </>
              ) : (
                <p className="mt-4">{theme.titleLines[0]}</p>
              )}
            </motion.div>

            <motion.div
              className="relative z-20 mt-auto mb-3 h-[260px] w-[214px]"
              variants={{
                rest: { y: 0, scale: 1 },
                hover: { y: -15, scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src={theme.image}
                alt={theme.title}
                fill
                className="object-contain object-bottom"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Themes() {
  return (
    <div className="flex flex-col items-center w-full py-10">
      <h2 className='text-center font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl mb-12'>Theme</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16 justify-items-center">
        {THEMES.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>
    </div>
  );
}
