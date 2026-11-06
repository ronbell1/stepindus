import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { homeStats } from "@/lib/data/company";

export function CredibilityStrip() {
  return (
    <section className="border-b border-sand-200 bg-white py-14 sm:py-16">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
            {homeStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-navy-950 sm:text-[2.75rem]">
                  {stat.value}
                  <span className="text-orange-500">{stat.suffix}</span>
                </p>
                <p className="mt-2 max-w-[16ch] text-[0.85rem] leading-snug text-sand-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
