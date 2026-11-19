"use client";

import React, { useState } from "react";
import { SubpageShell } from "@/components/SubpageShell";
import { resourceItems, ResourceItem } from "@/lib/hypocrates-data";

const TABS = [
  { id: "all", label: "All Resources" },
  { id: "guide", label: "Guides" },
  { id: "case-study", label: "Case Studies" },
  { id: "news", label: "Product News" },
] as const;

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<ResourceItem | null>(null);

  const filtered =
    activeTab === "all"
      ? resourceItems
      : resourceItems.filter((item) => item.category === activeTab);

  return (
    <SubpageShell
      badge="Resources"
      title="Resources, Insights, and Implementation Guides"
      subtitle="Browse our guides, operational studies, and product updates to learn how to optimize your clinic operations."
    >
      <div className="max-w-[1160px] mx-auto px-5 space-y-10">
        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-display font-semibold text-[14px] cursor-pointer transition-colors ${
                  active
                    ? "bg-[#1d1d1d] text-white"
                    : "bg-[#edf1f4] text-[#4d585f] hover:text-[#1d1d1d]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-7 flex flex-col justify-between cursor-pointer hover:bg-white transition-colors"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white text-[12.5px] font-display font-semibold text-[#3b82f6]">
                  {item.categoryLabel}
                </span>
                <h2 className="mt-4 font-heading font-semibold text-[22px] leading-[1.25em] text-[#1d1d1d]">
                  {item.title}
                </h2>
                <p className="mt-3 font-display font-medium text-[15px] leading-[1.5em] text-[#4d585f]">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dde5ed] flex items-center justify-between font-display text-[13px] text-[#4d585f]">
                <span>
                  {item.date} • {item.readTime}
                </span>
                <span className="font-semibold text-[#3b82f6]">Read →</span>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Reader Panel */}
        {selectedItem && (
          <div className="rounded-[26px] bg-white border border-[#3b82f6]/40 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-full bg-[#edf1f4] font-display font-semibold text-[12.5px] text-[#3b82f6]">
                {selectedItem.categoryLabel} • {selectedItem.readTime}
              </span>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-3.5 py-1.5 rounded-full bg-[#edf1f4] font-display font-semibold text-[13px] text-[#1d1d1d] cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <h3 className="font-heading font-semibold text-[26px] text-[#1d1d1d]">
              {selectedItem.title}
            </h3>
            <p className="font-display font-medium text-[16px] text-[#4d585f]">
              {selectedItem.desc}
            </p>
            <ul className="pt-2 space-y-2.5">
              {selectedItem.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 font-display font-medium text-[15px] text-[#1d1d1d]"
                >
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SubpageShell>
  );
}

