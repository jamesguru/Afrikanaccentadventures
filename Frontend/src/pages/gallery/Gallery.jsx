import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import "./gallery.css";
const Gallery = () => {
  const transition = { duration: 5, type: "spring" };
  return (
    <div>
      <Navbar />

      <div className="gallery-background">
        <div className="gallery-name">
          <h1>Activities</h1>
        </div>
      </div>

      <div className="gallery">
        <motion.img
          animate={{ y: [0, 20, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          src="images/cruser2.jpg"
          alt=""
          className="gallery-image"
        />

        <motion.img
          animate={{ y: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          src="images/cruser3.jpg"
          alt=""
          className="gallery-image"
        />
        <motion.img
          animate={{ y: [0, 20, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          src="images/Balloon.jpg"
          alt=""
          className="gallery-image"
        />

        <motion.img
          animate={{ y: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          src="images/bus.jpg"
          alt=""
          className="gallery-image"
        />

        <motion.img
          animate={{ y: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          src="images/tourists.jpg"
          alt=""
          className="gallery-image"
        />
        <motion.img
          animate={{ y: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          src="images/cruser7.jpg"
          alt=""
          className="gallery-image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
