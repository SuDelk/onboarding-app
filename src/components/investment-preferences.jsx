import React, { useState } from "react";
import { TextField, Slider, Grid, FormControlLabel, Checkbox, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "../styles/investment-preferences.css";
import "../App.css";
import "../styles/common.css";
import thirdStepImage from "../images/thirdstep.png";
import quoteForThird from "../images/quote-page3.png";
import { useNavigate } from "react-router-dom";

function InvestmentPreferences() {

    const [singleFamily, setSingleFamily] = useState(false);
    const [residentialMultiFamily, setResidentialMultiFamily] = useState(false);
    const [commercialRetail, setCommercialRetail] = useState(false);
    const [commercialIndustrial, setCommercialIndustrial] = useState(false);
    const [commercialHospitality, setCommercialHospitality] = useState(false);
    const [commercialWarehousing, setCommercialWarehousing] = useState(false);
    const [commercialOffice, setCommercialOffice] = useState(false);
    const [other, setOther] = useState(false);
    

  const navigate = useNavigate();

  const checkboxData = [
    { id: 'singleFamily', label: 'Single family'},
    { id: 'residentialMultiFamily', label: 'Residential multifamily' },
    { id: 'commercialRetail', label: 'Commercial retail' },
    { id: 'commercialIndustrial', label: 'Commercial industrial' },
    { id: 'commercialHospitality', label: 'Commercial hospitality' },
    { id: 'commercialWarehousing', label: 'Commercial warehousing' },
    { id: 'commercialOffice', label: 'Commercial office' },
    { id: 'other', label: 'Other' },
  ];

  const handleNext = () =>{

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
              This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals.
              </p>
            </div>
            <h3>What kind of real estate are you interested in?</h3>
            <Grid container spacing={2}>
      {checkboxData.map((checkbox) => (
        
        <Grid key={checkbox.id} item xs={3}>
            <div className="checkbox-in-grid">
          <FormControlLabel
            control={<Checkbox id={checkbox.id} />}
            label={
                <Typography
                  color={'yes' === "yes" ? "primary" : "black"}
                  fontWeight={700}
                  fontSize={8}
                  margin={1}
                  display={'flex'}
                  justifyContent={"flex-end"}
                >
                  {checkbox.label}
                </Typography>
              }
          /></div>
        </Grid>
      ))}
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

export default InvestmentPreferences;
