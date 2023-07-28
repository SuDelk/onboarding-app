import React, { useState } from "react";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";
import Button from "@mui/material/Button";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "../../styles/investment-preferences.css";
import "../../App.css";
import "../../styles/common.css";

import thirdStepImage from "../../images/thirdstep.png";
import quoteForThird from "../../images/quote-page3.png";
import { isAtLeastOneCheckboxChecked } from "../validators/validators";

function InvestmentPreferences() {

  const [checkboxStates, setCheckboxStates] = useState({
    singleFamily: false,
    residentialMultiFamily: false,
    commercialRetail: false,
    commercialIndustrial: false,
    commercialHospitality: false,
    commercialWarehousing: false,
    commercialOffice: false,
    other: false,
  });

  const checkboxOptions = [
    {
      label: "Single family",
      name: "singleFamily",
    },
    {
      label: "Residential multifamily",
      name: "residentialMultiFamily",
    },
    {
      label: "Commercial retail",
      name: "commercialRetail",
    },
    {
      label: "Commercial industrial",
      name: "commercialIndustrial",
    },
    {
      label: "Commercial hospitality",
      name: "commercialHospitality",
    },
    {
      label: "Commercial warehousing",
      name: "commercialWarehousing",
    },
    {
      label: "Commercial office",
      name: "commercialOffice",
    },
    {
      label: "Other",
      name: "other",
    },
  ];

  const handleCheckboxChange = (checkboxName) => (event) => {
    setCheckboxStates({
      ...checkboxStates,
      [checkboxName]: event.target.checked,
    });
  };

  const handleFinish = () => {
    // Check if at least one checkbox is checked before proceeding
    if (isAtLeastOneCheckboxChecked(checkboxStates)) {
      const result = {
        fullName: sessionStorage.getItem('fullName') || '',
        phoneNumber: sessionStorage.getItem('phoneNumber') || '',
        email: sessionStorage.getItem('email') || '',
        country: sessionStorage.getItem('country') || '',
        to: sessionStorage.getItem('to') || 0,
        from: sessionStorage.getItem('from') || 0,
        singleFamily: checkboxStates.singleFamily,
        residentialMultiFamily: checkboxStates.residentialMultiFamily,
        commercialRetail: checkboxStates.commercialRetail,
        commercialIndustrial: checkboxStates.commercialIndustrial,
        commercialHospitality: checkboxStates.commercialHospitality,
        commercialWarehousing: checkboxStates.commercialWarehousing,
        commercialOffice: checkboxStates.commercialOffice,
        other: checkboxStates.other
      };
      alert(result.fullName);
      console.log(result)

    } else {
      // If no checkbox is checked, display an error message or alert
      alert("Please select at least one preference before finishing.");
    }
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
              src={quoteForThird}
              alt="First Step"
            />
          </div>
          <div className="quote-container">
            <img className="quote" src={thirdStepImage} alt="" />
          </div>
        </div>
        <div className="box2">
          <div className="header-of-page">
            <div className="left-top">STEP 3 OF 3</div>
            <div className="right-top">
              Lost or have trouble?&nbsp;
              <a href="" className="link-top">
                Get help&nbsp;
                <BsArrowRight size={15} fontWeight={700} />
              </a>
            </div>
          </div>
          <div className="preferences-details-container">
            <div style={{ marginBottom: "4.5%" }}>
              <h2>Investment preferences</h2>
              <p>
                This will help us figure out what your investment options are so
                that we can show you only possibly intresting for you deals.
              </p>
            </div>
            <h3>What kind of real estate are you interested in?</h3>
            <Grid container spacing={2}>
              <Grid item xs={12} className="checkbox-row">
                <Grid container spacing={8}>
                  {checkboxOptions.map((option) => (
                    <Grid key={option.name} item xs={3}>
                      <div
                        className={
                          checkboxStates[option.name]
                            ? "checked-box"
                            : " one-checkbox"
                        }
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checkboxStates[option.name]}
                              onChange={handleCheckboxChange(option.name)}
                              style={{
                                color: checkboxStates[option.name]
                                  ? "#2696e8"
                                  : "#d5d9dc",
                              }}
                            />
                          }
                        />
                        {option.label}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className="bottom-row">
            <div className="link-to-home">
              <a href="/investment-plan">
                <BsArrowLeft size={11} fontWeight={700} />
                &nbsp;Back to the previous step
              </a>
            </div>
            <div className="next-button-and-skip">
              <Button variant="contained" id="skip">
                Skip for now
              </Button>
              <Button variant="contained" color="primary" onClick={handleFinish}>
                Finish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentPreferences;
