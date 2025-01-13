import React, { useEffect } from "react";
import AOS from 'aos';
import { CiCircleChevRight } from "react-icons/ci";
import 'aos/dist/aos.css';

const SoftSkillsAndHobbies = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="SoftSkills" className="min-h-screen flex flex-col items-center justify-center text-primary p-8">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="slide-right" className="text-center">
          <h1 data-aos="fade-right" className="text-6xl md:text-8xl font-bold font-monts mb-6">Soft skills</h1>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-up" className="text-3xl md:text-2xl"/> Fast learning
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-4xl md:text-2xl"/> Self-taught Ability to build work relationships
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-4xl md:text-2xl"/> Discipline, initiative, and emotional intelligence
          </p>
          <p data-aos="fade-right" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-right" className="text-4xl md:text-2xl"/> Languages: English: Level B2 (fluent) & Spanish (Native)
          </p>
        </div>
        <div data-aos="slide-left" className="text-center">
          <h1 data-aos="fade-left" className="text-6xl md:text-8xl font-bold font-monts mb-6">Hobbies</h1>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-2xl md:text-2xl"/> Sports: Soccer, gym
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-3xl md:text-2xl"/> Hobbies: Meditation, video games, reading
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-8xl md:text-6xl"/> In my free time, I do sports (either gym or soccer) and also practice solving algorithm problems on the Codeforces platform
          </p>
          <p data-aos="fade-left" className="font-monts text-base md:text-lg flex items-center justify-center gap-2">
            <CiCircleChevRight data-aos="fade-left" className="text-9xl md:text-7xl"/> Also practice with different tools and/or programming languages such as JavaScript with React (focused on web projects), Kotlin (both front-end and back-end)
          </p>
        </div>
      </div>
    </section>
  );
}

export default SoftSkillsAndHobbies;
