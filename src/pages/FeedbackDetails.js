import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Common/Spinner";
import FeedbackDetailsForm from "../components/Form/FeedbackDetailsForm";
// import Button from '../components/Common/Button';
// import FeedbackSuccessModal from '../components/Common/Modals/FeedbackSuccessModal';

const FeedbackDetails = () => {
  // const [opened, setOpened] = useState(false);
  // const [allFeedback, setAllFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({});
  const { feedbackId } = useParams();

  useEffect(() => {
    const getData = localStorage.getItem("allFeedback");
    const feedbackData = JSON.parse(getData);
    const singleFeedback = feedbackData.filter((f) => f.id === feedbackId);
    setFeedback(singleFeedback);
    setLoading(false);
  }, [feedbackId]);

  // const controlModal = () => {
  //   setOpened((prevState) => !prevState);
  // };

  if (loading) return <Spinner />;
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-100 mx-5 mt-5 mb-4 p-5">
          {/* Header section */}
          <header className="px-8 py-7 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-2 leading-none">
              Aromatic Bar
            </h1>
            <p>
              We are committed to providing you with the best dining experience
              possible, so we welcome your comments. <br /> Please fill out this
              questionnaire. Thank you.
            </p>
          </header>
          {/* Feedback add form section */}
          <div className="px-8 pt-7 pb-20 mt-5 bg-white rounded-md">
            <FeedbackDetailsForm feedback={feedback} />
          </div>
        </div>
        {/* <div className="mx-8 mb-8 flex justify-end">
            <Button name="Delete" color="pink" />
          </div> */}
      </div>
      {/* Modal */}
      {/* <FeedbackSuccessModal opened={opened} controlModal={controlModal} /> */}
    </>
  );
};

export default FeedbackDetails;
