import React, { useEffect } from "react";
import AOS from 'aos';
import { CiCircleChevRight } from "react-icons/ci";
import 'aos/dist/aos.css';

const Experiences = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Duración de la animación en milisegundos
        });
    }, []);
      
    return (
        <section id= "Experiences" className="min-h-screen flex flex-col items-center justify-center text-primary p-4 md:p-8">
            <div className="w-full max-w-4xl text-center">
                <h1 data-aos="fade-up" className="text-4xl md:text-6xl lg:text-8xl font-bold font-monts mb-6">Experiences</h1>
                <h2 data-aos="fade-up" className="text-2xl md:text-3xl lg:text-4xl font-monts mb-4">
                ICPC PROGRAMMING CLUB IN INSTITUTO TECNOLÓGICO DE LA LAGUNA
                </h2>
                <p data-aos="fade-up" className="font-monts text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
                <CiCircleChevRight data-aos="fade-up" className="text-3xl md:text-3xl lg:text-3xl"/> Active member of the algorithms club at the Instituto Tecnológico de La Laguna
                </p>
                <p data-aos="fade-up" className="font-monts text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
                <CiCircleChevRight data-aos="fade-up" className="text-xl md:text-2xl lg:text-3xl"/> Contest participant
                </p>
                <p data-aos="fade-up" className="font-monts text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
                <CiCircleChevRight data-aos="fade-up" className="text-xl md:text-2xl lg:text-3xl"/> Algorithm problems solved (+90)
                </p>
                <p data-aos="fade-up" className="font-monts text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
                <CiCircleChevRight data-aos="fade-up" className="text-xl md:text-2xl lg:text-3xl"/> Participant in the coding cup Mexico 2024 (13th place)
                </p>
                <p data-aos="fade-up" className="font-monts text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
                <CiCircleChevRight data-aos="fade-up" className="text-xl md:text-2xl lg:text-3xl"/> Participant in dates for the ICPC classifiers
                </p>
                <h2 data-aos="fade-up" className="text-2xl md:text-3xl lg:text-4xl font-monts mb-4 p-8">
                PARTICIPANT AT HACKMTY 2024                
                </h2>
                <p data-aos="fade-up" className="font-monts text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
                <CiCircleChevRight data-aos="fade-up" className="text-3xl md:text-2xl lg:text-3xl"/> Participated in the Oracle challenge at HackMTY 2024, using Oracle Apex platform
                </p>
                <div data-aos="fade-up" className="flex flex-row flex-wrap justify-center mt-8 gap-4"> 
                    <img src="LogoTec.jpeg" alt="Descripción de la imagen 1" className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover shadow-custom" /> 
                    <img src="Logo hackmty.png" alt="Descripción de la imagen 2" className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover shadow-custom" /> 
                </div>
            </div>
        </section>
    );
}

export default Experiences;
