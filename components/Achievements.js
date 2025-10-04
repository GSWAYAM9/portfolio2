const achievements = [
  "MIT AI Hackathon Participant -- 2025",
  "GSSoC'25 Contributor",
  "EV Project at TECHFRONTIER 2024",
  "Volunteer at KIIT Tech Fests",
  "Letter of Recommendation from IIT",
  "E-Summit Pandora's Paradox Hackathon",
  "Smart India Hackathon 2025"
];

const Achievements = () => (
  <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto bg-gray-900 text-white" data-aos="fade-up">
    <h2 className="text-4xl font-bold mb-6 text-center">Achievements & Certifications</h2>
    <ul className="list-disc list-inside text-gray-300 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {achievements.map((ach, idx) => (
        <li key={idx} className="text-lg">{ach}</li>
      ))}
    </ul>
  </section>
);

export default Achievements;
