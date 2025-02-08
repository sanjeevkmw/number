import { addNumber } from "../src/addNumber"; // Import the function

describe("String Calculator - add()", () => {
  test("returns 0 for an empty string", () => {
    expect(addNumber("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(addNumber("1")).toBe(1);
    expect(addNumber("5")).toBe(5);
  });

  test("returns the sum of two numbers", () => {
    expect(addNumber("1,5")).toBe(6);
    expect(addNumber("2,3")).toBe(5);
  });

  test("handles multiple numbers", () => {
    expect(addNumber("1,2,3,4")).toBe(10);
    expect(addNumber("10,20,30")).toBe(60);
  });

});
