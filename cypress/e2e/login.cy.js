'use strict';
const utilFunctions = require('../support/UtilFunctions');

describe('Load Sablono app and loginc', () => {
    it('Load Sablono app and login ', () => {

        cy.visit('https://example.cypress.io')

        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/');
    })
})
