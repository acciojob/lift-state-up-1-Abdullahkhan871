import React from "react";

const Child1 = ({ setShowModal }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <button onClick={() => setShowModal((pre) => !pre)}>Show Modal</button>
    </div>
  );
};

export default Child1;
