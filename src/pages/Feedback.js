import React, { useState } from "react";
import FeedbackAddForm from "../components/Form/FeedbackAddForm";

const Feedback = () => {
  const [opened, setOpened] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <div className="bg-slate-100 m-8 p-5">
      {/* Header section */}
      <header className="px-8 py-7 bg-white rounded-md">
        <h1 className="text-2xl font-bold mb-2 leading-none">Aromatic Bar</h1>
        <p>
          We are committed to providing you with the best dining experience
          possible, so we welcome your comments. <br /> Please fill out this
          questionnaire. Thank you.
        </p>
      </header>
      {/* Feedback add form section */}
      <div className="px-8 py-7 mt-5 bg-white rounded-md">
        <FeedbackAddForm />
      </div>
    </div>
  );
};

export default Feedback;
