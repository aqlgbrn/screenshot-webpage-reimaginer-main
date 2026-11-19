import { useEffect, useState } from "react";

interface Screenshot {
  src: string;
  alt: string;
}

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    screenshots: Screenshot[];
  } | null;
}

export function ProjectPreviewModal({
  isOpen,
  onClose,
  project,
}: ProjectPreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const screenshots = project.screenshots;
  const currentScreenshot = screenshots[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-6">
          <div className="flex-1">
            <p className="label-mono !text-[0.65rem] !text-accent mb-1">
              {project.category}
            </p>
            <h3 className="display-md text-xl sm:text-2xl">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="label-mono !text-[0.65rem] rounded-full border border-border px-4 py-2 transition-colors hover:border-accent hover:text-accent"
          >
            CLOSE
          </button>
        </div>

        {/* Main Screenshot */}
        <div className="relative bg-gray-50">
          <div className="aspect-video w-full flex items-center justify-center p-4 md:p-8">
            <img
              src={currentScreenshot.src}
              alt={currentScreenshot.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Navigation Buttons */}
          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 label-mono !text-[0.65rem] rounded-full border border-border bg-white/90 backdrop-blur-sm px-4 py-3 transition-colors hover:border-accent hover:text-accent shadow-lg"
              >
                ← PREV
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 label-mono !text-[0.65rem] rounded-full border border-border bg-white/90 backdrop-blur-sm px-4 py-3 transition-colors hover:border-accent hover:text-accent shadow-lg"
              >
                NEXT →
              </button>
            </>
          )}

          {/* Screenshot Counter */}
          <div className="absolute top-4 right-4 label-mono !text-[0.6rem] !text-muted-foreground bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border">
            {currentIndex + 1} / {screenshots.length}
          </div>

          {/* Screenshot Label */}
          <div className="absolute bottom-4 left-4 label-mono !text-[0.6rem] !text-accent bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border">
            {currentScreenshot.alt}
          </div>
        </div>

        {/* Thumbnails */}
        {screenshots.length > 1 && (
          <div className="border-t border-border p-4 bg-gray-50">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-accent scale-105 shadow-md"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-accent/20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="border-t border-border p-6">
          <p className="label-mono !text-muted-foreground !text-[0.6rem] mb-2">
            PROJECT DESCRIPTION
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
