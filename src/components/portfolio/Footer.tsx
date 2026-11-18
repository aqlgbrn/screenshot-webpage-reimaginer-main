import { useEffect, useState } from "react";
import { footer } from "@/data/portfolio";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="hairline-t">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <p className="display-xl text-[clamp(1.6rem,5vw,3.5rem)]">{footer.name}</p>

        <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="label-mono !text-muted-foreground">{footer.closingStatement}</p>
            <p className="label-mono !text-muted-foreground !text-[0.6rem] mt-2">{footer.location}</p>
          </div>

          <div className="flex items-center gap-6">
            <p className="label-mono !text-muted-foreground !text-[0.6rem]">
              {year ? `© ${year}` : ""}
            </p>
            <a
              href="#top"
              className="label-mono !text-[0.65rem] group inline-flex items-center gap-2 transition-colors hover:text-accent"
              aria-label="Back to top"
            >
              BACK TO TOP
              <span aria-hidden="true" className="inline-block transition-transform group-hover:-translate-y-0.5">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
