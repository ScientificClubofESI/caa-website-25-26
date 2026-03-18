"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const partnerPages = [
  [
    { name: "New Way School",          logo: "/images/partners/aindefla_new_way_school.png",              top: "28%", left: "38%" },
    { name: "Our Voice Club",          logo: "/images/partners/aintemouchen_Our_voice_club.png",          top: "16%", left: "53%" },
    { name: "All In Med",              logo: "/images/partners/alger_All_in_med.png",                     top: "16%", left: "77%" },
    { name: "Lilix Consulting",        logo: "/images/partners/alger_lilix_consulting.png",               top: "44%", left: "50%" },
    { name: "Quanta",                  logo: "/images/partners/alger_Quanta.png",                         top: "50%", left: "70%" },
    { name: "Upgraderz",               logo: "/images/partners/alger_upgraderz.png",                      top: "86%", left: "75%" },
    { name: "Infinity Club",           logo: "/images/partners/bba_infinity_club.png",                    top: "66%", left: "32%" },
    { name: "Rival School",            logo: "/images/partners/bejaia_Rival_School.png",                  top: "65%", left: "58%" },
  ],
  [
    { name: "Atom",                    logo: "/images/partners/bouira_Atom.png",                          top: "30%", left: "44%" },
    { name: "Mecatro Scientific Club", logo: "/images/partners/boumerdes_Mecatro_Scientific_Club.png",    top: "16%", left: "58%" },
    { name: "Elfikr Coworking",        logo: "/images/partners/chlef_elfikr_coworking.png",               top: "54%", left: "34%" },
    { name: "GDG Constantine",         logo: "/images/partners/constantine_gdgconstantine.png",           top: "52%", left: "72%" },
    { name: "EL Khalef Essalih",       logo: "/images/partners/ghardaia_EL_Khalef_Essalih.png",           top: "80%", left: "35%" },
    { name: "Esperanza Club",          logo: "/images/partners/jijel_esperanza_club.png",                 top: "18%", left: "76%" },
    { name: "TechVerse",               logo: "/images/partners/medea_TechVerse.png",                      top: "56%", left: "52%" },
    { name: "Elec Club",               logo: "/images/partners/msila_Elec_Club.png",                      top: "80%", left: "75%" },
  ],
  [
    { name: "Scientific Corner",       logo: "/images/partners/ouargla_Scientific_corner.png",            top: "75%", left: "62%" },
    { name: "SDG Club",                logo: "/images/partners/setif_SDG_Club.png",                       top: "36%", left: "65%" },
    { name: "TechZone",                logo: "/images/partners/setif_TechZone.png",                       top: "50%", left: "52%" },
    { name: "Youaim Academy",          logo: "/images/partners/tebessa_Youaim_academy.png",               top: "18%", left: "78%" },
    { name: "CyberNexus DZ",           logo: "/images/partners/tiaret_CyberNexusDz.png",                  top: "80%", left: "40%" },
    { name: "Epstimi Signum Club",     logo: "/images/partners/tipaza_Epstimi_Signum_Club.png",           top: "16%", left: "53%" },
    { name: "CSI",                     logo: "/images/partners/tiziouzou_CSI.png",                        top: "66%", left: "80%" },
    { name: "YouThink Club",           logo: "/images/partners/tlemcen_youthinkclub.png",                 top: "24%", left: "38%" },
  ],
];

function DashedLines({ partners }) {
  const connections = [];
  for (let i = 0; i < partners.length - 1; i++) {
    connections.push([i, i + 1]);
  }
  if (partners.length >= 6) {
    connections.push([0, 3]);
    connections.push([2, 5]);
    connections.push([4, 7]);
    connections.push([1, 4]);
    connections.push([5, 7]);
    connections.push([3, 6]);
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
      preserveAspectRatio="none"
    >
      {connections.map(([a, b], idx) => {
        if (!partners[a] || !partners[b]) return null;
        return (
          <line
            key={idx}
            x1={partners[a].left}
            y1={partners[a].top}
            x2={partners[b].left}
            y2={partners[b].top}
            stroke="#567532"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.6"
          />
        );
      })}
    </svg>
  );
}

function PartnerCard({ name, logo, style, className = "" }) {
  return (
    <div
      className={`z-10 flex flex-col items-center group cursor-pointer ${className}`}
      style={style}
    >
      <div
        className="
          relative w-[100px] h-[75px] md:w-[110px] md:h-[85px]
          transition-all duration-300 ease-out
          group-hover:-translate-y-2
          group-hover:scale-105
          group-hover:drop-shadow-[0_0_14px_rgba(86,117,50,0.75)]
        "
      >

        <Image
          src="/partner-frame.png"
          alt="frame"
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-1">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-[10px] font-bold text-gray-700 text-center leading-tight px-1 line-clamp-2">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  const [page, setPage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = () => {
    setPage((p) => (p - 1 + partnerPages.length) % partnerPages.length);
  };

  const handleNext = () => {
    setPage((p) => (p + 1) % partnerPages.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
  };

  const currentPartners = partnerPages[page];

  return (
    <section id="partners" className="pb-10">
      <h1 className="flex justify-center text-3xl md:text-5xl font-bold text-black pt-16 md:pt-30">
        Our Partners
      </h1>
      <p className="text-center text-[12px] md:text-lg font-medium text-[#6E7578] leading-relaxed px-6 md:px-20 py-4 md:py-8">
 CSE Around Algeria is made possible thanks to the collaboration of amazing university clubs across the country. <br/>
Together, we bring workshops and learning opportunities to different wilayas, building a strong tech community and sharing <br/> knowledge with passionate learners.
      </p>

      <div className="hidden md:flex justify-between items-center px-20 lg:px-40">
        <div
          onClick={handlePrev}
          className="relative cursor-pointer hover:opacity-80 transition shrink-0 w-14 h-14 flex items-center justify-center"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="#4E5F8B"
              strokeWidth="1.5"
              strokeDasharray="8 6"
            />
          </svg>
          <FaArrowLeftLong className="text-xl text-[#4E5F8B]" />
        </div>

  
        <div className="relative mx-4 flex-1 max-w-5xl mr-20">
  
          <div
            className="relative"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
            }}
          >
            <Image
              src="/algeria.png"
              alt="algeria"
              width={1500}
              height={500}
              className="w-300 h-104 object-cover object-top opacity-65"
            />
          </div>


          <DashedLines partners={currentPartners} />


          {currentPartners.map((p, i) => (
            <PartnerCard
              key={`${page}-${i}`}
              name={p.name}
              logo={p.logo}
              className="absolute"
              style={{
                top: p.top,
                left: p.left,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <div
          onClick={handleNext}
          className="relative cursor-pointer hover:opacity-80 transition shrink-0 w-14 h-14 flex items-center justify-center"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="#4E5F8B"
              strokeWidth="1.5"
              strokeDasharray="8 6"
            />
          </svg>
          <FaArrowRightLong className="text-xl text-[#4E5F8B]" />
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div
        className="md:hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Map as background */}
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          <Image
            src="/algeria.png"
            alt="algeria"
            width={800}
            height={600}
            className="w-full h-full scale-100 object-cover object-top mt-70 opacity-50"
            style={{ transform: "scale(2.5) translateX(-10%)" }}
          />
        </div>

        {/* Partner cards in grid rows: 2 / 3 / 3 */}
        <div className="relative z-10 flex flex-col items-center gap-2 px-4 py-4">
          <div className="flex justify-center gap-3">
            {currentPartners.slice(0, 2).map((p, i) => (
              <PartnerCard key={`m-${page}-${i}`} name={p.name} logo={p.logo} />
            ))}
          </div>
          <div className="flex justify-center gap-3">
            {currentPartners.slice(2, 5).map((p, i) => (
              <PartnerCard key={`m-${page}-${i + 2}`} name={p.name} logo={p.logo} />
            ))}
          </div>
          <div className="flex justify-center gap-3">
            {currentPartners.slice(5, 8).map((p, i) => (
              <PartnerCard key={`m-${page}-${i + 5}`} name={p.name} logo={p.logo} />
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="relative z-10 flex justify-center gap-2 pt-4 pb-2">
          {partnerPages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-6 h-1.5 rounded-full transition-colors ${
                i === page ? "bg-[#567532]" : "bg-[#D0D3D5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}