// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Components
import './components/inputs.js'
import './components/buttons.js'

import { faker } from '@faker-js/faker/locale/pt_BR';

/**
 * @memberof cy
 * @method generateCheckoutData
 * @description Gera dados dinâmicos do comprador (Nome, Sobrenome, CEP)
 * @returns {Object} Retorna um objeto { firstName, lastName, postalCode }
 */
Cypress.Commands.add('generateCheckoutData', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const postalCode = faker.location.zipCode('#####-###');
  cy.wrap({ firstName, lastName, postalCode });
});