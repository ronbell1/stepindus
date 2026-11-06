import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { NAV_SERVICE_GROUPS, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-sand-200">
      <div className="mx-auto max-w-8xl px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/stepindus-logo-reversed.svg"
              alt="StepIndus"
              width={233}
              height={59}
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-sand-400">
              An execution-led partner for building Global Capability Centres
              in India — captive setup or GCC-as-a-Service, from approval to
              go-live.
            </p>
            <div className="mt-7 space-y-3 text-[0.9rem] text-sand-300">
              <a href={siteConfig.contact.emailHref} className="flex items-start gap-2.5 hover:text-white">
                <Mail size={16} className="mt-0.5 shrink-0 text-sand-500" />
                {siteConfig.contact.email}
              </a>
              <a href={siteConfig.contact.phonePrimaryHref} className="flex items-start gap-2.5 hover:text-white">
                <Phone size={16} className="mt-0.5 shrink-0 text-sand-500" />
                {siteConfig.contact.phonePrimary}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sand-500" />
                <span>{siteConfig.contact.address.full}</span>
              </p>
            </div>
          </div>

          {NAV_SERVICE_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold tracking-wide text-sand-500 uppercase">
                {group.label}
              </p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="text-[0.9rem] text-sand-300 transition-colors hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold tracking-wide text-sand-500 uppercase">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {[
                { title: "About us", href: "/about" },
                { title: "Leadership", href: "/about/leadership" },
                { title: "Our approach", href: "/approach" },
                { title: "Projects", href: "/projects" },
                { title: "Insights", href: "/insights" },
                { title: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.9rem] text-sand-300 transition-colors hover:text-white">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-1.5 text-[0.9rem] text-sand-300 transition-colors hover:text-white"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.82rem] text-sand-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StepIndus Consulting LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-sand-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-sand-300">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
