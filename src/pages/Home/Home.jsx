import React from "react";
import Hero            from "../../components/Hero/Hero";
import Stats           from "../../components/Stats/Stats";
import Services        from "../../components/Services/Services";
import WhyUs           from "../../components/WhyUs/WhyUs";
import Gallery         from "../../components/Gallery/Gallery";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import Reviews         from "../../components/Reviews/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Gallery />
      <AppointmentForm />
      <Reviews />
    </main>
  );
}
