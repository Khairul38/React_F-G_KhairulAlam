import React from "react";

const CheckBox = ({ isChecked, title, options, ...attributes }) => {
  return (
    <>
      <label className="block text-base font-bold text-gray-700">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-4">
        {options.map((option, index) => (
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={isChecked}
              className="h-4 w-4 border-2 border-gray-500 rounded-sm text-purple-600 focus:ring-transparent"
              {...attributes}
            />
            <label className="ml-3 block text-sm text-gray-900 font-medium">
              {option}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckBox;
