import React from "react";
import { render, screen } from "@testing-library/react";

import { LoginForm } from "./loginForm";

describe("Login Form", () => {
  test("renders the login form title", () => {
    render(<LoginForm />);
    expect(screen.getByText("Log In")).toBeVisible();
  });
  test("renders the email field", () => {
    render(<LoginForm />);
    expect(screen.getByText("Email")).toBeVisible();
  });
  test("renders the password field", () => {
    render(<LoginForm />);
    expect(screen.getByText("Password")).toBeVisible();
  });

  test("renders the continue button", () => {
    render(<LoginForm />);
    expect(screen.getByText("Continue")).toBeVisible();
  });
});
