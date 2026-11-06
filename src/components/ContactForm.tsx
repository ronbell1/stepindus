"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/data/services";

const inputClass =
  "w-full rounded-lg border border-sand-300 bg-white px-4 py-3 text-[0.95rem] text-navy-950 placeholder:text-sand-400 outline-none transition-colors focus:border-navy-700 focus:ring-2 focus:ring-navy-700/10";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const phone = String(data.get("phone") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    const subject = `Website enquiry from ${name || "a prospective client"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Area of interest: ${interest}`,
      "",
      "Message:",
      message,
    ];
    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[0.85rem] font-medium text-navy-950">
            Full name <span className="text-orange-600">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Jordan Lee" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[0.85rem] font-medium text-navy-950">
            Work email <span className="text-orange-600">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="jordan@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-[0.85rem] font-medium text-navy-950">
            Company <span className="text-orange-600">*</span>
          </label>
          <input id="company" name="company" type="text" required className={inputClass} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[0.85rem] font-medium text-navy-950">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="Optional" />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-[0.85rem] font-medium text-navy-950">
          What are you exploring?
        </label>
        <select id="interest" name="interest" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[0.85rem] font-medium text-navy-950">
          Tell us about your timeline <span className="text-orange-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="What's prompting this, and what does your board need to see?"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-950 px-7 py-4 text-[0.95rem] font-medium text-white transition-colors hover:bg-orange-600 sm:w-auto"
      >
        Send via email
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      <p className="flex items-start gap-2 text-[0.82rem] text-sand-500">
        {sent && <Check size={14} className="mt-0.5 shrink-0 text-orange-500" />}
        {sent
          ? "Your email app should now be open with this enquiry pre-filled — review it and hit send."
          : `This opens your email app with the message addressed to ${siteConfig.contact.email}, so you can review it before sending.`}
      </p>
    </form>
  );
}
