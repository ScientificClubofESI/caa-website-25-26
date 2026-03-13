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
    ,
    { title: "partners", link: "#" },
    ,
    { title: "wilayas", link: "#" },
    ,
    { title: "workshops", link: "#" },
    ,
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
    <footer className="p-14 mt-10   h-full bg-secondary-950/83 bg-[url('/paperTexture.jpg')] bg-blend-multiply bg-cover">
      <div className=" text-2xl  flex justify-between items-start gap-10 text-white  w-full h-full  font-bold">
        <div className="flex justify-start flex-col gap-5">
          <div className="flex justify-start gap-2 items-center w-52">
            <div>
              <Image
                src={caaLogo}
                width={90}
                height={90}
                alt="caa-logo"
              ></Image>
            </div>
            <p className="font-medium text-[16px] uppercase">
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
          <div className="flex flex-col justify-start gap-5">
            <h4 className="font-medium capitalize text-3xl ">follow us </h4>
            <ul className="flex justify-between items-center gap-3">
              {" "}
              {socilaMedia.map((social) => {
                return (
                  <li
                    key={social.id}
                    className="border-2 p-2.5 rounded-full w-10 h-10 flex justify-center items-center border-background-light/80 border-dashed"
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
        <div>
          <ul className="flex justify-normal flex-col gap-4 ">
            <li className="font-light capitalize text-3xl ">Links</li>
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
          <ul className="flex flex-col gap-3 justify-start">
            <li>Details</li>
            {Details.map((item) => {
              return (
                <li
                  key={item.title}
                  className="font-light text-background-light/90"
                >
                  <span className="capitalize">{item.title}:</span>{" "}
                  <span className="font-bold capitalize">{item.detail}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col  justify-start gap-7 w-[15%]">
          <h3 className="capitalize ">join now </h3>
          <p className="font-light text-[20px] first-letter:uppercase ">
            ready to make an impact? register now !
          </p>
          <Link href={"#"}>
            <button className="bg-secondary-800 capitalize font-medium p-3 border border-secondary-800 ">
              register now{" "}
            </button>
          </Link>
        </div>
      </div>
      {/* div  copyright  */}
      <div></div>
    </footer>
  );
}
