import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Table = ({ allFeedback, search, setFilteredFeedback }) => {
  const [checked, setChecked] = useState(false);

  console.log(allFeedback);

  // Feedback filtered by (name, email, phone,serviceQuality, beverageQuality, restaurantClean,diningExperience)
  const filterBySearch = (feedback) => {
    if (search.length === 0) {
      return true;
    } else if (feedback.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else if (feedback.email.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else if (feedback.phone.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else if (
      feedback.serviceQuality.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    } else if (
      feedback.beverageQuality.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    } else if (
      feedback.restaurantClean.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    } else if (
      feedback.diningExperience.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (search.length === 0) {
      setFilteredFeedback([]);
    } else {
      setFilteredFeedback(allFeedback.filter(filterBySearch));
    }
  }, [search]);

  return (
    <div className="relative rounded">
      <table className="w-full h-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 bg-violet-100 sticky top-0 z-40">
          <tr>
            <th scope="col" className="p-4 border-r border-gray-300">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  // name={name}
                  // checked={value === option}
                  // required={options.includes(value) ? false : true}
                  className="h-4 w-4 border-2 border-gray-500 rounded-sm text-purple-600 focus:ring-transparent cursor-pointer"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setChecked(true);
                      // onChange(option, name);
                    } else {
                      setChecked(false);
                      // onChange("", name);
                    }
                  }}
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap border-r border-gray-300 text-center font-bold text-sm"
            >
              Form details
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap border-r border-gray-300 text-center font-bold text-sm"
            >
              Customer Name
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap border-r border-gray-300 text-center font-bold text-sm"
            >
              Email
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap border-r border-gray-300 text-center font-bold text-sm"
            >
              Phone
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap border-r border-gray-300 text-center font-bold text-sm"
            >
              Please rate the quality of the service you received from your
              host.
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap border-r border-gray-300 text-center font-bold text-sm"
            >
              Please rate the quality of your beverage.
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap border-r border-gray-300 text-center font-bold text-sm"
            >
              Was our restaurant clean?
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap border-r border-gray-300 text-center font-bold text-sm"
            >
              Please rate your overall dining experience.
            </th>
            <th
              scope="col"
              className="py-3 px-6 whitespace-nowrap text-center font-bold text-sm"
            >
              Action
            </th>
          </tr>
        </thead>

        {/* --Feedback filtered by (name, email, phone,serviceQuality,
        beverageQuality, restaurantClean,diningExperience)-- */}
        {allFeedback.filter(filterBySearch).map((feedback, index) => (
          <tbody key={index}>
            <tr className="bg-white border-b border-gray-300 hover:bg-gray-50">
              <td className="p-4 w-4 border-r border-gray-300">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    // name={name}
                    // checked={checked}
                    // required={options.includes(value) ? false : true}
                    className="h-4 w-4 border-2 border-gray-500 rounded-sm text-purple-600 focus:ring-transparent cursor-pointer"
                    // onChange={(e) => {
                    //   if (e.target.checked) {
                    //     onChange(option, name);
                    //   } else {
                    //     onChange("", name);
                    //   }
                    // }}
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap border-r border-gray-300 text-center"
              >
                <Link to={`/allFeedback/${feedback.id}`}>
                  <span className="font-medium text-blue-500 hover:underline cursor-pointer">
                    View details
                  </span>
                </Link>
              </th>
              <td className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap border-r border-gray-300 text-center">
                {feedback.name}
              </td>
              <td className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap border-r border-gray-300 text-center">
                {feedback.email}
              </td>
              <td className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap border-r border-gray-300 text-center">
                {feedback.phone}
              </td>
              <td className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap border-r border-gray-300 text-center">
                {feedback.serviceQuality}
              </td>
              <td className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap border-r border-gray-300 text-center">
                {feedback.beverageQuality}
              </td>
              <td className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap border-r border-gray-300 text-center">
                {feedback.restaurantClean}
              </td>
              <td className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap border-r border-gray-300 text-center">
                {feedback.diningExperience}
              </td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <span className="font-medium text-blue-600 hover:underline cursor-pointer">
                  Edit
                </span>
                <span className="font-medium text-red-600 hover:underline cursor-pointer">
                  Remove
                </span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
