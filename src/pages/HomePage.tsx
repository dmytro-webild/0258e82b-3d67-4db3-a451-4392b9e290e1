import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="HVAC ENGINEERING EXCELLENCE"
      title="COMFORT,\nENGINEERED."
      description="High-performance heating and cooling systems designed, installed, and maintained for the way you live."
      primaryButton={{
        text: "GET A FREE ESTIMATE",
        href: "#contact",
      }}
      secondaryButton={{
        text: "EXPLORE SERVICES",
        href: "#features",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694017.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/gray-concrete-stairs-inside-building_250224-97.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-showing-tablet_23-2147809527.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/home-plant-vase-decoration-composition_23-2149090621.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-grey-concrete-building-representing-modern-architecture_181624-4719.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-modern-futuristic-work-space-with-furniture_23-2151797641.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-tunnel-abstract_23-2151977844.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-edge-modern-building_23-2148287782.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-industry-40-concept_23-2149408301.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/building-structure_1127-2019.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wireless-router-with-copy-space_23-2148295822.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-light-lamp-bulb-decoration-interior-room_74190-7930.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Precision Comfort. Built for Every Season."
      primaryButton={{
        text: "Our Methodology",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Our Expertise"
      title="Integrated Climate Solutions"
      description="Comprehensive climate control delivered with unmatched precision."
      items={[
        {
          tag: "Install",
          title: "AC Installation",
          description: "Seamless installation of high-efficiency systems.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-portrait-young-woman-fitness-instructor-mindfulness-coach-sitting-floor-home_1258-200338.jpg",
        },
        {
          tag: "Repair",
          title: "Heating Repair",
          description: "Rapid, effective resolution to complex heating issues.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-sitting-near-heater-home_23-2149335095.jpg",
        },
        {
          tag: "Air",
          title: "Air Quality",
          description: "Pioneering technology for pure home environments.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/asian-man-with-cancer-outside-side-view_23-2149870334.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesImageBento
      tag="Bento Grid"
      title="Core Offerings"
      description="A refined collection of high-end HVAC services."
      items={[
        {
          title: "AC Install",
          description: "Modern cooling.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-performing-artistic-dance-rooftop-with-blue-sky_23-2149144406.jpg",
        },
        {
          title: "AC Repair",
          description: "Rapid restoration.",
          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-wearing-white-uniform-stand-holding-wrench_1150-16596.jpg",
        },
        {
          title: "Heating Install",
          description: "Thermal excellence.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-autonomous-heating-system-boiler-room_169016-51414.jpg",
        },
        {
          title: "Heating Repair",
          description: "Quick fix.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-helmets-work_23-2149366667.jpg",
        },
        {
          title: "Maintenance",
          description: "Longevity focused.",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-kitchen-interior-design_23-2151821342.jpg",
        },
        {
          title: "Indoor Air",
          description: "Breathe pure.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-turning-off-thermostat-energy-crisis_23-2150061798.jpg",
        },
        {
          title: "Commercial",
          description: "Scalable systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250243.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Our Impact"
      title="Performance at Scale"
      description="Quantifiable excellence across every project we touch."
      metrics={[
        {
          value: "15k+",
          title: "Systems Installed",
          description: "Precision performance across thousands of homes.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-working-blue-print-while-her-colleague-discussing-something-background_23-2148187235.jpg",
        },
        {
          value: "99.2%",
          title: "Efficiency Rating",
          description: "Optimized power consumption for longevity.",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-dashboard_23-2151957114.jpg",
        },
        {
          value: "24/7",
          title: "Response Time",
          description: "Always-on service for your critical needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/builder-man-wearing-construction-uniform-security-helmet-talking-mobile-phone-smiling-showing-thumb-up-camera-standing-isolated-orange-wall_141793-14177.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Verified Quality"
      title="Trusted by Professionals"
      description="Client success is our performance indicator."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "Architect",
          quote: "Northstar delivers engineering-level precision in residential heating.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-editor-designer-retouches-photos-dual-monitors-desktop_482257-126858.jpg",
        },
        {
          name: "James Vance",
          role: "Commercial Property Manager",
          quote: "Reliability redefined. Their maintenance is second to none.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-angry-expression_1194-1680.jpg",
        },
        {
          name: "David Sterling",
          role: "Luxury Homeowner",
          quote: "The quietest system I've ever owned. Professional grade.",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-young-woman-posing-with-suitcase-standing-hotel-hallway_23-2148033329.jpg",
        },
        {
          name: "Elena Ross",
          role: "Property Owner",
          quote: "Exceptional communication and clean, professional installs.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-business-woman-with-folded-hands-against-white-wall-toothy-smile-crossed-arms_231208-10801.jpg",
        },
        {
          name: "Marcus Thorne",
          role: "Interior Designer",
          quote: "They integrate systems into spaces without disrupting design.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-photographer-posing_23-2148019162.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Support"
      title="Common Inquiries"
      description="Expert answers to maintain your high-performance home."
      categories={[
        {
          name: "Maintenance",
          items: [
            {
              question: "How often?",
              answer: "Twice per year.",
            },
            {
              question: "Cost?",
              answer: "Depends on system.",
            },
          ],
        },
        {
          name: "Installation",
          items: [
            {
              question: "Timeframe?",
              answer: "1-2 days.",
            },
            {
              question: "Warranty?",
              answer: "Full factory warranty.",
            },
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Emergency Service"
      text="Ready to experience precision comfort?"
      primaryButton={{
        text: "Schedule Estimate",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Support",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
