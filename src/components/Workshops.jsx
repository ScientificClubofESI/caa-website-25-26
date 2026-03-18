"use client";
import { useState, useMemo } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const categories = [
  {
    name: "Web Development",
    description: "Learn how modern websites are built, from basic pages to full web applications. These workshops cover front-end and back-end development.",
    workshops: [
      { name: "Modern Web Development Bootcamp", club: "CyberNexusDz", location: "Tiaret" },
      { name: "From HTML to React: The Front-End Developer's Journey", club: "SDG Club", location: "Setif" },
      { name: "Build Your First Website", club: "GDG Constantine", location: "Constantine" },
      { name: "Intro to Web Development", club: "Mecatro Scientific Club", location: "Boumerdes" },
      { name: "Intro to Web Development", club: "New Way School", location: "Ain Defla" },
      { name: "FastAPI Kickstart: Build Your First REST API", club: "Scientific Corner", location: "Ouargla" },
      { name: "Web Development", club: "Tech Club", location: "Skikda" },
      { name: "Web Development", club: "Youaim Academy", location: "Tebessa" },
      { name: "Vibe Coding: Build Your Website Without Coding", club: "Epstimi Signum Club", location: "Tipaza" },
    ]
  },
  {
    name: "AI & Data Science",
    description: "Discover how artificial intelligence and data can be used to solve real-world problems. Fundamentals of machine learning and data analysis.",
    workshops: [
      { name: "Introduction to AI and Data Science", club: "Atom", location: "Bouira" },
      { name: "ML Fundamentals", club: "TechZone", location: "Setif" },
      { name: "From Idea to Smart Automation", club: "EL Khalef Essalih", location: "Ghardaia" },
      { name: "Work Smarter: Productivity Using AI", club: "You Think Academy", location: "Tlemcen" },
    ]
  },
  {
    name: "Programming",
    description: "Build strong foundations in coding and computational thinking. Participants will learn core programming concepts and problem-solving.",
    workshops: [
      { name: "Introduction to Python", club: "CSI Club", location: "Tizi Ouzou" },
      { name: "Python: From Basics to Projects", club: "Embassy School", location: "M'sila" },
      { name: "Learn C from Scratch", club: "Lilix Consulting", location: "Alger" },
      { name: "Learn C from Scratch", club: "Upgraderz", location: "Alger" },
      { name: "DSA in Daily Projects", club: "Mecatro Scientific Club", location: "Boumerdes" },
    ]
  },
  {
    name: "Design",
    description: "Explore the principles of user experience and digital product design. Creating intuitive interfaces and visually appealing experiences.",
    workshops: [
      { name: "Introduction to UI/UX", club: "Skikda I-Tech Club", location: "Skikda" },
      { name: "Introduction to UI/UX Design", club: "All In Med", location: "Alger" },
      { name: "Mastering UI/UX with Figma", club: "Our Voice Club", location: "Ain Témouchent" },
    ]
  },
  {
    name: "Networking",
    description: "Understand how computers communicate and how the internet works. Basics of computer networks and connectivity.",
    workshops: [
      { name: "Introduction au réseau informatique", club: "Quanta", location: "Alger" },
      { name: "Blockchain in Public Sector", club: "Elec Club", location: "Msila" },
    ]
  },
  {
    name: "Photography",
    description: "Learn how to capture and create powerful visual content. Fundamentals of photography, storytelling, and editing.",
    workshops: [
      { name: "Intro to Photography", club: "Lilix Consulting", location: "Alger" },
      { name: "Where Ideas Find Their Voice", club: "Esperanza Club", location: "Jijel" },
      { name: "Filmmaking for Beginners", club: "El Fikr Co Working", location: "Chlef" },
    ]
  },
];

const CARD_HEIGHT = 96;
const VISIBLE_ROWS = 3;
const GAP = 8;
const CONTAINER_HEIGHT = CARD_HEIGHT * VISIBLE_ROWS + GAP * (VISIBLE_ROWS - 1);

const SECONDS_PER_CARD_DESKTOP = 2.5; 
const SECONDS_PER_CARD_MOBILE = 4;

function WorkshopCard({ name, club, location }) {
  return (
    <div
      className="flex flex-col justify-center items-start p-4 gap-1 border-8 border-[#E4E3E5] w-full bg-[url('/paperTexture.png')] bg-cover bg-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_14px_rgba(86,117,50,0.5)]"
      style={{ height: `${CARD_HEIGHT}px`, minHeight: `${CARD_HEIGHT}px` }}
    >
      <h3 className="text-[#140C18] font-bold text-base md:text-lg line-clamp-1 uppercase tracking-tight">
        {name}
      </h3>
      <p className="text-[#3C464B] font-medium text-sm line-clamp-1">
        {club} — <span className="text-[#567532]">{location}</span>
      </p>
    </div>
  );
}

export default function Workshops() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentCategory = categories[currentIndex];
  const workshops = currentCategory.workshops;

  const handleNext = () => setCurrentIndex((p) => (p + 1) % categories.length);
  const handlePrev = () => setCurrentIndex((p) => (p + categories.length - 1) % categories.length);

  const desktopDuration = useMemo(() => (workshops.length / 2) * SECONDS_PER_CARD_DESKTOP, [workshops]);
  const mobileDuration = useMemo(() => workshops.length * SECONDS_PER_CARD_MOBILE, [workshops]);
  const shouldScroll = workshops.length > 6;

  return (
    <section id="workshops" className="w-full py-16 px-6 md:px-12 ">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-16">
        
        {/* Header */}
        <div className="flex flex-col text-center gap-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-[#140C18] tracking-tight">
            Our Workshops
          </h1>
          <p className="text-[#3C464B] text-lg md:text-xl font-medium opacity-80">
            CSE Around Algeria hosts a variety of tech workshops. Guided by experienced mentors and local clubs to build practical skills.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex relative w-full bg-[#567532] p-10 gap-12 items-center min-h-[450px] shadow-2xl">
            <img src='/arrow.png' alt="" className="absolute -top-45 -left-12 w-48 pointer-events-none" />

            {/* Left Content */}
            <div className="w-2/5 flex flex-col justify-between self-stretch">
              <div>
                <h2 className="font-bold text-4xl text-[#FBF9F7] mb-6 tracking-tight uppercase">
                  {currentCategory.name}
                </h2>
                <p className="font-medium text-lg text-[#E4E3E5] leading-relaxed">
                  {currentCategory.description}
                </p>
              </div>
              
              <div className="flex gap-6 mt-8">
                <NavButton onClick={handlePrev} icon={<FaArrowLeftLong />} />
                <NavButton onClick={handleNext} icon={<FaArrowRightLong />} />
              </div>
            </div>

            <div className="w-3/5 overflow-hidden relative" style={{ height: `${CONTAINER_HEIGHT}px` }}>
              <div
                className="grid grid-cols-2 gap-2 w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                  animation: shouldScroll ? `scroll-up ${desktopDuration}s linear infinite` : "none",
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {[...workshops, ...workshops].map((w, i) => (
                  <WorkshopCard key={i} {...w} />
                ))}
              </div>
            
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#567532] via-transparent to-[#567532] opacity-20" />
            </div>
        </div>

     
        <div className="md:hidden w-full flex flex-col bg-[#567532] p-8 gap-8 items-center rounded-sm">
          <div className="text-center">
            <h2 className="font-bold text-3xl text-[#FBF9F7] mb-4 uppercase tracking-tight">{currentCategory.name}</h2>
            <p className="text-[#E4E3E5] text-sm font-medium">{currentCategory.description}</p>
          </div>

          <div className="w-full overflow-hidden relative py-2">
            <div
              className="flex gap-3"
              style={{
                animation: `scroll-right ${mobileDuration}s linear infinite`,
                width: "max-content",
              }}
            >
              {[...workshops, ...workshops].map((w, i) => (
                <div key={i} className="w-[280px] shrink-0">
                  <WorkshopCard {...w} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-10">
            <NavButton onClick={handlePrev} icon={<FaArrowLeftLong />} small />
            <NavButton onClick={handleNext} icon={<FaArrowRightLong />} small />
          </div>
        </div>
      </div>


      <style jsx global>{`
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-50% - ${GAP / 2}px)); }
        }
        @keyframes scroll-right {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 6px)); }
        }
      `}</style>
    </section>
  );
}

function NavButton({ onClick, icon, small = false }) {
  const size = small ? "w-12 h-12" : "w-14 h-14";
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer hover:scale-110 active:scale-95 transition-all group shrink-0 ${size} flex items-center justify-center`}
    >
      <svg className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="26" fill="none" stroke="#E4E3E5" strokeWidth="1.5" strokeDasharray="8 6" />
      </svg>
      <span className="text-xl text-[#E4E3E5] group-hover:text-white">{icon}</span>
    </div>
  );
}