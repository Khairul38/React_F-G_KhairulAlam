import React from "react";
import { Link } from "react-router-dom";

const TableItem = ({ feedback, checkedItems, setCheckedItems }) => {
  return (
    <tbody>
      <tr className="bg-white border-b border-gray-300 hover:bg-gray-50">
        <td className="p-4 w-4 border-r border-gray-300">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={checkedItems.includes(feedback.id)}
              className="h-4 w-4 border-2 border-gray-500 rounded-sm text-purple-600 focus:ring-transparent cursor-pointer"
              onChange={(e) => {
                if (e.target.checked) {
                  setCheckedItems([...checkedItems, feedback.id]);
                } else {
                  setCheckedItems(
                    checkedItems.filter((i) => i !== feedback.id)
                  );
                }
              }}
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
  );
};

export default TableItem;
