"use client";

import React, { useContext, useEffect } from "react";
import { ThemeColorContext } from "@/contexts/user-theme";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { colorMap, textColorMap } from "@/utils/constants";
import Link from "next/link";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function HeroSection() {
  const { color } = useContext(ThemeColorContext);

  useEffect(() => {
    const tour = driver({
      showProgress: true,
      progressText: "Step {{current}} from {{total}}",
      steps: [
        {
          element: "#read-rules-btn",
          popover: {
            title: "Our Rules",
            description: "For knowing Jop Pulse, Click Here",
            side: "bottom",
          },
        },
        {
          element: "#story-btn",
          popover: {
            title: "Our Story",
            description: "For Knowing Us, Click Here",
            side: "bottom",
          },
        },
      ],
    });

    tour.drive();
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/illustration12.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/90 to-white/85 dark:from-black/95 dark:via-black/90 dark:to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 via-transparent to-blue-50/20 dark:from-emerald-950/20 dark:via-transparent dark:to-blue-950/20" />
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className={`${colorMap[color]} dark:${colorMap[color]} text-white shadow-sm`}
          >
            About Job Pulse
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
            We're building the future of
            <span className={`${textColorMap[color]}`}>
              {" "}
              workflow automation
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Founded in 2020, Job Pulse has grown from a simple idea to a platform
            trusted by over 50,000 teams worldwide. We believe that technology
            should empower people, not replace them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              id="read-rules-btn" // ← برای تور
              size="lg"
              className={`${colorMap[color]} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Link href="/rules">Read our rules</Link>
            </Button>
            <Button
              id="story-btn" // ← برای تور
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-black shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 dark:bg-emerald-800/30 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-xl" />
    </section>
  );
}
