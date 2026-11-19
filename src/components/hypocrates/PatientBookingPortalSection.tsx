"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PreTitleBadge } from "@/components/ui/ActionButtons";
import { SpringReveal } from "@/components/ui/MotionPrimitives";
import {
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeIcon,
  SparklesIcon,
} from "@/components/ui/ClinicalIcons";

const WEBSITE_SCREENS = [
  {
    id: "hero",
    label: "01 Clinic Storefront",
    title: "Hypocrates Dental Web — Hero & Services",
    image: "/images/dashboards/patient-web-hero.png",
    caption:
      "Public conversion website bundled with every paid Hypocrates clinic deployment.",
  },
  {
    id: "booking",
    label: "02 Patient Booking Form",
    title: "Online Appointment Request (/book-appointment)",
    image: "/images/dashboards/patient-web-booking.png",
    caption:
      "24/7 service, date, and phone intake flowing straight into the clinic Inbox & Uebsajti.",
  },
  {
    id: "team",
    label: "03 Doctors Directory",
    title: "Dentistët Tanë Ekspertë (/team)",
    image: "/images/dashboards/patient-web-team.png",
    caption:
      "Full medical team roster empowering patients to trust and book specialists directly.",
  },
] as const;

interface ClinicBookingOption {
  id: string;
  clinicName: string;
  location: string;
  liveDashboardUrl: string;
  services: string[];
  doctors: {
    id: string;
    name: string;
    specialty: string;
    slots: string[];
  }[];
}

const BOOKABLE_CLINICS: ClinicBookingOption[] = [
  {
    id: "dental",
    clinicName: "Hypocrates Dental Clinic",
    location: "Tirana Flagship • Rruga Ibrahim Rugova",
    liveDashboardUrl: "https://dental-demo-ynvj.vercel.app/hyrje",
    services: [
      "Implantime Dentare",
      "Ortodonci",
      "Zbardhim Dhëmbësh",
      "Faseta Dentare",
      "Pastrim & Higjienë",
    ],
    doctors: [
      {
        id: "dr-d1",
        name: "Dr. Test 1",
        specialty: "Implantologji & Kirurgji",
        slots: ["09:00", "10:30", "14:00", "16:00"],
      },
      {
        id: "dr-d2",
        name: "Dr. Test 2",
        specialty: "Ortodonci & Estetikë",
        slots: ["09:30", "11:30", "13:00", "15:30"],
      },
      {
        id: "dr-d3",
        name: "Dr. Test 3",
        specialty: "Terapi & Protetikë",
        slots: ["10:00", "12:00", "14:30", "17:00"],
      },
    ],
  },
  {
    id: "dermatology",
    clinicName: "Hypocrates Dermatology Studio",
    location: "City Medical Center • Branch A",
    liveDashboardUrl: "https://dermatology-phi.vercel.app/hyrje",
    services: [
      "Kontroll i Nishaneve",
      "Heqje Qimesh me Lazer",
      "Trajtim Akne",
      "Biopsi Lëkure",
    ],
    doctors: [
      {
        id: "dr-derm1",
        name: "Dr. Elena Vance",
        specialty: "Clinical & Cosmetic Derm",
        slots: ["09:00", "11:00", "13:30", "16:00"],
      },
      {
        id: "dr-derm2",
        name: "Dr. Test 2",
        specialty: "Laser & Dermoscopy",
        slots: ["10:00", "12:30", "15:00"],
      },
    ],
  },
  {
    id: "physiotherapy",
    clinicName: "Hypocrates Physiotherapy & Rehab",
    location: "Rehab Wing • Tirana South",
    liveDashboardUrl: "https://physiotherapy-umber.vercel.app/hyrje",
    services: [
      "Vlerësim Fillestar",
      "Terapi Manuale",
      "Elektroterapi",
      "Rehabilitim Sportiv ROM",
    ],
    doctors: [
      {
        id: "dr-p1",
        name: "Dr. Test 2 (Mjek)",
        specialty: "Orthopedic Rehab & Spine",
        slots: ["09:00", "13:00", "15:30"],
      },
      {
        id: "dr-p2",
        name: "Dr. Daniel Carter",
        specialty: "Sports Manual Therapy",
        slots: ["10:30", "12:00", "16:30"],
      },
    ],
  },
  {
    id: "hair-transplant",
    clinicName: "Hypocrates Hair Transplant Center",
    location: "Surgical Aesthetic Floor 4",
    liveDashboardUrl: "https://hair-transplant-tau.vercel.app",
    services: [
      "Transplant FUE",
      "Konsultë Fillestare (Norwood)",
      "Terapi PRP",
      "Mezoterapi Kapilare",
    ],
    doctors: [
      {
        id: "dr-h1",
        name: "Dr. Test 2",
        specialty: "FUE Lead Surgeon",
        slots: ["09:00", "11:30", "14:00"],
      },
      {
        id: "dr-h2",
        name: "Dr. Test 3",
        specialty: "PRP & Post-Op Growth",
        slots: ["10:00", "13:00", "15:30"],
      },
    ],
  },
  {
    id: "gynecology",
    clinicName: "Hypocrates Gynecology & OB/GYN",
    location: "Women's Health Pavilion",
    liveDashboardUrl: "https://gynecology-kappa.vercel.app/hyrje",
    services: [
      "Kontroll Gjinekologjik",
      "Ekzaminim Pap Test",
      "Kolposkopi",
      "Ultratingull & Prenatal",
    ],
    doctors: [
      {
        id: "dr-g1",
        name: "Dr. Arta Hoxha",
        specialty: "OB/GYN & Prenatal Sonography",
        slots: ["09:00", "10:30", "13:00", "16:00"],
      },
      {
        id: "dr-g2",
        name: "Dr. Test 3",
        specialty: "Colposcopy & Women's Care",
        slots: ["10:00", "12:00", "14:30"],
      },
    ],
  },
];

export function PatientBookingPortalSection() {
  const [screenIndex, setScreenIndex] = useState(0);

  // Patient Booking Dashboard State
  const [clinicId, setClinicId] = useState<string>("dental");
  const [bookingMode, setBookingMode] = useState<"clinic" | "doctor">("doctor");
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("dr-d1");
  const [selectedService, setSelectedService] = useState<string>(
    BOOKABLE_CLINICS[0].services[0]
  );
  const [selectedSlot, setSelectedSlot] = useState<string>("09:00");
  const [patientName, setPatientName] = useState("Arta Hoxha");
  const [patientPhone, setPatientPhone] = useState("+355 69 240 1120");
  const [bookedConfirmation, setBookedConfirmation] = useState<{
    clinic: string;
    doctor: string;
    service: string;
    slot: string;
    patient: string;
    refCode: string;
  } | null>(null);

  const activeScreen = WEBSITE_SCREENS[screenIndex];
  const activeClinic =
    BOOKABLE_CLINICS.find((c) => c.id === clinicId) ?? BOOKABLE_CLINICS[0];
  const activeDoctor =
    activeClinic.doctors.find((d) => d.id === selectedDoctorId) ??
    activeClinic.doctors[0];
  const availableSlots =
    bookingMode === "doctor"
      ? activeDoctor.slots
      : ["09:00", "10:30", "13:00", "15:30", "17:00"];

  const handleClinicChange = (nextId: string) => {
    const nextClinic =
      BOOKABLE_CLINICS.find((c) => c.id === nextId) ?? BOOKABLE_CLINICS[0];
    setClinicId(nextId);
    setSelectedDoctorId(nextClinic.doctors[0].id);
    setSelectedService(nextClinic.services[0]);
    setSelectedSlot(nextClinic.doctors[0].slots[0]);
    setBookedConfirmation(null);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) return;
    setBookedConfirmation({
      clinic: activeClinic.clinicName,
      doctor:
        bookingMode === "doctor"
          ? `${activeDoctor.name} (${activeDoctor.specialty})`
          : "Next Available Clinic Specialist",
      service: selectedService,
      slot: `Tomorrow at ${selectedSlot}`,
      patient: patientName.trim(),
      refCode: `HYP-${clinicId.slice(0, 3).toUpperCase()}-${selectedSlot.replace(":", "")}`,
    });
  };

  return (
    <section
      id="patient-booking"
      className="py-16 md:py-24 bg-[#f8fafc] border-y border-[#dde5ed]/80 overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto px-5 space-y-10">
        {/* Header */}
        <SpringReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[680px]">
            <PreTitleBadge text="Included Clinic Growth Website" variant="white" />
            <h2 className="mt-5 font-heading font-semibold text-[32px] sm:text-[42px] md:text-[48px] leading-[1.14em] tracking-[-1px] text-[#1d1d1d]">
              Every Clinic Gets a Growth Website &amp; Patient Booking Portal
            </h2>
            <p className="mt-3.5 font-display font-medium text-[16.5px] md:text-[18px] leading-[1.48em] text-[#4d585f]">
              Never offered as a disconnected freebie — every clinic onboarded
              onto the paid Hypocrates system receives a custom branded web
              storefront and <strong className="text-[#1d1d1d]">24/7 Patient Booking System</strong>{" "}
              built to grow bookings and sync appointments directly with{" "}
              <strong className="text-[#1d1d1d]">Orari i Sotëm</strong>.
            </p>
          </div>

          <a
            href="https://hypocrates-dental-web-demo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#5290f4] via-[#3b82f6] to-[#406ae4] text-white font-display font-semibold text-[14.5px] px-6 py-3.5 shadow-[0_10px_24px_rgba(59,130,246,0.28)] hover:brightness-105 transition-all shrink-0 self-start lg:self-end"
          >
            <GlobeIcon className="w-4 h-4" />
            <span>Open Live Clinic Website Demo ↗</span>
          </a>
        </SpringReveal>

        {/* Main 2-Column Split: Left = Real Website Demo Screenshots | Right = Interactive Clinic & Doctor Booking Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Left 6 Cols: Live Clinic Website & Patient Portal Preview */}
          <SpringReveal className="lg:col-span-6 rounded-[28px] bg-white border border-[#dde5ed] p-5 sm:p-6 shadow-[0_18px_50px_rgba(16,28,48,0.06)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {WEBSITE_SCREENS.map((scr, idx) => {
                    const active = idx === screenIndex;
                    return (
                      <button
                        key={scr.id}
                        type="button"
                        onClick={() => setScreenIndex(idx)}
                        className={`relative px-3.5 py-1.5 rounded-full font-display font-semibold text-[12.5px] cursor-pointer transition-colors ${
                          active
                            ? "text-white"
                            : "bg-[#edf1f4] text-[#4d585f] hover:text-[#1d1d1d]"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="patientWebTab"
                            transition={{ type: "spring", stiffness: 360, damping: 30 }}
                            className="absolute inset-0 rounded-full bg-[#1d1d1d]"
                          />
                        )}
                        <span className="relative z-10">{scr.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Browser Frame */}
              <div className="rounded-[20px] border border-[#dde5ed] overflow-hidden bg-[#111315]">
                <div className="px-3.5 py-2.5 bg-[#edf1f4] border-b border-[#dde5ed] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <a
                    href="https://hypocrates-dental-web-demo.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-white border border-[#dde5ed] font-display text-[11.5px] font-medium text-[#4d585f] hover:text-[#3b82f6] truncate"
                  >
                    hypocrates-dental-web-demo.netlify.app ↗
                  </a>
                </div>

                <div className="relative aspect-[16/10] sm:aspect-auto sm:h-[330px] overflow-hidden group bg-[#111315]">
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={activeScreen.id}
                      href="https://hypocrates-dental-web-demo.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.3 }}
                      className="block w-full h-full"
                    >
                      <img
                        src={activeScreen.image}
                        alt={activeScreen.title}
                        className="w-full h-full object-contain sm:object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                      />
                    </motion.a>
                  </AnimatePresence>
                </div>
              </div>

              <div className="rounded-[16px] bg-[#edf1f4] border border-[#dde5ed] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-heading font-semibold text-[15px] text-[#1d1d1d]">
                    {activeScreen.title}
                  </div>
                  <p className="font-display text-[13px] text-[#4d585f]">
                    {activeScreen.caption}
                  </p>
                </div>
                <a
                  href="https://hypocrates-dental-web-demo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-[13px] text-[#3b82f6] hover:underline shrink-0"
                >
                  Visit Website ↗
                </a>
              </div>
            </div>

            {/* Growth Highlights Grid */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#edf1f4]">
              {[
                {
                  title: "Portali i Pacientëve",
                  desc: "/login & /signup for medical history, bills & upcoming visits",
                },
                {
                  title: "Built for Clinic Growth",
                  desc: "Services showcase, Before/After gallery, Testimonials & SEO Map",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-[14px] bg-[#f8fafc] border border-[#eef2f6] p-3.5"
                >
                  <div className="flex items-center gap-1.5 font-heading font-semibold text-[13.5px] text-[#1d1d1d]">
                    <SparklesIcon className="w-4 h-4 text-[#3b82f6] shrink-0" />
                    <span>{card.title}</span>
                  </div>
                  <p className="mt-1 font-display text-[12px] text-[#4d585f] leading-[1.4em]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </SpringReveal>

          {/* Right 6 Cols: Interactive Patient Booking Dashboard (Choose Clinic OR Specific Doctor) */}
          <SpringReveal
            delay={0.08}
            className="lg:col-span-6 rounded-[28px] bg-white border border-[#dde5ed] p-6 sm:p-7 shadow-[0_18px_50px_rgba(16,28,48,0.06)] flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#edf1f4]">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/hypocrates-logo.png"
                    alt="Hypocrates"
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-[20px] text-[#1d1d1d] leading-tight">
                      Patient Booking Dashboard
                    </h3>
                    <p className="font-display text-[12.5px] text-[#4d585f]">
                      Book by clinic branch or pick a specific specialist
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#10b981]/12 text-[#047857] font-display font-semibold text-[11.5px]">
                  ● Live Slots Synced
                </span>
              </div>

              {/* 1. Clinic Selector */}
              <div>
                <label className="block font-display font-semibold text-[12px] uppercase tracking-wider text-[#4d585f] mb-2">
                  1. Choose Clinic Location
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {BOOKABLE_CLINICS.map((c) => {
                    const selected = c.id === activeClinic.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleClinicChange(c.id)}
                        className={`px-3 py-1.5 rounded-full font-display font-semibold text-[12.5px] cursor-pointer transition-colors ${
                          selected
                            ? "bg-[#1d1d1d] text-white"
                            : "bg-[#edf1f4] text-[#4d585f] hover:text-[#1d1d1d]"
                        }`}
                      >
                        {c.clinicName.replace("Hypocrates ", "")}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 font-display text-[12.5px] text-[#4d585f]">
                  {activeClinic.location}
                </div>
              </div>

              {/* 2. Booking Preference: Clinic General vs Specific Doctor */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-display font-semibold text-[12px] uppercase tracking-wider text-[#4d585f]">
                    2. Choose Clinic Queue or Specific Doctor
                  </span>
                  <div className="inline-flex rounded-full bg-[#edf1f4] p-0.5 border border-[#dde5ed]">
                    {(
                      [
                        { id: "doctor", label: "Specific Doctor" },
                        { id: "clinic", label: "Any at Clinic" },
                      ] as const
                    ).map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          setBookingMode(m.id);
                          setBookedConfirmation(null);
                        }}
                        className={`px-3 py-1 rounded-full font-display font-semibold text-[11.5px] cursor-pointer transition-colors ${
                          bookingMode === m.id
                            ? "bg-[#3b82f6] text-white"
                            : "text-[#4d585f]"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {bookingMode === "doctor" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeClinic.doctors.map((doc) => {
                      const active = doc.id === activeDoctor.id;
                      return (
                        <button
                          key={doc.id}
                          type="button"
                          onClick={() => {
                            setSelectedDoctorId(doc.id);
                            setSelectedSlot(doc.slots[0]);
                            setBookedConfirmation(null);
                          }}
                          className={`rounded-[14px] p-3 border text-left transition-all cursor-pointer ${
                            active
                              ? "bg-[#edf1f4] border-[#3b82f6] ring-2 ring-[#3b82f6]/15"
                              : "bg-white border-[#dde5ed] hover:bg-[#f8fafc]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-heading font-semibold text-[14px] text-[#1d1d1d]">
                              {doc.name}
                            </span>
                            {active && (
                              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                            )}
                          </div>
                          <div className="font-display text-[12px] text-[#4d585f] mt-0.5">
                            {doc.specialty}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="rounded-[14px] bg-[#edf1f4] border border-[#dde5ed] p-3.5 font-display text-[13px] text-[#4d585f]">
                    Smart Triage assigns the{" "}
                    <strong className="text-[#1d1d1d]">
                      earliest open specialist
                    </strong>{" "}
                    at {activeClinic.clinicName} for minimal wait time.
                  </div>
                )}
              </div>

              {/* 3. Service, Slot & Booking Form */}
              <form onSubmit={handleConfirmBooking} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-display font-semibold text-[12px] text-[#1d1d1d] mb-1">
                      Service (Shërbimi)
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => {
                        setSelectedService(e.target.value);
                        setBookedConfirmation(null);
                      }}
                      className="w-full rounded-[12px] bg-[#f8fafc] border border-[#dde5ed] px-3 py-2.5 font-display text-[13.5px] text-[#1d1d1d]"
                    >
                      {activeClinic.services.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-display font-semibold text-[12px] text-[#1d1d1d] mb-1">
                      Available Slot
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setSelectedSlot(slot);
                            setBookedConfirmation(null);
                          }}
                          className={`px-2.5 py-2 rounded-[10px] font-display font-semibold text-[12px] cursor-pointer transition-colors ${
                            selectedSlot === slot
                              ? "bg-[#1d1d1d] text-white"
                              : "bg-[#edf1f4] text-[#4d585f] hover:text-[#1d1d1d]"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Emri Juaj *"
                    className="rounded-[12px] bg-[#f8fafc] border border-[#dde5ed] px-3.5 py-2.5 font-display text-[13.5px]"
                  />
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="+355 69 000 0000"
                    className="rounded-[12px] bg-[#f8fafc] border border-[#dde5ed] px-3.5 py-2.5 font-display text-[13.5px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1d1d1d] hover:bg-[#3b82f6] text-white font-display font-semibold text-[14.5px] py-3.5 px-5 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>
                    Book{" "}
                    {bookingMode === "doctor"
                      ? activeDoctor.name
                      : "Clinic Appointment"}{" "}
                    at {selectedSlot}
                  </span>
                </button>
              </form>

              <AnimatePresence>
                {bookedConfirmation && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-[16px] bg-[#10b981]/10 border border-[#10b981]/35 p-4 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-heading font-semibold text-[14.5px] text-[#047857]">
                        <CheckCircleIcon className="w-4 h-4" />
                        Appointment Routed ({bookedConfirmation.refCode})
                      </span>
                      <a
                        href={activeClinic.liveDashboardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-semibold text-[12px] text-[#3b82f6] hover:underline"
                      >
                        View in Clinic Dashboard ↗
                      </a>
                    </div>
                    <p className="font-display text-[13px] text-[#1d1d1d]">
                      <strong>{bookedConfirmation.patient}</strong> ·{" "}
                      {bookedConfirmation.service} with{" "}
                      <strong>{bookedConfirmation.doctor}</strong> at{" "}
                      {bookedConfirmation.clinic} ({bookedConfirmation.slot}).
                    </p>
                    <div className="flex items-center gap-1.5 font-display text-[11.5px] text-[#4d585f]">
                      <ClockIcon className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>
                        Synced into Orari i Sotëm &amp; Patient Portal reminders
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SpringReveal>
        </div>
      </div>
    </section>
  );
}

