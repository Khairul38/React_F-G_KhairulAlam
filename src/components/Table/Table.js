import React, { useEffect } from "react";
import TableItem from "./TableItem";

const Table = ({
  allFeedback,
  search,
  setFilteredFeedback,
  checkedItems,
  setCheckedItems,
}) => {
  console.log(checkedItems);

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
    <div
      className={`relative rounded overflow-auto max-h-[65vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
    >
      <table className="w-full h-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 bg-violet-100 sticky top-0 z-0">
          <tr>
            <th scope="col" className="p-4 border-r border-gray-300">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.length === allFeedback.length}
                  className="h-4 w-4 border-2 border-gray-500 rounded-sm text-purple-600 focus:ring-transparent cursor-pointer"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCheckedItems(
                        allFeedback.filter(filterBySearch).map((f) => f.id)
                      );
                    } else {
                      setCheckedItems([]);
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

        {/* ---Feedback filtered by (name, email, phone,serviceQuality,
        beverageQuality, restaurantClean,diningExperience)--- */}
        {allFeedback.filter(filterBySearch).map((feedback) => (
          <TableItem
            key={feedback.id}
            feedback={feedback}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        ))}
      </table>
    </div>
  );
};

export default Table;
