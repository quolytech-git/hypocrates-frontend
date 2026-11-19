"use client";

import React, { useState } from "react";

interface SubmissionFormProps {
  type: "contact" | "demo" | "waitlist";
  submitLabel: string;
  showMessage?: boolean;
  showCompany?: boolean;
}

export function SubmissionForm({
  type,
  submitLabel,
  showMessage = true,
  showCompany = false,
}: SubmissionFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
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
        body: JSON.stringify({ type, name, email, company, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      setFeedback(data.message);
      setName("");
      setEmail("");
      setCompany("");
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
            placeholder="Alex Morgan"
            required
            className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
          />
        </div>
        <div>
          <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@company.com"
            required
            className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
          />
        </div>
      </div>

      {showCompany && (
        <div>
          <label className="block font-display font-semibold text-[14px] text-[#1d1d1d] mb-2">
            Company / Team
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Fintech Partners LLC"
            className="w-full rounded-[14px] bg-white border border-[#dde5ed] px-4 py-3 text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#3b82f6]"
          />
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
            placeholder="Tell us about your investment goals or team size..."
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

