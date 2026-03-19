"use client";
import Image from "next/image";
import { useState } from "react";

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div 
        className={`bg-white max-xs:w-79.75 xs:w-120 xl:w-150 border-2 flex flex-col p-[4px] md:p-[6px] transition-colors duration-200 ${
          isOpen ? "border-[#ACD47C]" : "border-[#759451] h-21.5 max-sm:h-13"
        }`}
      >
        <div className={`h-full flex flex-col ${
          isOpen 
            ? "bg-[#F3FDE8] border-2 border-[#3A541C] pt-7 pb-7 pr-10 pl-10 max-xs:pt-4 max-xs:pb-4 max-xs:pr-5 max-xs:pl-5 shadow-[0px_4px_15px_rgba(172,212,124,0.6)]" 
            : "justify-center px-10 max-xs:px-5 h-full"
        }`}>
          
          <div className="flex flex-row items-center justify-between">
            <h1 className={`font-bold max-xs:text-[12px] transition-all duration-200 ${
              isOpen ? "text-[24px] text-[#152027]" : "text-[22px]"
            }`}>
              {item.title}
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex-shrink-0 rounded-full p-0 cursor-pointer transition-shadow duration-200 bg-transparent border-none ${
                isOpen ? "shadow-[0px_0px_12px_2px_rgba(58,84,28,0.3)] -translate-y-2" : "shadow-[0px_0px_12px_2px_rgba(58,84,28,0.3)]"
              }`}
            >
              <Image 
                src={isOpen ? "/up.png" : "/down.png"} 
                width={35} 
                height={35} 
                alt="toggle" 
                className="max-xs:w-5 max-xs:h-5" 
              />
            </button>
          </div>

          <div className={`${isOpen ? "block pt-6 max-xs:pt-3 opacity-100" : "hidden opacity-0"}`}>
            <div className="overflow-hidden">
              <p className="xl:text-[18px] xs:text-[14px] max-xs:text-[12px] text-[#3C464B] leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const leftFAQs = [
  {
    title: "What is the CAA event?",
    content: "CSE Around Algeria (CAA) is a nationwide tech event organized by CSE. It brings together participants from different regions of Algeria through workshops held simultaneously across multiple locations. This year marks the 4th edition of the event.",
  },
  {
    title: "When will CSE Around Algeria take place?",
    content: "The 4th edition of CSE Around Algeria will take place on March 25, with workshops organized simultaneously in multiple wilayas across Algeria.",
  },
  {
    title: "Where will the event take place?",
    content: "CAA will take place simultaneously in different wilayas across Algeria through participating clubs.",
  },
];

const rightFAQs = [
  {
    title: "Who can participate in CAA?",
    content: "CAA is open to anyone interested in technology and eager to learn through hands-on workshops.",
  },
  {
    title: "Do I need prior experience to join the workshops?",
    content: "Not necessarily. Some workshops are designed for beginners, while others may require basic knowledge depending on the topic.",
  },
  {
    title: "How can I register for the workshops?",
    content: "Participants can register through the registration form available on our website or via the link in our social media bio.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="overflow-x-hidden">
      <div className="min-w-screen h-full p-6 md:p-30 my-20">
        <div className="text-center mb-20 max-xs:mb-10">
          <h1 className="text-[#140C18] text-[64px] max-m:text-[40px] font-bold max-xs:hidden">
            Frequently Asked Questions
          </h1>
          <h1 className="text-[36px] text-[#140C18] font-bold xs:hidden">
            FAQ
          </h1>
        </div>

        <div className="flex flex-row gap-x-5 max-m:flex-col max-m:gap-y-4 items-center md:items-start justify-center">
          {/* Left Column */}
          <div className="relative flex flex-col gap-y-4 md:gap-y-8">
            <div className="absolute z-1 -left-20 -top-20">
              <Image src="/imagel.png" width={186} height={219} alt="decor" />
            </div>
            {leftFAQs.map((faq, index) => <FAQItem key={index} item={faq} />)}
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col gap-y-4 md:gap-y-8">
            {rightFAQs.map((faq, index) => <FAQItem key={index} item={faq} />)}
            <div className="absolute z-1 -right-20 md:-right-30 -bottom-40 w-40 h-40 ">
              <Image src="/imager.png" width={186} height={219} alt="decor" />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}