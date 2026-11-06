import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { generalFaqs } from "@/lib/data/company";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with StepIndus about your India GCC, SEZ, manufacturing or entry strategy. Phone, WhatsApp, email and office address.",
};

const channels = [
  {
    icon: Phone,
    label: "Call",
    value: siteConfig.contact.phonePrimary,
    href: siteConfig.contact.phonePrimaryHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.phoneWhatsApp,
    href: siteConfig.contact.phoneWhatsAppHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about execution."
        description="Tell us what your board has approved and what timeline you're working against. We'll respond with next steps, not a sales deck."
        size="compact"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-2xl border border-sand-200 p-7 sm:p-10">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="space-y-4">
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.label === "WhatsApp" ? "_blank" : undefined}
                      rel={c.label === "WhatsApp" ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-sand-200 p-5 transition-colors hover:border-navy-950 hover:bg-sand-50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-100 text-navy-700 transition-colors group-hover:bg-navy-950 group-hover:text-white">
                        <c.icon size={18} />
                      </span>
                      <span>
                        <span className="block text-[0.78rem] font-medium tracking-wide text-sand-500 uppercase">
                          {c.label}
                        </span>
                        <span className="block text-[0.98rem] font-medium text-navy-950">{c.value}</span>
                      </span>
                    </a>
                  ))}

                  <div className="flex items-start gap-4 rounded-xl border border-sand-200 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-100 text-navy-700">
                      <MapPin size={18} />
                    </span>
                    <span>
                      <span className="block text-[0.78rem] font-medium tracking-wide text-sand-500 uppercase">
                        Office
                      </span>
                      <span className="block text-[0.95rem] leading-relaxed text-navy-950">
                        {siteConfig.contact.address.line1}
                        <br />
                        {siteConfig.contact.address.line2}
                        <br />
                        {siteConfig.contact.address.line3}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-navy-950 p-7 text-white">
                  <p className="font-display text-xl leading-snug">
                    Typical response time: one business day.
                  </p>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-white/65">
                    If your timeline is urgent — a board date already on the
                    calendar — say so in the message and we&apos;ll prioritise
                    accordingly.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-[0.8rem] font-semibold tracking-wide text-orange-600 uppercase">
              Before you write in
            </p>
            <h2 className="mt-3 font-display text-3xl text-navy-950">Common questions</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-sand-200 border-y border-sand-200">
            {generalFaqs.map((faq, i) => (
              <Reveal key={faq.q} delay={0.04 * i}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.02rem] font-medium text-navy-950">
                    {faq.q}
                    <span className="shrink-0 text-xl font-light text-orange-500 transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-sand-600">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
