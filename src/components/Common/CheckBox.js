import React from "react";

const CheckBox = ({ title, name, value, options, onChange, ...attributes }) => {
  return (
    <>
      <label className="block text-base font-bold text-gray-700">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mt-2">
            <input
              type="checkbox"
              name={name}
              checked={value === option}
              required={options.includes(value) ? false : true}
              className="h-4 w-4 border-2 border-gray-500 rounded-sm text-purple-600 focus:ring-transparent cursor-pointer"
              onChange={(e) => {
                if (e.target.checked) {
                  onChange(option, name);
                } else {
                  onChange("", name);
                }
              }}
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
