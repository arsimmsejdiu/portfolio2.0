import React from "react";

const AnimatedText = ({ text }) => (
  <h1 className="animated-text-container">
    {[...text].map((value) => (
      <div className="animated-text-item">{value}</div>
    ))}
  </h1>
);

export default AnimatedText;
