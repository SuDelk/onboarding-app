import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MuiPhoneNumber from "material-ui-phone-number";
import MenuItem from "@mui/material/MenuItem";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import countryList from "react-select-country-list";
import "../../styles/contact-details.css";
import "../../App.css";
import firstStepImage from "../../images/firststep.png";
import quoteForFirst from "../../images/quote-page1.png";
import "../../styles/common.css";
import { useNavigate } from "react-router-dom";

import { validateFullName, validatePhoneNumber, validateEmail, validateCountry } from "../validators/validators";

function ContactDetails() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(
    sessionStorage.getItem("fullName") ? sessionStorage.getItem("fullName") : ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    sessionStorage.getItem("phoneNumber")
      ? sessionStorage.getItem("phoneNumber")
      : ""
  );
  const [email, setEmail] = useState(
    sessionStorage.getItem("email") ? sessionStorage.getItem("email") : ""
  );
  const [country, setCountry] = useState(
    sessionStorage.getItem("country") ? sessionStorage.getItem("country") : ""
  );
  const options = countryList().getData();

  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryError, setCountryError] = useState("");

  const skip = () => {
    navigate("/investment-plan");
  }

  const handleNext = () => {
    // Perform validation for each field
    const fullNameError = validateFullName(fullName);
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const emailError = validateEmail(email);
    const countryError = validateCountry(country);

    // If any validation errors are present, set the error messages
    if (fullNameError || phoneNumberError || emailError || countryError) {
      setFullNameError(fullNameError);
      setPhoneNumberError(phoneNumberError);
      setEmailError(emailError);
      setCountryError(countryError);
    } else {
      sessionStorage.setItem("fullName", fullName);
      sessionStorage.setItem("phoneNumber", phoneNumber);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("country", country);
      navigate("/investment-plan");
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
            <img
              className="flow-of-process"
              src={firstStepImage}
              alt="First Step"
            />
          </div>
          <div className="quote-container">
            <img className="quote" src={quoteForFirst} alt="First Step" />
          </div>
        </div>
        <div className="box2">
          <div className="header-of-page">
            <div className="left-top">STEP 1 OF 3</div>
            <div className="right-top">
              Lost or have trouble?&nbsp;
              <a href="" className="link-top">
                Get help&nbsp;
                <BsArrowRight size={15} fontWeight={700} />
              </a>
            </div>
          </div>
          <div className="contact-details-container">
            <div style={{ marginBottom: "4.5%" }}>
              <h2>Contact details</h2>
              <p>
                Welcome to United Properties, we are glad to see you! Let’s get
                started by letting us know a little bit about you.
              </p>
            </div>
            <div className="half-width">
              <TextField
                label="Full Name"
                value={fullName}
                variant="standard"
                onChange={handleFullNameChange}
                fullWidth
                error={!!fullNameError}
                helperText={fullNameError}
              />
            </div>
            <div className="half-width lower-phone-number">
              <MuiPhoneNumber
                value={phoneNumber}
                variant="standard"
                defaultCountry={"us"}
                onChange={handlePhoneNumberChange}
                fullWidth
                error={!!phoneNumberError}
                helperText={phoneNumberError}
              />
            </div>
            <div className="full-width">
              <TextField
                variant="standard"
                label="Email Address"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                error={!!emailError}
                helperText={emailError}
              />
            </div>
            <div className="full-width">
              <TextField
                select
                label="Country"
                variant="standard"
                value={country}
                onChange={handleCountryChange}
                fullWidth
                error={!!countryError}
                helperText={countryError}
                SelectProps={{
                  style: {
                    fontSize: "12px",
                    fontWeight: "bold",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <h3>Privacy policy</h3>
              <p>
                We know you care about how your personal information is used and
                shared, so we take your privacy seriously
              </p>
              <a href="" className="link-privacy">
                Expand privacy policy&nbsp;
                <BsArrowRight size={15} fontWeight={700} />
              </a>
            </div>
          </div>
          <div className="bottom-row">
            <div className="link-to-home">
              <a href="">
                <BsArrowLeft size={11} fontWeight={700} />
                &nbsp;Back to the homepage
              </a>
            </div>
            <div className="next-button-and-skip">
              <Button variant="contained" id="skip" onClick={skip}>
                Skip for now
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next Step&nbsp;
                <BsArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
