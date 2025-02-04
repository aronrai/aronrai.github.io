import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["a Web Developer.", "a MERN Stack Developer.", "a Gamer."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedElement} />;
};

export default TypedText;
