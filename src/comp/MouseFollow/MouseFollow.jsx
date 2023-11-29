import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollow = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };
  return (
    <motion.div
      className="w-8 h-8 bg-opacity-0 pointer-events-none border-2 border-white rounded-full fixed top-0 left-0 z-20"
      variants={variants}
      animate="default"
    />
  );
};

export default MouseFollow;
