// pages/about.tsx
import React from 'react';
import Header from '../components/Header/Header';
const About: React.FC = () => {
  return (
    <>
    <Header/>
    <section className="mt-14 py-10 px-4 md:px-20 bg-transparent">
      <div className="container mx-auto">
        {/* About Me Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="mb-4 text-lg text-white">
            Hi! I'm <span className="font-semibold">Ibad Uddin</span>, a passionate web developer with a strong background in computer science.
            I specialize in <span className="font-semibold">HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS</span> and enjoy creating responsive and user-friendly applications.
          </p>
          <p className="mb-4 text-lg text-white">
            My journey into web development began when I discovered my love for coding in high school. Since then, I've had the opportunity to work on various projects, including 
            a <span className="font-semibold">dynamic resume builder</span> and a <span className="font-semibold">weather widget app</span>.
          </p>
          <p className="mb-4 text-lg text-white">
            I am committed to continuous learning and improving my skills to stay current with the latest technologies.
            My goal is to work on innovative projects in the tech industry and contribute to impactful solutions.
          </p>
          <p className="mb-4 text-lg text-white">
            Outside of coding, I enjoy <span className="font-semibold">reading, exploring new technologies, and playing video games</span>.
            Feel free to connect with me on <span className="font-semibold">LinkedIn</span>!
          </p>
        </section>

        {/* Skills Section */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-2">Skills</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js</li>
            <li>Tailwind CSS</li>
            <li>Responsive Design</li>
            <li>Version Control (Git)</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-2">Notable Projects</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>
              <span className="font-semibold">Dynamic Resume Builder:</span> A web application that allows users to create and download their resumes in PDF format.
            </li>
            <li>
              <span className="font-semibold">Weather Widget App:</span> An interactive application that displays real-time weather information based on user input.
            </li>
          </ul>
        </section>

        {/* Hobbies Section */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-2">Hobbies</h3>
          <ul className="list-disc list-inside text-lg text-white">
            <li>Reading Tech Blogs</li>
            <li>Gaming</li>
            <li>Learning New Programming Languages</li>
            <li>Attending Tech Meetups</li>
          </ul>
        </section>

        {/* Testimonials Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-2">Testimonials</h3>
          <blockquote className="text-lg text-white italic">
            "Ibad is a talented developer who consistently delivers high-quality work on time."
            <br />
            <span className="font-semibold">- Happy Client</span>
          </blockquote>
        </div>
      </div>
    </section>
    </>  );
};

export default About;
