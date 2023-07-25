import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MuiPhoneNumber from "material-ui-phone-number";
import MenuItem from "@mui/material/MenuItem";
import countryList from "react-select-country-list";
import "../styles/contact-details.css";
import "../App.css";
import firstStepImage from '../images/firststep.png';

function ContactDetails() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const options = countryList().getData();


  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryError, setCountryError] = useState("");

  const validateFullName = () => {
    return fullName ? "" : "Please enter your full name.";
  };

  const validatePhoneNumber = () => {
    return phoneNumber ? "" : "Please enter your phone number.";
  };

  const validateEmail = () => {
    return email ? "" : "Please enter your email address.";
  };

  const validateCountry = () => {
    return country ? "" : "Please select your country.";
  };

  const handleNext = () => {
    // Perform validation for each field
    const fullNameError = validateFullName();
    const phoneNumberError = validatePhoneNumber();
    const emailError = validateEmail();
    const countryError = validateCountry();

    // If any validation errors are present, set the error messages
    if (fullNameError || phoneNumberError || emailError || countryError) {
      setFullNameError(fullNameError);
      setPhoneNumberError(phoneNumberError);
      setEmailError(emailError);
      setCountryError(countryError);
    }
    else {
      // All fields are valid, proceed to the next step or submit the form
      sessionStorage.setItem("fullName", fullName);
      sessionStorage.setItem("phoneNumber", phoneNumber);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("country", country);
    }
  };

  // Reset the error messages when the user starts typing again
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setFullNameError("");
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setPhoneNumberError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCountryError("");
  };


  return (
    <div className="full-page-container">
      <div className="grid-container">
        <div className="box1">
          <div className="site-name united">UNITED</div>
          <div className="site-name properties">PROPERTIES</div>
          <div className="flow-of-process-container">
            <img className="flow-of-process" src={firstStepImage} alt="First Step" />
          </div>
        </div>
        <div className="box2">
          <h2>Contact Details</h2>
          <div className="contact-details-container">
            <div className="half-width">
              <TextField
                label="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
                required
                fullWidth
                error={!!fullNameError}
                helperText={fullNameError}
              />
            </div>
            <div className="half-width">
              <MuiPhoneNumber
                value={phoneNumber}
                defaultCountry={"us"}
                onChange={handlePhoneNumberChange}
                fullWidth
                error={!!phoneNumberError}
                helperText={phoneNumberError}
              />
            </div>
            <div className="full-width">
              <TextField
                label="Email Address"
                value={email}
                onChange={handleEmailChange}
                required
                fullWidth
                error={!!emailError}
                helperText={emailError}
              />
            </div>
            <div className="full-width">
              <TextField
                select
                label="Country"
                value={country}
                onChange={handleCountryChange}
                fullWidth
                required
                error={!!countryError}
                helperText={countryError}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
