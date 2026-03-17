"use client"
import "./NavBar.css"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileView, setMobileView] = useState(false)
  const [toggle, setToggel] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const media = window.matchMedia("(max-width:750px)");
    const handleChange = (e) => {
      if (!e.matches) setToggel(false)
      setMobileView(e.matches)
    }
    setMobileView(media.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [])

  useEffect(() => {
    const sectionIds = ["home", "about", "partners", "workshops", "wilayas", "faqs", "contact"]
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const links = [
    { label: "About", href: "#about", id: "about" },
    { label: "Partners", href: "#partners", id: "partners" },
    { label: "Wilayas", href: "#wilayas", id: "wilayas" },
    { label: "Workshops", href: "#workshops", id: "workshops" },
    { label: "FAQs", href: "#faqs", id: "faqs" },
    { label: "Contact", href: "#contact", id: "contact" },
  ]

  const isHome = activeSection === "home"
  const isContact = activeSection === "contact"

  if (isContact) return null

  return (
    <section className="NavBarContainer">
      <div className="NavBar" style={toggle ? { backgroundColor: "#D9F3B9", backgroundImage: "url('/Dots.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "repeat" } : {}}>
        <div className="caaLogo">
          <div className="caa-logo-wrapper">
            <div className="caa-logo-spin">
              <img src="/logo.png" alt="CAA Logo" />
            </div>
          </div>
        </div>

        {mobileView ? (
          <div className="hamMenu" onClick={() => setToggel((prev) => !prev)}>
            {toggle ? (
              <div className="stackT">
                <div className="plate1T"></div>
                <div className="plate2T"></div>
                <div className="plate3T"></div>
              </div>
            ) : (
              <div className="stack">
                <div className="plate1"></div>
                <div className="plate2"></div>
                <div className="plate3"></div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="nav-links">
              {links.map(({ label, href, id }) => {
                const isActive = !isHome && activeSection === id
                return (
                  <a
                    key={id}
                    href={href}
                    className={isActive ? "active-link" : ""}
                  >
                    {label}
                    <div className={isActive ? "active-underline" : ""}></div>
                  </a>
                )
              })}
            </div>
            <div className="register">
              <a href="/register" className="registerBtn">Register</a>
            </div>
          </>
        )}
      </div>

      {toggle && mobileView && (
        <div className="nav-links-toggled" onClick={() => setToggel(false)}>
          {links.map(({ label, href, id }) => {
            const isActive = !isHome && activeSection === id
            return (
              <a
                key={id}
                href={href}
                className={isActive ? "active-link" : ""}
              >
                {label}
                <div className={isActive ? "active-underline" : ""}></div>
              </a>
            )
          })}
        </div>
      )}
    </section>
  );
}