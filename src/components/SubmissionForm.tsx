"use client";

import React, { useState } from "react";

interface SubmissionFormProps {
  type: "contact" | "demo" | "waitlist";
  submitLabel: string;
  showMessage?: boolean;
  showCompany?: boolean;
  showRoleAndSubject?: boolean;
}

const ROLES = [
  "Clinic Owner / Director",
  "Physician / Specialist",
  "Practice Manager",
  "IT Administrator",
  "Billing Specialist",
  "Other",
];

const SUBJECTS = [
  "Request a Demo",
  "Clinic Onboarding & Implementation",
  "Technical Support",
  "Integration Question",
  "Partnership",
  "Other",
];

export function SubmissionForm({
  type,
  submitLabel,
  showMessage = true,
  showCompany = false,
  showRoleAndSubject = false,
}: SubmissionFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          name,
          email,
          company,
          role: showRoleAndSubject ? role : undefined,
          subject: showRoleAndSubject ? subject : undefined,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      setFeedback(
        data.message ||
          "Thank you for reaching out. A member of the Hypocrates team will respond within 24 hours."
      );
      setName("");
      setEmail("");
      setCompany("");
      setRole("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] bg-[#edf1f4] border border-[#dde5ed] p-7 md:p-10 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
            Full name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dr. Sarah Jenkins"
            required
            className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
          />
        </div>
        <div>
          <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
            Clinical / Work email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="s.jenkins@healthclinic.com"
            required
            className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
          />
        </div>
      </div>

      {showCompany && (
        <div className={showRoleAndSubject ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}>
          <div>
            <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
              Clinic / Organization
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Apex Dental Clinic"
              className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
            />
          </div>

          {showRoleAndSubject && (
            <div>
              <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
                Your Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
              >
                <option value="">Select your role</option>
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {showRoleAndSubject && (
        <div>
          <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
            Subject *
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
          >
            <option value="">What can we help with?</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}

      {showMessage && (
        <div>
          <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
            How can we help?
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your clinic specialty, branches, EHR setup, or workflow goals..."
            className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
          />
        </div>
      )}

      {feedback && (
        <div
          className={`rounded-[14px] px-4 py-3 font-display font-medium text-[14px] ${
            status === "success"
              ? "bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30"
              : "bg-[#f51c23]/10 text-[#f51c23] border border-[#f51c23]/30"
          }`}
        >
          {feedback}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-gradient-to-b from-[#5290f4] via-[#3b82f6] to-[#406ae4] text-white font-display font-semibold text-[16px] py-4 px-8 hover:opacity-95 transition-opacity cursor-pointer disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
