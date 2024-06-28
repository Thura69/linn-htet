import { Menu } from "lucide-react";
import React, { useState, useEffect } from "react";
MenuMobileContent;
import { motion, AnimatePresence } from "framer-motion";
import { MenuMobileContent } from "./menu-mobile-content";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";

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
          <motion.div className="w-[48px] h-[48px] scale-75 hidden  fixed top-[30px] z-50 right-[50px] bg-textPrimary md:flex items-center justify-center rounded-[50%] cursor-pointer">
            <Hamburger
              color="white"
              size={20}
              toggled={open}
              toggle={setOpen}
            />
          </motion.div>
        )}
        <motion.div className="w-[48px] h-[48px] scale-75 flex  md:hidden fixed top-[20px] z-50 right-[20px] bg-textPrimary items-center justify-center rounded-[50%] cursor-pointer">
          <Hamburger color="white" size={20} toggled={open} toggle={setOpen} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.7 }}
            className="fixed inset-0 z-40   top-0 bottom-0 right-0 left-0 bg-[#e8e8e3]"
          >
            <MenuMobileContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
