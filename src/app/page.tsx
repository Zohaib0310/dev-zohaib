"use client";

import Header from "./components/Header";
import WorkEthics from "./components/WorkEthics";
import Development from "./components/Development";
import Reviews from "./components/Reviews";
import "swiper/css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import {
  contactAddressData,
  contributions,
  developmentData,
  ethicsItemData,
  portfolio,
  reviews,
  SkillsItemsData,
} from "./utils/data";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/General/ScrollIndicator";
import dynamic from "next/dynamic";
import Skills from "./components/Skills";
import Help from "./components/Help";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Header />
      <Help />
      {/*<LatestProjects /> */}
      <WorkEthics data={ethicsItemData} contributions={contributions} />
      <Portfolio
        data={portfolio}
        title="My Amazing Works"
        subtitle="Projects"
        description="My work is my passion and I love to work with great people and teams."
      />
      <Skills
        data={SkillsItemsData}
        subtitle="Work Experience"
        title="Companies I have worked with"
        description="I have worked with some amazing companies and teams."
      />
      <Development data={developmentData} />
      <Reviews
        data={reviews}
        title=" Recommendations        "
        subtitle="Testimonials"
        description="What my clients say about me"
      />

      <Contact data={contactAddressData} />

      <Footer />
      <div className="fixed -right-8 lg:right-0 md:right-0 xl:right-0 bottom-24 rotate-90 cursor-pointer z-40">
        <ScrollIndicator />
      </div>
      <AnimatedCursor
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
    </div>
  );
}
