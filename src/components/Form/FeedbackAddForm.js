import React from "react";
import CheckBox from "../Common/CheckBox";
import Error from "../Common/Error";
import Input from "../Common/Input";

const FeedbackAddForm = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-6 gap-x-14 gap-y-6">
        <div className="col-span-6 sm:col-span-3">
          <Input
            type="name"
            title="Customer Name"
            name="customerName"
            placeholder="E.g. Jon snow"
            required
            // value={formData.title}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <Input
            type="email"
            title="Email"
            name="email"
            placeholder="E.g. abc@gmail.com"
            required
            // value={formData.title}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <Input
            type="phone"
            title="Phone"
            name="phone"
            placeholder="+919999999"
            required
            // value={formData.title}
            // onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-x-14 gap-y-6">
        <div className="col-span-6 sm:col-span-3">
          <CheckBox
            title="Please rate the quality of the service you received from your host."
            name="phone"
            options={["Excellent", "Good", "Fair", "Bad"]}
            required
            // value={formData.title}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <CheckBox
            title="Please rate the quality of the service you received from your host."
            name="phone"
            options={["Excellent", "Good", "Fair", "Bad"]}
            required
            // value={formData.title}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <CheckBox
            title="Please rate the quality of the service you received from your host."
            name="phone"
            options={["Excellent", "Good", "Fair", "Bad"]}
            required
            // value={formData.title}
            // onChange={handleOnChange}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <CheckBox
            title="Please rate the quality of the service you received from your host."
            name="phone"
            options={["Excellent", "Good", "Fair", "Bad"]}
            required
            // value={formData.title}
            // onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackAddForm;
