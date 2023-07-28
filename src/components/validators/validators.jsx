//validations for the first step - contact details
export const validateFullName = (fullName) => {
    return fullName ? "" : "Please enter your full name.";
};

export const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+[1-9]\d{0,2}\s?\d{3,14}$/;
    return phoneRegex.test(phoneNumber) ? "" : "Please enter a valid phone number with the country code.";
  };

export const validateEmail = (email) => {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailRegex.test(email) ? "" : "Please enter a valid email address.";
};

export const validateCountry = (country) => {
    return country ? "" : "Please select your country.";
};

//validations for the second step - investment plans
export const validateFromAndTo = (from, to) => {
    return from < to;
};

export const validateIsAccredited = (isAccredited) => {
    return (isAccredited === ('yes') || isAccredited === ('no'));
};

//validations for the third step - investment preferences
export const isAtLeastOneCheckboxChecked = (checkboxStates) => {
    return Object.values(checkboxStates).some((isChecked) => isChecked);
};