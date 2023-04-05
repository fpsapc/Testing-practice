import stringLength from "./stringLength.js";

test("stringLength returns the correct length of the string", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("1")).toBe(1);
  expect(stringLength("1234567890")).toBe(10);
});

test("stringLength throws an error if the string is less than 1 character long", () => {
  expect(() => stringLength("")).toThrow(
    "String must be at least 1 character long"
  );
});

test("stringLength throws an error if the string is longer than 10 characters", () => {
  expect(() => stringLength("12345678901")).toThrow(
    "String must not be longer than 10 characters"
  );
});
