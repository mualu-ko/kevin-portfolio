import { Download, Calendar, Award, Code } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Nairobi",
      period: "2023 - Present",
      description: "Currently in my 3rd year of study. Key coursework includes Data Structures, Algorithms, Database Systems, and Software Engineering. Expected graduation in 2025."
    },
    {
      degree: "Professional Foundations",
      institution: "ALX Africa",
      period: "2025 - 2025",
      description: "Completed a comprehensive program focused on professional development, leadership, and technical skills in the tech industry."
    }
  ];

  // Experience section removed as per user's current status

  const skills = {
    "Frontend": ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "Firebase"],
    "Database": ["MongoDB", "PostgreSQL", "Firebase Firestore"],
    "Tools": ["Git", "GitHub", "VS Code", "Figma", "Postman"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"]
  };

  return (
    <section id="resume" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Resume
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            My educational background, professional experience, and technical skills 
            that drive my passion for creating impactful software solutions.
          </p>
          
          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Kevin_Wambua_Resume.pdf"
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <Download size={20} />
            <span>Download PDF Resume</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Education & Experience */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <Award className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="card p-6 border-l-4 border-primary-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-primary-600 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-3">{edu.institution}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section Removed */}
          </div>

          {/* Right Column - Skills */}
          <div>
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Skills</h3>
            </div>
            
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="card p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-primary-100 text-primary-700 font-medium rounded-lg hover:bg-primary-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="mt-8 card p-6 bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Key Highlights
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>React Expertise:</strong> Proficient in building scalable, responsive web applications
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Problem-Solving:</strong> Strong analytical skills with focus on real-world solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Team Collaboration:</strong> Excellent communication and teamwork abilities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Continuous Learning:</strong> Always adapting and learning new technologies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
