import { useEffect, useState } from "react";
import { profile, navItems } from "@/data/portfolio";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4">
      <div
        className={`flex items-center justify-between gap-6 rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/50"
            : "bg-white/70 backdrop-blur-md shadow-md shadow-black/5 border border-white/50"
        }`}
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        {/* Left: Logo */}
        <a
          href="#top"
          className="label-mono !text-[0.8rem] text-foreground hover:text-accent transition-colors"
        >
          {profile.logoText}
        </a>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.target}
              className="label-mono !text-[0.7rem] text-foreground/80 hover:text-accent transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>

        {/* Right: Dark Mode Toggle & Contact Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="label-mono !text-[0.65rem] text-foreground/80 hover:text-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <a
            href="#contact"
            className="label-mono !text-[0.65rem] rounded-full px-5 py-2.5 bg-gray-100/80 text-foreground hover:bg-gray-200/80 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="label-mono !text-[0.65rem] md:hidden text-foreground/80 hover:text-accent transition-colors"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full max-w-[300px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl shadow-black/10 border border-white/50 overflow-hidden md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.target}
                  className="label-mono !text-[0.7rem] block px-6 py-3 text-foreground/80 hover:text-accent hover:bg-gray-50/50 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="border-t border-gray-200/50 mt-2 pt-2">
              <div className="flex items-center justify-between px-6 py-3">
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="label-mono !text-[0.65rem] text-foreground/80 hover:text-accent transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? "☀️ Light" : "🌙 Dark"}
                </button>
                <a
                  href="#contact"
                  className="label-mono !text-[0.65rem] rounded-full px-4 py-2 bg-gray-100/80 text-foreground hover:bg-gray-200/80 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
