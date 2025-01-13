import React, { useEffect } from "react";
import AOS from 'aos';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import 'aos/dist/aos.css';
import { RiBracesFill } from "react-icons/ri";

const Footer = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
  return (
    <footer className="bg-primary text-secundary py-8 font-monts">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold flex items-center justify-left text-secundary">
          <RiBracesFill className="text-secundary" /> RMR
        </h1>
          <p className="text-sm">𝐾𝑒𝑒𝑝 𝑝𝑢𝑠ℎ𝑖𝑛𝑔</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <a href="#Hero"onClick={(e) => scrollToSection(e, 'Hero')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">About me</a>
          <a href="#Projects" onClick={(e) => scrollToSection(e, 'Projects')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">Experiences</a>
          <a href="#Experiences" onClick={(e) => scrollToSection(e, 'Experiences')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">Projects</a>
          <a href="#SoftSkills" onClick={(e) => scrollToSection(e, 'SoftSkills')}className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">Soft skills & Hobbies</a>
          <a href="#Technical" onClick={(e) => scrollToSection(e, 'Technical')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">Technical skills</a>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/rodrigo.maciasruiz.7" className="hover:text-secundary"><FaFacebook size={24} /></a>
          <a href="https://www.instagram.com/rodrigomaciasruiz/" className="hover:text-secundary"><FaInstagram size={24} /></a>
          <a href="https://www.linkedin.com/in/rodrigo-macias-ruiz-82746630a" className="hover:text-secundary"><FaLinkedin size={24} /></a>
          <a href="https://github.com/RodMac08" className="hover:text-secundary"><FaGithub size={24} /></a>

          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
