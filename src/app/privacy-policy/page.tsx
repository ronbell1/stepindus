import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How StepIndus Consulting LLP collects, uses and protects information submitted through this website.",
};

const sections = [
  {
    title: "What we collect",
    body: [
      "We collect information you choose to give us — primarily through the contact form on this site, which may include your name, work email, company, phone number, and the content of your message.",
      "We do not use third-party advertising trackers, and we do not sell, rent, or trade any information you share with us.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "Information submitted through the contact form is used solely to respond to your enquiry — to understand your requirement and get back to you about StepIndus's services. We do not add you to a marketing list without your separate, explicit consent.",
    ],
  },
  {
    title: "How the contact form works",
    body: [
      "This site's contact form composes an email addressed to connect@stepindus.com using your device's own email application — the form data is not transmitted to or stored on a StepIndus server as part of that process. The resulting email is handled the same way as any other message you send us directly.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "This site does not set marketing or advertising cookies. Standard web server logs (such as IP address, browser type, and pages visited) may be retained briefly by our hosting provider for security and performance purposes.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "Enquiry correspondence is retained only as long as reasonably necessary to respond to you and maintain a record of business communications, consistent with applicable Indian data protection law.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask us what information we hold about you, request a correction, or ask us to delete it, by writing to connect@stepindus.com. We will respond within a reasonable timeframe.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy as the site or our practices change. The version on this page is always the current one.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How StepIndus Consulting LLP handles information submitted through this website."
        size="compact"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-[0.85rem] text-sand-500">Last updated: November 2026</p>

          <div className="mt-10 space-y-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-2xl text-navy-950">{s.title}</h2>
                <div className="mt-4 space-y-4 text-[1rem] leading-relaxed text-sand-700">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-sand-200 pt-10">
              <h2 className="font-display text-2xl text-navy-950">Contact</h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-sand-700">
                Questions about this policy can be sent to{" "}
                <a href={siteConfig.contact.emailHref} className="font-medium text-navy-950 underline underline-offset-4">
                  {siteConfig.contact.email}
                </a>{" "}
                or to our registered office at {siteConfig.contact.address.full}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
