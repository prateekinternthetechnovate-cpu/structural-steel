import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Stack } from 'react-bootstrap';
import Banner from '@/components/Banner/Banner';
import Stat from '@/components/Stat/Stat';
import AboutUs from '@/components/AboutUs/AboutUs';
import Certificate from '@/components/Certificate/Certificate';
import Services from '@/components/Services/Services';
import Delivery from '@/components/Delivery/Delivery';
import Choose from '@/components/Choose/Choose';
import Facilty from '@/components/Facility/Facility';
import Work from '@/components/Work/Work';
import Projects from '@/components/Projects/Projects';
import Clients from '@/components/Clients/Clients';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import Contact from '@/components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Banner />
      <Stat />
      <AboutUs />
      <Certificate />
      <Services />
      <Delivery />
      <Choose />
      <Facilty />
      <Work />
      <Projects />
      <Clients />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home

