import React from 'react';
import { Play, Upload, MessageCircle } from 'lucide-react';

const ElevatorPitch = () => {
  const keyPoints = [
    {
      title: "Who I Am",
      description: "Front-end developer and Computer Science graduate passionate about civic technology"
    },
    {
      title: "What I Do",
      description: "Build responsive web applications using React.js with focus on user experience"
    },
    {
      title: "My Mission",
      description: "Use technology to solve real-world problems, especially in governance and transparency"
    },
    {
      title: "My Value",
      description: "Combine technical skills with collaborative teamwork to deliver impactful solutions"
    }
  ];

  return (
    <section id="pitch" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Elevator Pitch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a short intro about who I am and what I'm passionate about building.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Embedded YouTube Video */}
              <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4rYFgdZVaj8"
                  title="Elevator Pitch Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl w-full h-full"
                ></iframe>
              </div>

              {/* Upload Instructions */}
              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <div className="flex items-start space-x-3">
                  <Upload className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-900 mb-1">
                      Upload Your Video
                    </h4>
                    <p className="text-sm text-primary-700">
                      Replace this placeholder with your elevator pitch video. 
                      Recommended: 60-90 seconds, MP4 format, good lighting and audio quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let Me Introduce Myself
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                In just 90 seconds, I'll share my journey as a front-end developer, 
                my passion for civic technology, and how I can contribute to your team's success.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <MessageCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Let's Connect
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Interested in learning more about my experience and how I can contribute to your projects?
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    Get in touch →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Script/Transcript */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Pitch Highlights
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                My Academic Journey
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  3rd Year Computer Science Student at UoN
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  ALX Professional Foundations Program
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Passionate about full-stack development
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                My Strengths
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Hands-on experience with web development projects
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Experience with full-stack development (MERN)
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Quick learner and team player
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorPitch;
