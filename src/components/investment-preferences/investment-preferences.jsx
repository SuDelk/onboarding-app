import React, { useState } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button
} from "@mui/material";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Swal from 'sweetalert2';
import "../../styles/investment-preferences.css";
import "../../App.css";
import "../../styles/common.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import thirdStepImage from "../../images/thirdstep.png";
import quoteForThird from "../../images/quote-page3.png";
import { isAtLeastOneCheckboxChecked } from "../validators/validators";
import checkboxOptions from "./real-estate.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function InvestmentPreferences() {

  const [isLoading, setIsLoading] = useState(false);

  //initailizing checkbox states ( real estate names)
  const [checkboxStates, setCheckboxStates] = useState(() => {
    const initialState = {};
    checkboxOptions.forEach((option) => {
      initialState[option.name] = false;
    });
    return initialState;
  });

  const handleCheckboxChange = (checkboxName) => (event) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [checkboxName]: event.target.checked,
    }));
  };

  async function handleFinish() {
    setIsLoading(true);
    // check validation for atleast one checkbox is checked
    if (isAtLeastOneCheckboxChecked(checkboxStates)) {
      const result = {
        data: {
          fullName: sessionStorage.getItem("fullName") || "",
          phoneNumber: sessionStorage.getItem("phoneNumber") || "",
          email: sessionStorage.getItem("email") || "",
          country: sessionStorage.getItem("country") || "",
          to: sessionStorage.getItem("to") || 0,
          from: sessionStorage.getItem("from") || 0,
          isAccredited: sessionStorage.getItem("isAccredited") || '',
          ...checkboxStates,
        }
      };
      try {
        await axios.post(`https://strapi-onboarding-app.onrender.com/api/profiles`, result)
          .then(() => {
            Swal.fire({
              title: 'Successful!',
              text: 'Onboarding process done!',
              icon: 'success',
              confirmButtonText: 'OK',
            });
          }).catch((err) => {
            Swal.fire({
              title: 'Error!',
              text: 'Check the backend connection!',
              icon: 'error',
              confirmButtonText: 'OK',
            });
            console.log(err);
          })
      } finally {
        setIsLoading(false); // Hide the loader after API call is complete
      }
    } else {
      setIsLoading(false);
      Swal.fire({
        title: 'Error!',
        text: 'Please select at least one preference before finishing!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  const navigate = useNavigate();
  function goBack() {
    navigate("/investment-plan");
  }
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
              <a className="link-top">
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
              <a href='' onClick={goBack}>
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
          {/* Loader */}
          {isLoading && (
            <div className="loader-overlay">
              <div className="loader">
                {/* You can put your custom loader content here */}
                Loading...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvestmentPreferences;
