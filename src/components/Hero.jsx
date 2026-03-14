import Image from "next/image";
import "./Hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* ── SUBTLE DOT TEXTURE ── */}
      <div className="hero-dot-texture" />

      <div className="hero-container">
        
        {/* ── DESKTOP/MOBILE TEXT FRAME ── */}
        <div className="hero-text-frame">
          {/* ── BIG HEADINGS ── */}
          <div className="hero-headings">
            <span className="hero-heading-span heading-cse">
              CSE
            </span>
            <span className="hero-heading-span heading-around">
              Around
            </span>
            <span className="hero-heading-span heading-algeria">
              Algeria
            </span>
            <span className="hero-heading-span heading-and">
              And
            </span>
            <span className="hero-heading-span heading-beyond">
              Beyond
            </span>
          </div>

          {/* ── SUBTEXT + CTA ── */}
          <div className="hero-content">
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
              mi. Aliquam in hendrerit urna.
            </p>
            <a href="#register" className="hero-cta">
              Register Now
            </a>
          </div>
        </div>

        {/* ── DATE IMAGE ── */}
        <div className="hero-date-image">
          <Image
            src="/images/Date.png"
            alt="Event Date"
            width={177.26}
            height={149.7}
          />
        </div>

        {/* ── POLAROID 1 (Center / Park) ── */}
        <div className="polaroid polaroid-1">
          <div className="polaroid-inner">
            <Image
              src="/images/photo1.jpg"
              alt="Algerian park"
              fill
              className="polaroid-image"
            />
          </div>
        </div>

        {/* ── POLAROID 2 (Top Right / City) ── */}
        <div className="polaroid polaroid-2">
          <div className="polaroid-inner">
            <Image
              src="/images/photo1.jpg"
              alt="Algerian city"
              fill
              className="polaroid-image"
            />
          </div>
        </div>

        {/* ── POLAROID 3 ── */}
        <div className="polaroid polaroid-3">
          <div className="polaroid-inner">
            <Image
              src="/images/photo2.jpg"
              alt="Algerian landscape"
              fill
              className="polaroid-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
