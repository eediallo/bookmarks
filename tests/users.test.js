import { USERS } from "../data/users.js";

function isPlainObject(value) {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.prototype.toString.call(value) === "[object Object]" &&
    (Object.getPrototypeOf(value) === Object.prototype ||
      Object.getPrototypeOf(value) === null)
  );
}

describe("USERS", () => {
  test("should not be empty", () => {
    const currentInput = USERS.length > 0;
    const targetInput = true;
    expect(currentInput).toBe(targetInput);
  });

  test("should have exactly 5 users", () => {
    const currentInput = USERS.length === 5;
    const targetInput = true;
    expect(currentInput).toBe(targetInput);
  });

  test("Each user should be of type plain object", () => {
    let currentInput = false;
    for (const user of USERS) {
      currentInput = isPlainObject(user)
    }
    const targetInput = true;
    expect(currentInput).toBe(targetInput);
  });

  test("Each user should have at least 3 properties", () => {
    let currentInput = false;
    for (const user of USERS) {
      currentInput = Object.keys(user).length  >= 3
    }
    const targetInput = true;
    expect(currentInput).toBe(targetInput);
  });
});
