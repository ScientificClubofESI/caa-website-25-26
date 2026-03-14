"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// Multiple pages of partners, each with different positions on the map
const partnerPages = [
  [
    { name: "GDG Batna", top: "18%", left: "53%" },
    { name: "GDG Batna", top: "28%", left: "67%" },
    { name: "GDG Batna", top: "25%", left: "43%" },
    { name: "GDG Batna", top: "38%", left: "55%" },
    { name: "GDG Batna", top: "35%", left: "75%" },
    { name: "GDG Batna", top: "50%", left: "41%" },
    { name: "GDG Batna", top: "48%", left: "60%" },
    { name: "GDG Batna", top: "55%", left: "73%" },
    { name: "GDG Batna", top: "62%", left: "50%" },
    { name: "GDG Batna", top: "70%", left: "63%" },
  ],
  [
    { name: "GDG Oran", top: "20%", left: "40%" },
    { name: "GDG Algiers", top: "16%", left: "53%" },
    { name: "GDG Setif", top: "24%", left: "65%" },
    { name: "GDG Annaba", top: "22%", left: "79%" },
    { name: "GDG Blida", top: "36%", left: "47%" },
    { name: "GDG Djelfa", top: "42%", left: "60%" },
    { name: "GDG Biskra", top: "52%", left: "69%" },
    { name: "GDG Bechar", top: "48%", left: "40%" },
    { name: "GDG Ghardaia", top: "62%", left: "53%" },
    { name: "GDG Ouargla", top: "70%", left: "65%" },
  ],
  [
    { name: "GDG Tiaret", top: "24%", left: "45%" },
    { name: "GDG Medea", top: "20%", left: "57%" },
    { name: "GDG Jijel", top: "18%", left: "70%" },
    { name: "GDG Tlemcen", top: "28%", left: "37%" },
    { name: "GDG Msila", top: "36%", left: "60%" },
    { name: "GDG Skikda", top: "24%", left: "79%" },
    { name: "GDG Laghouat", top: "50%", left: "50%" },
    { name: "GDG Touggourt", top: "58%", left: "65%" },
    { name: "GDG Adrar", top: "68%", left: "45%" },
    { name: "GDG Tamanrasset", top: "76%", left: "57%" },
  ],
];

// Generate dashed line connections between partner cards
function DashedLines({ partners }) {
  const connections = [];
  for (let i = 0; i < partners.length - 1; i++) {
    connections.push([i, i + 1]);
  }
  // Add a few cross-connections for the web look
  if (partners.length >= 6) {
    connections.push([0, 3]);
    connections.push([2, 5]);
    connections.push([4, 7]);
    connections.push([6, 8]);
    connections.push([1, 4]);
    connections.push([5, 8]);
    connections.push([3, 6]);
    connections.push([7, 9]);
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

function PartnerCard({ name, style, className = "" }) {
  return (
    <div
      className={`z-10 flex flex-col items-center ${className}`}
      style={style}
    >
      <div className="relative w-[100px] h-[75px] md:w-[100px] md:h-[75px]">
        <Image
          src="/partner-frame.png"
          alt="frame"
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-1">
          <Image
            src="/GDG_LOGO.png"
            alt="GDG Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <span className="text-[8px] font-semibold text-gray-700 whitespace-nowrap leading-none">
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
    <section className="bg-[#FBF9F7] pb-10">
      <h1 className="flex justify-center text-3xl md:text-5xl font-bold text-black pt-16 md:pt-30">
        Our Partners
      </h1>
      <p className="text-center text-sm md:text-base font-medium text-[#6E7578] leading-relaxed px-6 md:px-20 py-4 md:py-8">
        Lorem ipsum dolor sit amet consectetur. Venenatis adipiscing viverra
        eget vivamus euismod augue donec nunc.Lorem ipsum dolor sit amet
        consectetur. Venenatis adipiscing viverra eget vivamus augue donec
        nunc.Lorem ipsum dolor sit amet consectetur. Venenatis adipiscing
        viverra eget vivamus euismod augue donec nunc.Lorem
      </p>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:flex justify-between items-center px-20 lg:px-40">
        {/* Left arrow */}
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

        {/* Map with partner cards */}
        <div className="relative mx-4 flex-1 max-w-5xl mr-20">
          {/* Map image with bottom fade */}
          <div
            className="relative"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 65%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 65%, transparent 100%)",
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

          {/* Dashed lines connecting partner cards */}
          <DashedLines partners={currentPartners} />

          {/* Partner cards overlaid on map */}
          {currentPartners.map((p, i) => (
            <PartnerCard
              key={`${page}-${i}`}
              name={p.name}
              className="absolute"
              style={{
                top: p.top,
                left: p.left,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Right arrow */}
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
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
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

        {/* Partner cards in grid rows */}
        <div className="relative z-10 flex flex-col items-center gap-2 px-4 py-4">
          {/* Row 1: 2 cards */}
          <div className="flex justify-center gap-3">
            {currentPartners.slice(0, 2).map((p, i) => (
              <PartnerCard key={`m-${page}-${i}`} name={p.name} />
            ))}
          </div>
          {/* Row 2: 3 cards */}
          <div className="flex justify-center gap-3">
            {currentPartners.slice(2, 5).map((p, i) => (
              <PartnerCard key={`m-${page}-${i + 2}`} name={p.name} />
            ))}
          </div>
          {/* Row 3: 2 cards */}
          <div className="flex justify-center gap-3">
            {currentPartners.slice(5, 7).map((p, i) => (
              <PartnerCard key={`m-${page}-${i + 5}`} name={p.name} />
            ))}
          </div>
          {/* Row 4: 3 cards */}
          <div className="flex justify-center gap-3">
            {currentPartners.slice(7, 10).map((p, i) => (
              <PartnerCard key={`m-${page}-${i + 7}`} name={p.name} />
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
