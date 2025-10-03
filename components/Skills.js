export default function Skills() {
  const skills = [
    "Java", "C", "C++", "Python (Basic)", "HTML", "CSS", "JavaScript",
    "OOP", "DSA", "Git", "GitHub", "Ubuntu", "CLion", "PyCharm", "Communication", "Teamwork"
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto" data-aos="fade-right">
      <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
