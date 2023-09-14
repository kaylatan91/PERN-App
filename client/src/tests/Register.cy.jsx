import React from "react";
import { BrowserRouter } from "react-router-dom";
import Register from "../components/Register";

describe("<Register />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
  });
});

// first param: string that describes the test
// second param: callback that does the test code
it("should autoFocus on the username input", () => {
  // see: https://on.cypress.io/mounting-react
  cy.mount(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  // querySelect the correct html element
  cy.focused().should("have.id", "username");
});
