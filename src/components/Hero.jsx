import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
    }, []);

    return (
        <section id="Hero"className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8 p-4 md:p-8">
            <div className="md:col-span-5 flex items-center justify-center text-primary">
                <div>
                    <h1 data-aos="fade-up" className="text-4xl md:text-6xl lg:text-8xl font-bold font-monts">Rodrigo Macias Ruiz</h1>
                    <p data-aos="fade-up" className="font-monts text-base md:text-lg lg:text-xl">
                        I am an ICT student at the "Instituto Tecnológico de La Laguna" university in Torreón, Coahuila, Mexico. 
                        I am currently studying the 7th semester of my degree. I would like to continue learning in all possible areas,
                        from programming to issues of leading work teams, and with a technical degree: maintenance of electronic systems.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className="md:col-span-3 flex items-center justify-center mt-4 md:mt-0">
                <img src="perfil.jpeg" className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 object-cover shadow-custom" alt="Profile" />
            </div>
        </section>
    );
}

export default Hero;
