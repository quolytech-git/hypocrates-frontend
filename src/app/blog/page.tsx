import React from "react";
import { SubpageShell } from "@/components/SubpageShell";

const posts = [
  {
    tag: "AI Insights",
    title: "How Predictive Risk Scoring Protects Portfolio Drawdowns",
    excerpt:
      "Learn how real-time volatility tracking and AI signals help investors stay ahead of sharp market swings.",
    date: "Oct 2026",
  },
  {
    tag: "Portfolio Strategy",
    title: "Consolidating Multi-Brokerage Accounts Into One Command Center",
    excerpt:
      "Stop juggling spreadsheets. See performance attribution and asset allocation across all holdings automatically.",
    date: "Oct 2026",
  },
  {
    tag: "Security",
    title: "Inside Our SOC2 Type 2 & End-to-End Encrypted Architecture",
    excerpt:
      "A closer look at how FintechX safeguards financial data with bank-level encryption and zero-trust controls.",
    date: "Sep 2026",
  },
];

export default function BlogPage() {
  return (
    <SubpageShell
      badge="Blog"
      title="Insights on AI finance & smarter investing"
      subtitle="Guides, product updates, and market intelligence from the FintechX research team."
    >
      <div className="max-w-[1060px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-[24px] bg-[#edf1f4] border border-[#dde5ed] p-7 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[13px] font-display font-semibold text-[#3b82f6]">
                {post.tag}
              </span>
              <h2 className="mt-4 font-heading font-semibold text-[22px] leading-[1.25em] text-[#1d1d1d]">
                {post.title}
              </h2>
              <p className="mt-3 font-display font-medium text-[15px] leading-[1.45em] text-[#4d585f]">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-6 font-display font-medium text-[13px] text-[#4d585f]">
              {post.date}
            </div>
          </article>
        ))}
      </div>
    </SubpageShell>
  );
}

