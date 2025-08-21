import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './Navbar';
import profileImg from './assets/zoomed.jpg';
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaNetworkWired, FaServer, FaDatabase, FaMicrosoft, FaPhoneAlt } from "react-icons/fa";
import { 
  SiReact, SiTailwindcss, SiNextdotjs, SiHtml5, SiCss3, SiPhp, SiMysql, SiVite, SiFigma, SiSalesforce, SiQuickbooks, SiGoogle, SiSlack, SiTrello, SiGithub as SiGithub, SiZoom  
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import heyorcaLogo from "./assets/heyorca.jpeg";
import canvaLogo from "./assets/canva.png";
import NazerSS from "./assets/NazerSS.png"; 
import RecipeBook from "./assets/RecipeBook.png"; 
import KaLaro from "./assets/KaLaro.jpg"; 
// import sample from "./assets/sample.png";
import nrTech from "./assets/nrTech.jpg";
import Mobile from "./assets/Mobile.png";
import cafePage from "./assets/cafe.png";
import canva1 from "./assets/canva1.png";
import canva2 from "./assets/canva2.jpg";
// import { section } from "framer-motion/client";

function App() {
  // State for modal
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Main projects
  const projects = [
    {
      title: "Nazer Apps",
      description:
        "This project focuses on creating a modern, responsive front-end for a mobile app company’s website. It highlights the company’s services with a user-friendly, interactive design optimized for both desktop and mobile.. Still in development",
      image: NazerSS,
      link: "#"
    },
    {
      title: "Everyday Ulam",
      description:
        "A simple and clean recipe website built primarily with HTML and CSS, with a touch of JavaScript for basic interactivity. Perfect for browsing and discovering easy-to-follow recipes",
      image: RecipeBook,
      link: "https://everydayulam.vercel.app/"
    },
    {
      title: "KaLaro",
      description:
        "An Android-based Multiplayer Traditional Filipino Game. The initiative aimed to transform four traditional games, Patintero, Tumbang Preso, Sawsaw Suka, and Palosebo, into an immersive Android-based multiplayer gaming experience.",
      image: KaLaro,
      link: "https://nlldiamond.itch.io/kalaro"
    }
  ];

  // Other projects with multiple images (now only 2)
  const otherProjects = [
    {
      title: "Figma UI Designs",
      description: "UI mockups designed in Figma.",
      images: [nrTech, Mobile, cafePage]
    },
    {
      title: "Canva Marketing Design",
      description: "Promotional Canva design for client branding.",
      images: [canva1, canva2]
    }
  ];
  
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
            className="w-40 h-40 rounded-full mx-auto border-4"
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
                words={['Web Developer', 'IT Specialist']}
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
            I'm a 23-year-old IT enthusiast passionate about building modern web experiences and huge love for computers.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6 mt-4 text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="https://github.com/nlldiamond" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-transform transform hover:scale-110"><FaGithub /></a>
            <a href="https://linkedin.com/in/nlldiamond" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-transform transform hover:scale-110"><FaLinkedin /></a>
            <a href="mailto:neil.rosete11.nr@gmail.com" className="hover:text-purple-400 transition-transform transform hover:scale-110"><FaEnvelope /></a>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a
              href="/resume.pdf"
              download
              className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
            >
              📄 Download Resume
            </a>
          </motion.div>
        </section>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-[#161f2b] text-white px-6"
      >
        <motion.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 relative inline-block text-white">
              About Me
              <span className="absolute left-0 -bottom-3.5 w-full h-1 bg-purple-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about technology from an early age, I am a 23-year-old IT enthusiast with hands-on experience and a solid understanding of computer systems. My goal is to build a successful career in IT, leveraging my strong technical aptitude and ability to rapidly learn and apply new skills.
              <br />
              <br />
              My passion for technology began at a young age, fueled by my fascination with how computers work and the limitless possibilities they present for solving problems, connecting people, and driving innovation. This curiosity has grown into a dedication to continuously expand my knowledge and adapt to the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center bg-[#0e141b] text-white p-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 relative inline-block text-white">
          Projects
          <span className="absolute left-0 -bottom-3.5 w-full h-1 bg-purple-500 rounded-full"></span>
        </h2>

        {/* Main Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, i) => {
            const isExternal = project.link.startsWith("http");
            const isPlaceholder = project.link === "#";

            return (
              <motion.a
                key={i}
                href={isPlaceholder ? undefined : project.link}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 25px rgba(168,85,247,0.9), 0 0 50px rgba(168,85,247,0.6)", // hover glow
                }}
                className={`bg-[#161f2b] h-96 rounded-lg flex flex-col items-center justify-start 
                  text-gray-400 transition-all duration-300 hover:text-white p-4 relative 
                  ${isPlaceholder ? "opacity-60 cursor-not-allowed" : ""}`}
                style={{
                  boxShadow: "0 0 12px rgba(168,85,247,0.4)", // default subtle glow
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-center text-gray-400 text-sm">
                  {project.description}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* 🔹 Other Projects Section */}
        {/* <div className="mt-20 w-full max-w-6xl text-center"> */}
          <h3 className="text-2xl font-bold text-white border-b-2 border-purple-500 inline-block mt-12">
            Other Projects
          </h3>

        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherProjects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedProjectIndex(i);
                  setCurrentImageIndex(0);
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 20px rgba(168,85,247,0.9), 0 0 40px rgba(168,85,247,0.6)", // hover glow
                }}
                className="cursor-pointer bg-[#161f2b] rounded-lg flex flex-col items-center 
                  justify-start text-gray-400 transition-all duration-300 hover:text-white p-4"
                style={{
                  boxShadow: "0 0 10px rgba(168,85,247,0.3)", // default subtle glow
                }}
              >
                <img
                  src={proj.images[0]}
                  alt={proj.title}
                  className="w-full max-h-60 object-contain rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-center text-gray-400 text-sm">{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Modal Carousel */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectIndex(null)} // close on background click
          >
            <div
              className="relative w-full max-w-3xl flex items-center justify-center"
              onClick={(event) => event.stopPropagation()} // prevent closing when clicking image
            >
              <motion.img
                key={otherProjects[selectedProjectIndex].images[currentImageIndex]}
                src={otherProjects[selectedProjectIndex].images[currentImageIndex]}
                alt="Preview"
                className="max-h-[80vh] rounded-lg mx-auto"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{
                  boxShadow: "0 0 15px rgba(168,85,247,0.4)", // ✨ subtle default glow
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 0 30px rgba(168,85,247,0.9), 0 0 60px rgba(168,85,247,0.6)", // ✨ hover glow
                }}
                onDragEnd={(_e, { offset }) => {
                  if (offset.x < -100) {
                    setCurrentImageIndex(
                      (prev) =>
                        (prev + 1) %
                        otherProjects[selectedProjectIndex].images.length
                    );
                  } else if (offset.x > 100) {
                    setCurrentImageIndex(
                      (prev) =>
                        (prev - 1 + otherProjects[selectedProjectIndex].images.length) %
                        otherProjects[selectedProjectIndex].images.length
                    );
                  }
                }}
              />

              {/* Prev Button */}
              <button
                className="absolute left-4 text-3xl text-white bg-black/50 rounded-full px-3 py-1"
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) =>
                      (prev - 1 + otherProjects[selectedProjectIndex].images.length) %
                      otherProjects[selectedProjectIndex].images.length
                  )
                }
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                className="absolute right-4 text-3xl text-white bg-black/50 rounded-full px-3 py-1"
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) =>
                      (prev + 1) %
                      otherProjects[selectedProjectIndex].images.length
                  )
                }
              >
                ›
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProjectIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-[#161f2b] text-white pb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 relative inline-block mt-12 text-white">
            Skills
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3.5 w-full h-1 bg-purple-500 rounded-full"></span>
          </h2>
          
          {/* Technical Skills */}
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Web Development / Technical Skills</h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: <SiReact />, label: "React" },
              { icon: <SiTailwindcss />, label: "Tailwind" },
              { icon: <SiNextdotjs />, label: "Next.js" },
              { icon: <SiHtml5 />, label: "HTML5" },
              { icon: <SiCss3 />, label: "CSS3" },
              { icon: <SiPhp />, label: "PHP" },
              { icon: <SiMysql />, label: "SQL" },
              { icon: <SiVite />, label: "Vite" },
              { icon: <FaLaptopCode />, label: "IT Troubleshooting" },
              { icon: <FaNetworkWired />, label: "Network Setup" },
              { icon: <FaServer />, label: "System Optimization" },
              { icon: <FaDatabase />, label: "Data Backup & Recovery" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center p-4 bg-[#1e293b] rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-300"
              >
                <div className="text-5xl mb-3 text-purple-400">{skill.icon}</div>
                <p className="text-center">{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Applications & Tools */}
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Applications & Tools</h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <VscVscode />, label: "Visual Studio Code" },
              { icon: <SiFigma />, label: "Figma" },
              { icon: <SiSalesforce />, label: "Salesforce" },
              { icon: <SiQuickbooks />, label: "QuickBooks" },
              { icon: <FaMicrosoft />, label: "Microsoft Office" },
              { icon: <SiGoogle />, label: "Google Workspace" },
              { icon: <SiSlack />, label: "Slack" },
              { icon: <SiTrello />, label: "Trello" },
              { icon: <SiGithub />, label: "Git/GitHub" },
              { icon: <SiZoom />, label: "Zoom" },
              { icon: <img src={heyorcaLogo} alt="HeyOrca" className="w-9 h-9 object-contain" />, label: "HeyOrca" },
              { icon: <img src={canvaLogo} alt="Canva" className="w-12 h-12 object-contain" />, label: "Canva" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center p-4 bg-[#1e293b] rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-300"
              >
                <div className="text-5xl mb-3 text-purple-400">{tool.icon}</div>
                <p className="text-center">{tool.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen bg-[#0e141b] text-white px-6 py-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 relative inline-block text-white">
          Get in Touch
          <span className="absolute left-0 -bottom-3.5 w-full h-1 bg-purple-500 rounded-full"></span>
        </h2>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4"><div className="w-12 h-12 bg-[#1b2433] flex items-center justify-center rounded-full"><FaEnvelope className="text-xl text-purple-400" /></div><span>neil.rosete11.nr@gmail.com</span></li>
              <li className="flex items-center gap-4"><div className="w-12 h-12 bg-[#1b2433] flex items-center justify-center rounded-full"><FaPhoneAlt className="text-xl text-purple-400" /></div><span>+63 917 712 00504</span></li>
              <li className="flex items-center gap-4"><div className="w-12 h-12 bg-[#1b2433] flex items-center justify-center rounded-full"><FaLinkedin className="text-xl text-purple-400" /></div><span>linkedin.com/in/nlldiamond</span></li>
            </ul>
          </div>

          {/* Formspree */}
          <form
            action="https://formspree.io/f/xvgqlegv"
            method="POST"
            className="bg-[#1b2433] p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div><label className="block mb-2 text-sm">Name</label><input type="text" name="name" required className="w-full px-4 py-2 rounded-lg bg-[#0e141b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]" placeholder="Your name" /></div>
            <div><label className="block mb-2 text-sm">Email</label><input type="email" name="email" required className="w-full px-4 py-2 rounded-lg bg-[#0e141b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]" placeholder="you@example.com" /></div>
            <div><label className="block mb-2 text-sm">Message</label><textarea name="message" rows={5} required className="w-full px-4 py-2 rounded-lg bg-[#0e141b] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4b6cb7]" placeholder="Write your message..."></textarea></div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#4b6cb7] to-[#182848] py-3 rounded-lg hover:opacity-90 transition">Send Message</button>
          </form>
        </div>
      </motion.section>
    </>
  );
}

export default App;
