import React from "react";

const Button = ({ name, isLoading, color, ...attributes }) => {
  return (
    <button
      disabled={isLoading}
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700"
      {...attributes}
    >
      <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
      {name}
    </button>
  );
};

export default Button;
