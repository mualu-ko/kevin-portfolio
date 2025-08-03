import React from 'react';
import { Code, Users, Lightbulb, ExternalLink } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-primary-600" />,
      title: "Technical Skills",
      description: "React.js, responsive UI design, and modern web technologies"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Collaboration",
      description: "Strong teamwork and communication skills from real-world projects"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-600" />,
      title: "Problem Solving",
      description: "Passionate about using technology to tackle societal challenges"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-purple-600 p-1 rounded-2xl shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Profile Photo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = 'https://via.placeholder.com/320x320';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Hi, I'm Kevin Wambua – a passionate 3rd-year Computer Science student at the University of Nairobi 
                with a growing interest in software development and problem-solving through technology.
              </p>
              
              <p className="mb-6">
                Currently pursuing my Bachelor's degree, I'm developing strong foundations in data structures, 
                algorithms, and database systems. My coursework has provided me with hands-on experience in 
                software engineering principles and collaborative development.
              </p>
              
              <p className="mb-6">
                I recently completed the Professional Foundations program at ALX Africa, which helped me develop 
                essential professional and technical skills. This experience has shaped my approach to learning 
                and problem-solving in the tech industry.
              </p>
              
              <p className="mb-6">
                I'm particularly interested in how technology can be leveraged to create meaningful solutions. 
                My project, FindFest, reflects my ability to build full-stack applications and my passion for 
                creating user-centered experiences.
              </p>
              
              <p className="mb-8">
                As I continue my academic journey, I'm eager to apply my growing skill set to real-world challenges, 
                collaborate with like-minded individuals, and contribute to innovative projects that make a difference.
              </p>
              
              <p className="text-primary-600 font-semibold text-lg">
                Always learning, always building.
              </p>
            </div>

            {/* Fun Fact */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-600">
              <h3 className="font-semibold text-gray-900 mb-2">Currently Learning:</h3>
              <p className="text-gray-700">Advanced React concepts and cloud technologies to enhance my full-stack development skills</p>
            </div>

            {/* LinkedIn Link */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/kevin-wambua-a07a28358"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                <span>Connect with me on LinkedIn</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="card p-8 text-center">
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;