import React from "react";
import AllRecipes from "../components/AllRecipes";
import { BrowserRouter } from "react-router-dom";

describe("<AllRecipes />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllRecipes />
      </BrowserRouter>
    );
  });
});
