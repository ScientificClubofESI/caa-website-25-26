"use client";
import Image from "next/image";
import { useState } from "react";

function FAQColumn({ data }) {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="gap-y-4 md:gap-y-8 flex flex-col">
      {data.map((item, index) => (
        <div key={index}>
          {!openItems.includes(index) ? (
            <div className="bg-white max-xs:w-79.75 xs:w-120 flex flex-row items-center justify-between xl:w-157.25 max-sm:h-13 h-21.5 border-2 border-[#759451] max-xs:pt-4 max-xs:pb-4 max-xs:pr-5 max-xs:pl-5 pt-7 pb-7 pr-10 pl-10">
              <h1 className="text-[22px] font-bold max-xs:text-[12px]">{item.title}</h1>
              <button className="cursor-pointer" onClick={() => toggle(index)}>
                <Image src="/down.png" width={35} height={35} alt="drop down" className="max-xs:w-5 max-xs:h-5" />
              </button>
            </div>
          ) : (
            <div className="bg-white items-center max-xs:w-79.75 xs:w-120 xl:w-157.25 h-auto border-2 border-[#ACD47C] p-2">
              <div className="bg-[#F3FDE8] border-2 shadow-[0px_0px_10px_0px_#ACD47C] border-[#3A541C] h-full pt-7 pb-7 pr-10 pl-10 max-xs:pt-4 max-xs:pb-4 max-xs:pr-5 max-xs:pl-5">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-[24px] font-bold text-[#152027] max-xs:text-[12px]">{item.title}</h1>
                  <button className="cursor-pointer" onClick={() => toggle(index)}>
                    <Image src="/up.png" width={35} height={35} alt="drop down" className="max-xs:w-5 max-xs:h-5" />
                  </button>
                </div>
                <div className="xl:pt-6 max-xs:pt-3 xs:pt-4">
                  <p className="xl:text-[18px] xs:text-[14px] max-xs:text-[12px] text-[#3C464B]">{item.content}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
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
    <section id="faqs">
      <div className="w-full h-full p-6 md:p-24 my-20">
        <div className="text-center">
          <h1 className="text-[#140C18] text-[64px] max-m:text-[40px] font-bold pb-20 max-xs:hidden">
            Frequently Asked Questions
          </h1>
          <h1 className="text-[36px] text-[#140C18] font-bold xs:hidden pb-13.75">
            FAQ
          </h1>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row gap-x-5 max-m:flex-col max-m:gap-y-8.25 content-center max-m:items-center justify-center">
            <div className="relative">
              <div className="absolute z-1 -left-20 -top-20">
                <Image src="/imagel.png" width={186.78} height={219.55} alt="image" />
              </div>
              <FAQColumn data={leftFAQs} />
            </div>
            <div className="relative">
              <FAQColumn data={rightFAQs} />
              <div className="absolute z-1 -right-20 -bottom-40">
                <Image src="/imager.png" width={186.78} height={219.55} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}