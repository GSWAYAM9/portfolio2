const skills = ["Java", "C", "Python", "HTML", "CSS", "JavaScript", "OOP", "DSA", "Git", "Ubuntu", "CLion", "PyCharm"];

const Skills = () => (
  <section id="skills" className="py-20 px-6 max-w-6xl mx-auto bg-gray-900 text-white" data-aos="fade-up">
    <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, idx) => (
        <span key={idx} className="bg-yellow-300 text-black px-4 py-2 rounded-full shadow-md">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;
