import { TypeAnimation } from "react-type-animation";

const TypingDesignation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer", 1500,
        "Python Developer", 1500,
        "Software Developer", 1500,
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
      className="text-purple-600 text-xl font-semibold"
    />
  );
};

export default TypingDesignation;
