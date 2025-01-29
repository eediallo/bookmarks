import { createUserOption } from "./script.js";

// FILE: script.test.js

describe("createUserOption", () => {
  test("should create an option element with the correct value and text content", () => {
    const user = { name: "John Doe" };
    const option = createUserOption(user);

    expect(option.tagName).toBe("OPTION");
    expect(option.value).toBe(user.name);
    expect(option.textContent).toBe(user.name);
  });

  test("should handle empty user name", () => {
    const user = { name: "" };
    const option = createUserOption(user);

    expect(option.tagName).toBe("OPTION");
    expect(option.value).toBe("");
    expect(option.textContent).toBe("");
  });
});
