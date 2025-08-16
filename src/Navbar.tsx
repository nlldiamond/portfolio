import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeInOut,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: easeInOut } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: easeInOut },
    },
  };

  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <motion.header
      animate={{ height: isOpen ? "auto" : "4.5rem" }}
      transition={{ duration: 0.4, ease: easeInOut }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-sm border-b border-white/10 overflow-hidden"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white uppercase tracking-wider text-sm">
        <h1 className="font-bold text-lg tracking-widest text-purple-400">
          niru
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition"
            >
              {item}
              <span className="block h-[1px] w-0 group-hover:w-full transition-all bg-purple-400 duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden px-6 pb-4 text-white text-sm uppercase tracking-wider text-right w-fit ml-auto"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={linkVariants}
                className="flex w-full items-center justify-end py-3 px-6 rounded-md hover:bg-purple-500/10 hover:text-purple-400 transition"
                onClick={(e) => {
                  e.preventDefault(); // stop default anchor jump

                  const section = document.getElementById(item.toLowerCase());
                  if (section) {
                    const yOffset = -70; // adjust for fixed header
                    const y =
                      section.getBoundingClientRect().top +
                      window.scrollY +
                      yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }

                  setIsOpen(false);
                }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
