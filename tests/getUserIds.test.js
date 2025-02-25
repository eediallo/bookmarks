import { USERS } from "../data/users.js";
import { getUserIds } from "../data/storage.js";

describe("getUserIds", () => {
  test("should not be empty", () => {
    const currentInput = getUserIds().length > 0;
    const targetInput = true;
    expect(currentInput).toEqual(targetInput);
  });

  test("should have exactly five ids", () => {
    const currentInput = getUserIds().length === 5;
    const targetInput = true;
    expect(currentInput).toBe(targetInput);
  });

  test("should return user ids", () => {
    const currentInput = [];
    for (const { id } of USERS) {
      currentInput.push(`${id}`);
    }
    const targetInput = ["1", "2", "3", "4", "5"];
    expect(currentInput).toEqual(targetInput);
  });
});
