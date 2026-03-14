"use client";
import Image from "next/image";

import { useState } from "react";
export default function FAQ() {
  const [showr, setShowr] = useState([]);

  const toggler = (index) => {
    if (showr.includes(index) === true) {
      const newa = showr.filter((item) => item !== index);
      setShowr(newa);
    } else {
      setShowr([...showr, index]);
    }
  };

  // toggle the right elements
  const [showl, setShowl] = useState([]);

  const togglel = (index) => {
    if (showl.includes(index) === true) {
      const newa = showl.filter((item) => item !== index);
      setShowl(newa);
    } else {
      setShowl([...showl, index]);
    }
  };
  //toggle the left elements
  const datar = [
    {
      title: "What is the concept of CAA?",
      content:
        "CSE Around Algeria (CAA) is a nationwide initiative where technical workshops are held simultaneously across multiple cities in Algeria to share knowledge and empower students.",
    },
    {
      title: "What is the concept of CAA?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nesciunt corporis magni, eius et qui voluptas excepturi assumenda labore culpa quaerat suscipit iusto, doloremque corrupti nulla magnam distinctio unde facilis?",
    },
    {
      title: "What is the concept of CAA?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nesciunt corporis magni, eius et qui voluptas excepturi assumenda labore culpa quaerat suscipit iusto, doloremque corrupti nulla magnam distinctio unde facilis?",
    },
  ];
  //informations for the right column
  const datal = [
    {
      title: "What is the concept of CAA?",
      content:
        "CSE Around Algeria (CAA) is a nationwide initiative where technical workshops are held simultaneously across multiple cities in Algeria to share knowledge and empower students.",
    },
    {
      title: "What is the concept of CAA?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nesciunt corporis magni, eius et qui voluptas excepturi assumenda labore culpa quaerat suscipit iusto, doloremque corrupti nulla magnam distinctio unde facilis?",
    },
    {
      title: "What is the concept of CAA?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nesciunt corporis magni, eius et qui voluptas excepturi assumenda labore culpa quaerat suscipit iusto, doloremque corrupti nulla magnam distinctio unde facilis?",
    },
  ];
  //information for the left column
  return (
    <section>
      <div className="bg-[url(/bg.png)] bg-cover bg-no-repeat h-screen ">
        <div className="text-center">
          <h1 className="text-[#140C18]  text-[64px] max-m:text-[40px] font-bold  pb-20 max-xs:hidden">
            Frequently Asked Questions
          </h1>
          <h1 className="text-[36px]  text-[#140C18]   font-bold  xs:hidden pb-13.75  ">
            FAQ
          </h1>
        </div>

        <div className=" flex flex-col  ">
          <div className="flex flex-row gap-x-5     max-m:flex-col max-m:gap-y-8.25  content-center max-m:items-center justify-center  ">
            <div className="relative">
              <div className=" absolute z-1 -left-20 -top-20 ">
                <Image
                  src="/imagel.png"
                  width={186.78}
                  height={219.55}
                  alt="image"
                />
              </div>

              <div className=" gap-y-8.25 flex flex-col   ">
                {datal.map((data, index) => (
                  <div key={index}>
                    {!showl.includes(index) ? (
                      <div className="bg-white    max-xs:w-79.75  xs:w-120 flex flex-row items-center  justify-between  xl:w-157.25 max-sm:h-13 h-21.5 border-2 border-[#759451] max-xs:pt-4 max-xs:pb-4 max-xs:pr-5 max-xs:pl-5 pt-7 pb-7 pr-10 pl-10 ">
                        <h1 className="text-[24px] font-bold max-xs:text-[16px]">
                          {data.title}
                        </h1>
                        <button
                          className="cursor-pointer "
                          onClick={() => togglel(index)}
                        >
                          <Image
                            src="/down.png"
                            width={35}
                            height={35}
                            alt="drop down"
                            className="max-xs:w-5 max-xs:h-5"
                          />
                        </button>
                      </div>
                    ) : (
                      <div className="bg-white     items-center max-xs:w-79.75  xs:w-120    xl:w-157.25 h-51.5 border-2 border-[#ACD47C] p-2 ">
                        <div className="bg-[#F3FDE8] border-2 shadow-[0px_0px_10px_0px_#ACD47C] border-[#3A541C] h-full pt-7 pb-7 pr-10 pl-10   max-xs:pt-4 max-xs:pb-4 max-xs:pr-5 max-xs:pl-5 ">
                          <div className=" flex flex-row items-center justify-between ">
                            <h1 className="text-[24px] font-bold text-[#152027]   max-xs:text-[16px]">
                              {data.title}
                            </h1>
                            <button
                              className="cursor-pointer "
                              onClick={() => togglel(index)}
                            >
                              <Image
                                src="/up.png"
                                width={35}
                                height={35}
                                alt="drop down"
                                className="max-xs:w-5 max-xs:h-5"
                              />
                            </button>
                          </div>
                          <div className="xl:pt-6 max-xs:pt-3  xs:pt-4  ">
                            <p className="xl:text-[18px]  xs:text-[16px] max-xs:text-[14px] text-[#3C464B]">
                              {data.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className=" gap-y-8.25 flex flex-col  ">
              {datar.map((data, index) => (
                <div key={index}>
                  {!showr.includes(index) ? (
                    <div className="bg-white    max-xs:w-79.75  xs:w-120 flex flex-row items-center  justify-between  xl:w-157.25 max-sm:h-13 h-21.5 border-2 border-[#759451] max-xs:pt-4 max-xs:pb-4 max-xs:pr-5 max-xs:pl-5 pt-7 pb-7 pr-10 pl-10 ">
                      <h1 className="text-[24px] font-bold max-xs:text-[16px]">
                        {data.title}
                      </h1>
                      <button
                        className="cursor-pointer "
                        onClick={() => toggler(index)}
                      >
                        <Image
                          src="/down.png"
                          width={35}
                          height={35}
                          alt="drop down"
                          className="max-xs:w-5 max-xs:h-5"
                        />
                      </button>
                    </div>
                  ) : (
                    <div className="bg-white     items-center max-xs:w-79.75  xs:w-120    xl:w-157.25 h-51.5 border-2 border-[#ACD47C] p-2 ">
                      <div className="bg-[#F3FDE8] border-2 shadow-[0px_0px_10px_0px_#ACD47C] border-[#3A541C] h-full pt-7 pb-7 pr-10 pl-10   max-xs:pt-4 max-xs:pb-4 max-xs:pr-5 max-xs:pl-5 ">
                        <div className=" flex flex-row items-center justify-between ">
                          <h1 className="text-[24px] font-bold text-[#152027]   max-xs:text-[16px]">
                            {data.title}
                          </h1>
                          <button
                            className="cursor-pointer "
                            onClick={() => toggler(index)}
                          >
                            <Image
                              src="/up.png"
                              width={35}
                              height={35}
                              alt="drop down"
                              className="max-xs:w-5 max-xs:h-5"
                            />
                          </button>
                        </div>
                        <div className="xl:pt-6 max-xs:pt-3  xs:pt-4  ">
                          <p className="xl:text-[18px]  xs:text-[16px] max-xs:text-[14px] text-[#3C464B]">
                            {data.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end ">
            <Image
              src="/imager.png"
              width={175.76}
              height={168.91}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
