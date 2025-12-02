import AboutSection from '@/components/About';
import Hero from '@/components/Hero'
import React from 'react'
import ProjectsSection from './Projects';
import InfiniteSkills from '@/components/InfiniteSkills';

import Footer from './Footer';
import ContactSection from '@/components/ContactSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <InfiniteSkills/>
      <ProjectsSection />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home;