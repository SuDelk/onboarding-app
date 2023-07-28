import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, FormControlLabel, Checkbox } from "@mui/material";
import Button from "@mui/material/Button";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "../styles/investment-preferences.css";
import "../App.css";
import "../styles/common.css";

import thirdStepImage from "../images/thirdstep.png";
import quoteForThird from "../images/quote-page3.png";

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

  const handleCheckboxChange = (checkboxName) => (event) => {
    setCheckboxStates({
      ...checkboxStates,
      [checkboxName]: event.target.checked,
    });
  };

  const navigate = useNavigate();

  const isAtLeastOneCheckboxChecked = () => {
    return Object.values(checkboxStates).some((isChecked) => isChecked);
  };

  const handleFinish = () => {
    // Check if at least one checkbox is checked before proceeding
    if (isAtLeastOneCheckboxChecked()) {
      const result = {};


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
                  <Grid item xs={3}>
                    <div
                      className={
                        checkboxStates.singleFamily
                          ? "checked-box"
                          : " one-checkbox"
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxStates.singleFamily}
                            onChange={handleCheckboxChange("singleFamily")}
                            style={{
                              color: checkboxStates.singleFamily
                                ? "#2696e8"
                                : "#d5d9dc",
                            }}
                          />
                        }
                      />
                      Single family
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      className={
                        checkboxStates.residentialMultiFamily
                          ? "checked-box"
                          : " one-checkbox"
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxStates.residentialMultiFamily}
                            onChange={handleCheckboxChange(
                              "residentialMultiFamily"
                            )}
                            style={{
                              color: checkboxStates.residentialMultiFamily
                                ? "#2696e8"
                                : "#d5d9dc",
                            }}
                          />
                        }
                      />
                      Residential multifamily
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      className={
                        checkboxStates.commercialRetail
                          ? "checked-box"
                          : " one-checkbox"
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxStates.commercialRetail}
                            onChange={handleCheckboxChange("commercialRetail")}
                            style={{
                              color: checkboxStates.commercialRetail
                                ? "#2696e8"
                                : "#d5d9dc",
                            }}
                          />
                        }
                      />
                      Commercial retail
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      className={
                        checkboxStates.commercialIndustrial
                          ? "checked-box"
                          : " one-checkbox"
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxStates.commercialIndustrial}
                            onChange={handleCheckboxChange(
                              "commercialIndustrial"
                            )}
                            style={{
                              color: checkboxStates.commercialIndustrial
                                ? "#2696e8"
                                : "#d5d9dc",
                            }}
                          />
                        }
                      />
                      Commercial industrial
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className="checkbox-row">
                <Grid container spacing={8}>
                  <Grid item xs={3}>
                    <div
                      className={
                        checkboxStates.commercialHospitality
                          ? "checked-box"
                          : " one-checkbox"
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxStates.commercialHospitality}
                            onChange={handleCheckboxChange(
                              "commercialHospitality"
                            )}
                            style={{
                              color: checkboxStates.commercialHospitality
                                ? "#2696e8"
                                : "#d5d9dc",
                            }}
                          />
                        }
                      />
                      Commercial hospitality
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      className={
                        checkboxStates.commercialWarehousing
                          ? "checked-box"
                          : " one-checkbox"
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxStates.commercialWarehousing}
                            onChange={handleCheckboxChange(
                              "commercialWarehousing"
                            )}
                            style={{
                              color: checkboxStates.commercialWarehousing
                                ? "#2696e8"
                                : "#d5d9dc",
                            }}
                          />
                        }
                      />
                      Commercial warehousing
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      className={
                        checkboxStates.commercialOffice
                          ? "checked-box"
                          : " one-checkbox"
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxStates.commercialOffice}
                            onChange={handleCheckboxChange("commercialOffice")}
                            style={{
                              color: checkboxStates.commercialOffice
                                ? "#2696e8"
                                : "#d5d9dc",
                            }}
                          />
                        }
                      />
                      Commercial office
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      className={
                        checkboxStates.other ? "checked-box" : " one-checkbox"
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxStates.other}
                            onChange={handleCheckboxChange("other")}
                            style={{
                              color: checkboxStates.other
                                ? "#2696e8"
                                : "#d5d9dc",
                            }}
                          />
                        }
                      />
                      Other
                    </div>
                  </Grid>
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
