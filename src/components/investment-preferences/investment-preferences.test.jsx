import { isAtLeastOneCheckboxChecked } from '../validators/validators';

describe('isAtLeastOneCheckboxChecked', () => {
  test('should return true when at least one checkbox is checked', () => {
    const checkboxStates = {
      singleFamily: false,
      residentialMultiFamily: true,
      commercialRetail: false,
    };
    const result = isAtLeastOneCheckboxChecked(checkboxStates);
    expect(result).toBe(true);
  });

  test('should return false when no checkbox is checked', () => {
    const checkboxStates = {
      singleFamily: false,
      residentialMultiFamily: false,
      commercialRetail: false,
    };
    const result = isAtLeastOneCheckboxChecked(checkboxStates);
    expect(result).toBe(false);
  });

  test('should return true when all checkboxes are checked', () => {
    const checkboxStates = {
      singleFamily: true,
      residentialMultiFamily: true,
      commercialRetail: true,
    };
    const result = isAtLeastOneCheckboxChecked(checkboxStates);
    expect(result).toBe(true);
  });
});
