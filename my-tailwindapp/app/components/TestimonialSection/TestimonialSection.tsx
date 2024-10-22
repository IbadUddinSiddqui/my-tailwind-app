// components/TestimonialSection.js

const TestimonialSection = () => {
    const testimonials = [
      {
        quote: "I had a fantastic experience working with this developer. Their attention to detail and commitment to quality was outstanding.",
        name: "John Smith",
        role: "CEO of ABC Corp",
      },
      {
        quote: "The project was completed on time and exceeded our expectations. Highly recommend!",
        name: "Sarah Johnson",
        role: "Marketing Director at XYZ Ltd",
      },
      {
        quote: "Exceptional work! They truly understand the needs of their clients.",
        name: "Michael Brown",
        role: "Project Manager at Tech Solutions",
      },
    ];
  
    return (
      <section className="py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#2d67cd] bg-gradient-to-r from-black to-transparent shadow-lg p-6 rounded-lg hover:shadow-slate-100">
                <p className="text-gray-100 text-lg italic">"{testimonial.quote}"</p>
                <footer className="mt-4">
                  <h4 className="font-semibold text-lg text-gray-100">{testimonial.name}</h4>
                  <p className="text-gray-100">{testimonial.role}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;
  