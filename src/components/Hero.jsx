"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./Hero.css";

export default function HeroSection() {
  const [slide, setSlide] = useState(0); 
  const [dimmed, setDimmed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDimmed(true);
      setTimeout(() => {
        setSlide((s) => (s === 0 ? 1 : 0));
        setDimmed(false);
      }, 150);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-headings">

          <div className="heading-row row-1">
            <span className="hero-word">CSE</span>

            <div className="date-image">
              <Image src="/images/hero/date.png" alt="Event Date" width={177} height={150} priority />
            </div>

            <span className="hero-word">Around</span>

            <div className="polaroid polaroid-2">
              <Image
                src="/images/hero/image_2_1.png"
                alt="Algerian city"
                width={184} height={157}
                className={`polaroid-image polaroid-slide${slide === 0 && !dimmed ? " visible" : ""}${slide === 0 && dimmed ? " dimmed" : ""}`}
              />
              <Image
                src="/images/hero/image_2_2.png"
                alt="Algerian city 2"
                width={184} height={157}
                className={`polaroid-image polaroid-slide${slide === 1 && !dimmed ? " visible" : ""}${slide === 1 && dimmed ? " dimmed" : ""}`}
              />
            </div>
          </div>

          <div className="heading-row row-2">
            <span className="hero-word">Algeria</span>

            <div className="polaroid polaroid-3">
              <Image
                src="/images/hero/image_1_1.png"
                alt="Algerian landscape"
                width={239} height={193}
                className={`polaroid-image polaroid-slide${slide === 0 && !dimmed ? " visible" : ""}${slide === 0 && dimmed ? " dimmed" : ""}`}
              />
              <Image
                src="/images/hero/image_1_2.png"
                alt="Algerian landscape 2"
                width={239} height={193}
                className={`polaroid-image polaroid-slide${slide === 1 && !dimmed ? " visible" : ""}${slide === 1 && dimmed ? " dimmed" : ""}`}
              />
            </div>

            <span className="hero-word">And</span>
          </div>

          <div className="heading-row row-3">
            <span className="hero-word beyond-mobile">Beyond</span>
            <div className="hero-content">
              <p className="hero-description">
                CSE Around Algeria unites learners and innovators, boosting collaboration and tech community growth.
              </p>
              <a href="/register" className="hero-cta">Register Now</a>
            </div>
            <span className="hero-word">Beyond</span>
          </div>

        </div>
      </div>
    </section>
  );
}