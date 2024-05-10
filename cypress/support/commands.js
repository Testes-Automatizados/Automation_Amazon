/// <reference types="cypress" />

import loc from '../support/locators'

Cypress.Commands.add('Login', (username, password) => {

    cy.visit('link site evernote')

    cy.get(loc.LOGIN.EMAIL).type('usertestesautomatizados@gmail.com')
    cy.get(loc.LOGIN.CONTINUE).click();
    cy.get(loc.LOGIN.PASSWORD).type('TestesAutomatizados123')
    cy.get(loc.LOGIN.SUBMIT).click();

})