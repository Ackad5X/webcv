import { useEffect, useState } from "react";

export function GridBackground() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full stroke-foreground/[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="base-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#base-grid)" />
      </svg>

      {/* Ultra-subtle Ambient Spotlight Glow */}
      {mousePos && (
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-primary) 0%, transparent 70%)`,
            opacity: 0.035,
          }}
        />
      )}

      {/* Very gentle grid accent around cursor */}
      {mousePos && (
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-out"
          style={{
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          }}
        >
          <svg className="h-full w-full stroke-primary/15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="active-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#active-grid)" />
          </svg>
        </div>
      )}
    </div>
  );
}
