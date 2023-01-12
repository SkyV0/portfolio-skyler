import React, { useState } from 'react';

import Image from 'next/image';
import TypeWriter from 'typewriter-effect';
import { stringify } from 'querystring';
import { data } from 'autoprefixer';
import { introdata } from './Content';

function HeroHome() {
  return (
   //make a simple hero section
    <section className="relative bg-white overflow-hidden dark:bg-black h-30">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 dark:bg-black">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 dark:text-black"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
       
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <div className="my-10">
            <TypeWriter
              options={{
                  strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                autoStart: true,
                loop: true,
              }}
              />
              </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={'/images/hooded.png'}
          alt="Hero Image"
          height={1080}
          width={1920}
        />
      </div>
    </section>
  );
}

export default HeroHome;

