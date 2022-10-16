import React from "react";
import "react-phone-number-input/style.css";
import "./PhoneInputField.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import Error from "./Error";

const PhoneInputField = ({ phoneNumber, onChange, error, setError }) => {
  return (
    <>
      <label className="block text-base font-bold text-gray-700 mb-2">
        Phone
        <span className="text-red-500">*</span>
      </label>
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="IN"
        value={phoneNumber}
        rules={{ required: true }}
        onChange={(e) => {
          if (e) {
            onChange(e, "phone");
            setError(false);
          } else {
            onChange("", "phone");
          }
        }}
      />
      {phoneNumber && !isValidPhoneNumber(phoneNumber) && (
        <div className="mt-2">
          <Error message="Please enter your valid phone number" />
        </div>
      )}
      {error && (
        <div className="mt-2">
          <Error message="Please enter your valid phone number" />
        </div>
      )}
    </>
  );
};

export default PhoneInputField;
