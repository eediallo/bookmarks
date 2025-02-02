import { USERS } from "./data.js";
import { getUserIds } from "./storage.js";

describe("getUserIds", () => {
  test("should return user ids", () => {
    const currentInput = [];
    for (const { id } of USERS) {
      currentInput.push(`${id}`);
    }
    const targetInput = ["1", "2", "3", "4", "5"];
    expect(currentInput).toEqual(targetInput);
  });
});
