import { Menu } from "lucide-react";
import React, { useState, useEffect } from "react";
MenuMobileContent;
import { motion, AnimatePresence } from "framer-motion";
import { MenuMobileContent } from "./menu-mobile-content";

export const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setOpen(false); // Optionally close the menu when scrolling back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            onClick={() => setOpen((prev) => !prev)}
            className="w-[35px] h-[35px] flex items-center justify-center fixed  top-[30px] z-50 right-[20px] bg-textPrimary rounded-[50%] cursor-pointer"
          >
            <Menu fill="white" className="w-5 h-5 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.7 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <MenuMobileContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
