import './index.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import profileImg from './assets/zoomed.jpg';

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main
        id="home"
        className="min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-[#161f2b] via-[#0f1620] to-[#0a0d14]"
      >
        <section className="max-w-2xl text-center space-y-6">
          <motion.img
            src={profileImg}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-purple-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Neil Diamond Rosete <br />
            <span className="text-purple-400 text-2xl md:text-3xl">
              <Typewriter
                words={['Web Developer', 'IT Enthusiast', 'Tech Lover']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            I'm a 23-year-old IT enthusiast passionate about building modern web experiences.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6 mt-4 text-xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:you@example.com"
              className="hover:text-purple-400 transition-colors"
            >
              Email
            </a>
          </motion.div>
        </section>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-start justify-center bg-[#161f2b] text-white px-6 pt-20"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate about technology from an early age, I am a 22-year-old IT enthusiast with hands-on experience and a solid understanding of computer systems. My goal is to build a successful career in IT, leveraging my strong technical aptitude and ability to rapidly learn and apply new skills.
            <br />
            <br />
            My passion for technology began at a young age, fueled by my fascination with how computers work and the limitless possibilities they present for solving problems, connecting people, and driving innovation. This curiosity has grown into a dedication to continuously expand my knowledge and adapt to the ever-evolving tech landscape.
          </p>
        </div>
      </section>


      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center bg-[#232d3a] text-white p-10"
      >
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {[1, 2, 3].map((_, i) => (
            <a
              key={i}
              href="#"
              className="bg-[#161f2b] h-64 rounded-lg shadow-lg flex items-center justify-center text-gray-400 text-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Project {i + 1}
            </a>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen bg-[#161f2b] text-white px-6 py-16 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        {/* Web Development */}
        <div className="w-full max-w-5xl">
          <h3 className="text-2xl font-semibold mb-6">Web Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "React",
              "Tailwind CSS",
              "Next.js",
              "HTML5",
              "CSS",
              "PHP",
              "SQL",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gradient-to-br from-[#1b2433] to-[#131a25] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 hover:shadow-[#4b6cb7]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-lg font-bold">
                  {/* Placeholder icon */}
                  {skill[0]}
                </div>
                <span className="text-center">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applications & Tools */}
        <div className="w-full max-w-5xl mt-16">
          <h3 className="text-2xl font-semibold mb-6">Applications & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "Visual Studio Code",
              "Figma",
              "Canva",
              "Salesforce",
              "QuickBooks",
              "Microsoft Office",
              "Google Suite",
              "Slack",
              "Trello",
              "HeyOrca",
            ].map((tool) => (
              <div
                key={tool}
                className="bg-gradient-to-br from-[#1b2433] to-[#131a25] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 hover:shadow-[#4b6cb7]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-lg font-bold">
                  {/* Placeholder icon */}
                  {tool[0]}
                </div>
                <span className="text-center">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-[#0e141b] text-white px-6 py-16 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info Panel */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
              I’ll do my best to get back to you as soon as possible.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1b2433] flex items-center justify-center rounded-full">
                  📧
                </div>
                <span>neil.rosete11.nr@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1b2433] flex items-center justify-center rounded-full">
                  📱
                </div>
                <span>+63 917 712 00504</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1b2433] flex items-center justify-center rounded-full">
                  🌐
                </div>
                <span>linkedin.com/in/nlldiamond</span>
              </li>
            </ul>
          </div>

          {/* Formspree */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID" // Replace lat8r using formspree
            method="POST"
            className="bg-[#1b2433] p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0e141b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0e141b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0e141b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4b6cb7] to-[#182848] py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </>
  );
}

export default App;
