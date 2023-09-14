import React from "react";
import CreateRecipeForm from "../components/CreateRecipe";
import { BrowserRouter } from "react-router-dom";

describe("<CreateRecipeForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <CreateRecipeForm />
      </BrowserRouter>
    );
  });
});

it("checks that there is an h1 with Share your recipe text ", () => {
  // see: https://on.cypress.io/mounting-react
  cy.mount(
    <BrowserRouter>
      <CreateRecipeForm />
    </BrowserRouter>
  );
  cy.get("h1").contains("Share your recipe!");
});
