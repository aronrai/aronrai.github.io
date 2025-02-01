import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["a Web Developer.", "a MERN Stack Developer.", "a Gamer."], // Texts to type
      typeSpeed: 50, // Typing speed
      backSpeed: 30, // Backspacing speed
      loop: true, // Infinite loop
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return <span ref={typedElement} />;
};

export default TypedText;
