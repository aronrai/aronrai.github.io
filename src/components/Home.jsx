import { MdWavingHand } from "react-icons/md";
import { motion } from "framer-motion";
import TypedText from "./TypedText";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  
  return (
    <div id="home" className="home div">
      <h1>Hello! I am Aron Rai.
      <motion.span
      animate={{ rotate: [0, 20, 0, 20, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ display: "inline-block", fontSize: "2rem" }}>
      <MdWavingHand />
      </motion.span></h1>
      <h3>I am <TypedText /></h3>
      <p>
        A passionate web developer dedicated to building seamless, dynamic, and user-focused web applications with
        modern technologies.
      </p>
      <div className="logos">
      <a href="https://github.com/aronrai" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} color="white" />
      </a>
      <a href="https://www.linkedin.com/in/aronrai" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} color="white" />
      </a>
    </div>
    </div>
  );
}

export default Home;
