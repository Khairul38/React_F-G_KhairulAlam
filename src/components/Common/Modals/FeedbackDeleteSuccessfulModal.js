import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const FeedbackDeleteSuccessfulModal = ({ opened, controlModal }) => {
  return (
    opened && (
      <>
        <div
          onClick={controlModal}
          className="fixed w-full h-full inset-0 z-10 bg-black/50"
        ></div>
        <div className="w-full h-full bg-white p-10 fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center flex justify-center items-center">
          <div>
            <svg
              data-aos="zoom-in"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 mx-auto bg-green-600 rounded-full text-white p-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <h2 className="mt-6 mb-2 text-center text-xl font-bold text-gray-900">
              Feedback successfully deleted
            </h2>
            {/* <span className="">
              We will work towards improving your experience
            </span> */}
            <div className="flex justify-center mt-6">
              <Link to="/allFeedback">
                <Button
                  onClick={controlModal}
                  name="Close"
                  color="purple"
                  w="32"
                />
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default FeedbackDeleteSuccessfulModal;
