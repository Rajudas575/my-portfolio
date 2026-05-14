import React from "react";
import medical from "../../assets/projects/medical-web.png";
import dashboard from "../../assets/projects/react-dahsboard.png";
import project1 from "../../assets/projects/e-comm-project1.png";
import project2 from "../../assets/projects/ems-project2.png";
import project3 from "../../assets/projects/resturent-project3.png";
import project4 from "../../assets/projects/book-store-projet4.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "React Medical-Web",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla!",
      image: medical,
      tags: ["React", "Tailwind.css"],
      url: "https://recuperation-medical.vercel.app/",
    },
    {
      id: 1,
      title: "React-Dashboard",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla!",
      image: dashboard,
      tags: ["React", "Tailwind.css"],
      url: "https://react-dashboard-mu-topaz.vercel.app/",
    },

    {
      id: 1,
      title: "E-commerce Platform",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla!",
      image: project1,
      tags: ["React", "Node.js", "MongoDB"],
      url: "https://choice-zone-czo6.vercel.app/",
    },
    {
      id: 2,
      title: "Employee Management System",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla!",
      image: project2,
      tags: ["React", "Node.js", "MongoDB"],
      url: "https://ems-front-end-dusky.vercel.app/",
    },
    {
      id: 3,
      title: "Resturant",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla!",
      image: project3,
      tags: ["React", "Tailwind.css"],
      url: "https://craving-plaza.vercel.app/",
    },
    {
      id: 4,
      title: "Book-Store",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla!",
      image: project4,
      tags: ["React", "Tailwind.css"],
      url: "https://book-front-end-six.vercel.app/",
    },
  ];
  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}>
            My
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}>
            A showcase of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right,#1f2937,#111827)"
                  : "linear-gradient(to right, #ffffff, #f59e0b)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border duration-300
            hover:border-yellow-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover 
                  group-hover:scale-110 transition-transform 
                  duration-500"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}>
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center
                    gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90
                    transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300">
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  {/* demo */}
                  <a
                    href={project.url}
                    target="_blank"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                    className="flex-1 flex items-center justify-center
                    gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg
                    hover:shadow-yellow-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="300">
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center font-semibold
            gap-2 px-7 py-4 text-white tex-sm rounded-full hover:shadow-lg
            hover:shadow-yellow-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400">
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
