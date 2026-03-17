"use client";
import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const categories = [
  {
    name: "Web Development",
    description: "Learn how modern websites are built, from basic pages to full web applications. These workshops cover front-end and back-end development, helping participants understand how to create responsive, interactive, and functional websites using today's web technologies.",
    workshops: [
      { name: "Modern Web Development Bootcamp", club: "CyberNexusDz", location: "Tiaret" },
      { name: "From HTML to React: The Front-End Developer's Journey", club: "SDG Club", location: "Setif" },
      { name: "Build Your First Website", club: "GDG Constantine", location: "Constantine" },
      { name: "Intro to Web Development", club: "Mecatro Scientific Club", location: "Boumerdes" },
      { name: "Intro to Web Development", club: "New Way School", location: "Ain Defla" },
      { name: "From HTML to React: The Front-End Developer's Journey", club: "SDG Club", location: "Setif" },
      { name: "FastAPI Kickstart: Build Your First REST API", club: "Scientific Corner", location: "Ouargla" },
      { name: "Web Development", club: "Tech Club", location: "Skikda" },
      { name: "Web Development", club: "Youaim Academy", location: "Tebessa" },
      { name: "Vibe Coding: Build Your Website Without Coding", club: "Epstimi Signum Club", location: "Tipaza" },
    ]
  },
  {
    name: "AI & Data Science",
    description: "Discover how artificial intelligence and data can be used to solve real-world problems. These sessions introduce the fundamentals of machine learning, data analysis, and AI tools that help automate tasks and build smarter digital solutions.",
    workshops: [
      { name: "Introduction to AI and Data Science", club: "Atom", location: "Bouira" },
      { name: "ML Fundamentals", club: "TechZone", location: "Setif" },
      { name: "From Idea to Smart Automation: Building Your First AI Powered System", club: "EL Khalef Essalih", location: "Ghardaia" },
      { name: "Work Smarter: Improve Your Productivity Using AI", club: "You Think Academy", location: "Tlemcen" },
    ]
  },
  {
    name: "Programming",
    description: "Build strong foundations in coding and computational thinking. Participants will learn core programming concepts, problem-solving techniques, and how to develop simple programs and useful projects using popular programming languages.",
    workshops: [
      { name: "Introduction to Python", club: "CSI Club", location: "Tizi Ouzou" },
      { name: "Introduction to Python: From Basics to Useful Projects", club: "Embassy School", location: "M'sila" },
      { name: "Learn C from Scratch", club: "Lilix Consulting", location: "Alger" },
      { name: "Learn C from Scratch", club: "Upgraderz", location: "Alger" },
      { name: "L'utilisation concrète des DSA aux projets quotidiens", club: "Mecatro Scientific Club", location: "Boumerdes" },
    ]
  },
  {
    name: "Design",
    description: "Explore the principles of user experience and digital product design. These workshops focus on creating intuitive interfaces, understanding user needs, and designing visually appealing and functional digital experiences.",
    workshops: [
      { name: "Introduction to UI/UX", club: "Skikda I-Tech Club", location: "Skikda" },
      { name: "Introduction to UI/UX Design: From Problem to User Experience", club: "All In Med", location: "Alger" },
      { name: "From Idea to Interface: Mastering UI/UX with Figma", club: "Our Voice Club", location: "Ain Témouchent" },
    ]
  },
  {
    name: "Networking",
    description: "Understand how computers communicate and how the internet works. These workshops introduce the basics of computer networks, connectivity, and the technologies that allow systems and devices to exchange information.",
    workshops: [
      { name: "Introduction au réseau informatique", club: "Quanta", location: "Alger" },
      { name: "The potential of blockchain use in Algeria's public sector", club: "Elec Club", location: "Msila" },
    ]
  },
  {
    name: "Photography",
    description: "Learn how to capture and create powerful visual content. These sessions introduce the fundamentals of photography, visual storytelling, and editing techniques to produce creative and engaging media.",
    workshops: [
      { name: "Filmmaking Journey: Introduction to Photography", club: "Lilix Consulting", location: "Alger" },
      { name: "Where Ideas Find Their Voice", club: "Esperanza Club", location: "Jijel" },
      { name: "Filmmaking for Beginners", club: "El Fikr Co Working", location: "Chlef" },
    ]
  },
]

const CARD_HEIGHT = 96;
const VISIBLE_ROWS = 3;
const GAP = 8;
const CONTAINER_HEIGHT = CARD_HEIGHT * VISIBLE_ROWS + GAP * (VISIBLE_ROWS - 1);

function WorkshopCard({ name, club, location }) {
  return (
    <div
      className="
        flex flex-col justify-center items-start p-[1vh] gap-2
        border-8 border-[#E4E3E5] w-full
        bg-[url('/paperTexture.png')] bg-cover bg-center

        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-100
        hover:shadow-[0_0_14px_rgba(86,117,50,0.75)]
      "
      style={{ height: `${CARD_HEIGHT}px`, minHeight: `${CARD_HEIGHT}px` }}
    >
      <h3 className="text-[#140C18] font-medium text-lg md:text-xl line-clamp-1">
        {name}
      </h3>
      <p className="text-[#3C464B] font-normal text-base line-clamp-1">
        {club} - {location}
      </p>
    </div>
  );
}


export default function Workshops() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % categories.length);
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex + categories.length - 1) % categories.length)
  }

  const shouldScroll = categories[currentIndex].workshops.length > 6;

  return (
    <section id="workshops" className="w-full p-8 md:p-18">
      <div className="flex flex-col justify-center items-center gap-[10vh] w-full h-full">

        <div className="flex flex-col text-center gap-[5vh] w-[90%] md:w-[70%] md:max-w-200">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#140C18]">
            Our Workshops
          </h1>
          <p className="text-[#3C464B] text-lg md:text-xl text-center font-light md:font-medium">
            CSE Around Algeria will host a variety of workshops in different tech fields.
            Each workshop is designed to introduce participants to practical skills, guided by experienced mentors and organized in collaboration with local clubs
          </p>
        </div>

        <div className="relative hidden md:flex w-[90%] md:max-w-325">
          <img src='/arrow.png' className="absolute w-55 -top-50 -left-30 z-10" />

          <div className="flex flex-row justify-between items-center w-full bg-[#567532] p-[4vh] gap-8">
            <div className="flex flex-col justify-between items-start w-[40%] max-w-100 self-stretch">
              <h2 className="font-semibold text-4xl text-[#FBF9F7]">
                {categories[currentIndex].name}
              </h2>
              <p className="font-medium text-base md:text-lg text-[#E4E3E5]">
                {categories[currentIndex].description}
              </p>
              <div className="flex flex-row gap-12">
                <div
                  onClick={handlePrev}
                  className="relative cursor-pointer hover:opacity-80 transition shrink-0 w-14 h-14 flex items-center justify-center"
                >
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="26" fill="none" stroke="#E4E3E5" strokeWidth="1.5" strokeDasharray="8 6" />
                  </svg>
                  <FaArrowLeftLong className="text-xl text-[#E4E3E5]" />
                </div>
                <div
                  onClick={handleNext}
                  className="relative cursor-pointer hover:opacity-80 transition shrink-0 w-14 h-14 flex items-center justify-center"
                >
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="26" fill="none" stroke="#E4E3E5" strokeWidth="1.5" strokeDasharray="8 6" />
                  </svg>
                  <FaArrowRightLong className="text-xl text-[#E4E3E5]" />
                </div>
              </div>
            </div>

            <div
              className="w-[55%] max-w-175 overflow-hidden"
              style={{ height: `${CONTAINER_HEIGHT}px` }}
            >
              <div
                className="w-full grid grid-cols-2 gap-2"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={
                  shouldScroll
                    ? {
                        animation: "scroll-up 10s linear infinite",
                        animationPlayState: isPaused ? "paused" : "running",
                      }
                    : {}
                }
              >
                {(shouldScroll
                  ? [...categories[currentIndex].workshops, ...categories[currentIndex].workshops]
                  : categories[currentIndex].workshops
                ).map((workshop, i) => (
                  <WorkshopCard
                    key={i}
                    name={workshop.name}
                    club={workshop.club}
                    location={workshop.location}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden w-[90%] flex flex-col justify-center items-center bg-[#567532] p-8 gap-10">
          <h2 className="font-semibold text-3xl text-[#FBF9F7]">
            {categories[currentIndex].name}
          </h2>
          <p className="font-medium text-base text-[#E4E3E5]">
            {categories[currentIndex].description}
          </p>

          <div className="w-full overflow-hidden">
            <div
              className="flex flex-row items-center gap-2"
              style={{
                animation: "scroll-right 25s linear infinite",
                width: "max-content",
                height: `${CARD_HEIGHT}px`,
              }}
            >
              {[...categories[currentIndex].workshops, ...categories[currentIndex].workshops]
                .map((workshop, i) => (
                  <WorkshopCard
                    key={i}
                    name={workshop.name}
                    club={workshop.club}
                    location={workshop.location}
                  />
                ))}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-full gap-12">
            <div
              onClick={handlePrev}
              className="relative cursor-pointer hover:opacity-80 transition shrink-0 w-12 h-12 flex items-center justify-center"
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="26" fill="none" stroke="#E4E3E5" strokeWidth="1.5" strokeDasharray="8 6" />
              </svg>
              <FaArrowLeftLong className="text-xl text-[#E4E3E5]" />
            </div>
            <div
              onClick={handleNext}
              className="relative cursor-pointer hover:opacity-80 transition shrink-0 w-12 h-12 flex items-center justify-center"
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="26" fill="none" stroke="#E4E3E5" strokeWidth="1.5" strokeDasharray="8 6" />
              </svg>
              <FaArrowRightLong className="text-xl text-[#E4E3E5]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}