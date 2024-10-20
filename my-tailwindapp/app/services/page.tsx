import React from 'react';
import Header from '../components/Header/Header';

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
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl font-semibold mb-2">Website Development</h3>
            <p>I build custom, responsive websites that look great on any device, using modern tools and techniques.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
            <p>Creating full-featured web apps using React, Next.js, and other top frameworks.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparentshadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Solutions</h3>
            <p>Secure and scalable e-commerce websites built with Shopify or custom solutions.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p>Beautiful and user-friendly interfaces designed to improve user engagement.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
            <p>Using SEO best practices to help your site rank better in search engines.</p>
          </div>
          <div className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
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
          <span className="text-xl bg-black bg-opacity-80 shadow-lg p-3 rounded-lg hover:shadow-slate-100">HTML5</span>
          <span className="text-xl bg-black bg-opacity-80 shadow-lg p-3 rounded-lg hover:shadow-slate-100">CSS3</span>
          <span className="text-xl bg-black bg-opacity-80 shadow-lg p-3 rounded-lg hover:shadow-slate-100">JavaScript</span>
          <span className="text-xl bg-black bg-opacity-80 shadow-lg p-3 rounded-lg hover:shadow-slate-100">TypeScript</span>
          <span className="text-xl bg-black bg-opacity-80 shadow-lg p-3 rounded-lg hover:shadow-slate-100">React</span>
          <span className="text-xl bg-black bg-opacity-80 shadow-lg p-3 rounded-lg hover:shadow-slate-100">Next.js</span>
          <span className="text-xl bg-black bg-opacity-80 shadow-lg p-3 rounded-lg hover:shadow-slate-100">Node.js</span>
          <span className="text-xl bg-black bg-opacity-80 shadow-lg p-3 rounded-lg hover:shadow-slate-100">Tailwind CSS</span>
        </div>
      </section>

      {/* 4. Portfolio Links */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black bg-opacity-80 shadow-lg p-6 rounded-lg hover:shadow-slate-100 ">
            <h3 className="text-xl font-semibold mb-2 ">E-commerce Platform</h3>
            <p>Built a fully functional e-commerce platform with Shopify integration and custom features.</p>
          </div>
          <div className="bg-black bg-opacity-80 shadow-lg p-6 rounded-lg hover:shadow-slate-100">
            <h3 className="text-xl font-semibold mb-2">Web Application for Analytics</h3>
            <p>Developed a React-based app for real-time data analytics.</p>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="bg-transparent py-12 ">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white ">My Process</h2> {/* Changed heading text to white */}
        <div className="max-w-4xl mx-auto space-y-4 text-center text-lg text-white  "> {/* Changed body text to white */}
          <p><strong>1. Discovery:</strong> I start by understanding your business needs and goals.</p>
          <p><strong>2. Planning:</strong> I create a project plan that outlines the roadmap.</p>
          <p><strong>3. Design:</strong> Wireframes and UI design to visualize the project.</p>
          <p><strong>4. Development:</strong> I build the project using the latest web technologies.</p>
          <p><strong>5. Testing & Launch:</strong> I ensure your site works perfectly before launching.</p>
        </div>
      </section>

      {/* 6. Why Choose Me */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Me?</h2>
        <p className="text-lg">I provide high-quality web solutions with a client-focused approach, ensuring timely delivery and great communication.</p>
      </section>

      {/* 7. Testimonials/Reviews */}
      <section className="bg-transparent py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white">What Clients Say</h2> {/* Changed heading text to white */}
        <p className="max-w-3xl mx-auto text-lg text-white">&quot;Ibad did an amazing job on our company website. He was responsive and delivered exactly what we needed.&quot;</p> {/* Changed body text to white */}
      </section>

      {/* 8. Pricing */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
        <p className="text-lg">I offer competitive pricing for custom web development projects starting at $500.</p>
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
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 text-lg">
          <p><strong>Q: How long does a typical project take?</strong> A: It depends on the complexity of the project, but most websites are completed within 4-6 weeks.</p>
          <p><strong>Q: Do you offer maintenance after launch?</strong> A: Yes, I offer ongoing maintenance services.</p>
        </div>
      </section>

      {/* 11. Contact Form */}
      <section className="  bg-black bg-opacity-80 py-12 text-center rounded-xl p-8">
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
