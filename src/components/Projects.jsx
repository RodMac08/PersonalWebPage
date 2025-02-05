import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="Projects" className="min-h-screen flex flex-col items-center justify-center text-primary p-4 md:p-8">
      <div className="w-full max-w-4xl text-center">
        <h1 data-aos="fade-up" className="text-5xl md:text-6xl lg:text-8xl font-bold font-monts mb-6">Projects</h1>
        
        <div className="mb-8">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-monts mb-4">Horizon Health</h2>
          <p data-aos="fade-up" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            Web project, for recommendations and monitoring of habits, focused mainly on emotional well-being, where tools such as TypeScript, Angular, Node.js, Express, and MySQL are used. In this school project (for now), we work under the SCRUM methodology (Participating in the role of SCRUM Master), and i'm been in the back-end section.
          </p>
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-2 gap-8">
          <div data-aos="slide-right" className="text-center">
          <p data-aos="fade-up" className="font-monts text-base md:text-lg flex items-center py-2 justify-center gap-2">
          Link of the repository (back-end):
          </p>
          <div data-aos="fade-up" className="flex justify-center">
            <a
              href="https://github.com/RodMac08/horizonhealth-be.git"
              className="hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={24} /></a>
          </div>
          </div>

          <div data-aos="slide-left" className="text-center">
          <p data-aos="fade-up" className="font-monts text-base md:text-lg flex items-center py-2 justify-center gap-2">
          Link of the repository (front-end):
          </p>
          <div data-aos="fade-up" className="flex justify-center">
            <a
              href="https://github.com/ferth23/horizonhealth-fe.git"
              className="hover:scale-110 transition-all duration-300"
            ><FaGithub size={24} />
            </a>
          </div>
          </div>
          </div>
          <div data-aos="fade-left" className="flex flex-row flex-wrap justify-center mt-8 gap-4"> 
            <img src="HorizonHealth.png" alt="Descripción de la imagen 1" className="rounded-lg w-64 h-46 md:w-72 md:h-27 object-cover shadow-custom" />
          </div>
        </div>

        <div className="mb-8">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-monts mb-4">Web Project</h2>
          <p data-aos="fade-up" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            Web project (front-end and back-end), simulation of a cinema web page, using JavaScript, HTML, CSS along with the PayPal API.
          </p>
          <p data-aos="fade-up" className="font-monts text-base md:text-lg flex items-center py-2 justify-center gap-2">
          Link of the repository:
          </p>
          <div data-aos="fade-up" className="flex justify-center">
            <a
              href="https://github.com/RodMac08/Pagina-web.git"
              className="hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <div data-aos="fade-right" className="flex flex-row flex-wrap justify-center mt-8 gap-4"> 
            <img src="logos.jpg" alt="Descripción de la imagen 1" className="rounded-lg w-64 h-46 md:w-72 md:h-27 object-cover shadow-custom" />
          </div>
        </div>

        <div className="mb-8">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-monts mb-4">Ocean Med</h2>
          <p data-aos="fade-up" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            Kotlin application for Android used to record medical data such as blood pressure, weight, height, among other data, using a REST API with PHP.
          </p>
          <p data-aos="fade-up" className="font-monts text-base md:text-lg flex py-2 items-center justify-center gap-2">
          Link of the repository:
          </p>
          <div data-aos="fade-up" className="flex justify-center">
            <a
              href="https://github.com/Humberto-MS/OceanMed.git"
              className="hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <div data-aos="fade-left" className="flex flex-row flex-wrap justify-center mt-8 gap-4"> 
            <img src="OceanMed.jpg" alt="Descripción de la imagen 1" className="rounded-lg w-64 h-46 md:w-50 md:h-50 object-cover shadow-custom" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;