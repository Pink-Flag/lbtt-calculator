const lbttCalculator = require("../lbtt-calculator");

describe("tests for lbtt calculator function", () => {
  it("should return a number", () => {
    const result = lbttCalculator();
    expect(typeof result).toBe("number");
  });
  it("should accept an argument and return a different number", () => {
    const input = 2;
    const result = lbttCalculator(input);
    expect(result).not.toEqual(input);
  });
  it("should return 0 if the input is less than 145000", () => {
    const input = 144999;
    const result = lbttCalculator(input);
    expect(result).toEqual(0);
  });
  it("should return a whole number", () => {
    const input = 750010;
    const result = lbttCalculator(input);
    expect(result).toEqual(48351);
  });
  it("should calculate the correct tax for a price between 145000 and 250000", () => {
    const input = 230000;
    const result = lbttCalculator(input);
    expect(result).toEqual(1700);
  });
  it("should calculate the correct tax for a price between 250000 and 325000", () => {
    const input = 320000;
    const result = lbttCalculator(input);
    expect(result).toEqual(5600);
  });
  it("should calculate the correct tax for a price between 325000 and 750000", () => {
    const input = 725000;
    const result = lbttCalculator(input);
    expect(result).toEqual(45850);
  });
  it("should calculate the correct tax for a price over 750000", () => {
    const input = 1000000;
    const result = lbttCalculator(input);
    expect(result).toEqual(78350);
  });
});
