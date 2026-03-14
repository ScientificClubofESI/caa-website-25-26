"use client";
import { useState, useRef, useEffect } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const categories = [
  {
    name: "Design", 
    description: "In this UI/UX workshop, you'll grasp fundamentals, explore design principles, and engage in hands-on activities to refine your skills and understanding of user interface and experience design.",
    workshops: [
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
    ]
  },
  {
    name: "AI and Data Science", 
    description: "In this UI/UX workshop, you'll grasp fundamentals, explore design principles, and engage in hands-on activities to refine your skills and understanding of user interface and experience design.",
    workshops: [
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
    ]
  },
  {
    name: "Network", 
    description: "In this UI/UX workshop, you'll grasp fundamentals, explore design principles, and engage in hands-on activities to refine your skills and understanding of user interface and experience design.",
    workshops: [
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
    ]
  },
  {
    name: "Photography", 
    description: "In this UI/UX workshop, you'll grasp fundamentals, explore design principles, and engage in hands-on activities to refine your skills and understanding of user interface and experience design.",
    workshops: [
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
    ]
  },
  {
    name: "Web development", 
    description: "In this UI/UX workshop, you'll grasp fundamentals, explore design principles, and engage in hands-on activities to refine your skills and understanding of user interface and experience design.",
    workshops: [
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
    ]
  },
  {
    name: "Programming", 
    description: "In this UI/UX workshop, you'll grasp fundamentals, explore design principles, and engage in hands-on activities to refine your skills and understanding of user interface and experience design.",
    workshops: [
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
      { name: "Introduction to UI/UX", club: "CSE Club", location: "Alger" },
    ]
  },
]


function WorkshopCard({ name, club, location, refProp }) {
  return (
    <div ref={refProp} className="flex flex-col justify-center items-start p-[1vh] gap-2
                    border-8 border-[#E4E3E5] w-full
                    bg-[url('/paperTexture.png')] bg-cover bg-center">
      <h3 className="text-[#140C18] font-bold text-lg md:text-xl">
        {name}
      </h3>
      <p className="text-[#3C464B] font-medium text-base">
        {club} - {location}
      </p>
    </div>
  )
}


export default function Workshops() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % categories.length);
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex + categories.length - 1) % categories.length)
  }

  useEffect(() => {
    if (cardRef.current) {
      const cardHeight = cardRef.current.offsetHeight;
      setContainerHeight(cardHeight * 3 + 8 * 2);
    }
  }, [currentIndex]);

  return (
    <section id="workshops" className="w-full pt-16 md:pt-24 pb-4 bg-[#FBF9F7] bg-[url('/Dots.png')] bg-center">
      <div className="flex flex-col justify-center items-center gap-[10vh] w-full h-full">

        <div className="flex flex-col text-center gap-[5vh] w-[90%] md:w-[70%] md:max-w-200">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#140C18]">
            Our Workshops
          </h1>
          <p className="text-[#3C464B] text-sm md:text-lg text-center font-light md:font-medium">
            CSE Around Algeria will host a variety of workshops in different tech fields.
            Each workshop is designed to introduce participants to practical skills, guided by experienced mentors and organized in collaboration with local clubs
          </p>
        </div>

        {/* Desktop */}
        <div className="relative hidden md:flex flex-row justify-between items-center w-[90%] md:max-w-325 bg-[#567532] p-[4vh] gap-8">
          <img src='/arrow.png' className="absolute w-55 -top-50 -left-12"/>
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
            style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
          >
            <div
              className="w-full grid grid-cols-2 gap-2"
              style={categories[currentIndex].workshops.length > 6 ?
                { animation: "scroll-up 10s linear infinite" } : {}}
            >
              {(categories[currentIndex].workshops.length > 6
                ? [...categories[currentIndex].workshops, ...categories[currentIndex].workshops]
                : categories[currentIndex].workshops
              ).map((workshop, i) => (
                <WorkshopCard key={i}
                  refProp={i === 0 ? cardRef : null}
                  name={workshop.name}
                  club={workshop.club}
                  location={workshop.location}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden w-[90%] flex flex-col justify-center items-center bg-[#567532] p-8 gap-10">
          <h2 className="font-semibold text-3xl text-[#FBF9F7]">
            {categories[currentIndex].name}
          </h2>
          <p className="font-medium text-base text-[#E4E3E5]">
            {categories[currentIndex].description}
          </p>

          <div className="w-full overflow-hidden">
            <div
              className="flex flex-row items-center h-24 gap-2"
              style={{ animation: "scroll-right 25s linear infinite", width: "max-content" }}
            >
              {[...categories[currentIndex].workshops, ...categories[currentIndex].workshops]
                .map((workshop, i) => (
                  <WorkshopCard key={i}
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