import { CgMenuRightAlt } from "react-icons/cg";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    // Set dark mode on initial render
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
        <div className="NAVBAR flex justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
            >
              {"<vaibhav/>"}
            </a>
          </div>
          <div className="NAVLINKS text-[20px] translate-x-[80px] max-sm:hidden flex gap-12 text-[#00040f] dark:text-[#e1e1e1]">
            <a href="#about" className="hover:text-cyan-500">
              Home
            </a>
            <a href="#education" className="hover:text-cyan-500">
              Education
            </a>
            <a href="#projects" className="hover:text-cyan-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-500">
              Contact
            </a>
          </div>

          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};

export default Navbar;
