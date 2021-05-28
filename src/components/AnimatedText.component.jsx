import React from "react";

const AnimatedText = ({ text }) => (
  <h1 className="animated-text-container">
    {[...text].map((value, id) => (
      <div key={id} className="animated-text-item">
        {value}
      </div>
    ))}
  </h1>
);

export default AnimatedText;
