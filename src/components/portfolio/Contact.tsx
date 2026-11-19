import { useState } from "react";
import { Send, Mail, Copy, Check, Download } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { contact } from "@/data/portfolio";

const socialLogos = {
  linkedin: "/Logo%20Medsos/LinkedIn.png",
  instagram: "/Logo%20Medsos/Instagram.png",
  github: "/Logo%20Medsos/Github.png",
} as const;

const socialCardClass =
  "group flex h-28 min-w-0 flex-col items-center justify-center gap-2 rounded-[25px] border border-[#1E293B]/60 bg-[#EAF3FB] px-3 py-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:bg-[#DFEDF9] hover:shadow-[0_16px_34px_-16px_rgba(14,116,180,0.4)]";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!contact.email) return;
    try {
      await navigator.clipboard.writeText(contact.email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = contact.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" label={contact.label} headline={contact.headline}>
      <Reveal>
        <div className="rounded-[44px] border border-border bg-[#EFF6FC] p-8 shadow-[0_30px_70px_-30px_rgba(14,116,180,0.25)] md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT — intro, description, email */}
            <div className="flex flex-col">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white text-accent shadow-sm">
                <Send className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="display-md mt-6 text-3xl text-[#1E293B] sm:text-4xl">
                {contact.title}
              </h3>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#475569] md:text-lg">
                {contact.description}
              </p>

              {contact.email && (
                <div className="mt-8 flex w-full max-w-md items-center gap-3 rounded-full border border-border bg-white py-2 pl-5 pr-2 shadow-sm">
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-[#1E293B]">
                    {contact.email}
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 label-mono !text-[0.6rem] transition-all duration-300 ${
                      copied
                        ? "bg-accent text-white"
                        : "border border-border text-[#475569] hover:border-accent hover:text-accent"
                    }`}
                    aria-label={copied ? "Email copied" : "Copy email"}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        COPIED
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        COPY
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT — CV download + socials */}
            <div className="flex flex-col justify-center gap-6">
              {contact.cvUrl && (
                <a
                  href={contact.cvUrl}
                  download
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-18px_rgba(14,116,180,0.65)]"
                  style={{
                    background: "linear-gradient(120deg, #38BDF8 0%, #2563EB 100%)",
                  }}
                >
                  <Download
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                  {contact.cvLabel}
                </a>
              )}

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {contact.socials.map((social) => {
                  const logo = socialLogos[social.icon];
                  const content = (
                    <>
                      <span className="flex h-12 w-full items-center justify-center sm:h-14">
                        <img
                          src={logo}
                          alt=""
                          draggable={false}
                          className="h-full w-full max-w-[4.5rem] object-contain transition-transform duration-300 ease-out group-hover:scale-[1.05] sm:max-w-[5.25rem]"
                        />
                      </span>
                      <span className="text-center text-[0.7rem] font-medium leading-none text-[#1E293B] transition-colors duration-300 group-hover:text-accent sm:text-xs">
                        {social.label}
                      </span>
                    </>
                  );

                  if (!social.href) {
                    return (
                      <div key={social.label} className={socialCardClass}>
                        {content}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={socialCardClass}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
