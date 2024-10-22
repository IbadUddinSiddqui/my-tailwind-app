import Image from "next/image";
export default function HeroSection1() {
  return (
    <>
      <section className=" bg-transparent  h-screen bg-cover bg-center flex flex-col justify-center items-center text-white  ">
        <div className="flex flex-col  w-full justify-center items-center h-full bg-black bg-opacity-30 text-white p-4 ">
          <div className="relative z-10 text-center px-6">
            {/* Name or Title */}
            <h1 className="text-6xl font-extrabold mb-4">Ibad Uddin</h1>

            {/* Brief Introduction */}
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Aspiring Software Engineer | Web Developer | Tech Enthusiast. I
              build beautiful and functional web applications.
            </p>

            {/* Call to Action Button */}
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 mb-4"
            >
              View My Work
            </a>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-5">
              <a
                href="https://github.com/IbadUddinSiddqui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white -mt-[5px] hover:text-blue-400"
              >
                <Image
                  src="/images/git.png"
                  alt="Github"
                  width={75}
                  height={75}
                />
                GitHub
              </a>
              <a
                href="https://instagram.com/ibad_uddin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <Image
                  src="/images/instagram.png" // Path to your image
                  alt="Instagram"
                  width={50} // Image width in pixels
                  height={50} // Image height in pixels
                />
                Instagram{" "}
              </a>

              <a
                href="https://www.linkedin.com/in/ibad-uddin-856276259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 hover:shadow-indigo-600 "
              >
                <Image
                  src="/images/in.png"
                  width={50}
                  height={50}
                  alt="Linkedin"
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
