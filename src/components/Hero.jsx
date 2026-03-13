import Image from "next/image";
import "./Hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* ── SUBTLE DOT TEXTURE ── */}
      <div className="hero-dot-texture" />

      <div className="hero-container">
        
        {/* ── BIG HEADINGS ── */}
        <div className="hero-headings">
          {/* CSE */}
          <span className="hero-heading-span heading-cse">
            CSE
          </span>
          {/* Around */}
          <span className="hero-heading-span heading-around">
            Around
          </span>
          {/* Algeria */}
          <span className="hero-heading-span heading-algeria">
            Algeria
          </span>
          {/* And */}
          <span className="hero-heading-span heading-and">
            And
          </span>
          {/* Beyond */}
          <span className="hero-heading-span heading-beyond">
            Beyond
          </span>
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
