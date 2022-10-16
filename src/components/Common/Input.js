import React from "react";
import Error from "./Error";

const Input = ({ title, type, errorMessage, ...attributes }) => {
  return (
    <>
      <label className="block text-base font-bold text-gray-700">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        className="mt-2 px-3 py-2  focus:border-purple-600 block w-full sm:text-sm border placeholder-gray-300 font-medium border-gray-300 rounded"
        {...attributes}
      />
      {errorMessage && (
        <div className="mt-2">
          <Error message={errorMessage} />
        </div>
      )}
    </>
  );
};

export default Input;
