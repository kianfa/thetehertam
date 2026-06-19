"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type ScrollRevealProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode
  delay?: "none" | "sm" | "md" | "lg"
}

const delayClass = {
  none: "delay-0",
  sm: "delay-100",
  md: "delay-200",
  lg: "delay-300",
}

export function ScrollReveal({
  children,
  className,
  delay = "none",
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transform-gpu transition-all duration-700 ease-out will-change-[opacity,transform,filter] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0",
        delayClass[delay],
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-8 opacity-0 blur-[2px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
