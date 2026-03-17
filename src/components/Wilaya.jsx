"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
const WILAYAS = [
  { name: "Algiers",           image: "images/wilaya/algiers.png"       },
  { name: "Ain Temouchent",    image: "images/wilaya/aintemouchent.png" },
  { name: "Ain Defla",         image: "images/wilaya/aindefla.png"      },
  { name: "Bouira",            image: "images/wilaya/bouira.png"        },
  { name: "Boumerdes",         image: "images/wilaya/boumerdes.png"     },
  { name: "Blida",             image: "images/wilaya/blida.png"         },
  { name: "Bejaia",            image: "images/wilaya/bejaia.png"        },
  { name: "Bordj Bou Arreridj",image: "images/wilaya/bba.png"          },
  { name: "Chlef",             image: "images/wilaya/chlef.png"         },
  { name: "Ghardaia",          image: "images/wilaya/ghardaia.png"      },
  { name: "Constantine",       image: "images/wilaya/constantine.png"   },
  { name: "Jijel",             image: "images/wilaya/jijel.png"         },
  { name: "Medea",             image: "images/wilaya/medea.png"         },
  { name: "Msila",             image: "images/wilaya/msila.png"         },
  { name: "Ouargla",           image: "images/wilaya/ouargla.png"       },
  { name: "Skikda",            image: "images/wilaya/skikda.png"        },
  { name: "Setif",             image: "images/wilaya/setif.png"         },
  { name: "Tizi Ouzou",        image: "images/wilaya/tizi_ouzou.png"    },
  { name: "Tipaza",            image: "images/wilaya/tipaza.png"        },
  { name: "Tlemcen",           image: "images/wilaya/tlemcen.png"       },
  { name: "Tiaret",            image: "images/wilaya/tiaret.png"        },
  { name: "Tebessa",           image: "images/wilaya/tebessa.png"       },
];

const CHUNK_SIZE  = 4;
const INTERVAL_MS = 3000;

// ── Desktop grid constants ────────────────────────────────────────────────────
const D_COL_W       = 247;
const D_GRID_H      = 462;
const D_GAP         = 12;
const D_RIGHT_OFF   = 104;
const D_LEFT_H      = (D_GRID_H - D_GAP - 90) / 2;
const D_RIGHT_TOP_H = D_GRID_H - D_RIGHT_OFF - 179 - D_GAP;
const D_RIGHT_BOT_H = 179;

// ── Mobile grid constants (scaled ~0.62×) ─────────────────────────────────────
const SCALE         = 0.62;
const M_COL_W       = Math.round(D_COL_W     * SCALE);
const M_GRID_H      = Math.round(D_GRID_H    * SCALE);
const M_GAP         = Math.round(D_GAP       * SCALE);
const M_RIGHT_OFF   = Math.round(D_RIGHT_OFF * SCALE);
const M_LEFT_H      = Math.round(D_LEFT_H    * SCALE);
const M_RIGHT_TOP_H = Math.round(D_RIGHT_TOP_H * SCALE);
const M_RIGHT_BOT_H = Math.round(D_RIGHT_BOT_H * SCALE);

function toChunks(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
const CHUNKS = toChunks(WILAYAS, CHUNK_SIZE);

const ACTIVE_FILL     = "#8DAD68";
const INACTIVE_FILL   = "#BDE38F";
const ACTIVE_STROKE   = "#8DAD68";
const INACTIVE_STROKE = "#567532";

const PINS = [
  {
    filterId: "wf0", filterX: 0, filterY: 10,
    circleTransform: "matrix(-1 0 0 1 25.3487 39.1909)",
    outlineD: "M15.8487 13.1909C8.9448 13.1909 3.34869 18.8249 3.34869 25.7749C3.34869 28.1932 4.02635 30.4519 5.20107 32.3697C6.6096 34.7182 8.01814 37.0687 9.42667 39.4182C11.1431 42.2251 12.5308 44.4972 14.2463 47.3051C15.7594 49.7807 15.861 49.8418 17.3817 47.3529C19.0887 44.5593 20.5238 42.2117 22.2308 39.4182C23.6365 37.0945 25.0422 34.7717 26.4478 32.449C27.652 30.514 28.3487 28.2266 28.3487 25.7749C28.3487 18.8249 22.7526 13.1909 15.8487 13.1909ZM15.8487 19.5001C12.7541 19.5001 10.245 22.0263 10.245 25.1417C10.245 28.2572 12.7532 30.7833 15.8487 30.7833C18.9433 30.7833 21.4524 28.2572 21.4524 25.1417C21.4524 22.0263 18.9433 19.5001 15.8487 19.5001Z",
    solidD: "M15.7665 14.5C9.54386 14.5 4.5 19.5276 4.5 25.7295C4.5 27.8875 5.11078 29.9031 6.16958 31.6145C7.43911 33.7102 8.70864 35.8077 9.97818 37.9043C11.5253 40.4091 12.7759 42.4367 14.3222 44.9423C15.6859 47.1514 15.7776 47.206 17.1482 44.9849C18.6867 42.492 19.9802 40.3972 21.5187 37.9043C22.7857 35.8307 24.0527 33.758 25.3196 31.6852C26.405 29.9585 27.0329 27.9173 27.0329 25.7295C27.0329 19.5276 21.989 14.5 15.7665 14.5ZM15.7665 20.1301C12.9773 20.1301 10.7157 22.3844 10.7157 25.1645C10.7157 27.9446 12.9764 30.1989 15.7665 30.1989C18.5557 30.1989 20.8172 27.9446 20.8172 25.1645C20.8172 22.3844 18.5557 20.1301 15.7665 20.1301Z",
  },
  {
    filterId: "wf1", filterX: 120, filterY: 1,
    circleTransform: "matrix(-1 0 0 1 145.349 30.1909)",
    outlineD: "M135.849 4.19092C128.945 4.19092 123.349 9.82489 123.349 16.7749C123.349 19.1932 124.026 21.4519 125.201 23.3697C126.61 25.7182 128.018 28.0687 129.427 30.4182C131.143 33.2251 132.531 35.4972 134.246 38.3051C135.759 40.7807 135.861 40.8418 137.382 38.3529C139.089 35.5593 140.524 33.2117 142.231 30.4182C143.636 28.0945 145.042 25.7717 146.448 23.449C147.652 21.514 148.349 19.2266 148.349 16.7749C148.349 9.82489 142.753 4.19092 135.849 4.19092ZM135.849 10.5001C132.754 10.5001 130.245 13.0263 130.245 16.1417C130.245 19.2572 132.753 21.7833 135.849 21.7833C138.943 21.7833 141.452 19.2572 141.452 16.1417C141.452 13.0263 138.943 10.5001 135.849 10.5001Z",
    solidD: "M135.766 5.5C129.544 5.5 124.5 10.5276 124.5 16.7295C124.5 18.8875 125.111 20.9031 126.17 22.6145C127.439 24.7102 128.709 26.8077 129.978 28.9043C131.525 31.4091 132.776 33.4367 134.322 35.9423C135.686 38.1514 135.778 38.206 137.148 35.9849C138.687 33.492 139.98 31.3972 141.519 28.9043C142.786 26.8307 144.053 24.758 145.32 22.6852C146.405 20.9585 147.033 18.9173 147.033 16.7295C147.033 10.5276 141.989 5.5 135.766 5.5ZM135.766 11.1301C132.977 11.1301 130.716 13.3844 130.716 16.1645C130.716 18.9446 132.976 21.1989 135.766 21.1989C138.556 21.1989 140.817 18.9446 140.817 16.1645C140.817 13.3844 138.556 11.1301 135.766 11.1301Z",
  },
  {
    filterId: "wf2", filterX: 240, filterY: 22,
    circleTransform: "matrix(-1 0 0 1 265.349 51.1909)",
    outlineD: "M255.849 25.1909C248.945 25.1909 243.349 30.8249 243.349 37.7749C243.349 40.1932 244.026 42.4519 245.201 44.3697C246.61 46.7182 248.018 49.0687 249.427 51.4182C251.143 54.2251 252.531 56.4972 254.246 59.3051C255.759 61.7807 255.861 61.8418 257.382 59.3529C259.089 56.5593 260.524 54.2117 262.231 51.4182C263.636 49.0945 265.042 46.7717 266.448 44.449C267.652 42.514 268.349 40.2266 268.349 37.7749C268.349 30.8249 262.753 25.1909 255.849 25.1909ZM255.849 31.5001C252.754 31.5001 250.245 34.0263 250.245 37.1417C250.245 40.2572 252.753 42.7833 255.849 42.7833C258.943 42.7833 261.452 40.2572 261.452 37.1417C261.452 34.0263 258.943 31.5001 255.849 31.5001Z",
    solidD: "M255.766 26.5C249.544 26.5 244.5 31.5276 244.5 37.7295C244.5 39.8875 245.111 41.9031 246.17 43.6145C247.439 45.7102 248.709 47.8077 249.978 49.9043C251.525 52.4091 252.776 54.4367 254.322 56.9423C255.686 59.1514 255.778 59.206 257.148 56.9849C258.687 54.492 259.98 52.3972 261.519 49.9043C262.786 47.8307 264.053 45.758 265.32 43.6852C266.405 41.9585 267.033 39.9173 267.033 37.7295C267.033 31.5276 261.989 26.5 255.766 26.5ZM255.766 32.1301C252.977 32.1301 250.716 34.3844 250.716 37.1645C250.716 39.9446 252.976 42.1989 255.766 42.1989C258.556 42.1989 260.817 39.9446 260.817 37.1645C260.817 34.3844 258.556 32.1301 255.766 32.1301Z",
  },
  {
    filterId: "wf3", filterX: 360, filterY: 0,
    circleTransform: "matrix(-1 0 0 1 385.349 29.1909)",
    outlineD: "M375.849 3.19092C368.945 3.19092 363.349 8.82489 363.349 15.7749C363.349 18.1932 364.026 20.4519 365.201 22.3697C366.61 24.7182 368.018 27.0687 369.427 29.4182C371.143 32.2251 372.531 34.4972 374.246 37.3051C375.759 39.7807 375.861 39.8418 377.382 37.3529C379.089 34.5593 380.524 32.2117 382.231 29.4182C383.636 27.0945 385.042 24.7717 386.448 22.449C387.652 20.514 388.349 18.2266 388.349 15.7749C388.349 8.82489 382.753 3.19092 375.849 3.19092ZM375.849 9.50013C372.754 9.50013 370.245 12.0263 370.245 15.1417C370.245 18.2572 372.753 20.7833 375.849 20.7833C378.943 20.7833 381.452 18.2572 381.452 15.1417C381.452 12.0263 378.943 9.50013 375.849 9.50013Z",
    solidD: "M375.766 4.5C369.544 4.5 364.5 9.52756 364.5 15.7295C364.5 17.8875 365.111 19.9031 366.17 21.6145C367.439 23.7102 368.709 25.8077 369.978 27.9043C371.525 30.4091 372.776 32.4367 374.322 34.9423C375.686 37.1514 375.778 37.206 377.148 34.9849C378.687 32.492 379.98 30.3972 381.519 27.9043C382.786 25.8307 384.053 23.758 385.32 21.6852C386.405 19.9585 387.033 17.9173 387.033 15.7295C387.033 9.52756 381.989 4.5 375.766 4.5ZM375.766 10.1301C372.977 10.1301 370.716 12.3844 370.716 15.1645C370.716 17.9446 372.976 20.1989 375.766 20.1989C378.556 20.1989 380.817 17.9446 380.817 15.1645C380.817 12.3844 378.556 10.1301 375.766 10.1301Z",
  },
  {
    filterId: "wf4", filterX: 480, filterY: 19,
    circleTransform: "matrix(-1 0 0 1 505.349 48.1909)",
    outlineD: "M495.849 22.1909C488.945 22.1909 483.349 27.8249 483.349 34.7749C483.349 37.1932 484.026 39.4519 485.201 41.3697C486.61 43.7182 488.018 46.0687 489.427 48.4182C491.143 51.2251 492.531 53.4972 494.246 56.3051C495.759 58.7807 495.861 58.8418 497.382 56.3529C499.089 53.5593 500.524 51.2117 502.231 48.4182C503.636 46.0945 505.042 43.7717 506.448 41.449C507.652 39.514 508.349 37.2266 508.349 34.7749C508.349 27.8249 502.753 22.1909 495.849 22.1909ZM495.849 28.5001C492.754 28.5001 490.245 31.0263 490.245 34.1417C490.245 37.2572 492.753 39.7833 495.849 39.7833C498.943 39.7833 501.452 37.2572 501.452 34.1417C501.452 31.0263 498.943 28.5001 495.849 28.5001Z",
    solidD: "M495.766 23.5C489.544 23.5 484.5 28.5276 484.5 34.7295C484.5 36.8875 485.111 38.9031 486.17 40.6145C487.439 42.7102 488.709 44.8077 489.978 46.9043C491.525 49.4091 492.776 51.4367 494.322 53.9423C495.686 56.1514 495.778 56.206 497.148 53.9849C498.687 51.492 499.98 49.3972 501.519 46.9043C502.786 44.8307 504.053 42.758 505.32 40.6852C506.405 38.9585 507.033 36.9173 507.033 34.7295C507.033 28.5276 501.989 23.5 495.766 23.5ZM495.766 29.1301C492.977 29.1301 490.716 31.3844 490.716 34.1645C490.716 36.9446 492.976 39.1989 495.766 39.1989C498.556 39.1989 500.817 36.9446 500.817 34.1645C500.817 31.3844 498.556 29.1301 495.766 29.1301Z",
  },
  {
    filterId: "wf5", filterX: 600, filterY: 12,
    circleTransform: "matrix(-1 0 0 1 625.349 41.1909)",
    outlineD: "M615.849 15.1909C608.945 15.1909 603.349 20.8249 603.349 27.7749C603.349 30.1932 604.026 32.4519 605.201 34.3697C606.61 36.7182 608.018 39.0687 609.427 41.4182C611.143 44.2251 612.531 46.4972 614.246 49.3051C615.759 51.7807 615.861 51.8418 617.382 49.3529C619.089 46.5593 620.524 44.2117 622.231 41.4182C623.636 39.0945 625.042 36.7717 626.448 34.449C627.652 32.514 628.349 30.2266 628.349 27.7749C628.349 20.8249 622.753 15.1909 615.849 15.1909ZM615.849 21.5001C612.754 21.5001 610.245 24.0263 610.245 27.1417C610.245 30.2572 612.753 32.7833 615.849 32.7833C618.943 32.7833 621.452 30.2572 621.452 27.1417C621.452 24.0263 618.943 21.5001 615.849 21.5001Z",
    solidD: "M615.766 16.5C609.544 16.5 604.5 21.5276 604.5 27.7295C604.5 29.8875 605.111 31.9031 606.17 33.6145C607.439 35.7102 608.709 37.8077 609.978 39.9043C611.525 42.4091 612.776 44.4367 614.322 46.9423C615.686 49.1514 615.778 49.206 617.148 46.9849C618.687 44.492 619.98 42.3972 621.519 39.9043C622.786 37.8307 624.053 35.758 625.32 33.6852C626.405 31.9585 627.033 29.9173 627.033 27.7295C627.033 21.5276 621.989 16.5 615.766 16.5ZM615.766 22.1301C612.977 22.1301 610.716 24.3844 610.716 27.1645C610.716 29.9446 612.976 32.1989 615.766 32.1989C618.556 32.1989 620.817 29.9446 620.817 27.1645C620.817 24.3844 618.556 22.1301 615.766 22.1301Z",
  },
];

// ─── SVG tracker ──────────────────────────────────────────────────────────────
function WilayasSVG({ activeIdx }) {
  return (
    <svg
      width="100%" height="68"
      viewBox="0 0 632 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <defs>
        {PINS.map((p) => (
          <filter key={p.filterId} id={p.filterId}
            x={p.filterX} y={p.filterY} width="31.5329" height="41.1252"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset /><feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix"
              values="0 0 0 0 0.690196 0 0 0 0 0.847059 0 0 0 0 0.921569 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        ))}
      </defs>
      <path
        d="M11.3487 51.2657C11.3487 51.2657 105.901 32.6992 164.349 51.2657C222.797 69.8322 278.799 74.7574 324.849 56.1909C370.899 37.6244 417.493 34.6138 477.849 56.1909C538.204 77.7681 623.349 51.2657 623.349 51.2657"
        stroke="#759451" strokeWidth="2" strokeDasharray="13 13"
      />
      {PINS.map((p, i) => {
        const active = i === activeIdx;
        const fill   = active ? ACTIVE_FILL   : INACTIVE_FILL;
        const stroke = active ? ACTIVE_STROKE : INACTIVE_STROKE;
        return (
          <g key={p.filterId}>
            <circle cx="10" cy="10" r="10" transform={p.circleTransform}
              fill={fill} className="transition-all duration-0" />
            <path fillRule="evenodd" clipRule="evenodd" d={p.outlineD}
              stroke={stroke} strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="4 3" className="transition-all duration-0" />
            <g filter={`url(#${p.filterId})`}>
              <path fillRule="evenodd" clipRule="evenodd" d={p.solidD}
                fill={fill} className="transition-all duration-0" />
              <path fillRule="evenodd" clipRule="evenodd" d={p.solidD}
                stroke="#3A541C" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Label badge ──────────────────────────────────────────────────────────────
function Label({ name, side = "left", mobile = false }) {
  return (
    <span
      className={`
        absolute z-10
        bg-[#CCE9A8] backdrop-blur-sm text-[#3A541C] font-semibold
        leading-snug rounded-[17px] shadow-md
        border border-dashed border-[1px] border-[#3A541C]
        transition-shadow duration-200
        hover:shadow-[0_10px_20px_rgba(58,84,28,0.35)]
        ${mobile
          ? "top-[38px] text-[12px] px-2 py-1.5"
          : "top-[62.5px] text-xs sm:text-sm px-5 py-3"
        }
        ${side === "left"
          ? (mobile ? "-left-4" : "-left-10")
          : (mobile ? "-right-4" : "-right-10")
        }
      `}
    >
      {name}
    </span>
  );
}

// ─── Photo grid ───────────────────────────────────────────────────────────────
function PhotoGrid({ photos, mobile = false }) {
  const [tL, bL, tR, bR] = [photos[0], photos[2], photos[1], photos[3]];

  const colW      = mobile ? M_COL_W       : D_COL_W;
  const gridH     = mobile ? M_GRID_H      : D_GRID_H;
  const gap       = mobile ? M_GAP         : D_GAP;
  const rightOff  = mobile ? M_RIGHT_OFF   : D_RIGHT_OFF;
  const leftH     = mobile ? M_LEFT_H      : D_LEFT_H;
  const rightTopH = mobile ? M_RIGHT_TOP_H : D_RIGHT_TOP_H;
  const rightBotH = mobile ? M_RIGHT_BOT_H : D_RIGHT_BOT_H;

  return (
    <div className="relative" style={{ width: colW * 2 + gap, height: gridH }}>
      {/* Left column */}
      <div className="absolute left-0 flex flex-col" style={{ gap, width: colW }}>
        {tL && (
          <div className="relative flex-shrink-0" style={{ width: colW, height: leftH }}>
            <Label name={tL.name} side="left" mobile={mobile} />
            <img src={tL.image} alt={tL.name} className="w-full h-full object-cover shadow-lg" loading="lazy" />
          </div>
        )}
        {bL && (
          <div className="relative flex-shrink-0" style={{ width: colW, height: leftH }}>
            <Label name={bL.name} side="left" mobile={mobile} />
            <img src={bL.image} alt={bL.name} className="w-full h-full object-cover shadow-lg" loading="lazy" />
          </div>
        )}
      </div>

      {/* Right column */}
      <div className="absolute right-0 flex flex-col" style={{ gap, width: colW, top: rightOff }}>
        {tR && (
          <div className="relative flex-shrink-0" style={{ width: colW, height: rightTopH }}>
            <Label name={tR.name} side="right" mobile={mobile} />
            <img src={tR.image} alt={tR.name} className="w-full h-full object-cover shadow-lg" loading="lazy" />
          </div>
        )}
        {bR && (
          <div className="relative flex-shrink-0" style={{ width: colW, height: rightBotH }}>
            <Label name={bR.name} side="right" mobile={mobile} />
            <img src={bR.image} alt={bR.name} className="w-full h-full object-cover shadow-lg" loading="lazy" />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function WilayasSection() {
  const [chunkIdx, setChunkIdx] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const t = setInterval(() => {
      setChunkIdx((p) => (p + 1) % CHUNKS.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  const mTrackerW = M_COL_W * 2 + M_GAP;

  return (
    <section id="wilayas" className="w-full p-8 md:p-24">

      <div className="flex flex-col items-center gap-6 lg:hidden">
        <h2
          className="font-black leading-tight text-[#9EC274] text-center w-full"
          style={{
            fontSize: "clamp(48px, 13vw, 78px)",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
            WebkitTextStroke: "1px #3A541C",
          }}
        >
          More than<br />20 wilayas
        </h2>

        <p
          className="text-[#242E33] leading-relaxed text-center max-w-sm"
          style={{
            fontSize: "clamp(14px, 3.8vw, 18px)",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
          }}
        >
          Discover the wilayas where our workshops will be held, offering
          valuable learning experiences and engagement opportunities in your
          local community.
        </p>

        <div className="flex flex-col items-center gap-3 py-2 overflow-visible">
          <PhotoGrid photos={CHUNKS[chunkIdx]} mobile={true} />
          <div style={{ width: mTrackerW }}>
            <WilayasSVG activeIdx={chunkIdx} />
          </div>
        </div>

        <button className="bg-[#BDE38F] hover:shadow-lg active:scale-95 text-[#140C18] font-bold text-base px-6 py-4 transition-all duration-200 shadow-sm">
          Register Now
        </button>
      </div>

      <div className="hidden lg:flex flex-nowrap items-center" style={{ gap: 132 }}>
        <div className="flex-1 min-w-[280px]">
          <h2
            className="font-black leading-tight text-[#9EC274] mb-5"
            style={{
              fontSize: "90px",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 650,
              WebkitTextStroke: "1px #3A541C",
            }}
          >
            More than<br />20 wilayas
          </h2>

          <p
            className="text-[#242E33] leading-relaxed mb-7"
            style={{
              fontSize: "22px",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
            }}
          >
            Discover the wilayas where our workshops will be held, offering valuable learning experiences and engagement opportunities in your local community.
          </p>

     
          <button   onClick={() => router.push("/register")} className="bg-[#BDE38F] hover:shadow-lg active:scale-95 text-[#140C18] font-bold text-base px-6 py-4 transition-all duration-200 shadow-sm">
            Register Now
          </button>
   
        </div>

        <div className="flex flex-col gap-4 py-4">
          <PhotoGrid photos={CHUNKS[chunkIdx]} mobile={false} />
          <div style={{ width: 506 }}>
            <WilayasSVG activeIdx={chunkIdx} />
          </div>
        </div>
      </div>

    </section>
  );
}