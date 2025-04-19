import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'; 

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-icons.css';
import './assets/css/magnific-popup.css';
import './assets/css/style1.css';

function App() {
  const clients = [
    { name: 'Company 1', logo: 'images/soon.png' },
    { name: 'Company 2', logo: 'images/soon.png' },
    { name: 'Company 3', logo: 'images/soon.png' },
    { name: 'Company 4', logo: 'images/soon.png' },
    { name: 'Company 5', logo: 'images/soon.png' },
  ];
  const services = [
    {
      title: 'Websites',
      price: '$$$$',
      description: 'FrontEnd Script',
      link: '#',
      iconClass: 'bi-globe',
      isFeatured: false,
    },
    {
      title: 'SEO Optimization',
      price: '$$$$',
      description: 'Make your website first on any search engine',
      link: '#',
      iconClass: 'bi-phone',
      isFeatured: false,
    },
    {
      title: 'soon',
      price: '$$$$',
      description: '"SOON"',
      link: '#',
      iconClass: 'bi-google',
      isFeatured: true,
    },
  ];
  const projects = [
    {
      title: '"SOON"',
      category: 'SEO OPTIMIZATION',
      image: 'images/soon.png',
    },
    {
      title: '"SOON"',
      category: 'SEO OPTIMIZATION',
      image: 'images/soon.png',
    },
    {
      title: '"SOON"',
      category: 'Website',
      image: 'images/soon.png',
    },
  ];
 
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tuqa-saeed-2004a0312',
      icon: 'images/linkedIn icon.png',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tuqa-saeed',
      icon: 'images/github icon.png',
    },
  ];

  const servicess = ['Websites', 'SEO'];

  const contactInfo = {
    about: 'A professional web developer. Get in touch with me.',
    email: 'tuqasaeed3@gmail.com',
    phone: '078-------',
  };


  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedSection
        name="Tuqa Saeed"
        birthday="March "
        phone="0782303931"
        email="tuqasaeed3@gmail.com"
        yearsExperience="+3"
        happyCustomers="100"
        projectsFinished="10"
        digitalAwards="Soon"
      />
      <ClientsSection clients={clients} />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects} />
      <ContactSection
        socialLinks={socialLinks}
        servicess={servicess}
        contactInfo={contactInfo} 
      />
      <Footer />
    </div>

  );
}

export default App;
