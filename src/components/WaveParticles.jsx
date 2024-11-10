"use client";

import { cn } from "../../lib/utils";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const GradientCircle = ({ className, style }) => (
  <div className={cn("absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", className)} style={style} />
);

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(0, 0, 20)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "50, 50, 150",
  thirdColor = "70, 100, 180",
  fourthColor = "100, 50, 100",
  fifthColor = "60, 60, 150",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName
}) => {
  const interactiveRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const colors = { gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor };
    Object.entries(colors).forEach(([key, value]) => {
      document.body.style.setProperty(`--${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`, value);
    });
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);

    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }
  }, []);

  const interactiveStyle = useMemo(() => ({
    transform: `translate(${Math.round(mousePosition.x)}px, ${Math.round(mousePosition.y)}px)`
  }), [mousePosition]);

  const gradientCircles = useMemo(() => [
    { color: "first-color", origin: "center center", animate: "first", opacity: 100 },
    { color: "second-color", origin: "calc(50% - 400px)", animate: "second", opacity: 100 },
    { color: "third-color", origin: "calc(50% + 400px)", animate: "third", opacity: 100 },
    { color: "fourth-color", origin: "calc(50% - 200px)", animate: "fourth", opacity: 70 },
    { color: "fifth-color", origin: "calc(50% - 800px) calc(50% + 800px)", animate: "fifth", opacity: 100 },
  ].map((circle, index) => (
    <GradientCircle
      key={index}
      className={cn(
        `[background:radial-gradient(circle_at_center,_rgba(var(--${circle.color}),_0.8)_0,_rgba(var(--${circle.color}),_0)_50%)_no-repeat]`,
        `[mix-blend-mode:var(--blending-value)]`,
        `[transform-origin:${circle.origin}]`,
        `animate-${circle.animate}`,
        `opacity-${circle.opacity}`
      )}
    />
  )), []);

  return (
    <div className={cn(
      "h-full w-full fixed overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
      containerClassName
    )}>
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={className}>{children}</div>
      <div className={cn(
        "gradients-container h-full w-full blur-lg",
        isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
      )}>
        {gradientCircles}
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2",
              "opacity-70"
            )}
            style={interactiveStyle}
          />
        )}
      </div>
    </div>
  );
};