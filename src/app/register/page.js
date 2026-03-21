"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const API = process.env.NEXT_PUBLIC_API_URL;

const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const validatePhone = (v) => /^(?:\+213|00213|0)(5|6|7)\d{8}$/.test(v.trim().replace(/[\s\-]/g, ""));

export default function Register() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const [wilayas, setWilayas] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [loadingWilayas, setLoadingWilayas] = useState(true);
  const [loadingWorkshops, setLoadingWorkshops] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", discordId: "",
    wilayaId: "", wilayaName: "",
    workshopId: "", workshopTitle: "",
    expectations: "", motivation: "", additional: ""
  });

  useEffect(() => {
    const cached = sessionStorage.getItem("caa_wilayas");
    if (cached) { setWilayas(JSON.parse(cached)); setLoadingWilayas(false); return; }
    fetch(`${API}/wilayas`)
      .then(r => r.json())
      .then(data => {
        const list = Array.isArray(data) ? data : [];
        setWilayas(list);
        sessionStorage.setItem("caa_wilayas", JSON.stringify(list));
      })
      .catch(() => setError("Could not load wilayas."))
      .finally(() => setLoadingWilayas(false));
  }, []);

  useEffect(() => {
    if (!formData.wilayaId) return;
    setLoadingWorkshops(true);
    setWorkshops([]);
    setFormData(prev => ({ ...prev, workshopId: "", workshopTitle: "" }));
    fetch(`${API}/workshops/by-wilaya/${formData.wilayaId}`)
      .then(r => r.json())
      .then(data => {
        const list = Array.isArray(data) ? data : [];
        setWorkshops(list);
        if (list.length === 1) setFormData(prev => ({ ...prev, workshopId: list[0].id, workshopTitle: list[0].title }));
      })
      .catch(() => setError("Could not load workshops."))
      .finally(() => setLoadingWorkshops(false));
  }, [formData.wilayaId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    // Clear field error on change
    setFieldErrors(prev => ({ ...prev, [name]: "" }));

    if (name === "wilayaId") {
      const selected = wilayas.find(w => w.id === value);
      setFormData(prev => ({ ...prev, wilayaId: value, wilayaName: selected?.name || "", workshopId: "", workshopTitle: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) return;
    if (name === "email" && !validateEmail(value)) {
      setFieldErrors(prev => ({ ...prev, email: "Invalid email address" }));
    }
    if (name === "phone" && !validatePhone(value)) {
      setFieldErrors(prev => ({ ...prev, phone: "Invalid Algerian number (e.g. 0661234567)" }));
    }
  };

  const validateStep1 = () => {
    const errs = {};
    if (!formData.fullName.trim())  errs.fullName  = "Required";
    if (!formData.email.trim())     errs.email     = "Required";
    else if (!validateEmail(formData.email)) errs.email = "Invalid email address";
    if (!formData.phone.trim())     errs.phone     = "Required";
    else if (!validatePhone(formData.phone)) errs.phone = "Invalid Algerian number (e.g. 0661234567)";
    if (!formData.discordId.trim()) errs.discordId = "Required";
    if (!formData.wilayaId)         errs.wilayaId  = "Please select a wilaya";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch(`${API}/registrations/by-name`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name:       formData.fullName,
          email:           formData.email,
          phone_number:    formData.phone,
          discord_id:      formData.discordId,
          wilaya_name:     formData.wilayaName,
          workshop_title:  formData.workshopTitle,
          expectations:    formData.expectations,
          motivation:      formData.motivation,
          additional_info: formData.additional || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.detail || data.error || "Registration failed. Please try again."); return; }
      setStep(4);
    } catch {
      setError("Network error — make sure the API is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen font-quicksand flex flex-col items-center justify-center bg-[#FBF9F7] relative px-6 md:px-16 py-4"
      style={{ backgroundImage: "radial-gradient(circle, #00000018 1.5px, transparent 1px)", backgroundSize: "10px 10px" }}
    >
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

        {/* ── STEP 1 ── */}
        {step === 1 && (
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-6 mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1A202C]">Personal information</h1>
            <div className="grid gap-4">
              <Input label="Full name"    name="fullName"  placeholder="Your full name"      required value={formData.fullName}  onChange={handleChange} onBlur={handleBlur} error={fieldErrors.fullName} />
              <Input label="Email"        name="email"     type="email" placeholder="example@gmail.com" required value={formData.email} onChange={handleChange} onBlur={handleBlur} error={fieldErrors.email} />
              <Input label="Phone number" name="phone"     placeholder="0661234567"           required value={formData.phone}     onChange={handleChange} onBlur={handleBlur} error={fieldErrors.phone} />
              <Input label="Discord ID"   name="discordId" placeholder="username#0000"        required value={formData.discordId} onChange={handleChange} onBlur={handleBlur} error={fieldErrors.discordId} />

              <div className="space-y-1 text-left">
                <label className="font-bold text-sm">Wilaya <span className="text-red-500">*</span></label>
                <select
                  name="wilayaId"
                  value={formData.wilayaId}
                  onChange={handleChange}
                  disabled={loadingWilayas}
                  className="w-full p-4 bg-[#E2F4C5] rounded-xl outline-none appearance-none cursor-pointer border-none focus:ring-2 focus:ring-[#7AA262]/20 disabled:opacity-50"
                >
                  <option value="">{loadingWilayas ? "Loading wilayas..." : "Select your wilaya"}</option>
                  {wilayas.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                </select>
                {fieldErrors.wilayaId && <p className="text-red-500 text-xs font-semibold">{fieldErrors.wilayaId}</p>}
              </div>
            </div>

            <div className="flex flex-col items-end pt-4">
              {error && <p className="text-red-500 text-sm font-bold mb-2 animate-pulse">{error}</p>}
              <NavBtn label="Next" onClick={() => { if (validateStep1()) setStep(2); }} disabled={false} />
            </div>
          </section>
        )}

        {/* ── STEP 2 ── */}
        {step === 2 && (
          <section className="space-y-10 animate-in slide-in-from-right-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1A202C]">{formData.wilayaName} Workshop</h1>
            <div className="space-y-4">
              <p className="font-bold text-sm text-left px-1">Please choose a workshop <span className="text-red-500">*</span></p>
              {loadingWorkshops ? (
                <p className="text-[#7AA262] font-semibold text-center py-8">Loading workshops...</p>
              ) : workshops.length === 0 ? (
                <p className="text-gray-400 font-semibold text-center py-8">No workshops found for this wilaya.</p>
              ) : (
                <div className="max-h-[45vh] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-[#7AA262]">
                  {workshops.map(ws => (
                    <label key={ws.id} className="flex items-center gap-4 p-4 bg-white/40 border border-transparent rounded-2xl cursor-pointer group hover:border-[#7AA262]/30 hover:bg-[#E2F4C5]/20 transition-all">
                      <input type="radio" name="workshopId" value={ws.id} checked={formData.workshopId === ws.id}
                        onChange={() => setFormData(prev => ({ ...prev, workshopId: ws.id, workshopTitle: ws.title }))}
                        className="w-5 h-5 accent-[#7AA262]" />
                      <div>
                        <span className="text-[#2D3648] group-hover:text-black font-semibold text-lg block">{ws.title}</span>
                        {ws.location && (
                          ws.location_url
                            ? <a href={ws.location_url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#7AA262] hover:underline">📍 {ws.location}</a>
                            : <span className="text-sm text-gray-800">📍 {ws.location}</span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col items-center pt-12">
              {error && <p className="text-red-500 text-sm font-bold mb-2 animate-pulse">{error}</p>}
              <div className="flex justify-between w-full">
                <NavBtn label="Back" onClick={() => setStep(1)} dir="left" />
                <NavBtn label="Next" onClick={() => setStep(3)} disabled={!formData.workshopId} />
              </div>
            </div>
          </section>
        )}

        {/* ── STEP 3 ── */}
        {step === 3 && (
          <section className="space-y-10 animate-in slide-in-from-right-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1A202C]">Event related questions</h1>
            <div className="space-y-6">
              <Input label="What are your expectations?" name="expectations" placeholder="Your answer" required value={formData.expectations} onChange={handleChange} />
              <Input label="What motivates you?"         name="motivation"   placeholder="Your answer" required value={formData.motivation}   onChange={handleChange} />
              <Input label="Anything to add?"            name="additional"   placeholder="Your answer"          value={formData.additional}   onChange={handleChange} />
            </div>
            <div className="flex flex-col items-center pt-12">
              {error && <p className="text-red-500 text-sm font-bold mb-4 animate-pulse text-center w-full">{error}</p>}
              <div className="flex justify-between w-full">
                <NavBtn label="Back" onClick={() => setStep(2)} dir="left" />
                <NavBtn label={isSubmitting ? "..." : "Submit"} onClick={handleSubmit} disabled={!formData.motivation || !formData.expectations || isSubmitting} />
              </div>
            </div>
          </section>
        )}

        {/* ── STEP 4 ── */}
        {step === 4 && (
          <section className="text-center space-y-10 mb-10 animate-in duration-700">
            <h1 className="text-5xl md:text-7xl font-black text-[#1A202C]">Congratulations</h1>
            <p className="text-xl text-[#2D3648] max-w-xl mx-auto leading-relaxed font-medium">
              Your registration for <strong>{formData.workshopTitle}</strong> is complete. Check your email/discord for updates!
            </p>
            <Link href="/" className="inline-block px-14 py-4 bg-[#7AA262] text-white font-bold rounded-xl hover:bg-[#6a8d54] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#7AA262]/20">
              Back to home
            </Link>
          </section>
        )}

        <div className="flex justify-center gap-2 my-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-3 rounded-full transition-all duration-500 ${step === i ? "w-12 bg-[#4A5D23]" : "w-3 bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NavBtn({ label, onClick, dir = "right", disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`group relative flex items-center justify-center h-14 w-28 transition-all ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
      <span className="relative z-10 text-xl md:text-2xl font-bold text-[#2D3648] group-hover:text-[#7AA262] transition-colors">{label}</span>
      <div className={`absolute -bottom-1 z-0 transition-transform duration-300 ${dir === "left" ? "rotate-180 group-hover:-translate-x-3" : "group-hover:translate-x-3"}`}>
        <Image src="/images/register/arrow.png" alt="arrow" width={100} height={30} className="w-20 md:w-24 h-auto drop-shadow-sm" />
      </div>
    </button>
  );
}

function Input({ label, required, error, onBlur, ...props }) {
  return (
    <div className="space-y-1 text-left">
      <label className="font-bold text-sm tracking-wide text-[#2D3648]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        onBlur={onBlur}
        className={`w-full p-4 bg-[#E2F4C5] rounded-2xl border-2 outline-none focus:ring-4 focus:ring-[#7AA262]/10 transition-all placeholder:text-gray-400 ${
          error ? "border-red-400" : "border-transparent"
        }`}
      />
      {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}
    </div>
  );
}