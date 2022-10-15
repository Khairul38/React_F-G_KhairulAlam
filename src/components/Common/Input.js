import React from "react";

const Input = ({ title, type, ...attributes }) => {
  return (
    <>
      <label className="block text-sm font-bold text-gray-700">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        className="mt-2 px-3 py-2 outline-none focus:border-purple-600 block w-full shadow-sm sm:text-sm border-2 placeholder-gray-300 font-medium border-gray-300 rounded-md"
        {...attributes}
      />
    </>
  );
};

export default Input;
