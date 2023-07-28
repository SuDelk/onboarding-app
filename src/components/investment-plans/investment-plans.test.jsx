import { validateFromAndTo, validateIsAccredited } from '../validators/validators'; // Replace 'your-file' with the actual path to your file

// Test validateFromAndTo function
describe('validateFromAndTo', () => {
  test('should return true when "from" is less than "to"', () => {
    const result = validateFromAndTo(10000, 200000);
    expect(result).toBe(true);
  });

  test('should return false when "from" is greater than or equal to "to"', () => {
    const result = validateFromAndTo(200000, 100000);
    expect(result).toBe(false);
  });
});

// Test validateIsAccredited function
describe('validateIsAccredited', () => {
  test('should return true when "isAccredited" is "yes"', () => {
    const result = validateIsAccredited('yes');
    expect(result).toBe(true);
  });

  test('should return true when "isAccredited" is "no"', () => {
    const result = validateIsAccredited('no');
    expect(result).toBe(true);
  });

  test('should return false when "isAccredited" is neither "yes" nor "no"', () => {
    const result = validateIsAccredited('');
    expect(result).toBe(false);
  });
});


