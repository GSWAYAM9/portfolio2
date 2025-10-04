const Resume = () => (
  <section id="resume" className="py-20 px-6 max-w-6xl mx-auto bg-gray-800 text-white" data-aos="fade-up">
    <h2 className="text-4xl font-bold mb-6 text-center">Resume</h2>
    <div className="text-center">
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Download my resume to learn more about my experience, education, and skills in detail.
      </p>
      <a 
        href="/resume.pdf" 
        download
        className="bg-yellow-300 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-lg inline-block mb-8"
      >
        Download Resume PDF
      </a>
      <div className="mt-8 p-8 bg-gray-900 rounded-lg max-w-4xl mx-auto text-left">
        <h3 className="text-2xl font-bold mb-6 text-yellow-300 text-center">Quick Overview</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-3">Education</h4>
            <p className="text-gray-300">B.Tech Computer Science - KIIT University</p>
            <p className="text-gray-400 text-sm">Expected Graduation: 2026</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3">Technical Skills</h4>
            <p className="text-gray-300">Java, Python, JavaScript, React, Node.js, Machine Learning, Full-Stack Development</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3">Achievements</h4>
            <p className="text-gray-300">MIT AI Hackathon Participant, GSSoC'25 Contributor, Smart India Hackathon 2025</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3">Interests</h4>
            <p className="text-gray-300">Machine Learning, Web Development, Competitive Programming, Open Source</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
