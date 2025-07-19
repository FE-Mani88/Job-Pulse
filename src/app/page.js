import React from "react";
import Header from "@/components/templates/Home/Header";
import Banner from "@/components/templates/Home/Banner";
import LatestPositions from "@/components/templates/Home/LatestPositions";
import OurPlans from "@/components/templates/Home/OurPlans";
import LatestJobSeekers from "@/components/templates/Home/LatestJobSeekers";
import WhyUs from "@/components/templates/Home/WhyUs";
import Footer from "@/components/templates/Home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <LatestPositions />
      <OurPlans />
      <WhyUs />
      <LatestJobSeekers />
      <Footer />
    </>
  );
}
