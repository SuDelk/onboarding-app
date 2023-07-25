import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MuiPhoneNumber from "material-ui-phone-number";
import MenuItem from "@mui/material/MenuItem";
import countryList from "react-select-country-list";
import "../styles/contact-details.css";
import "../App.css";

function ContactDetails() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const options = countryList().getData();

  const handleNext = () => {
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Selected Country:", country);
  };

  return (
    <div className="full-page-container">
      <div className="grid-container">
        <div className="box1">
          <div className="site-name united">UNITED</div>
          <div className="site-name properties">PROPERTIES</div>
        </div>
        <div className="box2">
          <h1>Contact Details</h1>
          <div className="contact-details-container">
            <div className="half-width">
              <TextField
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className="half-width">
              <MuiPhoneNumber
                defaultCountry={"us"}
                onChange={setPhoneNumber}
                fullWidth
              />
            </div>
            <div className="full-width">
              <TextField
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className="full-width">
              <TextField
                select
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                fullWidth
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
