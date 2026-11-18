import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { about, profile } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" label={about.label} headline={about.headline}>
      <div className="grid gap-12 md:grid-cols-[1fr_280px] md:gap-16">
        <div className="max-w-2xl space-y-6">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className={`leading-relaxed ${i === 0 ? "text-lg text-foreground md:text-xl" : "text-muted-foreground"}`}>
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <aside className="border border-border p-6">
            <p className="label-mono !text-muted-foreground">PROFILE</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="label-mono !text-muted-foreground !text-[0.6rem]">NAME</dt>
                <dd className="mt-1 text-foreground">{profile.fullName}</dd>
              </div>
              <div>
                <dt className="label-mono !text-muted-foreground !text-[0.6rem]">EDUCATION</dt>
                <dd className="mt-1 text-foreground">
                  {profile.degree}
                  <br />
                  <span className="text-muted-foreground">{profile.institution}</span>
                </dd>
              </div>
              <div>
                <dt className="label-mono !text-muted-foreground !text-[0.6rem]">PERIOD</dt>
                <dd className="mt-1 font-mono text-xs text-muted-foreground">{profile.studyPeriod}</dd>
              </div>
              <div>
                <dt className="label-mono !text-muted-foreground !text-[0.6rem]">LOCATION</dt>
                <dd className="mt-1 text-foreground">{profile.location}</dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-border pt-5">
              <p className="label-mono !text-muted-foreground !text-[0.6rem]">INTERESTS</p>
              <ul className="mt-3 space-y-2">
                {profile.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="font-mono text-xs text-accent">→</span>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
