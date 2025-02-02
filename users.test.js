import { USERS } from "./data.js";

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
});
