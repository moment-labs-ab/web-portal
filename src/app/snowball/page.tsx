import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { Suspense } from "react";

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      {/* <Logos /> */}
      <Container>
        {/* <Benefits /> */}

        {/*<Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />*/}
        
        <CTA />
      </Container>
    </Suspense>
  );
};

export default HomePage;
