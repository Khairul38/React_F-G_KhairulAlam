import React from "react";
import CheckBox from "../Common/CheckBox";
import Input from "../Common/Input";
import PhoneInputField from "../Common/PhoneInputField";

const FeedbackDetailsForm = ({ feedback }) => {
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-6 gap-x-14 gap-y-6">
        <div className="col-span-6 sm:col-span-3">
          <Input
            title="Customer Name"
            name="name"
            placeholder="E.g. Jon snow"
            required
            value={feedback[0].name}
            disabled={true}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <Input
            title="Email"
            name="email"
            placeholder="E.g. abc@gmail.com"
            required
            email={feedback[0].email}
            value={feedback[0].email}
            disabled={true}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <PhoneInputField
            phoneNumber={feedback[0].phone}
            disabled={true}
            // onChange={handleOnChange}
            // error={error}
            // setError={setError}
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-x-14 gap-y-6">
        <div className="col-span-6 sm:col-span-3">
          <CheckBox
            title="Please rate the quality of the service you received from your host."
            name="serviceQuality"
            options={["Excellent", "Good", "Fair", "Bad"]}
            value={feedback[0].serviceQuality}
            disabled={true}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <CheckBox
            title="Please rate the quality of your beverage."
            name="beverageQuality"
            options={["Excellent", "Good", "Fair", "Bad"]}
            value={feedback[0].beverageQuality}
            disabled={true}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <CheckBox
            title="Was our restaurant clean?"
            name="restaurantClean"
            options={["Excellent", "Good", "Fair", "Bad"]}
            value={feedback[0].restaurantClean}
            disabled={true}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <CheckBox
            title="Please rate your overall dining experience."
            name="diningExperience"
            options={["Excellent", "Good", "Fair", "Bad"]}
            value={feedback[0].diningExperience}
            disabled={true}
            // onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetailsForm;
