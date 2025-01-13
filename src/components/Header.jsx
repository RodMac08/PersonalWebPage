import { useState } from "react";
import { RiBracesFill } from "react-icons/ri";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full p-4 h-[10vh] z-50 bg-primary font-monts fixed top-0 shadow-lg">
      <div className="xl:w-1/6 text-center">
        <h1 className="text-2xl font-bold flex items-center justify-center text-secundary">
          <RiBracesFill className="text-secundary" /> RMR
        </h1>
        <p className="text-sm">𝐾𝑒𝑒𝑝 𝑝𝑢𝑠ℎ𝑖𝑛𝑔</p>
      </div>
      <nav className={`fixed bg-primary text-secundary w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} 
      top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 text-secundary transition-all duration-500`}>
        <a href="#Hero"onClick={(e) => scrollToSection(e, 'Hero')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">About me</a>
        <a href="#Experiences"onClick={(e) => scrollToSection(e, 'Experiences')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">Experiences</a>
        <a href="#Projects"onClick={(e) => scrollToSection(e, 'Projects')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">Projects</a>
        <a href="#SoftSkills"onClick={(e) => scrollToSection(e, 'SoftSkills')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">Soft skills & Hobbies</a>
        <a href="#TechnicalSkills"onClick={(e) => scrollToSection(e, 'TechnicalSkills')} className="hover:text-shadow-lg text-secundary transition-all ease-in duration-200">Technical skills</a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden z-50">
        {showMenu ? <IoCloseOutline className="text-secundary" /> : <IoMenu className="text-secundary" />}
      </button>
    </header>
  );
};

export default Header;
