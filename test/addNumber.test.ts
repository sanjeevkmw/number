import { addNumber } from "../src/addNumber"; // Import the function

describe("String Calculator - add()", () => {
  test("returns 0 for an empty string", () => {
    expect(addNumber("")).toBe(0);
  });
});
