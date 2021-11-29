import React, { useState } from "react";
import { DropdownDate } from "react-dropdown-date";
import LogoWhite from "../../images/tweeter-white.png";

const formatDate = (date) => {
  // formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const Register = () => {
  const [date, setDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date(0));
  return (
    <div className="register-modal container">
      <div className="register-heading">
        <h2 style={{ alignSelf: "baseline", margin: 0, cursor: "pointer" }}>
          <i className="fas fa-times"></i>
        </h2>
        <img src={LogoWhite} alt="White Logo" />
        <h1>Create your account</h1>
      </div>
      <form>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Confirm Password"
        />

        <label htmlFor="dob">
          Date of birth
          <span>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </span>
        </label>
        <DropdownDate
          selectedDate={
            // optional
            selectedDate
          }
          onDateChange={(date) => {
            // optional
            // console.log(date);
            setDate(date);
            setSelectedDate(formatDate(date));
          }}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
