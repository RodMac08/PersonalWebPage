import React, { useEffect } from "react";
import AOS from 'aos';
import { CiCircleChevRight } from "react-icons/ci";
import 'aos/dist/aos.css';

const TechnicalSkills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="Technical" className="min-h-screen flex flex-col items-center justify-center text-primary p-8">
      <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold font-monts mb-6">Technical skills</h1>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="slide-right" className="text-center">
          <h1 data-aos="fade-right" className="text-4xl md:text-6xl font-bold font-monts mb-6">Programming languages</h1>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-up" className="text-2xl md:text-2xl"/> Java
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-2xl md:text-2xl"/> C++
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-2xl md:text-2xl"/> JavaScript
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-2xl md:text-2xl"/> HTML/CSS
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-2xl md:text-2xl"/> PHP
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-2xl md:text-2xl"/> SQL
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-2xl md:text-2xl"/> Kotlin
          </p>
          <div data-aos="fade-left" className="flex flex-row flex-wrap justify-center py-20 mt-8 gap-4">
          <img src="Lenguajes.jpeg" alt="Descripción de la imagen 1" className="rounded-lg w-64 h-46 md:w-72 md:h-27 object-cover shadow-custom mx-auto" />
          </div>
        </div>
        <div data-aos="slide-left" className="text-center">
          <h1 data-aos="fade-left" className="text-4xl md:text-6xl font-bold font-monts mb-6">Development tools</h1>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> Visual Studio
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> NetBeans
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> Sublime Text
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> SQL Server & MySQL
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> Git & Git Hub
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> XAMPP
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> PostMan
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> Playwrigth
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> Android Studio
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> Xcode
          </p>
          <div data-aos="fade-left" className="flex flex-row flex-wrap justify-center mt-8 gap-4">
          <img src="ToolsLogos.jpeg" alt="Descripción de la imagen 1" className="rounded-lg w-34 h-43 md:w-72 md:h-27 object-cover shadow-custom mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
