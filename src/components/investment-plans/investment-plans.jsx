import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    TextField,
    Slider,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Typography,
} from "@mui/material";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "../../styles/investment-plans.css";
import "../../App.css";
import "../../styles/common.css";
import secondStepImage from "../../images/secondstep.png";
import quoteForSecond from "../../images/quote-page2.png";
import { validateFromAndTo, validateIsAccredited } from "../validators/validators";


function InvestmentPlan() {
    const navigate = useNavigate();

    const [fromAmountOf, setFromAmountOf] = useState(
        sessionStorage.getItem("from") ? sessionStorage.getItem("from") : 0
    );
    const [toAmountOf, setToAmountOf] = useState(
        sessionStorage.getItem("to") ? sessionStorage.getItem("to") : 0
    );
    const [isAccredited, setIsAccredited] = useState(
        sessionStorage.getItem("isAccredited")
            ? sessionStorage.getItem("isAccredited")
            : ""
    );
    // store errors
    const [formErrors, setFormErrors] = useState({});

    // handling 'skip for now' button
    const skip = () => {
        navigate("/investment-preferences");
    }

    // handling next button
    const handleNext = () => {
        const errors = {};

        // use validations for From and To
        if (!validateFromAndTo(fromAmountOf, toAmountOf)) {
            errors.toAmountOf = "To amount must be greater than from amount";
        }

        // use validations for isAccredited
        if (!validateIsAccredited(isAccredited)) {
            errors.isAccredited = "Please select an option";
        }

        if (Object.keys(errors).length === 0) {
            sessionStorage.setItem("from", fromAmountOf);
            sessionStorage.setItem("to", toAmountOf);
            sessionStorage.setItem("isAccredited", isAccredited);
            navigate("/investment-preferences");
        } else {
            setFormErrors(errors);
        }
    };

    // handling functions
    const handleChangeIsAccredited = (event) => {
        setIsAccredited(event.target.value);
    };

    const handleFromAmountChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, "");
        setFromAmountOf(newValue === "" ? 0 : Number(newValue));
    };

    const handleToAmountChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, "");
        setToAmountOf(newValue === "" ? 0 : Number(newValue));
    };

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
    function goBack() {
        navigate("/");
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
                            src={secondStepImage}
                            alt="First Step"
                        />
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
                            <a>
                                Get help&nbsp;
                                <BsArrowRight size={15} fontWeight={700} />
                            </a>
                        </div>
                    </div>
                    <div className="investment-details-container">
                        <div style={{ marginBottom: "4.5%" }}>
                            <h2>Investment plans</h2>
                            <p>
                                Let us know about your investment plans. This will help us get
                                you to the right expert who will help you further.
                            </p>
                        </div>
                        <h3>How much are you planning to invest in this year?</h3>
                        <div className="half-width">
                            <TextField
                                label="From"
                                value={`$${formatNumberWithCommas(fromAmountOf)}`} // Format number with commas
                                onChange={handleFromAmountChange}
                                variant="standard"
                                fullWidth
                                error={!!formErrors.toAmountOf} // Set error to true if there is an error message
                                helperText={formErrors.toAmountOf}
                            />
                        </div>
                        <div className="half-width">
                            <TextField
                                label="To"
                                value={`$${formatNumberWithCommas(toAmountOf)}`} // Format number with commas
                                onChange={handleToAmountChange}
                                variant="standard"
                                fullWidth
                                error={!!formErrors.toAmountOf} // Set error to true if there is an error message
                                helperText={formErrors.toAmountOf}
                            />
                        </div>
                        <div className="full-width">
                            <Slider
                                value={[fromAmountOf, toAmountOf]}
                                onChange={handleSliderChange}
                                min={10000}
                                max={1000000}
                                step={10000}
                                valueLabelDisplay="auto"
                                valueLabelFormat={(value) =>
                                    `$${formatNumberWithCommas(value)}`
                                }
                                aria-labelledby="range-slider"
                                marks={marks}
                            />
                        </div>
                        <div className="accredited">
                            <h3>Are you an accredited investor?</h3>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="accreditedInvestor"
                                    name="accreditedInvestor"
                                    value={isAccredited}
                                    onChange={handleChangeIsAccredited}
                                >
                                    <div className="all-radio-buttons">
                                        <div className="radio-button">
                                            <FormControlLabel
                                                value="yes"
                                                control={<Radio color="primary" />}
                                                label={
                                                    <Typography
                                                        color={isAccredited === "yes" ? "primary" : "black"}
                                                        fontWeight={700}
                                                        fontSize={12}
                                                    >
                                                        Yes
                                                    </Typography>
                                                }
                                                className={
                                                    isAccredited === "yes"
                                                        ? "checkedRadio"
                                                        : "uncheckedRadio"
                                                }
                                            />
                                        </div>
                                        <div className="radio-button">
                                            <FormControlLabel
                                                value="no"
                                                control={<Radio color="primary" />}
                                                label={
                                                    <Typography
                                                        color={isAccredited === "no" ? "primary" : "black"}
                                                        fontWeight={700}
                                                        fontSize={12}
                                                    >
                                                        No
                                                    </Typography>
                                                }
                                                className={
                                                    isAccredited === "no"
                                                        ? "checkedRadio"
                                                        : "uncheckedRadio"
                                                }
                                            />
                                        </div>
                                    </div>
                                </RadioGroup>
                                {formErrors.isAccredited && (
                                    <Typography color="error" variant="caption">
                                        {formErrors.isAccredited}
                                    </Typography>
                                )}
                            </FormControl>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <div className="link-to-home">
                            <a onClick={goBack}>
                                <BsArrowLeft size={11} fontWeight={700} />
                                &nbsp;Back to the previous step
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

export default InvestmentPlan;
