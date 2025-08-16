import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (id: string) => {
    // Always store section to scroll
    setPendingScroll(id);

    // If mobile, close menu first
    if (isOpen) {
      setIsOpen(false);
    } else {
      // If desktop, scroll immediately
      scrollToSection(id);
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      console.log("✅ Scrolling into view:", id);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // After mobile menu closes (Framer Motion exit)
  const handleAnimationComplete = () => {
    if (pendingScroll) {
      scrollToSection(pendingScroll);
      setPendingScroll(null);
    }
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
              className="relative group transition cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.toLowerCase());
              }}
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
      <AnimatePresence onExitComplete={handleAnimationComplete}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="md:hidden px-6 pb-4 text-white text-sm uppercase tracking-wider text-right w-fit ml-auto"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="flex w-full items-center justify-end py-3 px-6 rounded-md hover:bg-purple-500/10 hover:text-purple-400 transition cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.toLowerCase());
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
