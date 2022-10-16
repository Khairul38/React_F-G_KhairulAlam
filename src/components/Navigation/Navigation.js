import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-slate-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 flex py-3 items-center h-16">
        <Link to="/">
          <p
            className={`mx-3 text-base font-semibold hover:text-purple-600 ${
              pathname === "/" ? "text-purple-600" : "text-gray-600"
            }`}
          >
            Feedback
          </p>
        </Link>
        <Link to="/allFeedback">
          <p
            className={`mx-3 text-base font-semibold hover:text-purple-600 ${
              pathname === "/allFeedback" ? "text-purple-600" : "text-gray-600"
            }`}
          >
            All Feedback
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
