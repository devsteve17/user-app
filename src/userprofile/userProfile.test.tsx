import React from "react";
import { render, screen } from "@testing-library/react";

import { UserProfile } from "./userProfile";

const mockData = {
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
  },
  phone: "010-692-6593 x09125",
  company: {
    name: "Deckow-Crist",
  },
};

describe("Users Profile", () => {
  test("renders the user profile title", () => {
    render(<UserProfile user={mockData} />);
    expect(screen.getByText("Users profile")).toBeVisible();
  });

  test("renders the profile - username", () => {
    render(<UserProfile user={mockData} />);
    expect(screen.getByText("Username: Antonette")).toBeVisible();
  });

  test("renders the profile - full name", () => {
    render(<UserProfile user={mockData} />);
    expect(screen.getByText("Full name: Ervin Howell")).toBeVisible();
  });

  test("renders the profile - email address", () => {
    render(<UserProfile user={mockData} />);
    expect(screen.getByText("Email: Shanna@melissa.tv")).toBeVisible();
  });

  test("renders the profile - Phone number", () => {
    render(<UserProfile user={mockData} />);
    expect(screen.getByText("Phone number: 010-692-6593 x09125")).toBeVisible();
  });

  test("renders the profile - address", () => {
    render(<UserProfile user={mockData} />);
    expect(
      screen.getByText("Address: Victor Plains, Suite 879, Wisokyburgh, 90566-7771")
    ).toBeVisible();
  });

  test("renders the profile - Company name", () => {
    render(<UserProfile user={mockData} />);
    expect(screen.getByText("Company name: Deckow-Crist")).toBeVisible();
  });
});
