import React, { useState } from "react";
import "./../styles/App.css";
import Child1 from "./Child1";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child1 setShowModal={setShowModal} />
      {showModal && <Modal />}
    </div>
  );
};

export default App;
