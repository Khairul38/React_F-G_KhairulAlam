import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import FeedbackSuccessModal from "../components/Common/Modals/FeedbackSuccessModal";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Table from "../components/Table/Table";
import Spinner from "../components/Common/Spinner";

const AllFeedback = () => {
  const [opened, setOpened] = useState(false);
  const [allFeedback, setAllFeedback] = useState([]);
  const [filteredFeedback, setFilteredFeedback] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = localStorage.getItem("allFeedback");
    const feedbackData = JSON.parse(getData);
    setAllFeedback(feedbackData);
    setLoading(false)
  }, []);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  if (allFeedback === null) return <div className="flex justify-center my-20">No Feedback found</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 mx-8 mt-8 mb-4 p-5">
          {/* Header section */}
          <header className="rounded-md flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold mb-2 leading-none">
                Aromatic Bar
              </h1>
              <p>
                {allFeedback.length}{" "}
                {allFeedback.length === 1 ? "record" : "records"} found.{" "}
                {filteredFeedback.length}{" "}
                {filteredFeedback.length <= 1 ? "filter" : "filters"} applied
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="border-2 border-gray-300 flex items-center rounded pr-2 bg-white">
                <input
                  className="outline-none border-none px-3 py-1.5 block w-32 placeholder-gray-300 font-medium rounded"
                  // type="text"
                  name="search"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <Icon
                  icon="ant-design:search-outlined"
                  width="25"
                  color="gray"
                />
              </div>
              <button className="border-2 rounded px-1 py-1.5 border-gray-300 bg-white">
                <Icon icon="ic:baseline-refresh" width="25" color="gray" />
              </button>
              <Link to="/">
                <Button name="Add New" color="green" />
              </Link>
            </div>
          </header>
          {/* Feedback add form section */}
          <div className="mt-5 bg-white rounded-md">
            <Table
              allFeedback={allFeedback}
              search={search}
              filteredFeedback={filteredFeedback}
              setFilteredFeedback={setFilteredFeedback}
            />
          </div>
        </div>
        <div className="mx-8 mb-8 flex justify-end">
          <Button name="Delete" color="pink" />
        </div>
      </div>
      {/* Modal */}
      <FeedbackSuccessModal opened={opened} controlModal={controlModal} />
    </>
  );
};

export default AllFeedback;
