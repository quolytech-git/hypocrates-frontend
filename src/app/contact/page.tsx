import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SubmissionForm } from "@/components/SubmissionForm";
import {
  MailIcon as Mail,
  MapPinIcon as MapPin,
  PhoneIcon as Phone,
  ClockIcon as Clock,
  ShieldCheckIcon as ShieldCheck,
} from "@/components/ui/ClinicalIcons";

export const metadata: Metadata = {
  title: "Contact Hypocrates | Healthcare AI & Clinical Infrastructure",
  description:
    "Connect with Hypocrates sales, clinical support, or media teams, or visit our Tirana headquarters.",
};

const channels = [
  {
    title: "Enterprise Sales",
    detail: "Clinic rollouts, multi-site licensing, and custom EHR migrations.",
    email: "sales@hypocrates.ai",
  },
  {
    title: "Clinical Support",
    detail: "24/7 assistance for active care teams, ambient scribe, and uptime.",
    email: "support@hypocrates.ai",
  },
  {
    title: "Press & Partnerships",
    detail: "Media inquiries, clinical research collaborations, and events.",
    email: "press@hypocrates.ai",
  },
];

export default function ContactPage() {
  return (
    <SubpageShell
      badge="Contact Us"
      title="Talk with the Hypocrates clinical team"
      subtitle="Whether you are launching a specialty clinic or migrating a multi-location practice, our clinical onboarding specialists are ready to help."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
            <h2 className="text-[20px] font-semibold text-[#1d1d1d] mb-5">
              Direct Channels
            </h2>
            <div className="flex flex-col gap-5">
              {channels.map((ch) => (
                <div key={ch.email} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-[#1d1d1d]">
                      {ch.title}
                    </div>
                    <p className="text-[13px] text-[#5c6670] mt-0.5 mb-1">
                      {ch.detail}
                    </p>
                    <a
                      href={`mailto:${ch.email}`}
                      className="text-[13.5px] font-medium text-[#3b82f6] hover:underline"
                    >
                      {ch.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-7 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex flex-col gap-5">
            <h2 className="text-[20px] font-semibold text-[#1d1d1d]">
              Headquarters & Support Hours
            </h2>
            <div className="flex items-start gap-3.5 text-[14px] text-[#5c6670]">
              <MapPin className="w-4 h-4 text-[#3b82f6] shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-[#1d1d1d]">Tirana Office</div>
                <p>Rruga Ibrahim Rugova, Sky Tower, Floor 8, Tirana 1001, Albania</p>
                <a
                  href="mailto:tirana@hypocrates.com"
                  className="text-[#3b82f6] hover:underline text-[13px] mt-1 inline-block"
                >
                  tirana@hypocrates.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3.5 text-[14px] text-[#5c6670]">
              <Phone className="w-4 h-4 text-[#3b82f6] shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-[#1d1d1d]">Telephone</div>
                <p>+355 4 222 0100</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 text-[14px] text-[#5c6670]">
              <Clock className="w-4 h-4 text-[#3b82f6] shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-[#1d1d1d]">Support Hours</div>
                <p>Monday – Friday: 8:00 AM – 8:00 PM GST</p>
                <p className="text-[#10b981] font-medium mt-0.5">
                  Emergency clinical support: 24/7
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-[#eef2f6] flex items-center gap-2 text-[12.5px] text-[#5c6670]">
              <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
              HIPAA & GDPR encrypted intake handling
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[24px] bg-white p-7 sm:p-9 border border-[#dee5ec] shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
            <h2 className="text-[22px] font-semibold text-[#1d1d1d] mb-2">
              Send us a message
            </h2>
            <p className="text-[14px] text-[#5c6670] mb-6">
              Tell us about your practice specialty, number of providers, and
              timeline.
            </p>
            <SubmissionForm
              type="contact"
              submitLabel="Send Message"
              showCompany
              showMessage
              showRoleAndSubject
            />
          </div>
        </div>
      </div>
    </SubpageShell>
  );
}
