'use client';

import { Fragment, useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';


const STATS = [
  { target: 25, prefix: '+', label: 'Mentors' },
  { target: 25, prefix: '+', label: 'Workshops' },
  { target: 20, prefix: '+', label: 'Wilayas' },
  { target: 20, prefix: '+', label: 'Clubs' },
  { target: 1,  prefix: '',  label: 'Day' },
];

const VALUES = [
  { src: '/images/about/community.png',     label: 'Community'    },
  { src: '/images/about/innovation.png',    label: 'Innovation'   },
  { src: '/images/about/collaboration.png', label: 'Collaboration' },
  { src: '/images/about/impact.png',        label: 'Impact'       },
];

const DURATION = 1600;


function useCountUp(target, active) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  const run = useCallback(() => {
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (active) {
      setCount(0);
      cancelAnimationFrame(rafRef.current);
      run();
    } else {
      setCount(0);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, run]);

  return count;
}



function StatItem({ target, prefix, label, active }) {
  const count = useCountUp(target, active);
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <h5 className="font-bold text-[16px] md:text-[24px] text-white leading-tight">
        {prefix}{count}
      </h5>
      <p className="text-[10px] md:text-[16px] font-normal text-white">{label}</p>
    </div>
  );
}



export default function About() {
  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(false);
          requestAnimationFrame(() => setStatsActive(true));
        } else {
          setStatsActive(false);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section  id="about" className="max-w-screen p-4 md:p-12 ">

      <div className="first flex flex-col md:flex-row p-[32px] md:p-[48px]">

        <div className="left md:w-1/2 mb-[16px] md:mb-[0px] flex flex-col">
          <Image
            src="/images/about/flechemobile.png"
            alt="" width={142} height={60}
            className="md:hidden mb-[12px] -mx-15"
          />
          <Image
            src="/images/about/fleche.png"
            alt="" width={252} height={80}
            className="hidden md:block mb-[10px] p-0 -mx-30"
          />
          <h1 className="text-3xl text-[var(--foreground)] font-bold text-center md:text-left md:text-5xl mb-[20px]">
            Touring Algeria. <br />
            Sharing Knowledge.
          </h1>
          <p className="text-[14px] text-[var(--foreground)] font-normal text-center md:text-left md:text-lg">
            Born from a passion for learning and innovation, CSE Around Algeria is a nationwide initiative where workshops travel across Algeria to connect tech enthusiasts, creators, and future innovators.
Through collaboration with university clubs, we aim to share knowledge, build communities, and inspire learning
          </p>
        </div>

   
        <div className="pt-[2px] md:pt-[26px] right flex justify-center items-center md:w-1/2">
          <div className="relative w-[300px] h-[180px] md:w-[480px] md:h-[300px]">

            <Image
              src="/images/about/image_2.png"
              alt=""
              width={250} height={250}
              className="absolute top-0 left-0 z-1 "
              style={{
                width: '59%', height: 'auto',
                transform: 'rotate(-6deg)',
                
              }}
            />

            <Image
              src="/images/about/image_1.png"
              alt=""
              width={250} height={250}
              className="absolute  top-0 left-[50%]  z-1"
              style={{
                width: '59%', height: 'auto',
                transform: 'rotate(6deg)',
              }}
            />

            <Image
              src="/images/about/image_3.png"
              alt=""
              width={300} height={300}
              className="absolute bottom-[-20%] md:bottom-[-20%] left-[50%] ml-[-30%] z-2"
              style={{
                width: '62%', height: 'auto',
                transform: 'rotate(3deg)',
              }}
            />

          </div>
        </div>
      </div>


      <div ref={statsRef} className="my-[40px] flex justify-center items-center">
        <div className="bg-[#6A8A44] rounded-2xl md:rounded-4xl flex flex-row justify-around items-center gap-[12px] md:gap-8 px-[12px] md:px-8 py-[8px] md:h-[90px]">
          {STATS.map(({ target, prefix, label }, i) => (
            <Fragment key={label}>
              <StatItem target={target} prefix={prefix} label={label} active={statsActive} />
              {i < STATS.length - 1 && (
                <div className=" w-[1px] h-[30px] md:w-[2px] md:h-[60px] bg-white/100 my-2 md:my-8" />
              )}
            </Fragment>
          ))}
        </div>
      </div>

   
      <div className="values flex md:flex-row flex-col items-center px-8 md:px-16 mb-[10px]">

        <div className=" flex flex-row items-center md:left md:w-auto">
          <h1 className="font-bold md:text-[36px] text-[18px] text-[#313D5B] md:text-[#6A8A44] text-center md:text-left whitespace-nowrap">
            Our Values
          </h1>
          <Image
            src="/images/about/flechevalues.png"
            alt="" width={300} height={30}
            className="hidden md:block ml-[10px]"
          />
        </div>

        <div className=" flex flex-row w-full items-center md:right md:w-auto gap-[8px] md:gap-[30px] md:flex-1 justify-center md:justify-end mt-[10px] md:mt-0">
          {VALUES.map(({ src, label }) => (
            <div
              key={label}
              className="flex flex-col justify-center items-center
                         transition-transform duration-300 ease-out
                         hover:-translate-y-2 cursor-default"
            >
              <Image
                src={src}
                alt={label}
                width={58} height={58}
                className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
              />
              <p className="md:text-[16px] font-bold text-[12px] text-[#313D5B] text-center mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}