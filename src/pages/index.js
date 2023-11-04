import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Syntec for you"
        title="Premium server management solutions"
        text="Syntec is a premier server management company that provides world-class services and support for Linux and Windows servers. We have a state-of-the-art infrastructure and a dedicated team of experts who can handle any server issue with speed and efficiency. Whether you need installation, maintenance, troubleshooting, or security, we have the right solution for you."
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="More to give than take"
        title="What to expect from Syntec and its team"
        text="&#8226;A high level of professionalism and expertise in managing Linux and Windows servers.
        &#8226;Exclusive New Improved Dashboard for all your servers and its settings                   
        &#8226;A wide range of services and support, from installation and commissioning to maintenance and troubleshooting
        &#8226;A flexible and customized approach, tailored to your specific needs and budget
        &#8226;A state-of-the-art infrastructure and a dedicated team of experts, available 24/7/365
        &#8226;A proven track record of delivering high-quality results and customer satisfaction
        &#8226;A partnership with leading cloud platforms, such as AWS, Azure, and GCP, to provide you with the best of both worlds"
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="contact"
        subtitle="Contact US"
        title="Feel Free to contact"
        text="For any Queries or collaborations or Problems with the server Contact us at below Email. We will be as quick as Flash."
        btnText="syntec.co@gmail.com"
      />
      <Footer />
    </>
  );
};
