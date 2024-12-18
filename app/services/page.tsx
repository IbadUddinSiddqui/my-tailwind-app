import React from 'react';
import Image  from 'next/image';
import Header from '../components/Header/Header';
import PricingCard from '../components/PricingCard/PricingCard';
import FaqCard from '../components/FaqCard/FaqCard';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';


const ServicesPage: React.FC = () => {
  return (
    <>
      <Header />


      <div className="min-h-screen max-w-full bg-transparent m-14  text-white">  {/* Changed overall text to white */}

        {/* 1. Headline / Introduction */}
<header className="text-center py-16  service-heading">
  <h1 className="text-3xl font-extrabold md:text-6xl lg:text-7xl text-centre ml-[-22px] ">My Web Development Services</h1>
  <p className="text-lg mt-4 sm:text-xl service-heading">Custom Websites, Web Apps, UI/UX Design, and more!</p>
</header>

        {/* 2. List of Services */}
        <section className="max-w-6xl mx-auto py-12 px-6">
          <div className='max-w-full text-2xl sm:text-5xl md:text-5xl lg:text-5xl text-centre'> <h2 className=" font-semibold mb-8 text-center offer ">What I Offer</h2></div>

          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "  >
            <div className=" bg-[#2d67cd]  bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"  >
              <p><Image  src='/images/web-dev.png' alt='Web Development' width={200} height={150} className='mx-auto my-auto' /></p>
              <h3 className="text-base  font-semibold mb-2">Website Development</h3>
              <p className='text-base'>I build custom, responsive websites that look great on any device, using modern tools and techniques.</p>
            </div>
            <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100   transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ">
              <p><Image  src='/images/web-app.png' alt='Web App Development' width={200} height={150} className='mx-auto my-auto' /></p>
              <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
              <p  className='text-base'>Creating full-featured web apps using React, Next.js, and other top frameworks.</p>
            </div>
            <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ">
              <p><Image   src='/images/e-com.png' alt='E-commerce' width={250} height={150} className='mx-auto my-auto' /></p>
              <h3 className="text-xl font-semibold mb-2 mt-12">E-Commerce Solutions</h3>
              <p  className='text-base'>Secure and scalable e-commerce websites built with Shopify or custom solutions.</p>
            </div>
            <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ">
              <p><Image  src='/images/uiux.png' alt='Web Development' width={200} height={150} className='mx-auto my-auto' /></p>
              <h3 className="text-xl font-semibold mb-2 mt-8">UI/UX Design</h3>
              <p className='text-base' >Beautiful and user-friendly interfaces designed to improve user engagement.</p>
            </div>
            <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ">
              <p><Image  src='/images/seo.png' alt='Web Development' width={200} height={150} className='mx-auto my-auto' /></p>
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className='text-base'>Using SEO best practices to help your site rank better in search engines.</p>
            </div>
            <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ">
              <p><Image  src='/images/main&supp.png' alt='Web Development' width={200} height={150} className='mx-auto my-auto' /></p>
              <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
              <p className='text-base'>Ongoing support and updates to keep your site running smoothly.</p>
            </div>
          </div>
        </section>

    {/* 3. Technologies & Tools */}
<section className="bg-transparent py-12 text-center">
  <h2 className="text-3xl font-semibold mb-4">Technologies I Use</h2>
  <p className="max-w-3xl mx-auto text-lg">
    I work with the latest technologies to build high-quality web solutions.
  </p>
  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
    <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-4 md:p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" alt="HTML5" width={200} height={200} className="mx-auto" />
      HTML5
    </span>
    <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-4 md:p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" alt="CSS3" width={200} height={200} className="mx-auto" />
      CSS3
    </span>
    <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-4 md:p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="JavaScript" width={200} height={200} className="mx-auto" />
      JavaScript
    </span>
    <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-4 md:p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" alt="TypeScript" width={200} height={200} className="mx-auto" />
      TypeScript
    </span>
    <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-4 md:p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" width={200} height={200} className="mx-auto" />
      React
    </span>
    <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-4 md:p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" width={200} height={200} className="mx-auto" />
      Next.js
    </span>
    <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-4 md:p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width={200} height={200} className="mx-auto" />
      Node.js
    </span>
    <span className="text-xl bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-4 md:p-6 rounded-lg hover:shadow-slate-100  transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out">
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwind CSS" width={200} height={200} className="mx-auto" />
      Tailwind CSS
    </span>
  </div>
</section>


        {/* 4. Portfolio Links */}
    {/* 4. Portfolio Links */}
<section className="max-w-6xl mx-auto py-12 px-6 justify-center">
  <h2 className="text-3xl font-semibold mb-8 text-center">My Portfolio</h2>
  <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-8">
    
  <div className="relative group w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
  {/* Image */}
  <Image
    width={400}
    height={400}
    src="/images/builder.png"
    alt="Website Preview"
    className="w-full h-full object-cover rounded-lg"
  />

  {/* Overlay */}
  <Link
    href="https://hackathon-resume-builder-ibad.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4"
  >
    <div className="text-center">
      <h3 className="text-white text-lg md:text-base sm:text-sm font-semibold mb-2">
        Resume Builder
      </h3>
      <p className="text-white text-base md:text-sm sm:text-xs">
       Building resume with just clicks......
      </p>
    </div>
  </Link>
</div>


    <div className="relative group w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
  {/* Image */}
  <Image
    width={400}
    height={400}
    src="/images/Portfolio.png"
    alt="Website Preview"
    className="w-full h-full object-cover rounded-lg"
  />

  {/* Overlay */}
  <Link
    href="https://ibaduddinsiddqui.github.io/My-Portfolio-Website/"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4"
  >
    <div className="text-center">
      <h3 className="text-white text-lg md:text-base sm:text-sm font-semibold mb-2">
        Demo Portfolio
      </h3>
      <p className="text-white text-base md:text-sm sm:text-xs">
        Demo Portfolio using scratch HTML CSS TS...
      </p>
    </div>
  </Link>
</div>

   
  </div>
</section>
      </div>

      <div className=' bg-black bg-opacity-80 shadow-lg p-6 rounded-lg min-w-full m-0 '>
        {/* 5. Process Section */}

        <div className='flex'>
          <section className=" bg-[#2d67cd] mx-auto bg-gradient-to-r from-black to-transparent shadow-lg py-12 rounded-lg hover:shadow-slate-100 inline-block transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(0,255,255,0.6)] hover:animate-glow duration-300 ease-in-out ">
            <h2 className="text-3xl font-semibold text-center mb-6 text-white">
              My Process
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-center py-12 px-6 text-lg text-white bg-opacity-75 rounded-lg ">
              <p >
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
        </div>
        {/* 6. Why Choose Me */}
        <section className="bg-transparent py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Why Choose Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <h3 className="text-xl  text-white font-semibold mb-4">Expertise</h3>
                <p className="text-white">
                  I have a strong foundation in web development, specializing in JavaScript, TypeScript, and React.
                </p>
              </div>
              <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <h3 className="text-xl text-white  font-semibold mb-4">Problem-Solving</h3>
                <p className="text-white">
                  I excel at identifying problems and implementing efficient solutions, ensuring a smooth user experience.
                </p>
              </div>
              <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <h3 className="text-xl text-white  font-semibold mb-4">Passion</h3>
                <p className="text-white">
                  I am passionate about continuous learning and staying updated with the latest industry trends and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
        

        {/* 7. Testimonials/Reviews */}
        <TestimonialSection />
        {/* 8. Pricing */}
        <section className=" text-white max-w-6xl mx-auto py-12 px-6 text-center ">
        <h2 className='text-4xl font-bold mb-8 text-white'> Pricing</h2>
          < PricingCard />

        </section>

        
        {/* 10. FAQ */}
        <section className=" mb-14 max-w-6xl mx-auto py-12 px-6 text-white">
          <FaqCard></FaqCard>
        </section>

        {/* 11. Contact Form */}
        <div className='inline-flex mt-14 max-w-full'>
        <section className="bg-transparent dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
            Lets find more that brings us together.
          </h2>
          <p className="mb-8 font-light text-white sm:text-xl dark:text-gray-400">
          Lets connect and create something amazing together! Whether youre into building innovative projects, sharing ideas, or brainstorming the next big thing, Im all in. Lets collaborate, explore new possibilities, and turn creative dreams into reality. Ready to start something crazy? Lets go!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
           
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
    <div className=' mx-auto my-auto hidden sm:flex '>
    <div className=" ">
      <h2 className='text-white'>Ibad Uddin</h2>
      <p>
        📧 <strong className='text-white' >Email:</strong> <a  className='text-blue-500' href="mailto:ibaduddinsiddiqui418@gmail.com">ibaduddinsiddiqui418@gmail.com</a>
      </p>
      <p>
        📱 <strong className='text-white' >Phone:</strong> <a  className='text-blue-500' href="tel:+92335394836">+92 335 394836</a>
      </p>
      <p>
        🔗 <strong className='text-white' >LinkedIn:</strong> <a className='text-blue-500' href="https://www.linkedin.com/in/ibad-uddin-856276259/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ibaduddin</a>
      </p>
      <p>
        📍 <strong className='text-white '>Location:</strong> <p className='text-blue-500'>Karachi, Pakistan</p>
      </p>
    </div> </div></div>
   

</div>
<Footer/>
  </>) ;
}

export default ServicesPage;
