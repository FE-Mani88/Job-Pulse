import React from "react"
import Header from "@/components/modules/Header"
import Footer from "@/components/modules/Footer"
import HeroSection from "@/components/templates/Home/HeroSection"
import StatsSection from "@/components/templates/Home/StatsSection"
import OurMissions from "@/components/templates/Home/OurMissions"
import OurValues from "@/components/templates/Home/OurValues"
import Timeline from "@/components/templates/Home/Timeline"
import OurTeam from "@/components/templates/Home/OurTeam"
import OurCulture from "@/components/templates/Home/OurCulture"
import JoinUs from "@/components/templates/Home/JoinUs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">

      <Header />

      <HeroSection />

      <StatsSection />

      <OurMissions />

      <OurValues />

      <Timeline />

      <OurTeam />

      <OurCulture />

      <JoinUs />

      <Footer />

    </div>
  )
}
