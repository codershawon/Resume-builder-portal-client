import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Faqs from "../components/FAQ/Faqs";

test("Renders the FAQ page with the breadcrumb", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Faqs />
      </MemoryRouter>
    );
  
    // Check if the breadcrumb element is present
    const breadcrumbHomeLink = getByText("Home");
    expect(breadcrumbHomeLink).toBeInTheDocument();
  });
  
  test("Renders the FAQ page title and 'As seen in' section", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Faqs />
      </MemoryRouter>
    );
  
    // Check if the FAQ page title is present
    const pageTitle = getByText("Get answers to commonly asked questions");
    expect(pageTitle).toBeInTheDocument();
  
    // Check if the 'As seen in' section is present
    const asSeenInTitle = getByText("Check Our FAQ");
    expect(asSeenInTitle).toBeInTheDocument();
  });
  
