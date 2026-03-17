"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const WILAYAS = [
  { name: "Alger", code: 16 }, { name: "Constantine", code: 25 },
  { name: "Tizi Ouzou", code: 15 },
  { name: "Sétif", code: 19 },  { name: "Tipaza", code: 42 },
  { name: "Boumerdes", code: 35 }, { name: "Chlef", code: 2 }, { name: "Msila", code: 28 },
  { name: "Ain Temouchent", code: 46 }, { name: "Tlemcen", code: 13 }, { name: "Bouira", code: 10 },
  { name: "Ourgla", code: 30 }, { name: "Skikda", code: 21 }, { name: "Tiaret", code: 14 },
  { name: "Tebessa", code: 12 }, { name: "Ain Defla", code: 44 }, { name: "Jijel", code: 18 },
  { name: "Ghardaïa", code: 47 }
];

const WORKSHOPS_BY_WILAYA = {
  "Alger": ["Introduction au reseau informatique", "GIS mapping", "FastAPI Kickstart: Build Your First REST API", "Learn C from Scratch", "Filmmaking Journey: Introduction to Photography", "UI/UX Design"],
  "Tipaza": ["Vibe Coding: How to Build Your Own Website Without Coding"],
  "Boumerdes": ["L’utilisation concrete des DSA aux projets quotidiens", "Intro to Web Development"],
  "Chlef": ["Filmmaking for Beginners"],
  "Sétif": ["ML Fundamentals", "From HTML to React: The Front-End Developer’s Journey"],
  "Msila": ["Introduction to Python: From Basics to Useful Projects", "The Potential of Blockchain Use in Algeria's Public Sector"],
  "Ain Temouchent": ["From Idea to Interface: Mastering UI/UX with Figma"],
  "Tlemcen": ["Work Smarter: How to Improve Your Productivity Using AI"],
  "Bouira": ["Introduction to AI and Data Science"],
  "Ourgla": ["FastAPI Kickstart: Build Your First REST API"],
  "Skikda": ["Web Development Basics: HTML, CSS, JS", "UI/UX Design"],
  "Tiaret": ["Modern Web Development Bootcamp"],
  "Tizi Ouzou": ["Introduction to Python"],
  "Tebessa": ["Web Development"],
  "Constantine": ["Build Your First Website: HTML/CSS"],
  "Ain Defla": ["Intro to Web Development"],
  "Jijel": ["Where Ideas Find Their Voice"],
  "Ghardaïa": ["From Idea to Smart Automation: Building Your First AI Powered System"],
};

export default function Register() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(""); 
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", discordId: "",
    wilaya: "", workshop: "", expectations: "", motivation: "", additional: ""
  });

  const availableWorkshops = useMemo(() => {
    return WORKSHOPS_BY_WILAYA[formData.wilaya] || [];
  }, [formData.wilaya]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(""); 
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "wilaya") setFormData(prev => ({ ...prev, workshop: "" }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(""); 
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registrations/by-name`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name:      formData.fullName,
          email:          formData.email,
          phone_number:   formData.phone,
          discord_id:     formData.discordId,
          wilaya_name:    formData.wilaya,
          workshop_title: formData.workshop,
          expectations:   formData.expectations,
          motivation:     formData.motivation,
          additional_info: formData.additional || null,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || data.error || "Registration failed. Please try again.");
        return;
      }
      setStep(4);
    } catch {
      setError("Network error — make sure the API is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen font-quicksand flex flex-col items-center justify-center bg-[#FBF9F7] relative px-6 md:px-16 py-4"
         style={{ backgroundImage: "radial-gradient(circle, #00000018 1.5px, transparent 1px)", backgroundSize: "10px 10px" }}>
      
      <div className="w-full max-w-7xl flex justify-between absolute top-4 md:top-8 items-center px-6 md:px-12">
        <Image src="/images/register/CAA.png" alt="CAA Logo" width={140} height={60} priority className="w-28 md:w-36" />
        
        {step < 4 && (
          <Link href="/" className="relative flex items-center justify-center group h-12 w-24">
            <span className="relative z-10 text-xl font-bold text-[#2D3648] group-hover:text-[#7AA262] transition-colors">Home</span>
            <div className="absolute -bottom-1 z-0 transition-transform duration-300 group-hover:translate-x-2">
              <Image src="/images/register/arrow.png" alt="arrow" width={80} height={40} className="w-20 h-auto" />
            </div>
          </Link>
        )}
      </div>

      <div className="w-full max-w-2xl">
        {step === 1 && (
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-6 mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1A202C]">Personal information</h1>
            <div className="grid gap-6">
              <Input label="Full name" name="fullName" placeholder="Your first name" required value={formData.fullName} onChange={handleChange} />
              <Input label="Email" name="email" type="email" placeholder="example@gmail.com" required value={formData.email} onChange={handleChange} />
              <Input label="Phone number" name="phone" placeholder="+213 xxxxxxxxx" required value={formData.phone} onChange={handleChange} />
              <Input label="Discord ID" name="discordId" placeholder="username#0000" required value={formData.discordId} onChange={handleChange} />
              <div className="space-y-2 text-left">
                <label className="font-bold text-sm">Wilaya <span className="text-red-500">*</span></label>
                <select name="wilaya" value={formData.wilaya} onChange={handleChange} className="w-full p-4 bg-[#E2F4C5] rounded-xl outline-none appearance-none cursor-pointer border-none focus:ring-2 focus:ring-[#7AA262]/20">
                  <option value="">Select your wilaya</option>
                  {WILAYAS.map(w => <option key={w.code} value={w.name}>{w.name}</option>)}
                </select>
              </div>
            </div>
            
            <div className="flex flex-col items-end pt-8">
              {error && <p className="text-red-500 text-sm font-bold mb-2 animate-pulse">{error}</p>}
              <NavBtn label="Next" onClick={() => setStep(2)} disabled={!formData.wilaya || !formData.fullName} />
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="space-y-10 animate-in slide-in-from-right-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1A202C]">{formData.wilaya} Workshop</h1>
            <div className="space-y-4">
              <p className="font-bold text-sm text-left px-1">Please choose a workshop <span className="text-red-500">*</span></p>
              <div className="max-h-[45vh] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-[#7AA262]">
                {availableWorkshops.map((title, idx) => (
                  <label key={idx} className="flex items-center gap-4 p-4 bg-white/40 border border-transparent rounded-2xl cursor-pointer group hover:border-[#7AA262]/30 hover:bg-[#E2F4C5]/20 transition-all">
                    <input type="radio" name="workshop" value={title} checked={formData.workshop === title} onChange={handleChange} className="w-5 h-5 accent-[#7AA262]" />
                    <span className="text-[#2D3648] group-hover:text-black font-semibold text-lg">{title}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center pt-12">
               {error && <p className="text-red-500 text-sm font-bold mb-2 animate-pulse">{error}</p>}
               <div className="flex justify-between w-full">
                <NavBtn label="Back" onClick={() => setStep(1)} dir="left" />
                <NavBtn label="Next" onClick={() => setStep(3)} disabled={!formData.workshop} />
               </div>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="space-y-10 animate-in slide-in-from-right-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1A202C]">Event related questions</h1>
            <div className="space-y-6">
              <Input label="What are you expectations?" name="expectations" placeholder="Your answer" required value={formData.expectations} onChange={handleChange} />
              <Input label="What motivates you? " name="motivation" placeholder="Your answer" required value={formData.motivation} onChange={handleChange} />
              <Input label="Anything to add?" name="additional" placeholder="Your answer" value={formData.additional} onChange={handleChange} />
            </div>
            
            <div className="flex flex-col items-center pt-12">
               {error && <p className="text-red-500 text-sm font-bold mb-4 animate-pulse text-center w-full">{error}</p>}
               <div className="flex justify-between w-full">
                <NavBtn label="Back" onClick={() => setStep(2)} dir="left" />
                <NavBtn 
                  label={isSubmitting ? "..." : "Submit"} 
                  onClick={handleSubmit} 
                  disabled={!formData.motivation || isSubmitting} 
                />
               </div>
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="text-center space-y-10 mb-10 animate-in duration-700">
            <h1 className="text-5xl md:text-7xl font-black text-[#1A202C]">Congratulations</h1>
            <p className="text-xl text-[#2D3648] max-w-xl mx-auto leading-relaxed font-medium">
              Your registration for <strong>{formData.workshop}</strong> is complete. Check your email/discord for updates!
            </p>
            <Link href="/" className="inline-block px-14 py-4 bg-[#7AA262] text-white font-bold rounded-xl hover:bg-[#6a8d54] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#7AA262]/20">
              Back to home
            </Link>
          </section>
        )}

        <div className="flex justify-center gap-2 my-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-3 rounded-full transition-all duration-500 ${step === i ? 'w-12 bg-[#4A5D23]' : 'w-3 bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}


function NavBtn({ label, onClick, dir = "right", disabled }) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`group relative flex items-center justify-center h-14 w-28 transition-all ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span className="relative z-10 text-xl md:text-2xl font-bold text-[#2D3648] group-hover:text-[#7AA262] transition-colors">
        {label}
      </span>
      <div className={`absolute -bottom-1 z-0 transition-transform duration-300 
        ${dir === "left" ? "rotate-180 group-hover:-translate-x-3" : "group-hover:translate-x-3"}
      `}>
        <Image 
          src="/images/register/arrow.png" 
          alt="arrow" 
          width={100} 
          height={30} 
          className="w-20 md:w-24 h-auto drop-shadow-sm" 
        />
      </div>
    </button>
  );
}

function Input({ label, required, ...props }) {
  return (
    <div className="space-y-2 text-left">
      <label className="font-bold text-sm tracking-wide text-[#2D3648]">{label} {required && <span className="text-red-500">*</span>}</label>
      <input {...props} className="w-full p-4 bg-[#E2F4C5] rounded-2xl border-none outline-none focus:ring-4 focus:ring-[#7AA262]/10 transition-all placeholder:text-gray-400" />
    </div>
  );
}