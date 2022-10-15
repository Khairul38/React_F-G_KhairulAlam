import React from "react";
import Input from "../Common/Input";

const FeedbackAddForm = () => {
  return (
    <form>
      <div className="grid grid-cols-6 gap-x-14 gap-y-6">
        <div className="col-span-6 sm:col-span-3">
          <Input
            type="name"
            title="Customer Name"
            name="name"
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
            type="email"
            title="Phone"
            name="phone"
            placeholder="E.g. abc@gmail.com"
            required
            // value={formData.title}
            // onChange={handleOnChange}
          />
        </div>
      </div>
    </form>
  );
};

export default FeedbackAddForm;
