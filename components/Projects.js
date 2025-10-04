const projects = [
  {
    title: "Chess Board Game",
    desc: "A full-feature terminal-based chess game in Python.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_python-pygame-chess-activity-7378679248351465472-hhMU"
  },
  {
    title: "Invisibility Cloak",
    desc: "Real-time invisibility cloak using OpenCV in Python.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_opencv-python-computervision-activity-7378371359208407041-0xW4"
  },
  {
    title: "AI Money Mentor",
    desc: "AI-powered financial mentor project developed during Hackathon.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_hackathon-esummit2025-teamwork-activity-7366673134105616384-eju4"
  },
  {
    title: "YouTube Clone",
    desc: "Responsive frontend replica of YouTube using HTML, CSS, JavaScript.",
    link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_webdevelopment-frontend-html-activity-7354221359700369408-T0np"
  }
];

const Projects = () => (
  <section id="projects" className="py-20 px-6 max-w-6xl mx-auto bg-gray-800 text-white" data-aos="fade-up">
    <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, idx) => (
        <div key={idx} className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.desc}</p>
          <a href={project.link} target="_blank" rel="noreferrer" className="text-yellow-300 font-bold hover:underline">
            View Project →
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
