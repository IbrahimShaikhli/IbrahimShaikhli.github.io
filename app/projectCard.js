import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";

const ProjectCard = ({ title, description, thumbnailSrc, githubLink, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const delay = 0.5 * index;
      setTimeout(() => {
        // Start animation or other actions when the component is in view
      }, delay * 1000);
    }
  }, [inView, index]);

  const fadeIn = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.3 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeIn}
      className="bg-gray-800 rounded-lg shadow-md p-3 mx-2 mb-3 relative"
      style={{ maxWidth: "300px" }} // Set a maximum width for the card
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.05,
          speed: 500,
          transition: true,
          perspective: 1000,
        }}
      >
        <div className="image-container">
          <Image
            src={thumbnailSrc}
            alt="Project Thumbnail"
            width={300} // Set the appropriate width
            height={200} // Set the appropriate height
          />
          <h3 className="text-lg font-semibold mb-1 text-gray-200">{title}</h3>
          <p className="text-gray-200 ">{description}</p>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <AiFillGithub className="hover:text-purple-600 hover-glow" size={30} />
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
