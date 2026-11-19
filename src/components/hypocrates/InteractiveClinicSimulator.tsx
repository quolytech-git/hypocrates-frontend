"use client";

import React, { useState } from "react";
import {
  CLINIC_ORDER,
  ClinicSlug,
  clinicSolutions,
  LIVE_CLINIC_DASHBOARDS,
} from "@/lib/hypocrates-data";
import { PreTitleBadge } from "@/components/ui/ActionButtons";

interface InteractiveClinicSimulatorProps {
  initialClinic?: ClinicSlug;
  allowSwitch?: boolean;
}

type ToothCondition =
  | "Healthy"
  | "Cavity"
  | "Crown Needed"
  | "Extracted"
  | "Cleaned";

const TOOTH_PRICES: Record<ToothCondition, number> = {
  Healthy: 0,
  Cavity: 150,
  "Crown Needed": 900,
  Extracted: 300,
  Cleaned: 80,
};

const TOOTH_COLORS: Record<ToothCondition, string> = {
  Healthy: "bg-white text-[#1d1d1d] border-[#dde5ed]",
  Cavity: "bg-[#f51c23]/15 text-[#c81016] border-[#f51c23]/50",
  "Crown Needed": "bg-[#ff8b06]/15 text-[#b45309] border-[#ff8b06]/50",
  Extracted: "bg-[#1d1d1d]/10 text-[#4d585f] border-[#1d1d1d]/30",
  Cleaned: "bg-[#10b981]/15 text-[#047857] border-[#10b981]/50",
};

const DIRECTIONS = ["Up", "Down", "Left", "Right"] as const;
type Direction = (typeof DIRECTIONS)[number];

const ROT_ANGLES: Record<Direction, number> = {
  Up: 270,
  Down: 90,
  Left: 180,
  Right: 0,
};

const DERM_DATA = {
  "Patient A: Laser Therapy": {
    beforeGradient: "linear-gradient(135deg, #fca5a5 0%, #fecaca 100%)",
    afterGradient: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    hydration: [42, 85],
    melanin: [68, 24],
    redness: [74, 15],
    age: [43, 35],
  },
  "Patient B: Chemical Peel": {
    beforeGradient: "linear-gradient(135deg, #fed7aa 0%, #ffedd5 100%)",
    afterGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    hydration: [35, 78],
    melanin: [82, 38],
    redness: [48, 10],
    age: [52, 45],
  },
} as const;

export function InteractiveClinicSimulator({
  initialClinic = "dental",
  allowSwitch = false,
}: InteractiveClinicSimulatorProps) {
  const [clinic, setClinic] = useState<ClinicSlug>(initialClinic);

  // 1. Dental state
  const [dentalMember, setDentalMember] = useState<
    "Emily Doe (Daughter)" | "John Doe (Father)"
  >("Emily Doe (Daughter)");
  const [dentalTeeth, setDentalTeeth] = useState<
    Record<string, ToothCondition[]>
  >({
    "Emily Doe (Daughter)": [
      "Healthy",
      "Cavity",
      "Healthy",
      "Healthy",
      "Cleaned",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
      "Crown Needed",
      "Healthy",
      "Healthy",
      "Healthy",
    ],
    "John Doe (Father)": [
      "Healthy",
      "Healthy",
      "Healthy",
      "Extracted",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
      "Cleaned",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
      "Healthy",
    ],
  });
  const [selectedTooth, setSelectedTooth] = useState<number | null>(1);

  // 2. Dermatology state
  const [dermPatient, setDermPatient] = useState<keyof typeof DERM_DATA>(
    "Patient A: Laser Therapy"
  );
  const [dermSlider, setDermSlider] = useState<number>(55);

  // 3. Plastic surgery state
  const [surgerySlots, setSurgerySlots] = useState([
    {
      id: 1,
      time: "09:00 AM",
      status: "Scheduled",
      patient: "Arthur P.",
      procedure: "Rhinoplasty",
      surgeon: "Dr. Vance",
    },
    {
      id: 2,
      time: "11:00 AM",
      status: "Available",
      patient: "",
      procedure: "",
      surgeon: "",
    },
    {
      id: 3,
      time: "01:00 PM",
      status: "Scheduled",
      patient: "Diana M.",
      procedure: "Blepharoplasty",
      surgeon: "Dr. Sterling",
    },
    {
      id: 4,
      time: "03:00 PM",
      status: "Available",
      patient: "",
      procedure: "",
      surgeon: "",
    },
  ]);
  const [newProcedure, setNewProcedure] = useState("Facelift");
  const [newPatientName, setNewPatientName] = useState("");
  const [newSurgeon, setNewSurgeon] = useState("Dr. Vance");
  const [crmChecklist, setCrmChecklist] = useState({
    intake: true,
    financing: true,
    preOpClearance: false,
    orSuitePrepped: false,
    postOpScheduled: false,
  });

  // 4. ENT state
  const [entEar, setEntEar] = useState<"Left" | "Right">("Left");
  const [entPoints, setEntPoints] = useState<
    Record<"Left" | "Right", Record<number, number>>
  >({
    Left: { 250: 20, 500: 25, 1000: 20, 2000: 30, 4000: 45, 8000: 50 },
    Right: { 250: 15, 500: 15, 1000: 20, 2000: 20, 4000: 25, 8000: 20 },
  });

  // 5. Nutrition state
  const [nutritionProtein, setNutritionProtein] = useState(120);
  const [nutritionCarbs, setNutritionCarbs] = useState(150);
  const [nutritionFats, setNutritionFats] = useState(65);
  const [nutritionGoals, setNutritionGoals] = useState({
    hydration: true,
    calLimit: false,
    vitamins: true,
  });

  // 6. Physiotherapy state
  const [physioROM, setPhysioROM] = useState(90);
  const [physioPain, setPhysioPain] = useState(3);
  const [physioHEP, setPhysioHEP] = useState({
    slides: true,
    rotations: false,
    plank: false,
  });

  // 7. Eye center state
  const [eyeScore, setEyeScore] = useState(0);
  const [eyeAcuity, setEyeAcuity] = useState("20/100");
  const [eyeDirection, setEyeDirection] = useState<Direction>("Right");
  const [eyeSphere, setEyeSphere] = useState(3);

  // 8. Hair transplant state
  const [hairNorwood, setHairNorwood] = useState(3);
  const [hairGrafts, setHairGrafts] = useState(2600);
  const [hairAdjuncts, setHairAdjuncts] = useState({
    prp: true,
    mesotherapy: true,
    laser: false,
  });

  // 9. Gynecology state
  const [gynExam, setGynExam] = useState<
    "Kontroll Gjinekologjik" | "Kolposkopi" | "Ekzaminim Pap Test" | "Ultratingull Gjinekologjik"
  >("Ekzaminim Pap Test");
  const [gynWeek, setGynWeek] = useState(22);

  const livePortal = LIVE_CLINIC_DASHBOARDS.find((d) => d.id === clinic);

  const activeDentalTeeth = dentalTeeth[dentalMember] ?? [];
  const dentalTotal = activeDentalTeeth.reduce(
    (sum, cond) => sum + TOOTH_PRICES[cond],
    0
  );
  const dentalInsCoverage = Math.round(dentalTotal * 0.75);
  const dentalCopay = dentalTotal - dentalInsCoverage;

  const bookSlot = (slotId: number) => {
    if (!newPatientName.trim()) return;
    setSurgerySlots((prev) =>
      prev.map((slot) =>
        slot.id === slotId
          ? {
              ...slot,
              status: "Scheduled",
              patient: newPatientName.trim(),
              procedure: newProcedure,
              surgeon: newSurgeon,
            }
          : slot
      )
    );
    setNewPatientName("");
  };

  const handleAudiogramClick = (freq: number, db: number) => {
    setEntPoints((prev) => ({
      ...prev,
      [entEar]: {
        ...prev[entEar],
        [freq]: db,
      },
    }));
  };

  const calculatedCalories =
    nutritionProtein * 4 + nutritionCarbs * 4 + nutritionFats * 9;

  const glycemicLoad =
    nutritionCarbs < 100
      ? { label: "Low", color: "text-[#10b981]" }
      : nutritionCarbs < 200
      ? { label: "Medium", color: "text-[#ff8b06]" }
      : { label: "High", color: "text-[#f51c23]" };

  const suggestedMeal =
    nutritionCarbs < 80
      ? "Keto Avocado Salmon Bowl with Asparagus"
      : nutritionProtein > 140
      ? "Grilled Lemon-Herb Chicken Breast with Quinoa"
      : nutritionFats > 80
      ? "Macadamia Crusted Cod with Walnut-Kale Salad"
      : "Mediterranean Grain Bowl with Grilled Halloumi & Hummus";

  const physioAdvice =
    physioPain >= 7
      ? "CRITICAL: Rest requested. Reduce repetitions and avoid loaded movement."
      : physioPain >= 4
      ? "WARNING: Mild discomfort detected. Focus on static stretching; keep ROM below 90°."
      : "EXCELLENT: Pain levels nominal. Target progression: increase ROM and add 2.5 lbs resistance.";

  const handleEyeGuess = (guess: Direction) => {
    if (guess === eyeDirection) {
      const nextScore = eyeScore + 1;
      setEyeScore(nextScore);
      if (nextScore >= 5) setEyeAcuity("20/15 (Superhuman)");
      else if (nextScore === 4) setEyeAcuity("20/20 (Normal)");
      else if (nextScore === 3) setEyeAcuity("20/30");
      else if (nextScore === 2) setEyeAcuity("20/50");
      else setEyeAcuity("20/70");
    } else {
      setEyeScore(Math.max(0, eyeScore - 1));
      setEyeAcuity("20/100");
    }
    const nextIdx = (DIRECTIONS.indexOf(eyeDirection) + 1) % DIRECTIONS.length;
    setEyeDirection(DIRECTIONS[nextIdx]);
  };

  const freqs = [250, 500, 1000, 2000, 4000, 8000];
  const dbLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  return (
    <div className="rounded-[30px] border border-[#dde5ed] bg-white p-6 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
      <div className="text-center max-w-[680px] mx-auto">
        <PreTitleBadge text="Interactive SaaS Engine Simulator" variant="slate" />
        <h3 className="mt-4 font-heading font-semibold text-[28px] md:text-[36px] leading-[1.18em] tracking-[-0.8px] text-[#1d1d1d]">
          {clinicSolutions[clinic].simulatorTitle}
        </h3>
        <p className="mt-2 font-display font-medium text-[16px] text-[#4d585f]">
          Test-drive Hypocrates clinical workflows with real-time AI logic and interactive state.
        </p>
      </div>

      {allowSwitch && (
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {CLINIC_ORDER.map((slug) => {
            const active = clinic === slug;
            return (
              <button
                key={slug}
                type="button"
                onClick={() => setClinic(slug)}
                className={`px-4 py-2 rounded-full font-display font-semibold text-[14px] transition-colors cursor-pointer ${
                  active
                    ? "bg-[#1d1d1d] text-white"
                    : "bg-[#edf1f4] text-[#4d585f] hover:text-[#1d1d1d]"
                }`}
              >
                {clinicSolutions[slug].shortTitle}
              </button>
            );
          })}
        </div>
      )}

      {livePortal && (
        <div className="mt-6 rounded-[20px] bg-[#edf1f4] border border-[#dde5ed] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src={livePortal.screenshot}
              alt={livePortal.title}
              className="w-24 h-14 rounded-[10px] object-cover object-top border border-[#dde5ed] shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 font-display font-semibold text-[13.5px] text-[#1d1d1d]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span>Real Deployed {livePortal.title} Available</span>
              </div>
              <p className="font-display text-[12px] text-[#4d585f]">
                {livePortal.entryHint}
              </p>
            </div>
          </div>
          <a
            href={livePortal.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-display font-semibold text-[13px] px-4 py-2 transition-colors shrink-0"
          >
            <span>Open Live Portal</span>
            <span>↗</span>
          </a>
        </div>
      )}

      {/* 1. DENTAL */}
      {clinic === "dental" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
                Interactive Patient Chart
              </h4>
              <div className="flex gap-2">
                {(["Emily Doe (Daughter)", "John Doe (Father)"] as const).map(
                  (member) => (
                    <button
                      key={member}
                      type="button"
                      onClick={() => {
                        setDentalMember(member);
                        setSelectedTooth(null);
                      }}
                      className={`px-3.5 py-1.5 rounded-full font-display font-semibold text-[13px] cursor-pointer transition-colors ${
                        dentalMember === member
                          ? "bg-[#3b82f6] text-white"
                          : "bg-white text-[#4d585f] hover:text-[#1d1d1d]"
                      }`}
                    >
                      {member}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="rounded-[20px] bg-white border border-[#dde5ed] p-5 space-y-4">
              <div className="text-center font-display font-semibold text-[12px] uppercase tracking-wider text-[#4d585f]">
                Upper Jaw (#1 – #8)
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {activeDentalTeeth.slice(0, 8).map((cond, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTooth(idx)}
                    className={`rounded-[12px] border py-2.5 px-1 flex flex-col items-center gap-1 font-display font-semibold text-[12px] cursor-pointer transition-transform hover:-translate-y-0.5 ${
                      TOOTH_COLORS[cond]
                    } ${selectedTooth === idx ? "ring-2 ring-[#1d1d1d]" : ""}`}
                  >
                    <span className="text-[16px]">🦷</span>
                    <span>#{idx + 1}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 pt-2">
                {activeDentalTeeth.slice(8, 16).map((cond, idx) => {
                  const toothIndex = idx + 8;
                  return (
                    <button
                      key={toothIndex}
                      type="button"
                      onClick={() => setSelectedTooth(toothIndex)}
                      className={`rounded-[12px] border py-2.5 px-1 flex flex-col items-center gap-1 font-display font-semibold text-[12px] cursor-pointer transition-transform hover:-translate-y-0.5 ${
                        TOOTH_COLORS[cond]
                      } ${
                        selectedTooth === toothIndex
                          ? "ring-2 ring-[#1d1d1d]"
                          : ""
                      }`}
                    >
                      <span className="text-[16px]">🦷</span>
                      <span>#{toothIndex + 1}</span>
                    </button>
                  );
                })}
              </div>
              <div className="text-center font-display font-semibold text-[12px] uppercase tracking-wider text-[#4d585f]">
                Lower Jaw (#9 – #16)
              </div>
            </div>

            {selectedTooth !== null && (
              <div className="rounded-[18px] bg-white border border-[#dde5ed] p-4">
                <div className="font-display font-semibold text-[14px] text-[#1d1d1d] mb-3">
                  Modify Condition for Tooth #{selectedTooth + 1}
                </div>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(TOOTH_PRICES) as ToothCondition[]).map((cond) => (
                    <button
                      key={cond}
                      type="button"
                      onClick={() =>
                        setDentalTeeth((prev) => ({
                          ...prev,
                          [dentalMember]: prev[dentalMember].map((c, i) =>
                            i === selectedTooth ? cond : c
                          ),
                        }))
                      }
                      className={`px-3.5 py-2 rounded-full font-display font-semibold text-[13px] cursor-pointer border transition-colors ${
                        activeDentalTeeth[selectedTooth] === cond
                          ? "bg-[#1d1d1d] text-white border-[#1d1d1d]"
                          : "bg-[#edf1f4] text-[#4d585f] border-[#dde5ed] hover:text-[#1d1d1d]"
                      }`}
                    >
                      {cond} {cond !== "Healthy" && `(\$${TOOTH_PRICES[cond]})`}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 rounded-[24px] bg-[#edf1f4] p-6 flex flex-col justify-between gap-5">
            <div>
              <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
                SaaS Family Billing &amp; AI Notes
              </h4>
              <div className="mt-4 rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-2.5 font-display text-[14px]">
                <div className="flex justify-between">
                  <span className="text-[#4d585f]">Primary Insured:</span>
                  <strong className="text-[#1d1d1d]">John Doe (Father)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4d585f]">Patient Account:</span>
                  <strong className="text-[#1d1d1d]">{dentalMember}</strong>
                </div>
                <div className="border-t border-[#edf1f4] my-2 pt-2 space-y-1.5">
                  {activeDentalTeeth.map((cond, idx) =>
                    cond === "Healthy" ? null : (
                      <div
                        key={idx}
                        className="flex justify-between text-[13px] text-[#4d585f]"
                      >
                        <span>
                          Tooth #{idx + 1} ({cond})
                        </span>
                        <span>\${TOOTH_PRICES[cond]}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="border-t border-[#edf1f4] pt-2.5 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#4d585f]">Est. Treatment Total:</span>
                    <strong>\${dentalTotal}</strong>
                  </div>
                  <div className="flex justify-between text-[#10b981]">
                    <span>DeltaDental Est. Cover (75%):</span>
                    <strong>-\${dentalInsCoverage}</strong>
                  </div>
                  <div className="flex justify-between text-[16px] font-semibold text-[#1d1d1d] pt-1">
                    <span>Patient Co-pay Due:</span>
                    <span>\${dentalCopay}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[18px] bg-[#1d1d1d] text-white p-5">
              <div className="font-display font-semibold text-[13px] text-[#5290f4]">
                ✨ Hypocrates Clinical AI Note Draft
              </div>
              <p className="mt-2 font-display text-[13.5px] leading-[1.55em] text-white/85">
                &ldquo;Patient {dentalMember.split(" ")[0]} presented for oral
                examination. Upper and lower jaw charting updated.
                {activeDentalTeeth.some((c) => c === "Cavity") &&
                  " Composite restoration scheduled for active cavities."}
                {activeDentalTeeth.some((c) => c === "Crown Needed") &&
                  " Scheduled tooth prep for crown placement."}
                {activeDentalTeeth.some((c) => c === "Cleaned") &&
                  " Completed prophylaxis cleaning; fluoride applied."}
                {activeDentalTeeth.every((c) => c === "Healthy") &&
                  " Dentition is fully healthy with no active interventions needed."}
                {" "}Billing dispatched under primary policy John Doe.&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. DERMATOLOGY */}
      {clinic === "dermatology" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              AI Skin Analysis &amp; Recovery Scanner
            </h4>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(DERM_DATA) as Array<keyof typeof DERM_DATA>).map(
                (pat) => (
                  <button
                    key={pat}
                    type="button"
                    onClick={() => setDermPatient(pat)}
                    className={`px-3.5 py-2 rounded-full font-display font-semibold text-[13px] cursor-pointer ${
                      dermPatient === pat
                        ? "bg-[#3b82f6] text-white"
                        : "bg-white text-[#4d585f]"
                    }`}
                  >
                    {pat}
                  </button>
                )
              )}
            </div>

            <div className="relative h-[220px] rounded-[20px] overflow-hidden border border-[#dde5ed]">
              <div
                className="absolute inset-0 flex items-end p-4"
                style={{ background: DERM_DATA[dermPatient].beforeGradient }}
              >
                <span className="px-3 py-1 rounded-full bg-white/85 font-display font-semibold text-[12px] text-[#1d1d1d]">
                  Before Treatment
                </span>
              </div>
              <div
                className="absolute inset-y-0 left-0 overflow-hidden flex items-end justify-end p-4"
                style={{
                  width: `${dermSlider}%`,
                  background: DERM_DATA[dermPatient].afterGradient,
                }}
              >
                <span className="px-3 py-1 rounded-full bg-white/90 font-display font-semibold text-[12px] text-[#10b981] whitespace-nowrap">
                  After Recovery
                </span>
              </div>
              <div
                className="absolute inset-y-0 w-0.5 bg-[#1d1d1d]"
                style={{ left: `${dermSlider}%` }}
              >
                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1d1d1d] text-white flex items-center justify-center text-[13px] shadow">
                  ↔
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-display font-semibold text-[13px] text-[#4d585f] mb-1.5">
                <span>Recovery Timeline Scan Progress</span>
                <span className="text-[#1d1d1d]">{dermSlider}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={dermSlider}
                onChange={(e) => setDermSlider(Number(e.target.value))}
                className="w-full accent-[#3b82f6]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              AI Bio-Metric Scanner Report
            </h4>
            {(() => {
              const d = DERM_DATA[dermPatient];
              const pct = dermSlider / 100;
              const hydration = Math.round(
                d.hydration[0] + (d.hydration[1] - d.hydration[0]) * pct
              );
              const redness = Math.round(
                d.redness[0] + (d.redness[1] - d.redness[0]) * pct
              );
              const melanin = Math.round(
                d.melanin[0] + (d.melanin[1] - d.melanin[0]) * pct
              );
              const skinAge = Math.round(
                d.age[0] + (d.age[1] - d.age[0]) * pct
              );

              return (
                <>
                  <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-4">
                    {[
                      {
                        label: "Dermal Hydration Index",
                        val: hydration,
                        bar: "bg-[#10b981]",
                      },
                      {
                        label: "Erythema (Redness Index)",
                        val: redness,
                        bar: "bg-[#f51c23]",
                      },
                      {
                        label: "Melanin Pigmentation Density",
                        val: melanin,
                        bar: "bg-[#ff8b06]",
                      },
                    ].map((m) => (
                      <div key={m.label}>
                        <div className="flex justify-between font-display text-[13.5px] mb-1.5">
                          <span className="text-[#4d585f]">{m.label}</span>
                          <strong className="text-[#1d1d1d]">{m.val}%</strong>
                        </div>
                        <div className="h-2.5 rounded-full bg-[#edf1f4] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${m.bar} transition-all duration-200`}
                            style={{ width: `${m.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t border-[#edf1f4] font-display text-[14px]">
                      <span className="text-[#4d585f]">
                        AI Predicted Skin Age
                      </span>
                      <strong className="text-[#1d1d1d]">
                        {skinAge} Years
                      </strong>
                    </div>
                  </div>

                  <div className="rounded-[18px] bg-[#1d1d1d] text-white p-5">
                    <div className="font-display font-semibold text-[13px] text-[#5290f4]">
                      ✨ Dermatology AI Assessment
                    </div>
                    <p className="mt-2 font-display text-[13.5px] leading-[1.55em] text-white/85">
                      {pct < 0.3 &&
                        "Elevated epidermal erythema detected. Intensive barrier restoration and soothing post-procedure care advised."}
                      {pct >= 0.3 &&
                        pct < 0.7 &&
                        "Moderate healing registered. Dermal hydration rising steadily and cell turnover rate normalizing."}
                      {pct >= 0.7 &&
                        "Excellent epidermal recovery. Melanin pigmentation cleared significantly with full vascular normalization."}
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* 3. PLASTIC SURGERY */}
      {clinic === "plastic-surgery" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Interactive Operating Room (OR) Scheduler
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Patient Name"
                value={newPatientName}
                onChange={(e) => setNewPatientName(e.target.value)}
                className="rounded-[12px] bg-white border border-[#dde5ed] px-3.5 py-2.5 text-[14px]"
              />
              <select
                value={newProcedure}
                onChange={(e) => setNewProcedure(e.target.value)}
                className="rounded-[12px] bg-white border border-[#dde5ed] px-3.5 py-2.5 text-[14px]"
              >
                <option value="Rhinoplasty">Rhinoplasty</option>
                <option value="Facelift">Facelift</option>
                <option value="Blepharoplasty">Blepharoplasty</option>
                <option value="Breast Augment">Breast Augmentation</option>
              </select>
              <select
                value={newSurgeon}
                onChange={(e) => setNewSurgeon(e.target.value)}
                className="rounded-[12px] bg-white border border-[#dde5ed] px-3.5 py-2.5 text-[14px]"
              >
                <option value="Dr. Vance">Dr. Vance</option>
                <option value="Dr. Sterling">Dr. Sterling</option>
              </select>
            </div>

            <div className="space-y-2.5">
              {surgerySlots.map((slot) => (
                <div
                  key={slot.id}
                  className="rounded-[16px] bg-white border border-[#dde5ed] p-4 flex flex-wrap items-center justify-between gap-3"
                >
                  <div>
                    <div className="font-display font-semibold text-[14px] text-[#1d1d1d]">
                      {slot.time}
                    </div>
                    {slot.status === "Scheduled" ? (
                      <div className="font-display text-[13px] text-[#4d585f]">
                        <strong className="text-[#1d1d1d]">{slot.patient}</strong>{" "}
                        — {slot.procedure} ({slot.surgeon})
                      </div>
                    ) : (
                      <div className="font-display text-[13px] text-[#10b981]">
                        OR Suite Available
                      </div>
                    )}
                  </div>
                  {slot.status === "Scheduled" ? (
                    <span className="px-3 py-1 rounded-full bg-[#edf1f4] font-display font-semibold text-[12px] text-[#4d585f]">
                      Scheduled
                    </span>
                  ) : (
                    <button
                      type="button"
                      disabled={!newPatientName.trim()}
                      onClick={() => bookSlot(slot.id)}
                      className="px-4 py-2 rounded-full bg-[#3b82f6] text-white font-display font-semibold text-[13px] cursor-pointer disabled:opacity-40"
                    >
                      Book Slot
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              VIP CRM &amp; Pre-Op Checklist
            </h4>
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#1d1d1d] text-white font-heading font-semibold flex items-center justify-center">
                  IV
                </div>
                <div>
                  <div className="font-heading font-semibold text-[17px]">
                    Isabella V.
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#3b82f6]/12 text-[#3b82f6] font-display font-semibold text-[11.5px]">
                    Platinum VIP Concierge
                  </span>
                </div>
              </div>

              <div className="border-t border-[#edf1f4] pt-3 space-y-2.5">
                {[
                  {
                    key: "intake" as const,
                    label: "Interactive intake forms completed",
                  },
                  {
                    key: "financing" as const,
                    label: "VIP surgical escrow deposited",
                  },
                  {
                    key: "preOpClearance" as const,
                    label: "Cardiology pre-op clearance filed",
                  },
                  {
                    key: "orSuitePrepped" as const,
                    label: "OR sterile pack & implants verified",
                  },
                  {
                    key: "postOpScheduled" as const,
                    label: "Post-op recovery therapy scheduled",
                  },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-2.5 font-display text-[13.5px] text-[#4d585f] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={crmChecklist[item.key]}
                      onChange={() =>
                        setCrmChecklist((p) => ({
                          ...p,
                          [item.key]: !p[item.key],
                        }))
                      }
                      className="accent-[#3b82f6] w-4 h-4"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. ENT */}
      {clinic === "ent" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-[24px] bg-[#edf1f4] p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
                Interactive Diagnostic Audiogram
              </h4>
              <div className="flex gap-2">
                {(["Left", "Right"] as const).map((ear) => (
                  <button
                    key={ear}
                    type="button"
                    onClick={() => setEntEar(ear)}
                    className={`px-3.5 py-1.5 rounded-full font-display font-semibold text-[13px] cursor-pointer ${
                      entEar === ear
                        ? ear === "Left"
                          ? "bg-[#3b82f6] text-white"
                          : "bg-[#f51c23] text-white"
                        : "bg-white text-[#4d585f]"
                    }`}
                  >
                    {ear} Ear Plotting
                  </button>
                ))}
              </div>
            </div>
            <p className="font-display text-[13px] text-[#4d585f]">
              Click any frequency × dB threshold below to adjust the {entEar} ear curve.
            </p>

            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-4 overflow-x-auto">
              <div className="min-w-[420px]">
                <div className="grid grid-cols-7 gap-1 text-center font-display font-semibold text-[12px] text-[#4d585f] pb-2">
                  <div>dB \ Hz</div>
                  {freqs.map((f) => (
                    <div key={f}>{f} Hz</div>
                  ))}
                </div>
                {dbLevels.map((db) => (
                  <div
                    key={db}
                    className="grid grid-cols-7 gap-1 items-center border-t border-[#edf1f4]"
                  >
                    <div className="text-center font-display text-[11.5px] text-[#4d585f] py-1.5">
                      {db} dB
                    </div>
                    {freqs.map((freq) => {
                      const isL = entPoints.Left[freq] === db;
                      const isR = entPoints.Right[freq] === db;
                      return (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => handleAudiogramClick(freq, db)}
                          className="h-7 rounded hover:bg-[#edf1f4] flex items-center justify-center gap-1 text-[12px] font-bold cursor-pointer"
                        >
                          {isL && <span className="text-[#3b82f6]">✕</span>}
                          {isR && <span className="text-[#f51c23]">◯</span>}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[24px] bg-[#edf1f4] p-6 flex flex-col justify-between gap-4">
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-3">
              <h4 className="font-heading font-semibold text-[18px] text-[#1d1d1d]">
                Audiometric Thresholds Summary
              </h4>
              <div className="grid grid-cols-2 gap-4 text-[12.5px] font-display">
                <div>
                  <div className="font-semibold text-[#3b82f6] mb-1">
                    Left Ear (✕)
                  </div>
                  {Object.entries(entPoints.Left).map(([f, d]) => (
                    <div key={f} className="flex justify-between text-[#4d585f]">
                      <span>{f} Hz</span>
                      <strong className="text-[#1d1d1d]">{d} dB</strong>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-[#f51c23] mb-1">
                    Right Ear (◯)
                  </div>
                  {Object.entries(entPoints.Right).map(([f, d]) => (
                    <div key={f} className="flex justify-between text-[#4d585f]">
                      <span>{f} Hz</span>
                      <strong className="text-[#1d1d1d]">{d} dB</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[18px] bg-[#1d1d1d] text-white p-5">
              <div className="font-display font-semibold text-[13px] text-[#5290f4]">
                ✨ Hypocrates Voice Dictation Draft
              </div>
              <p className="mt-2 font-display text-[13.5px] leading-[1.55em] text-white/85">
                {(() => {
                  const avgL =
                    Object.values(entPoints.Left).reduce((s, v) => s + v, 0) /
                    6;
                  const avgR =
                    Object.values(entPoints.Right).reduce((s, v) => s + v, 0) /
                    6;
                  let report = "Audiometry performed today. ";
                  report +=
                    avgL > 30
                      ? "Left ear exhibits mild sensorineural hearing loss thresholds. "
                      : "Left ear thresholds within normal range. ";
                  report +=
                    avgR > 30
                      ? "Right ear exhibits elevated thresholds at higher frequencies. "
                      : "Right ear exhibits normal healthy thresholds. ";
                  if (
                    entPoints.Left[4000] > 40 ||
                    entPoints.Right[4000] > 40
                  ) {
                    report +=
                      "Acoustic notch noted at 4000Hz; recommended follow-up tympanometry.";
                  }
                  return `"${report}"`;
                })()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. NUTRITION */}
      {clinic === "nutrition" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Interactive Meal &amp; Macro Builder
            </h4>
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-4">
              {[
                {
                  label: "Target Protein",
                  val: nutritionProtein,
                  min: 40,
                  max: 220,
                  set: setNutritionProtein,
                },
                {
                  label: "Target Carbs",
                  val: nutritionCarbs,
                  min: 50,
                  max: 350,
                  set: setNutritionCarbs,
                },
                {
                  label: "Target Fats",
                  val: nutritionFats,
                  min: 20,
                  max: 150,
                  set: setNutritionFats,
                },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between font-display text-[13.5px] mb-1">
                    <span className="text-[#4d585f]">{s.label}</span>
                    <strong className="text-[#1d1d1d]">{s.val} g</strong>
                  </div>
                  <input
                    type="range"
                    min={s.min}
                    max={s.max}
                    value={s.val}
                    onChange={(e) => s.set(Number(e.target.value))}
                    className="w-full accent-[#3b82f6]"
                  />
                </div>
              ))}
            </div>

            <div className="rounded-[18px] bg-[#1d1d1d] text-white p-5">
              <div className="font-display font-semibold text-[13px] text-[#5290f4]">
                ✨ AI Suggested Specialty Recipe
              </div>
              <p className="mt-1.5 font-heading font-semibold text-[18px]">
                {suggestedMeal}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Client Progress &amp; Calorie Forecast
            </h4>
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="rounded-[16px] bg-[#edf1f4] p-5 text-center">
                <div className="font-heading font-bold text-[34px] text-[#1d1d1d]">
                  {calculatedCalories}
                </div>
                <div className="font-display text-[13px] text-[#4d585f]">
                  Calculated kcal / day
                </div>
              </div>
              <div className="space-y-2 font-display text-[13.5px]">
                <div className="flex justify-between">
                  <span className="text-[#4d585f]">Glycemic Load:</span>
                  <strong className={glycemicLoad.color}>
                    {glycemicLoad.label}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4d585f]">Protein:</span>
                  <strong>{nutritionProtein * 4} kcal</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4d585f]">Carbs:</span>
                  <strong>{nutritionCarbs * 4} kcal</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4d585f]">Fats:</span>
                  <strong>{nutritionFats * 9} kcal</strong>
                </div>
              </div>
            </div>

            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-2.5">
              <div className="font-heading font-semibold text-[16px] text-[#1d1d1d]">
                Dietitian Compliance Tracker
              </div>
              {[
                {
                  key: "hydration" as const,
                  label: "Apple Health hydration goal (2.5L met)",
                },
                {
                  key: "calLimit" as const,
                  label: "Calorie target verification completed",
                },
                {
                  key: "vitamins" as const,
                  label: "Supplements tracking checklist active",
                },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-2.5 font-display text-[13.5px] text-[#4d585f] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={nutritionGoals[item.key]}
                    onChange={() =>
                      setNutritionGoals((p) => ({
                        ...p,
                        [item.key]: !p[item.key],
                      }))
                    }
                    className="accent-[#10b981] w-4 h-4"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. PHYSIOTHERAPY */}
      {clinic === "physiotherapy" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-4">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Interactive Joint Range of Motion (ROM)
            </h4>
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 flex flex-col items-center">
              <svg width="200" height="170" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="9" fill="#1d1d1d" />
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="25"
                  stroke="#10b981"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {(() => {
                  const rad = (physioROM - 90) * (Math.PI / 180);
                  const x2 = 100 + 75 * Math.cos(rad);
                  const y2 = 100 + 75 * Math.sin(rad);
                  return (
                    <line
                      x1="100"
                      y1="100"
                      x2={x2}
                      y2={y2}
                      stroke="#3b82f6"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  );
                })()}
              </svg>
              <div className="font-heading font-semibold text-[22px] text-[#1d1d1d]">
                Joint Flexion: {physioROM}°
              </div>
              <input
                type="range"
                min={0}
                max={180}
                value={physioROM}
                onChange={(e) => setPhysioROM(Number(e.target.value))}
                className="w-full mt-4 accent-[#3b82f6]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-4">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Rehab Exercise Compliance Engine
            </h4>
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-3">
              <div className="flex justify-between font-display text-[14px]">
                <span className="text-[#4d585f]">
                  Patient Self-Reported Pain Scale:
                </span>
                <strong
                  className={
                    physioPain >= 7 ? "text-[#f51c23]" : "text-[#10b981]"
                  }
                >
                  {physioPain} / 10
                </strong>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                value={physioPain}
                onChange={(e) => setPhysioPain(Number(e.target.value))}
                className="w-full accent-[#3b82f6]"
              />
            </div>

            <div className="rounded-[18px] bg-[#1d1d1d] text-white p-5">
              <div className="font-display font-semibold text-[13px] text-[#5290f4]">
                ✨ Hypocrates Clinical AI Recommendation
              </div>
              <p className="mt-1.5 font-display text-[13.5px] leading-[1.5em] text-white/85">
                {physioAdvice}
              </p>
            </div>

            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-2.5">
              <div className="font-heading font-semibold text-[15px]">
                Home Exercise Program (HEP)
              </div>
              {[
                { key: "slides" as const, label: "Wall Slides (3 Sets x 10 Reps)" },
                {
                  key: "rotations" as const,
                  label: "Internal Rotations (3 Sets x 12 Reps)",
                },
                {
                  key: "plank" as const,
                  label: "Side Plank Holds (2 Sets x 30 sec)",
                },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-2.5 font-display text-[13.5px] text-[#4d585f] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={physioHEP[item.key]}
                    onChange={() =>
                      setPhysioHEP((p) => ({
                        ...p,
                        [item.key]: !p[item.key],
                      }))
                    }
                    className="accent-[#3b82f6] w-4 h-4"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. EYE CENTER */}
      {clinic === "eye-center" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-4">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Interactive Optometry Acuity Test
            </h4>
            <p className="font-display text-[13px] text-[#4d585f]">
              Select the direction the Tumbling &ldquo;E&rdquo; points to measure acuity.
            </p>
            <div className="h-[160px] rounded-[18px] bg-white border border-[#dde5ed] flex items-center justify-center">
              <div
                className="font-heading font-bold text-[#1d1d1d] select-none transition-all duration-200"
                style={{
                  transform: `rotate(${ROT_ANGLES[eyeDirection]}deg)`,
                  fontSize: `${Math.max(32, 110 - eyeScore * 16)}px`,
                  lineHeight: 1,
                }}
              >
                E
              </div>
            </div>
            <div className="flex justify-between font-display text-[14px]">
              <span className="text-[#4d585f]">Visual Acuity Score:</span>
              <strong className="text-[#3b82f6]">{eyeAcuity}</strong>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {DIRECTIONS.map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => handleEyeGuess(dir)}
                  className="rounded-[12px] bg-white border border-[#dde5ed] py-2.5 font-display font-semibold text-[13px] hover:bg-[#1d1d1d] hover:text-white transition-colors cursor-pointer"
                >
                  {dir}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-4">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Autorefractor &amp; Prescription Dial
            </h4>
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-4">
              <div className="flex justify-between font-display text-[14px]">
                <span className="text-[#4d585f]">Sphere Lens Power:</span>
                <strong>
                  {eyeSphere > 0
                    ? `+${(eyeSphere * 0.25).toFixed(2)}`
                    : (eyeSphere * 0.25).toFixed(2)}{" "}
                  Diopters
                </strong>
              </div>
              <input
                type="range"
                min={-8}
                max={12}
                value={eyeSphere}
                onChange={(e) => setEyeSphere(Number(e.target.value))}
                className="w-full accent-[#3b82f6]"
              />
              <div className="rounded-[14px] bg-[#f8fafc] border border-[#dde5ed] p-4 text-center space-y-1 font-heading font-bold tracking-[0.25em] text-[#1d1d1d]">
                <div
                  style={{ filter: `blur(${Math.abs(8 - eyeSphere) * 1.4}px)` }}
                >
                  <div className="text-[22px]">P E C F D</div>
                  <div className="text-[17px]">E D F C Z P</div>
                  <div className="text-[13px]">F E L O P Z D</div>
                </div>
                <div
                  className={`pt-2 font-display text-[12.5px] tracking-normal font-semibold ${
                    eyeSphere === 8 ? "text-[#10b981]" : "text-[#4d585f]"
                  }`}
                >
                  {eyeSphere === 8
                    ? "✓ Lens perfectly refracted — vision restored to 20/20"
                    : "Adjust dial toward +2.00D to refract lens"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. HAIR TRANSPLANT */}
      {clinic === "hair-transplant" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              FUE Graft Density &amp; Norwood Planner
            </h4>
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-4">
              <div>
                <div className="flex justify-between font-display text-[13.5px] mb-1">
                  <span className="font-semibold text-[#1d1d1d]">Norwood Classification</span>
                  <span className="font-bold text-[#3b82f6]">Stage {hairNorwood}</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={6}
                  value={hairNorwood}
                  onChange={(e) => {
                    const nw = Number(e.target.value);
                    setHairNorwood(nw);
                    setHairGrafts(nw * 750 + 350);
                  }}
                  className="w-full accent-[#3b82f6]"
                />
              </div>

              <div>
                <div className="flex justify-between font-display text-[13.5px] mb-1">
                  <span className="font-semibold text-[#1d1d1d]">Target FUE Grafts</span>
                  <span className="font-bold text-[#10b981]">{hairGrafts.toLocaleString()} grafts</span>
                </div>
                <input
                  type="range"
                  min={1200}
                  max={5000}
                  step={100}
                  value={hairGrafts}
                  onChange={(e) => setHairGrafts(Number(e.target.value))}
                  className="w-full accent-[#10b981]"
                />
              </div>

              <div className="pt-2 border-t border-[#edf1f4] grid grid-cols-3 gap-2 text-center font-display">
                <div className="rounded-[12px] bg-[#f8fafc] p-2.5">
                  <div className="text-[11px] text-[#4d585f]">Frontal</div>
                  <div className="font-bold text-[15px] text-[#1d1d1d]">
                    {Math.round(hairGrafts * 0.55)}
                  </div>
                </div>
                <div className="rounded-[12px] bg-[#f8fafc] p-2.5">
                  <div className="text-[11px] text-[#4d585f]">Mid-Scalp</div>
                  <div className="font-bold text-[15px] text-[#1d1d1d]">
                    {Math.round(hairGrafts * 0.25)}
                  </div>
                </div>
                <div className="rounded-[12px] bg-[#f8fafc] p-2.5">
                  <div className="text-[11px] text-[#4d585f]">Crown</div>
                  <div className="font-bold text-[15px] text-[#1d1d1d]">
                    {Math.round(hairGrafts * 0.2)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Adjunct Therapies &amp; Multi-Currency Quote
            </h4>
            <div className="space-y-2.5">
              {(
                [
                  ["prp", "Terapi PRP (3 Post-Op Sessions)"],
                  ["mesotherapy", "Mezoterapi Kapilare Protocol"],
                  ["laser", "Terapi Lazer i Kokës Recovery"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() =>
                    setHairAdjuncts((prev) => ({ ...prev, [key]: !prev[key] }))
                  }
                  className={`w-full text-left px-4 py-3 rounded-[14px] border font-display font-semibold text-[14px] flex items-center justify-between cursor-pointer transition-colors ${
                    hairAdjuncts[key]
                      ? "bg-[#10b981]/10 border-[#10b981] text-[#047857]"
                      : "bg-white border-[#dde5ed] text-[#4d585f]"
                  }`}
                >
                  <span>{label}</span>
                  <span>{hairAdjuncts[key] ? "✓" : "○"}</span>
                </button>
              ))}
            </div>
            <div className="rounded-[18px] bg-[#1d1d1d] text-white p-4 font-display text-[13px] leading-[1.6em] space-y-1">
              <div className="font-semibold text-[#5290f4]">
                ✨ Financa &amp; Post-Op AI Estimate
              </div>
              <div>
                Estimated Procedure:{" "}
                <strong>
                  €{Math.round(hairGrafts * 0.65 + (hairAdjuncts.prp ? 250 : 0))}
                </strong>{" "}
                (~
                {(
                  Math.round(hairGrafts * 0.65 + (hairAdjuncts.prp ? 250 : 0)) *
                  116.5
                ).toLocaleString()}{" "}
                LEK)
              </div>
              <div className="text-white/75">
                Auto-queues 3-month &amp; 12-month Kontrollet Pas-op. photo check-ins.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. GYNECOLOGY */}
      {clinic === "gynecology" && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              OB/GYN Procedure &amp; Screening Mode
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(
                [
                  "Ekzaminim Pap Test",
                  "Kolposkopi",
                  "Kontroll Gjinekologjik",
                  "Ultratingull Gjinekologjik",
                ] as const
              ).map((exam) => (
                <button
                  key={exam}
                  type="button"
                  onClick={() => setGynExam(exam)}
                  className={`px-4 py-3 rounded-[14px] border font-display font-semibold text-[13.5px] text-left transition-colors cursor-pointer ${
                    gynExam === exam
                      ? "bg-[#1d1d1d] text-white border-[#1d1d1d]"
                      : "bg-white text-[#1d1d1d] border-[#dde5ed] hover:bg-[#f8fafc]"
                  }`}
                >
                  {exam}
                </button>
              ))}
            </div>

            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-3">
              <div className="flex justify-between font-display text-[13.5px]">
                <span className="font-semibold text-[#1d1d1d]">
                  Prenatal Gestational Timeline
                </span>
                <span className="font-bold text-[#3b82f6]">Week {gynWeek}</span>
              </div>
              <input
                type="range"
                min={6}
                max={40}
                value={gynWeek}
                onChange={(e) => setGynWeek(Number(e.target.value))}
                className="w-full accent-[#3b82f6]"
              />
              <div className="flex justify-between text-[11.5px] font-display text-[#4d585f]">
                <span>Trimester 1 (Wk 6–12)</span>
                <span>Trimester 2 (Wk 13–27)</span>
                <span>Trimester 3 (Wk 28–40)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-[24px] bg-[#edf1f4] p-6 space-y-5">
            <h4 className="font-heading font-semibold text-[20px] text-[#1d1d1d]">
              Encrypted OB/GYN Care &amp; Recall Log
            </h4>
            <div className="rounded-[18px] bg-white border border-[#dde5ed] p-5 space-y-3 font-display text-[13.5px]">
              <div className="flex items-center justify-between">
                <span className="text-[#4d585f]">Active Protocol:</span>
                <span className="font-semibold text-[#1d1d1d]">{gynExam}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#4d585f]">Trimester Milestone:</span>
                <span className="font-semibold text-[#10b981]">
                  {gynWeek <= 12
                    ? "1st Trimester Baseline & Nuchal"
                    : gynWeek <= 27
                    ? "2nd Trimester Anomaly Scan"
                    : "3rd Trimester Biometry & GBS"}
                </span>
              </div>
            </div>
            <div className="rounded-[18px] bg-[#1d1d1d] text-white p-5 font-display text-[13.5px] leading-[1.6em] space-y-1.5">
              <div className="font-semibold text-[#5290f4]">
                ✨ Clinical AI &amp; Kujtesat Note
              </div>
              <p className="text-white/85">
                {gynExam} structured chart ready for sign-off. Week {gynWeek}{" "}
                ultrasound parameters logged under HIPAA/GDPR role isolation;
                automated recall reminder scheduled in Kujtesat.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

