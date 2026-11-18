import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  label: string;
  headline: string;
  children: ReactNode;
}

export function Section({ id, label, headline, children }: SectionProps) {
  return (
    <section id={id} className="hairline-t scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="label-mono">{label}</p>
          <h2 className="display-md mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {headline}
          </h2>
        </Reveal>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
