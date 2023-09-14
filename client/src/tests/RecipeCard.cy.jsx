import React from "react";
import RecipeCard from "../components/RecipeCard";
import { BrowserRouter } from "react-router-dom";

describe("<RecipeCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <RecipeCard />
      </BrowserRouter>
    );
  });
});
