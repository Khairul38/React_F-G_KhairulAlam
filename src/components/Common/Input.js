import React from "react";
import isValidEmail from "../../utils/isValidEmail";
import Error from "./Error";

const Input = ({ title, email, ...attributes }) => {
  return (
    <>
      <label className="block text-base font-bold text-gray-700">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="mt-2 px-3 py-2  focus:border-purple-600 block w-full sm:text-base border placeholder-gray-300 font-medium border-gray-300 rounded"
        {...attributes}
      />
      {email && !isValidEmail(email) && (
        <div className="mt-2">
          <Error message="Please enter your valid email" />
        </div>
      )}
    </>
  );
};

export default Input;
