"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_SERVICE_GROUPS, PRIMARY_NAV, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close any open menu when the route changes, without a render-triggering Effect.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-8xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10" style={{ height: "4.5rem" }}>
        <Logo priority />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-[0.9rem] font-medium text-sand-800 transition-colors hover:text-navy-700",
                pathname?.startsWith("/services") && "text-navy-700"
              )}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                size={15}
                className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-xl shadow-navy-950/[0.08]">
                    <div className="grid grid-cols-2 gap-x-8 p-6">
                      {NAV_SERVICE_GROUPS.map((group) => (
                        <div key={group.label}>
                          <p className="mb-3 text-xs font-semibold tracking-wide text-orange-600 uppercase">
                            {group.label}
                          </p>
                          <ul className="space-y-0.5">
                            {group.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/services/${item.slug}`}
                                  className="group block rounded-lg px-2.5 py-2 -mx-2.5 transition-colors hover:bg-sand-100"
                                >
                                  <span className="block text-[0.9rem] font-medium text-ink group-hover:text-navy-700">
                                    {item.title}
                                  </span>
                                  <span className="mt-0.5 block text-[0.78rem] leading-snug text-sand-500">
                                    {item.blurb}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      className="flex items-center justify-between border-t border-sand-200 bg-sand-50 px-6 py-3.5 text-[0.85rem] font-medium text-navy-700 transition-colors hover:bg-sand-100"
                    >
                      View all services
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {PRIMARY_NAV.filter((n) => n.title !== "Services").map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.9rem] font-medium text-sand-800 transition-colors hover:text-navy-700",
                  active && "text-navy-700"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.contact.phonePrimaryHref}
            className="flex items-center gap-1.5 text-[0.85rem] font-medium text-sand-600 transition-colors hover:text-navy-700"
          >
            <Phone size={14} strokeWidth={2} />
            {siteConfig.contact.phonePrimary}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-navy-950 px-5 py-2.5 text-[0.85rem] font-medium text-white transition-colors hover:bg-orange-600"
          >
            Start a conversation
          </Link>
        </div>

        <button
          className="-mr-2 p-2 text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && <MobileNav onNavigate={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden border-t border-sand-200 bg-sand-50 lg:hidden"
    >
      <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto px-5 pb-8 pt-2">
        <nav className="flex flex-col divide-y divide-sand-200">
          <Link href="/about" onClick={onNavigate} className="py-4 text-lg font-medium text-ink">
            About
          </Link>

          <div>
            <button
              className="flex w-full items-center justify-between py-4 text-lg font-medium text-ink"
              onClick={() => setServicesExpanded((v) => !v)}
              aria-expanded={servicesExpanded}
            >
              Services
              <ChevronDown
                size={18}
                className={cn("transition-transform", servicesExpanded && "rotate-180")}
              />
            </button>
            <AnimatePresence>
              {servicesExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pb-4"
                >
                  {NAV_SERVICE_GROUPS.map((group) => (
                    <div key={group.label} className="mb-4">
                      <p className="mb-2 text-xs font-semibold tracking-wide text-orange-600 uppercase">
                        {group.label}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/services/${item.slug}`}
                              onClick={onNavigate}
                              className="block rounded-lg px-3 py-2 text-[0.95rem] text-sand-700"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/projects" onClick={onNavigate} className="py-4 text-lg font-medium text-ink">
            Projects
          </Link>
          <Link href="/insights" onClick={onNavigate} className="py-4 text-lg font-medium text-ink">
            Insights
          </Link>
          <Link href="/contact" onClick={onNavigate} className="py-4 text-lg font-medium text-ink">
            Contact
          </Link>
        </nav>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={onNavigate}
            className="rounded-full bg-navy-950 px-5 py-3.5 text-center text-[0.95rem] font-medium text-white"
          >
            Start a conversation
          </Link>
          <a
            href={siteConfig.contact.phonePrimaryHref}
            className="flex items-center justify-center gap-2 rounded-full border border-sand-300 px-5 py-3.5 text-[0.95rem] font-medium text-ink"
          >
            <Phone size={16} /> {siteConfig.contact.phonePrimary}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
