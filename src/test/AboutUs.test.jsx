import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "../components/AboutUs/AboutUs";


test("AboutUs component displays 'Meet Our Team' heading", () => {
    const { getByText } = render(<AboutUs />);
    const heading = getByText("Meet Our Team");
    expect(heading).toBeInTheDocument();
  });
  test("Displays Shawon Barua's name", () => {
    const { getByText } = render(<AboutUs />);
    const leaderName = getByText("Shawon Barua");
    expect( leaderName).toBeInTheDocument();
  });
  test("Displays Sabita's name", () => {
    const { getByText } = render(<AboutUs />);
    const firstMember = getByText("Sabita Binte Hoque Meem");
    expect( firstMember).toBeInTheDocument();
  });
  test("Displays Sakib's name", () => {
    const { getByText } = render(<AboutUs />);
    const coLeader = getByText("Sakib Hasan");
    expect( coLeader).toBeInTheDocument();
  });
  

  