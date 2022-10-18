import React from "react";

const Button = ({ name, color,w, ...attributes }) => {
  return (
    <button
      type="submit"
      className={`group relative w-${w} flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded text-white  ${
        color === "purple" && "bg-purple-600 hover:bg-purple-700"
      } ${color === "green" && "bg-green-600 hover:bg-green-700"} ${
        color === "pink" && "bg-pink-500 hover:bg-pink-600"
      }`}
      {...attributes}
    >
      <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
      {name}
    </button>
  );
};

export default Button;
