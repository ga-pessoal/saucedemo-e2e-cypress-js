import loginPage from "../../support/pages/loginPage";

import userData from "../../fixtures/userData.json";

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Successful Login", () => {
    loginPage.fillLogin(userData.validUser.username, userData.validUser.password);
    loginPage.submit();
    cy.url().should("include", "/inventory.html");
  });

  it("Failed Login with Invalid Credentials", () => {
    loginPage.fillLogin(userData.invalidUser.username, userData.invalidUser.password);
    loginPage.submit();
    loginPage.getErrorMessage().should("be.visible").and("contain", "Epic sadface: Username and password do not match any user in this service");
  });
});