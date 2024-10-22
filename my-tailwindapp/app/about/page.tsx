// pages/about.tsx
import React from 'react';
import Header from '../components/Header/Header';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-transparent mt-14 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-50  p-8 shadow-md rounded-lg text-white">
          <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>

          <p className="text-lg mb-4">
            <span className="font-semibold">Hello, I'm Ibad Uddin,</span> a passionate and beginner-level web developer and software engineer. I design and develop websites, currently specializing in frontend development. My aim is to become a proficient full-stack developer by mastering backend technologies. As a student who has completed my Intermediate in Pre-Engineering, I've taken a gap to focus on mastering web development before continuing my traditional studies and earning a software engineering degree.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">My Journey</h2>
          <p className="text-lg mb-4">
            Since childhood, I've been fascinated by technology, computers, and innovation. This early interest has shaped my ambition to contribute to the field of software engineering. I completed my intermediate and school education with strong grades and have always been drawn to the creativity and problem-solving aspects of software development.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Skills & Expertise</h2>
          <p className="text-lg mb-4">
            My current expertise lies in frontend development with skills in:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>React, Next.js, Node.js</li>
            <li>Tailwind CSS, Bootstrap</li>
          </ul>
          <p className="text-lg mb-4">
            I'm excited to expand my skills into backend development, Python, and AI. One of my proudest projects to date is a <span className="font-semibold">Dynamic Resume Builder</span>, which I recently completed. I'm also taking on the <span className="font-semibold">30 Days of Challenge</span> under the supervision of <span className="font-semibold">Sir Asharib of GIAIC</span> and <span className="font-semibold">Sir Hamza</span>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Goals & Aspirations</h2>
          <p className="text-lg mb-4">
            <span className="font-semibold">Short-term goals:</span> Improve my UI/UX design skills by mastering color theory, themes, and design aesthetics.
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Long-term goals:</span> Become a professional full-stack developer capable of building websites, applications, and software. I also aim to create my own AI model in the future.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Beyond Coding</h2>
          <p className="text-lg mb-4">
            When I'm not coding, you’ll find me playing <span className="font-semibold">cricket</span> and <span className="font-semibold">video games</span> to refresh my mind. I believe in balancing work with play to stay creative and motivated.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Let's Connect</h2>
          <p className="text-lg mb-4">
            Feel free to reach out to me at <span className="font-semibold">ibaduddinsiddiqui418@gmail.com</span>. I’m always open to new opportunities, collaborations, and learning experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
