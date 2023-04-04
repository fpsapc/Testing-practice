const reverseString = require("./reverseString");

describe("reverseString", () => {
  test("reverses a string correctly", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("12345")).toBe("54321");
    expect(reverseString("")).toBe("");
  });
});
