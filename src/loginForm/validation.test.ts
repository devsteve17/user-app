import { validateEmail, validatePassword } from "./validation";

describe("validation tests", () => {
  // TEST validateEmail
  it("should highligh an invalid email by returning false", () => {
    expect(validateEmail("mock@mock@example.com")).toBeFalsy();
  });
  it("should highligh a valid email by returning true", () => {
    expect(validateEmail("mock@example.com")).toBeTruthy();
  });

  // TEST validatePassword
  it("should highligh an invalid password by returning false", () => {
    expect(validatePassword("short")).toBeFalsy();
  });
  it("should highligh a valid password by returning true", () => {
    expect(validatePassword("reallyLongPasswordValue")).toBeTruthy();
  });
});
