import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" label={experience.label} headline={experience.headline}>
      <div className="relative border-l border-border pl-8 md:pl-14">
        {experience.items.map((item, index) => (
          <Reveal key={index} className="relative pb-4">
            {/* timeline node */}
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full border border-accent md:-left-[61px]"
              style={{ background: "var(--color-background)" }}
            >
              <span
                className="absolute inset-[2px] rounded-full"
                style={{ background: "var(--color-accent)" }}
              />
            </span>

            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h3 className="display-md text-xl sm:text-2xl md:text-3xl">{item.organization}</h3>
              <span className="label-mono !text-[0.65rem] rounded-full px-3 py-1" style={{ background: "var(--color-secondary)", color: "var(--color-accent-foreground)" }}>
                {item.type.toUpperCase()}
              </span>
            </div>

            <p className="label-mono !text-muted-foreground mt-3">
              {item.department} — {item.period}
            </p>
            <p className="label-mono !text-muted-foreground !text-[0.6rem] mt-1">{item.location}</p>

            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
