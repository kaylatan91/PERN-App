import React from "react";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";

describe("<Home />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />);
  });
});

it("checks that there is an h1 with Whats Cooking Good Looking text ", () => {
  // see: https://on.cypress.io/mounting-react
  cy.mount(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  cy.get("h1").contains("Whats Cooking Good Looking?");
});

it("checks that there is an h2 with You hungry text ", () => {
  // see: https://on.cypress.io/mounting-react
  cy.mount(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  cy.get("h2").contains("You hungry?");
});
