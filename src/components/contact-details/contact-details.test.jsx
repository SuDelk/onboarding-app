import "@testing-library/jest-dom/extend-expect";
import { validateFullName, validatePhoneNumber, validateEmail, validateCountry } from "../validators/validators";

// Test cases for validateFullName
describe('validateFullName', () => {
  test('should return an empty string for a valid full name', () => {
    const fullName = 'Sudul Fernando';
    expect(validateFullName(fullName)).toBe('');
  });

  test('should return an error message for an empty full name', () => {
    const fullName = '';
    expect(validateFullName(fullName)).toBe('Please enter your full name.');
  });
});

// Test cases for validatePhoneNumber
describe('validatePhoneNumber', () => {
  test('should return an empty string for a valid phone number', () => {
    const phoneNumber = '+94779988555';
    expect(validatePhoneNumber(phoneNumber)).toBe('');
  });

  test('should return an error message for an invalid phone number', () => {
    const phoneNumber = '12';
    expect(validatePhoneNumber(phoneNumber)).toBe(
      'Please enter a valid phone number with the country code.'
    );
  });
});

// Test cases for validateEmail
describe('validateEmail', () => {
  test('should return an empty string for a valid email address', () => {
    const email = 'test@example.com';
    expect(validateEmail(email)).toBe('');
  });

  test('should return an error message for an invalid email address', () => {
    const email = 'invalid-email'; // Missing '@' and domain
    expect(validateEmail(email)).toBe('Please enter a valid email address.');
  });
});

// Test cases for validateCountry
describe('validateCountry', () => {
  test('should return an empty string for a selected country', () => {
    const country = 'Sri Lanka';
    expect(validateCountry(country)).toBe('');
  });

  test('should return an error message for an unselected country', () => {
    const country = '';
    expect(validateCountry(country)).toBe('Please select your country.');
  });
});