import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" label={skills.label} headline={skills.headline}>
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {skills.categories.map((category, i) => (
          <Reveal key={category.name} delay={i * 90} className="bg-card">
            <div className="flex h-full flex-col p-7">
              <p className="label-mono !text-[0.6rem]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="label-mono mt-3 !text-foreground !text-[0.75rem]">{category.name}</h3>
              <ul className="mt-6 space-y-3.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center justify-between gap-3 border-b border-border pb-3.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                    <span aria-hidden="true" className="font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      +
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* EDITABLE tools & languages — rendered only when filled in */}
      {skills.tools.length > 0 && (
        <Reveal className="mt-10">
          <p className="label-mono !text-muted-foreground !text-[0.6rem]">TOOLS &amp; LANGUAGES</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {skills.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}
