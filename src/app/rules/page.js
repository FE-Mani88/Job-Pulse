import Header from "@/components/modules/Header"
import Footer from "@/components/modules/Footer"
import RulesContent from "@/components/templates/Rules/RulesContent"

export default function LandingPageDynamic() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Header />

      <RulesContent />

      <Footer />
    </div>
  )
}
