import Image from "next/image";
import caaLogo from "../../public/logo.png";
import cseLogo from "../../public/cseLogo.svg";

import Link from "next/link";

const globeSpinStyles = `
  @keyframes flatSpin {
    0%   { transform: rotate(0deg);   }
    100% { transform: rotate(360deg); }
  }

  @keyframes jumpPulse {
    0%,  100% { transform: rotate(var(--r, 0deg)) translateY(0px);    }
    30%        { transform: rotate(var(--r, 0deg)) translateY(-10px);  }
    50%        { transform: rotate(var(--r, 0deg)) translateY(-14px);  }
    70%        { transform: rotate(var(--r, 0deg)) translateY(-6px);   }
  }

  .caa-globe {
    display: inline-block;
    animation: flatSpin 8s linear infinite, jumpPulse 2.4s ease-in-out infinite;
    transform-origin: center center;
  }

  .caa-globe-wrapper:hover .caa-globe {
    animation: flatSpin 2.5s linear infinite, jumpPulse 1s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(168, 240, 117, 0.65));
  }
`;

export default function Footer() {
  const socilaMedia = [
    { id: "facebook", logo: "/socials/fcb.svg", link: "https://www.facebook.com/club.scientifique.esi" },
    { id: "instagram", logo: "/socials/insta.svg", link: "https://www.instagram.com/cse.club/" },
    { id: "X", logo: "/socials/X.svg", link: "https://x.com/CSESI_Club" },
    { id: "youtube", logo: "/socials/yout.svg", link: "https://www.youtube.com/channel/UCHgeF6ELJW0Pt1vYoAomCig" },
    { id: "linkedin", logo: "/socials/linkedIn.svg", link: "https://www.linkedin.com/company/cse-club/" },
  ];
  const Links = [
    { title: "home", link: "#home" },
    { title: "about", link: "#about" },
    { title: "partners", link: "#partners" },
    { title: "wilayas", link: "#wilayas" },
    { title: "workshops", link: "#workshops" },
    { title: "faqs", link: "#faqs" },
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
    <>
    <style>{globeSpinStyles}</style>
    <footer id="contact" className=" p-9 md:p-24 mt-10  items-start  h-full bg-secondary-950/83 bg-[url('/paperTexture.jpg')] bg-blend-multiply bg-cover">
      <div className=" text-xl flex-col   md:flex-row flex justify-between items-start gap-14 text-white-light  w-full h-full  font-bold">
        <div className="flex justify-start  flex-col gap-6">
          <div className="flex flex-row items-center md:items-start md:flex-col gap-5 ">
            <div className="flex justify-start  gap-2 items-center w-52">
              <div className="caa-globe-wrapper">
                <div className="caa-globe">
                  <Image
                    src={caaLogo}
                    width={90}
                    height={90}
                    alt="caa-logo"
                  />
                </div>
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
                    className="
                      border-2 p-2.5 rounded-full w-10 h-10 flex justify-center items-center
                      border-white-light/80 border-dashed
                      transition-all duration-300
                      hover:border-[#a8f075]
                      hover:shadow-[0_0_12px_3px_rgba(168,240,117,0.5)]
                      hover:[filter:brightness(0)_saturate(100%)_invert(85%)_sepia(30%)_saturate(400%)_hue-rotate(60deg)_brightness(110%)]
                    "
                  >
                    {" "}
                    <Link href={social.link}>
                      <Image
                        src={social.logo}
                        width={30}
                        height={30}
                        alt={social.id}
                        className="transition-all duration-300 group-hover:brightness-200"
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
                  className="font-light text-white-light/90 capitalize transition-all duration-300 hover:text-[#a8f075] hover:[text-shadow:0_0_10px_rgba(168,240,117,0.7)]"
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
                  className="font-light  text-xl text-white-light/90"
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
            <p className="font-light text-white-light/70 text-[18px] first-letter:uppercase ">
              ready to make an impact? register now !
            </p>
          </div>
          <Link href={"/register"}>
            <button className="bg-secondary-800 w-full text-xl md:text-xl capitalize font-medium p-2 border border-secondary-800 text-white-light transition-all duration-300 hover:[box-shadow:0px_4px_4px_0px_#00000040]">
              register now{" "}
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="arrowup flex p-3 justify-end items-end  w-full  border-b-2 border-dashed border-secondary-100/40  ">
          <Link
            href="#home"
            aria-label="Back to top"
            className="
              w-14 h-14 hidden md:self-end border-secondary-100/70 border-dashed md:flex
              justify-center items-center border-2 p-2 rounded-full
              transition-transform duration-300 ease-out
              hover:-translate-y-2
              hover:border-[#a8f075]/70
              hover:shadow-[0_4px_16px_rgba(168,240,117,0.3)]
            "
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d9f3b9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5l0 14" />
              <path d="M18 11l-6 -6" />
              <path d="M6 11l6 -6" />
            </svg>
          </Link>
        </div>
        <div className="w-full h-full my-5 flex justify-center items-center">
          <p className="capitalize  text-center text-white-light/50 font-medium ">
            Copyright © 2026 Club Scientifique de l'ESI. All rights
            reserved{" "}
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}