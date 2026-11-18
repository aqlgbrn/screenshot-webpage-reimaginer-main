import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" label={education.label} headline="FOUNDATIONS THAT COMPOUND.">
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {education.education.map((item) => (
          <Reveal key={item.degree} className="bg-card">
            <div className="flex h-full flex-col p-7 md:p-9">
              <p className="label-mono !text-[0.6rem]">{item.type}</p>
              <h3 className="display-md mt-4 text-xl sm:text-2xl">{item.degree}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.institution}</p>
              <p className="label-mono !text-muted-foreground mt-auto pt-6">{item.period}</p>
            </div>
          </Reveal>
        ))}

        {education.training.map((item) => (
          <Reveal key={item.program} delay={90} className="bg-card">
            <div className="flex h-full flex-col p-7 md:p-9">
              <p className="label-mono !text-[0.6rem]">TRAINING</p>
              <h3 className="display-md mt-4 text-xl leading-snug sm:text-2xl">{item.program}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.institution}</p>
              <p className="label-mono !text-muted-foreground mt-auto pt-6">{item.period}</p>

              {/* EDITABLE certificate proof — rendered only when provided */}
              {(item.certificateImageUrl || item.verificationUrl) && (
                <div className="mt-5 border-t border-border pt-4">
                  {item.certificateImageUrl && (
                    <img
                      src={item.certificateImageUrl}
                      alt="Certificate of participation"
                      className="mt-2 rounded border border-border"
                    />
                  )}
                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono !text-[0.65rem] mt-3 inline-flex items-center gap-2 hover:text-accent"
                    >
                      <span aria-hidden="true" className="text-accent">↗</span>
                      VERIFY
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
