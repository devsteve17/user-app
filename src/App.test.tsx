import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("display the log in form as default page", () => {
  render(<App />);
  expect(screen.getByText("Log In")).toBeVisible();
});
