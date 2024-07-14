import React from "react";
import reactCoreConceptImg from "../../assets/react-core-concepts.png";
import "./header.css";

export const Header = () => {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  const updateDescription = Math.floor(
    Math.random() * (reactDescriptions.length - 1 + 1)
  );

  const description = reactDescriptions[updateDescription];

  return (
    <header>
      <img src={reactCoreConceptImg} alt="react core concept logo" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
