import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { contact } from "@/data/portfolio";

export function Contact() {
  return (
    <Section id="contact" label={contact.label} headline={contact.headline}>
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">{contact.text}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-4">
            {contact.buttons.map((button) =>
              button.href ? (
                <a
                  key={button.label}
                  href={button.href}
                  target={button.href.startsWith("http") ? "_blank" : undefined}
                  rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="label-mono !text-[0.7rem] rounded-full border border-border px-6 py-3 transition-colors hover:border-accent hover:text-accent"
                >
                  {button.label}
                </a>
              ) : (
                <span
                  key={button.label}
                  aria-disabled="true"
                  title="Link not set yet"
                  className="label-mono !text-[0.7rem] cursor-not-allowed rounded-full border border-border px-6 py-3 text-muted-foreground opacity-50"
                >
                  {button.label}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
