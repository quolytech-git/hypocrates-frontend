import React from "react";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f8fafc] to-[#edf1f4] text-[#1d1d1d] px-6">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#3b82f6]/40 animate-spin" />
        <div className="w-24 h-24 rounded-full bg-white border-4 border-[#1d1d1d] shadow-[0_18px_40px_rgba(16,28,48,0.14)] flex items-center justify-center p-3">
          <img
            src="/images/hypocrates-logo.png"
            alt="Hypocrates Loading"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>
      <div className="mt-4 font-heading font-bold text-[24px] tracking-[-0.02em] text-[#1d1d1d]">
        Hypocrates
      </div>
      <div className="mt-1.5 flex items-center gap-2 font-display text-[13.5px] text-[#4d585f]">
        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
        <span>Loading clinical workspace...</span>
      </div>
    </div>
  );
}

