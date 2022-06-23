import React from "react";
import { render, screen } from "@testing-library/react";

import { UsersTable } from "./usersTable";

// TODO: wrap test with act to revent console errors

describe("Users Table", () => {
  test("renders the user table title", () => {
    render(<UsersTable />);
    expect(screen.getByText("Users")).toBeVisible();
  });

  test("renders the column title - username", () => {
    render(<UsersTable />);
    expect(screen.getByText("Username")).toBeVisible();
  });

  test("renders the column title - full name", () => {
    render(<UsersTable />);
    expect(screen.getByText("Full Name")).toBeVisible();
  });

  test("renders the column title - email address", () => {
    render(<UsersTable />);
    expect(screen.getByText("Email Address")).toBeVisible();
  });

  test("renders the column title - actions", () => {
    render(<UsersTable />);
    expect(screen.getByText("actions")).toBeVisible();
  });
});
