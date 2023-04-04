// capitalize.test.js

const capitalize = require("./capitalize.js");

describe("capitalize", () => {
  test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("")).toBe("");
  });

  test("throws an error if argument is not a string", () => {
    expect(() => capitalize(123)).toThrow("Argument must be a string");
    expect(() => capitalize(null)).toThrow("Argument must be a string");
    expect(() => capitalize(undefined)).toThrow("Argument must be a string");
  });
});
