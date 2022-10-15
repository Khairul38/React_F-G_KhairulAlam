import React from "react";

const CheckBox = ({ isChecked, title, ...attributes }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
        {...attributes}
      />
      <label className="ml-2 block text-sm text-gray-900">{title}</label>
    </>
  );
};

export default CheckBox;
