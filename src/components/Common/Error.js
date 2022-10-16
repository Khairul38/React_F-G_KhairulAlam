import React from 'react';

const Error = ({message}) => {
  return (
    <div className="flex items-center">
      <div className="relative bg-red-100 max-w-xl px-1 py-1 font-medium border border-red-400 text-red-500 rounded shadow w-full flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <span className="block ml-1 text-sm">{message}</span>
      </div>
    </div>
  );
};

export default Error;