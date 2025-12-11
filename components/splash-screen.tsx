"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Image from "next/image"

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
    <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={250}
          height={250}
          className="drop-shadow-lg"
        />
      </div>


      {/* Left Curtain */}
      <div className="curtain-left fixed left-0 top-0 h-full w-1/2 bg-background z-40" />

      {/* Right Curtain */}
      <div className="curtain-right fixed right-0 top-0 h-full w-1/2 bg-background z-40" />
    </div>
  )
}
