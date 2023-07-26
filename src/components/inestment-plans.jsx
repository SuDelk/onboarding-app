import React, { useState } from "react";
import { TextField, Slider} from '@mui/material';
import Button from "@mui/material/Button";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, IconButton } from "@mui/material";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import "../styles/investment-plans.css";
import "../App.css";
import secondStepImage from '../images/secondstep.png';
import quoteForSecond from '../images/quote-page2.png';
import '../styles/common.css';
import { useNavigate } from "react-router-dom";

function InvestmentPlan() {

    const navigate = useNavigate();

    const [fromAmountOf, setFromAmountOf] = useState(0);
    const [toAmountOf, setToAmountOf] = useState(0);
    const [isAccredited, setIsAccredited] = useState("");

    const handleNext = () => { }

    const handleFromAmountChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
        setFromAmountOf(newValue === '' ? 0 : Number(newValue)); // Convert empty string to 0
    };

    const handleToAmountChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
        setToAmountOf(newValue === '' ? 0 : Number(newValue)); // Convert empty string to 0
    };
    // const handleChange = (event) => {
    //     isAccredited(event.target.value);
    //   };
    const handleSliderChange = (event, newValue) => {
        setFromAmountOf(newValue[0]);
        setToAmountOf(newValue[1]);
    };
    const formatNumberWithCommas = (number) => {
        return number.toLocaleString();
    };

    const marks = [
        {
            value: 10000,
            label: `$${formatNumberWithCommas(10000)}`,
        },
        {
            value: 250000,
            label: `$${formatNumberWithCommas(250000)}`,
        },
        {
            value: 500000,
            label: `$${formatNumberWithCommas(500000)}`,
        },
        {
            value: 750000,
            label: `$${formatNumberWithCommas(750000)}`,
        },
        {
            value: 1000000,
            label: `$${formatNumberWithCommas(1000000)}+`,
        },
    ];
    const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


    return (
        <div className="full-page-container">
            <div className="grid-container">
                <div className="box1">
                    <div className="site-name united">UNITED</div>
                    <div className="site-name properties">PROPERTIES</div>
                    <div className="flow-of-process-container">
                        <img className="flow-of-process" src={secondStepImage} alt="First Step" />
                    </div>
                    <div className="quote-container">
                        <img className="quote" src={quoteForSecond} alt="First Step" />
                    </div>
                </div>
                <div className="box2">
                    <div className="header-of-page">
                        <div className="left-top">STEP 2 OF 3</div>
                        <div className="right-top">
                            Lost or have trouble?&nbsp;
                            <a href="" className="link-top">Get help&nbsp;<BsArrowRight size={15} fontWeight={700} /></a>
                        </div>
                    </div>
                    <div className="investment-details-container">
                        <div style={{ marginBottom: "4.5%" }}>
                            <h2>Investment plans</h2>
                            <p>Let us know about your investment plans. This will help us get you to the right expert who will help you further.</p>
                        </div>
                        <h3>How much are you planning to invest in this year?</h3>
                        <div className="half-width">
                            <TextField
                                label="From"
                                value={`$${formatNumberWithCommas(fromAmountOf)}`} // Format number with commas
                                onChange={handleFromAmountChange}
                                variant="standard"
                                fullWidth
                            />
                        </div>
                        <div className="half-width">
                            <TextField
                                label="To"
                                value={`$${formatNumberWithCommas(toAmountOf)}`} // Format number with commas
                                onChange={handleToAmountChange}
                                variant="standard"
                                fullWidth
                            />
                        </div>
                        <div className="full-width">
                            <Slider
                                value={[fromAmountOf, toAmountOf]}
                                onChange={handleSliderChange}
                                min={10000} // Set the lowest value as the starting point of the slider
                                max={1000000}
                                step={10000} // Set the highest value as the ending point of the slider
                                valueLabelDisplay="auto"
                                valueLabelFormat={(value) => `$${formatNumberWithCommas(value)}`} // Add the dollar sign and format number with commas
                                aria-labelledby="range-slider"
                                marks={marks} // Pass the marks array to the Slider component
                            />
                        </div>
                        <div className="credited">
                        <h3>Are you an accredited investor?</h3>
                        <FormControl component="fieldset">
     
      <RadioGroup
        aria-label="accreditedInvestor"
        name="accreditedInvestor"
        value={selectedValue}
        onChange={handleChange}
      >
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />} // Use the primary color for the selected (checked) radio button
          label="Yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />} // Use the default color for the non-selected (unchecked) radio button
          label="No"
        />
      </RadioGroup>
    </FormControl>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <div className="next-button-and-skip">
                            <Button variant="contained" id="skip">
                                Skip for now
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                Next Step&nbsp;<BsArrowRight size={15} />
                            </Button>
                        </div>
                        <div className="link-to-home">
                            <a href="/" ><BsArrowLeft size={11} fontWeight={700} />&nbsp;Back to the previous step</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvestmentPlan;
