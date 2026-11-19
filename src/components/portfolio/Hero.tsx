import { useState, useEffect } from "react";
import { hero } from "@/data/portfolio";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = hero.headline;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 70); // Kecepatan mengetik (ms per karakter)

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <section id="top" className="bg-grid relative overflow-hidden min-h-[100svh] flex items-center">
      {/* Ambient glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-25 blur-[130px]"
        style={{ background: "var(--color-accent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-12%] h-[460px] w-[460px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "oklch(0.7 0.14 210)" }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-32 w-full">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          {/* LEFT COLUMN - Personal Introduction */}
          <div className="flex flex-col justify-center animate-rise" style={{ animationDelay: "60ms" }}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                aria-hidden="true"
                className="animate-pulse-dot inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--color-accent)" }}
              />
              <p className="label-mono !text-[0.65rem] text-accent">
                {hero.statusBadge}
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="display-xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1]">
              <span className="block">
                {typedText.split(" & ")[0]}
                {isTyping && (
                  <span className="inline-block w-0.5 h-[0.8em] bg-accent ml-1 animate-pulse" />
                )}
              </span>
              <span className="block text-accent-glow">
                {typedText.includes(" & ") ? `& ${typedText.split(" & ")[1]}` : ""}
              </span>
            </h1>

            {/* Professional Title */}
            <p className="label-mono !text-muted-foreground mt-6">
              {hero.role}
            </p>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg max-w-xl">
              {hero.description}
            </p>

            {/* Profile Info Card */}
            <div className="mt-8 p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="label-mono !text-[0.6rem] !text-muted-foreground">EDUCATION</span>
                  <span className="text-sm text-foreground">{hero.profileInfo.education}</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <span className="label-mono !text-[0.6rem] !text-muted-foreground">GPA</span>
                  <span className="text-sm text-foreground font-mono">{hero.profileInfo.gpa}</span>
                </div>
                <div className="border-b border-border/50 pb-3">
                  <span className="label-mono !text-[0.6rem] !text-muted-foreground block mb-2">FOCUS AREAS</span>
                  <div className="flex flex-wrap gap-2">
                    {hero.profileInfo.focus.map((focus, i) => (
                      <span
                        key={i}
                        className="text-xs text-foreground px-2 py-1 rounded bg-secondary/50"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="label-mono !text-[0.6rem] !text-muted-foreground">LOCATION</span>
                  <span className="text-sm text-foreground">{hero.profileInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={hero.primaryCtaTarget}
                className="label-mono !text-[0.7rem] rounded-full px-7 py-3.5 transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--color-accent)", color: "var(--color-accent-foreground)" }}
              >
                {hero.primaryCta}
              </a>
              <a
                href={hero.secondaryCtaTarget}
                className="label-mono !text-[0.7rem] rounded-full border border-border px-7 py-3.5 transition-colors hover:border-accent hover:text-accent"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Profile Showcase */}
          <div className="flex justify-center lg:justify-end animate-rise" style={{ animationDelay: "200ms" }}>
            <div className="relative w-full max-w-[320px]">
              {/* Profile Card */}
              <div className="relative rounded-3xl overflow-hidden border border-border bg-white/30 backdrop-blur-xl shadow-2xl shadow-black/10" style={{ aspectRatio: "3/4" }}>
                {/* Ambient glow behind profile */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, var(--color-accent) 0%, transparent 70%)",
                  }}
                />

                {/* Portrait Image */}
                <div className="relative h-full w-full flex items-center justify-center p-5">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border/30 bg-gradient-to-br from-secondary/20 to-accent/10">
                    <img
                      src={hero.portraitImage}
                      alt="M Aqeel Gibran"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute w-full h-0.5 bg-accent/30 animate-[scan_3s_ease-in-out_infinite]" style={{ top: "0%" }} />
                </div>

                {/* Technical Interface Labels */}
                <div className="absolute top-3 left-3">
                  <p className="label-mono !text-[0.5rem] !text-muted-foreground">LATENCY: 12ms</p>
                </div>
                <div className="absolute top-3 right-3">
                  <p className="label-mono !text-[0.5rem] !text-accent">PROFILE_STATUS: ONLINE</p>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="label-mono !text-[0.5rem] !text-muted-foreground">CLASS: INFORMATICS_GRADUATE</p>
                </div>
                <div className="absolute bottom-3 right-3">
                  <p className="label-mono !text-[0.5rem] !text-accent">PROFILE_ACTIVE</p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/50 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent/50 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/50 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/50 rounded-br-xl" />
              </div>

              {/* Floating effect */}
              <div className="absolute -inset-3 rounded-3xl opacity-15 blur-xl" style={{ background: "var(--color-accent)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
