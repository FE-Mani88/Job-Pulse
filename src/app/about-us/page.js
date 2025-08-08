import Header from "@/components/modules/Header"
import Footer from "@/components/modules/Footer"
import JoinUs from "@/components/templates/Home/JoinUs"
import Hero from "@/components/templates/AboutUs/Hero"
import Features from "@/components/templates/AboutUs/Features"
import Testimonials from "@/components/templates/AboutUs/Testimonials"
import Pricing from "@/components/templates/AboutUs/Pricing"

export default function LandingPageDynamic() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">

      <Header />

      <Hero />

      <Features />

      <Testimonials />

      <Pricing />

      <JoinUs />

      <Footer />

    </div>
  )
}
