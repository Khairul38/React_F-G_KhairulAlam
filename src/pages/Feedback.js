import React, { useState } from "react";
import Button from "../components/Common/Button";
import FeedbackAddForm from "../components/Form/FeedbackAddForm";

const Feedback = () => {
  const [opened, setOpened] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={handleFormSubmit}>
        <div className="bg-slate-100 mx-8 mt-8 mb-4 p-5">
          {/* Header section */}
          <header className="px-8 py-7 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-2 leading-none">
              Aromatic Bar
            </h1>
            <p>
              We are committed to providing you with the best dining experience
              possible, so we welcome your comments. <br /> Please fill out this
              questionnaire. Thank you.
            </p>
          </header>
          {/* Feedback add form section */}
          <div className="px-8 pt-7 pb-20 mt-5 bg-white rounded-md">
            <FeedbackAddForm />
          </div>
        </div>
        <div className="mx-8 mb-8 flex justify-end">
          <Button type="submit" name="Submit Review" color="green" />
        </div>
      </form>
    </div>
  );
};

export default Feedback;
