/// <reference types="cypress" />

import loc from '../../support/locators'
import 'cypress-xpath';

Cypress.Commands.add('Login', (username, password) => {

    cy.visit('https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
    cy.reload()
    
    cy.get(loc.LOGIN.EMAIL).type('usertestesautomatizados@gmail.com')
        .tab()
        .wait(1000).click();
    cy.get(loc.LOGIN.PASSWORD).type('TestesAutomatizados123');
    cy.get(loc.LOGIN.SUBMIT).click();
})

Cypress.Commands.add('ValidandoLogin' , () => {
    
})
