import { useState } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectPreviewModal } from "./ProjectPreviewModal";
import { projects, type ProjectStatus } from "@/data/portfolio";

function StatusBadge({ status }: { status: ProjectStatus }) {
  if (!status) return null;
  return (
    <span className="label-mono !text-[0.6rem] inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-foreground">
      <span
        aria-hidden="true"
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--color-accent)" }}
      />
      {status.toUpperCase()}
    </span>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="label-mono !text-[0.65rem] inline-flex items-center gap-2 transition-colors hover:text-accent"
    >
      <span aria-hidden="true" className="text-accent">↗</span>
      {label}
    </a>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    category: string;
    description: string;
    screenshots: { src: string; alt: string }[];
  } | null>(null);

  const openPreview = (project: typeof projects.items[0]) => {
    setSelectedProject({
      title: project.title,
      category: project.category,
      description: project.description,
      screenshots: project.screenshots,
    });
  };

  const closePreview = () => {
    setSelectedProject(null);
  };

  return (
    <Section id="projects" label={projects.label} headline={projects.headline}>
      <div className="space-y-16 md:space-y-24">
        {projects.items.map((project, index) => (
          <Reveal key={project.id} as="article">
            <div
              className={`grid items-stretch gap-8 md:grid-cols-2 md:gap-12 ${
                index % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Preview panel with screenshot */}
              <div className="md:[direction:ltr]">
                <button
                  type="button"
                  onClick={() => openPreview(project)}
                  className="w-full text-left group"
                >
                  <div className="bg-grid relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent/60 hover:shadow-lg">
                    {project.screenshots.length > 0 ? (
                      <>
                        <img
                          src={project.screenshots[0].src}
                          alt={project.screenshots[0].alt}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="relative p-6 flex flex-col justify-between h-full">
                          <div />
                          <div>
                            <p className="label-mono !text-white/90">{project.number}</p>
                            <p className="label-mono !text-[0.6rem] !text-white/80 mt-2">
                              {project.screenshots.length} SCREENSHOT{project.screenshots.length > 1 ? "S" : ""}
                            </p>
                            <p className="label-mono !text-[0.6rem] !text-accent mt-1">
                              CLICK TO PREVIEW
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="label-mono !text-muted-foreground">{project.number}</p>
                        <div className="flex flex-col gap-1.5">
                          {[68, 88, 52].map((width, i) => (
                            <div
                              key={i}
                              aria-hidden="true"
                              className="h-2 rounded-full"
                              style={{
                                width: `${width}%`,
                                background:
                                  i === 0
                                    ? "color-mix(in oklab, var(--color-accent) 30%, transparent)"
                                    : "var(--color-border)",
                              }}
                            />
                          ))}
                        </div>
                        <p className="label-mono !text-[0.6rem] !text-muted-foreground">
                          PREVIEW PENDING
                        </p>
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center md:[direction:ltr]">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="label-mono">{project.category}</p>
                  <StatusBadge status={project.status} />
                </div>

                <h3 className="display-md mt-4 text-2xl sm:text-3xl md:text-4xl">
                  {project.title}
                </h3>

                <p className="label-mono !text-muted-foreground mt-3">
                  {project.organization}
                </p>

                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* EDITABLE narrative fields — rendered only when filled in */}
                {project.overview && (
                  <div className="mt-6">
                    <p className="label-mono !text-muted-foreground !text-[0.6rem]">PROJECT OVERVIEW</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.overview}</p>
                  </div>
                )}
                {project.problemStatement && (
                  <div className="mt-5">
                    <p className="label-mono !text-muted-foreground !text-[0.6rem]">PROBLEM STATEMENT</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.problemStatement}</p>
                  </div>
                )}
                {project.proposedSolution && (
                  <div className="mt-5">
                    <p className="label-mono !text-muted-foreground !text-[0.6rem]">PROPOSED SOLUTION</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.proposedSolution}</p>
                  </div>
                )}

                <div className="mt-7">
                  <p className="label-mono !text-muted-foreground !text-[0.6rem]">KEY FEATURES</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.techStack.length > 0 && (
                  <div className="mt-6">
                    <p className="label-mono !text-muted-foreground !text-[0.6rem]">TECHNOLOGY STACK</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full px-3.5 py-1.5 font-mono text-xs"
                          style={{ background: "var(--color-secondary)", color: "var(--color-accent-foreground)" }}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(project.liveDemoUrl || project.githubUrl) && (
                  <div className="mt-7 flex gap-6 border-t border-border pt-5">
                    <ProjectLink href={project.liveDemoUrl} label="LIVE DEMO" />
                    <ProjectLink href={project.githubUrl} label="GITHUB REPOSITORY" />
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Project Preview Modal */}
      <ProjectPreviewModal
        isOpen={selectedProject !== null}
        onClose={closePreview}
        project={selectedProject}
      />
    </Section>
  );
}
