import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "AWS Cloud Engineer",
          "Aspiring Cloud Architect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
