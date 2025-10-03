export default function Projects() {
  const projects = [
    {
      name: "Chess Board Game",
      desc: "Terminal/GUI-based chess game using Python and Pygame. Real-time move validation, game rules, and AI opponent logic.",
      link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_python-pygame-chess-activity-7378679248351465472-hhMU"
    },
    {
      name: "Invisibility Cloak",
      desc: "OpenCV-based project to hide objects in video using color masking and background subtraction.",
      link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_opencv-python-computervision-activity-7378371359208407041-0xW4"
    },
    {
      name: "AI Money Mentor",
      desc: "Hackathon project providing AI-driven financial advice and budget predictions.",
      link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_hackathon-esummit2025-teamwork-activity-7366673134105616384-eju4"
    },
    {
      name: "YouTube Clone",
      desc: "Frontend replica of YouTube with responsive design, navigation, search, and video embedding using HTML, CSS, and JavaScript.",
      link: "https://www.linkedin.com/posts/swayam-gupta-a62b66329_webdevelopment-frontend-html-activity-7354221359700369408-T0np"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto" data-aos="fade-left">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3">{proj.name}</h3>
            <p className="text-gray-300 mb-4">{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
