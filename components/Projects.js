import React from "react";

const projects = [
  {
    title: "Chess Game",
    description: "Terminal-based chess game built with Python and Pygame. Features full gameplay with move validation and simple AI opponent.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_python-pygame-chess-activity-7378679248351465472-hhMU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLuaGoBX0rE4JaWHmv7GHpx_ent1uvn_3I"
  },
  {
    title: "Invisibility Cloak",
    description: "OpenCV Python project that turns any object of a selected color invisible in real-time video using background subtraction.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_opencv-python-computervision-activity-7378371359208407041-0xW4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLuaGoBX0rE4JaWHmv7GHpx_ent1uvn_3I"
  },
  {
    title: "AI Money Mentor",
    description: "Hackathon project for E-Summit 2025. AI-based financial mentor analyzing investment patterns and suggesting growth strategies.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_hackathon-esummit2025-teamwork-activity-7366673134105616384-eju4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLuaGoBX0rE4JaWHmv7GHpx_ent1uvn_3I"
  },
  {
    title: "YouTube Clone",
    description: "Responsive frontend replica of YouTube using HTML, CSS, JavaScript. Features dynamic sidebar, embedded player, search bar and navigation.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_webdevelopment-frontend-html-activity-7354221359700369408-T0np?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLuaGoBX0rE4JaWHmv7GHpx_ent1uvn_3I"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-white" data-aos="fade-up">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              View Link
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
