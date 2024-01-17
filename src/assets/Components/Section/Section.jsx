import React from "react";

const Section = ({ title, content,...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {content}
    </section>
  );
};

export default Section;
