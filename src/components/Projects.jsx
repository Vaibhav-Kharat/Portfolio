import Project_prop from "./Project_prop";
import { tattoo, Portfolio, ashoka, bank } from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  // SiJava,
  SiSpring,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // from FontAwesome

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Portfolio "
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            github_link="ADD LINK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

          <Project_prop
            title="Ashoka"
            para="An Android app built for Ashoka to manage their workforce efficiently."
            img={ashoka}
            github_link="https://github.com/Vaibhav-Kharat/Ashoka"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          {/* ...............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................  */}
          <Project_prop
            title="CoreBanker"
            para="Java Bank System with ATM features and auto account numbers."
            img={bank}
            github_link="https://github.com/Vaibhav-Kharat/Bank-Management-ATM"
            java={
              <Tooltip title="JAVA" arrow>
                <IconButton>
                  <FaJava className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            spring={
              <Tooltip title="SpringBoot" arrow>
                <IconButton>
                  <SiSpring className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            sql={
              <Tooltip title="MySQL" arrow>
                <IconButton>
                  <SiMysql className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Pain & Glory"
            para="A platform to explore tattoo designs, connect with artists, and book appointments online. "
            img={tattoo}
            github_link="https://github.com/Vaibhav-Kharat/tattoo_website"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
