import { useState } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  const [selectedId, setSelectedId] = useState("vice-president");

  const selectedExperience = leadership.experiences.find((exp) => exp.id === selectedId);

  const groups = [
    {
      title: "ORGANIZATIONAL LEADERSHIP",
      items: leadership.experiences.filter((e) => e.category === "Organizational Leadership"),
    },
    {
      title: "EVENT & COMMITTEE EXPERIENCE",
      items: leadership.experiences.filter((e) => e.category !== "Organizational Leadership"),
    },
  ];

  const renderTimelineItem = (experience: (typeof leadership.experiences)[number]) => (
    <button
      key={experience.id}
      type="button"
      onClick={() => setSelectedId(experience.id)}
      className={`relative w-full pl-6 text-left transition-all duration-300 ${
        selectedId === experience.id ? "opacity-100" : "opacity-60 hover:opacity-80"
      }`}
    >
      {/* Timeline dot */}
      <span
        className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
          selectedId === experience.id ? "border-accent bg-accent" : "border-border bg-background"
        }`}
      />

      {/* Year */}
      <p
        className={`label-mono !text-[0.6rem] mb-1 ${
          selectedId === experience.id ? "!text-accent" : "!text-muted-foreground"
        }`}
      >
        {experience.year}
      </p>

      {/* Position */}
      <p
        className={`text-sm font-medium transition-colors ${
          selectedId === experience.id ? "text-foreground" : "text-foreground/70"
        }`}
      >
        {experience.position}
      </p>

      {/* Organization */}
      <p className="label-mono !text-[0.55rem] !text-muted-foreground mt-0.5">
        {experience.organization}
      </p>
    </button>
  );

  return (
    <Section id="leadership" label={leadership.label} headline={leadership.headline}>
      <Reveal>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[320px_1fr]">
          {/* LEFT - Interactive Timeline */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

              {/* Timeline groups */}
              <div className="space-y-8">
                {groups.map((group) => (
                  <div key={group.title}>
                    <p className="label-mono !text-[0.55rem] !text-muted-foreground mb-4">
                      {group.title}
                    </p>
                    <div className="space-y-5">{group.items.map(renderTimelineItem)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - Experience Detail Card */}
          <div className="min-h-[400px]">
            {selectedExperience && (
              <div
                key={selectedExperience.id}
                className="relative rounded-2xl border border-border bg-white/40 p-6 backdrop-blur-xl shadow-xl shadow-black/5 transition-all duration-500 sm:p-8"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <p className="label-mono !text-[0.65rem] !text-accent mb-2">
                      {selectedExperience.year}
                    </p>
                    <h3 className="display-md text-2xl sm:text-3xl mb-2">
                      {selectedExperience.position}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {selectedExperience.organization}
                    </p>
                    <p className="label-mono !text-[0.6rem] !text-muted-foreground mt-1">
                      {selectedExperience.indonesianTitle}
                    </p>
                  </div>

                  {/* Logo */}
                  {selectedExperience.logo ? (
                    <div className="w-20 h-20 rounded-xl border border-border/50 bg-white/50 p-2 flex items-center justify-center">
                      <img
                        src={selectedExperience.logo}
                        alt={`${selectedExperience.organization} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl border border-border/50 bg-secondary/30 flex items-center justify-center">
                      <span className="label-mono !text-[0.5rem] !text-muted-foreground">LOGO</span>
                    </div>
                  )}
                </div>

                {/* Category badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <p className="label-mono !text-[0.6rem] !text-muted-foreground">
                    {selectedExperience.category}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="label-mono !text-[0.6rem] !text-muted-foreground mb-3">
                    RESPONSIBILITIES
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    {selectedExperience.description}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-border/50">
                  {selectedExperience.instagram && (
                    <a
                      href={selectedExperience.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono !text-[0.65rem] inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-colors hover:border-accent hover:text-accent"
                    >
                      <span>📷</span>
                      Instagram
                    </a>
                  )}
                  {selectedExperience.certificate && (
                    <a
                      href={selectedExperience.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono !text-[0.65rem] inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-colors hover:border-accent hover:text-accent"
                    >
                      <span>📄</span>
                      Certificate
                    </a>
                  )}
                  {!selectedExperience.instagram && !selectedExperience.certificate && (
                    <span className="label-mono !text-[0.65rem] !text-muted-foreground opacity-50">
                      No additional links available
                    </span>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/30 rounded-tr-2xl" />
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
