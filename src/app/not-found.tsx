import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-sand-50 py-28">
      <Container className="text-center">
        <p className="font-display text-sm tracking-[0.2em] text-orange-600 uppercase">404</p>
        <h1 className="mx-auto mt-5 max-w-xl font-display text-4xl leading-[1.15] text-navy-950 balance sm:text-5xl">
          This page didn&apos;t make it to go-live.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[1.02rem] leading-relaxed text-sand-600">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
          Here are a few places to pick back up.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3.5 text-[0.9rem] font-medium text-white transition-colors hover:bg-orange-600"
          >
            Back to home
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-sand-300 px-6 py-3.5 text-[0.9rem] font-medium text-navy-950 transition-colors hover:border-navy-950"
          >
            View services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-sand-300 px-6 py-3.5 text-[0.9rem] font-medium text-navy-950 transition-colors hover:border-navy-950"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
