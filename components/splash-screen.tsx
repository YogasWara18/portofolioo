"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function SplashScreen() {
  useEffect(() => {
    const tl = gsap.timeline()

    // Animate curtain left and right opening
    tl.to(
      ".curtain-left",
      {
        x: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      },
      0,
    )
      .to(
        ".curtain-right",
        {
          x: "100%",
          duration: 1.2,
          ease: "power4.inOut",
        },
        0,
      )
      // Fade out the splash screen after curtains open
      .to(
        ".splash-screen",
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.6,
          ease: "power3.out",
        },
        0.8,
      )

    // Add scroll to body after animation completes
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="splash-screen fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Logo/Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <div className="text-6xl md:text-8xl font-bold bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
          {"{"}
        </div>
        <p className="text-lg md:text-xl text-foreground/60 font-light tracking-widest uppercase">Portfolio</p>
      </div>

      {/* Left Curtain */}
      <div className="curtain-left fixed left-0 top-0 h-full w-1/2 bg-background z-40" />

      {/* Right Curtain */}
      <div className="curtain-right fixed right-0 top-0 h-full w-1/2 bg-background z-40" />
    </div>
  )
}
