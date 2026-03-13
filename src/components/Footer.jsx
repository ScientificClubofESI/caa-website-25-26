import Image from "next/image";
import caaLogo from "../../public/logo.png";
import cseLogo from "../../public/cseLogo.svg";

import Link from "next/link";
export default function Footer() {
  const socilaMedia = [
    { id: "facebook", logo: "/socials/fcb.svg", link: "#" },
    { id: "instagram", logo: "/socials/insta.svg", link: "#" },
    { id: "X", logo: "/socials/X.svg", link: "#" },
    { id: "youtube", logo: "/socials/yout.svg", link: "#" },
    { id: "linkedin", logo: "/socials/linkedIn.svg", link: "#" },
  ];
  const Links = [
    { title: "home", link: "#" },
    { title: "about", link: "#" },
    { title: "partners", link: "#" },
    { title: "wilayas", link: "#" },
    { title: "workshops", link: "#" },
    { title: "faqs", link: "#" },
  ];
  const Details = [
    {
      title: "location",
      detail: "everywhere at once",
    },
    {
      title: "contact",
      detail: "cse@esi.dz",
    },
    {
      title: "date",
      detail: "march 25 , 2026",
    },
  ];

  return (
    <footer className=" p-9 md:p-14 mt-10  items-start  h-full bg-secondary-950/83 bg-[url('/paperTexture.jpg')] bg-blend-multiply bg-cover">
      <div className=" text-xl flex-col   md:flex-row flex justify-between items-start gap-14 text-white  w-full h-full  font-bold">
        <div className="flex justify-start  flex-col gap-6">
          <div className="flex flex-row items-center md:items-start md:flex-col gap-5 ">
            <div className="flex justify-start  gap-2 items-center w-52">
              <div>
                <Image
                  src={caaLogo}
                  width={90}
                  height={90}
                  alt="caa-logo"
                ></Image>
              </div>
              <p className="font-medium hidden md:flex text-[16px] uppercase">
                {" "}
                cse around algeria +
              </p>
            </div>
            <div className="cse-logo">
              <Image
                src={cseLogo}
                width={150}
                height={150}
                alt="cse-logo"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-5">
            <h4 className="font-medium capitalize text-2xl ">follow us </h4>
            <ul className="flex justify-between w-[80%] md:w-full items-center gap-2 md:gap-3">
              {" "}
              {socilaMedia.map((social) => {
                return (
                  <li
                    key={social.id}
                    className="border-2 p-2.5  rounded-full w-10 h-10 flex justify-center items-center border-background-light/80 border-dashed"
                  >
                    {" "}
                    <Link href={social.link}>
                      <Image
                        src={social.logo}
                        width={30}
                        height={30}
                        alt={social.id}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-normal flex-col gap-4 ">
            <li className=" capitalize text-2xl ">Links</li>
            {Links.map((linkItem) => {
              return (
                <li
                  key={linkItem.title}
                  className="font-light text-background-light/90 capitalize"
                >
                  <Link href={linkItem.link}>{linkItem.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3  justify-start">
            <li className="text-2xl">Details</li>
            {Details.map((item) => {
              return (
                <li
                  key={item.title}
                  className="font-light  text-xl text-background-light/90"
                >
                  <span className="capitalize">{item.title}:</span>{" "}
                  <span className="font-bold capitalize">{item.detail}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row  items-center md:items-start  md:flex-col  justify-start gap-7 w-full md:w-[15%]">
          <div className="w-[50%] md:w-full">
            <h3 className="capitalize ">join now </h3>
            <p className="font-light text-background-light/70 text-[18px] first-letter:uppercase ">
              ready to make an impact? register now !
            </p>
          </div>
          <Link href={"#"}>
            <button className="bg-secondary-800 w-full text-xl md:text-xl capitalize font-medium p-2 border border-secondary-800 ">
              register now{" "}
            </button>
          </Link>
        </div>
      </div>

      {/*  copyright  */}
      <div>
        <div className="arrowup flex p-3 justify-end items-end  w-full  border-b-2 border-dashed border-secondary-100/40  ">
          <div className="w-14 h-14 hidden md:self-end border-secondary-100/70 border-dashed md:flex justify-center items-center  border-2 p-2 rounded-full">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d9f3b9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5l0 14" />
              <path d="M18 11l-6 -6" />
              <path d="M6 11l6 -6" />
            </svg>
          </div>
        </div>
        <div className="w-full h-full my-5 flex justify-center items-center">
          <p className="capitalize  text-center text-background-light/50 font-medium ">
            Copyright © 2026 Club Scientifique de l’ESI. All rights
            reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
