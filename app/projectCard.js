import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ title, description, thumbnailSrc, githubLink }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      // Start animation or any other actions when the component is in view
    }
  }, [inView]);

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
        delay: 0.2,
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
      className="bg-teal-50 rounded-lg shadow-md p-4 mb-8 relative"
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
        <div>
          <img
            src={thumbnailSrc}
            alt="Project Thumbnail"
            className="w-full h-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2 text-gray-600">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <a href="#" className="text-teal-500 hover:underline">
            View Details
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <AiFillGithub className='hover:text-teal-300' size={24} />
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
