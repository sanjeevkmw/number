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

  test("supports new lines as delimiters", () => {
    expect(addNumber("1\n2,3")).toBe(6);
    expect(addNumber("10\n20\n30")).toBe(60);
  });

  test("supports custom delimiters", () => {
    expect(addNumber("//;\n1;2")).toBe(3);
    expect(addNumber("//|\n1|2|3")).toBe(6);
  });

  test("throws an error for negative numbers", () => {
    expect(() => addNumber("-1,2,-3")).toThrow(
      "Negative numbers not allowed: -1, -3"
    );
    expect(() => addNumber("//;\n1;-2;-3;4")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });
});
