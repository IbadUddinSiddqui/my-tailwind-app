import React from 'react';
import Image from 'next/image';
import Header from '../components/Header/Header';
import PricingCard from '../components/PricingCard/PricingCard';
import FaqCard from '../components/FaqCard/FaqCard';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';


const ServicesPage: React.FC = () => {
  return (
    <>
    <Header/>


    <div className="min-h-screen bg-transparent m-14 text-white">  {/* Changed overall text to white */}
      
      {/* 1. Headline / Introduction */}
      <header className="text-center py-16 bg-transparent">
        <h1 className="text-5xl font-bold">My Web Development Services</h1>
        <p className="text-lg mt-4">Custom Websites, Web Apps, UI/UX Design, and more!</p>
      </header>

      {/* 2. List of Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#2d67cd] flex-inline bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <p><Image src='/images/web-dev.png' alt='Web Development' width={200} height ={150} className='mx-auto my-auto'  /></p>
            <h3 className="text-xl font-semibold mb-2">Website Development</h3>
            <p>`I build custom, responsive websites that look great on any device, using modern tools and techniques.`</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
          <p><Image src='/images/web-app.png' alt='Web App Development' width={200} height ={150} className='mx-auto my-auto'  /></p>
            <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
            <p>Creating full-featured web apps using React, Next.js, and other top frameworks.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
             <p><Image src='/images/e-com.png' alt='E-commerce' width={250} height ={150} className='mx-auto my-auto'  /></p>
            <h3 className="text-xl font-semibold mb-2 mt-12">E-Commerce Solutions</h3>
            <p>Secure and scalable e-commerce websites built with Shopify or custom solutions.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
             <p><Image src='/images/uiux.png' alt='Web Development' width={200} height ={150} className='mx-auto my-auto'  /></p>
            <h3 className="text-xl font-semibold mb-2 mt-8">UI/UX Design</h3>
            <p>Beautiful and user-friendly interfaces designed to improve user engagement.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
             <p><Image src='/images/seo.png' alt='Web Development' width={200} height ={150} className='mx-auto my-auto'  /></p>
            <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
            <p>Using SEO best practices to help your site rank better in search engines.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
             <p><Image src='/images/main&supp.png' alt='Web Development' width={200} height ={150} className='mx-auto my-auto'  /></p>
            <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
            <p>Ongoing support and updates to keep your site running smoothly.</p>
          </div>
        </div>
      </section>

      {/* 3. Technologies & Tools */}
      <section className="bg-transparent py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Technologies I Use</h2>
        <p className="max-w-3xl mx-auto text-lg">
          I work with the latest technologies to build high-quality web solutions.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 ">
          <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100"> <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" alt="hi" width={200} height={200} className='mx-auto my-auto my-auto' />HTML5</span>
          <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100"> <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" alt="hi" width={200} height={200} className='mx-auto my-auto my-auto' /> CSS3</span> 
          <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100"> <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="hi" width={200} height={200} className='mx-auto my-auto my-auto' />JavaScript</span>
          <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100"> <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" alt="hi" width={200} height={200} className='mx-auto my-auto my-auto' />TypeScript</span>
          <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100"> <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="hi" width={200} height={200} className='mx-auto my-auto my-auto' />React</span>
          <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100"> <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="hi" width={200} height={200} className='mx-auto my-auto my-auto' />Next.js</span>
          <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100"> <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="hi" width={200} height={200} className='mx-auto my-auto my-auto' />Node.js</span>
          <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100"> <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="hi" width={200} height={200} className='mx-auto my-auto my-auto' />Tailwind CSS</span>
        </div>
      </section>

      {/* 4. Portfolio Links */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100 ">
            <h3 className="text-xl font-semibold mb-2 ">E-commerce Platform</h3>
            <p>Built a fully functional e-commerce platform with Shopify integration and custom features.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl font-semibold mb-2">Web Application for Analytics</h3>
            <p>Developed a React-based app for real-time data analytics.</p>
          </div>
        </div>
      </section>
      </div>

      {/* 5. Process Section */}
      <div className='bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg min-w-full m-0 '>
      <section className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg py-12 rounded-lg  hover-shadow-slate-100 inline-block m-auto p-auto">
      <h2 className="text-3xl font-semibold text-center mb-6 text-white">
        My Process
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 text-center text-lg text-white p-6 bg-opacity-75 rounded-lg">
        <p>
          <strong>1. Discovery:</strong> I start by understanding your business needs and goals.
        </p>
        <p>
          <strong>2. Planning:</strong> I create a project plan that outlines the roadmap.
        </p>
        <p>
          <strong>3. Design:</strong> Wireframes and UI design to visualize the project.
        </p>
        <p>
          <strong>4. Development:</strong> I build the project using the latest web technologies.
        </p>
        <p>
          <strong>5. Testing & Launch:</strong> I ensure your site works perfectly before launching.
        </p>
      </div>
    </section>

      {/* 6. Why Choose Me */}
      <section className="bg-transparent py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Why Choose Me?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl  text-white font-semibold mb-4">Expertise</h3>
            <p className="text-white">
              I have a strong foundation in web development, specializing in JavaScript, TypeScript, and React.
            </p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl text-white  font-semibold mb-4">Problem-Solving</h3>
            <p className="text-white">
              I excel at identifying problems and implementing efficient solutions, ensuring a smooth user experience.
            </p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl text-white  font-semibold mb-4">Passion</h3>
            <p className="text-white">
              I am passionate about continuous learning and staying updated with the latest industry trends and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* 7. Testimonials/Reviews */}
      <TestimonialSection/>
      {/* 8. Pricing */}
      <section className=" text-white max-w-6xl mx-auto py-12 px-6 text-center">
       < PricingCard/>

      </section>

      {/* 9. Call to Action */}
      <section className="text-center py-12 bg-transparent text-white">
        <h2 className="text-4xl font-semibold mb-4">Ready to Work Together?</h2>
        <p className="text-lg">Get in touch for a free consultation.</p>
        <a href="/contact" className="mt-4 inline-block bg-blue-500 text-white py-3 px-8 rounded-lg hover:shadow-slate-100 hover:bg-blue-600">
          Contact Me
        </a>
      </section>

      {/* 10. FAQ */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-white">
       <FaqCard></FaqCard>
      </section>

      {/* 11. Contact Form */}
      <section className="  bg-black bg-opacity-80 py-12 text-center rounded-xl p-8 ">
        <h2 className="text-3xl  font-semibold mb-6 text-white">Get in Touch</h2> {/* Changed heading text to white */}
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:shadow-slate-100 hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>
      </div>
   
    </>  );
}

export default ServicesPage;
