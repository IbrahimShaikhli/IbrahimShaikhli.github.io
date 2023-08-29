import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ProjectCard = ({ title, description, thumbnailSrc }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 } // Adjust this value to control when the animation starts
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-4 mb-8"
    >
      <img
        src={thumbnailSrc}
        alt="Project Thumbnail"
        className="w-full h-auto mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-teal-500 hover:underline">
        View Details
      </a>
    </motion.div>
  );
};

export default ProjectCard;
