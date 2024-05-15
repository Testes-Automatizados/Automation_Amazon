/// <reference types="cypress" />

import loc from '../../../support/locators'
import command  from '../../../support/commands'

describe('teste', () => {

    beforeEach(() => {
        cy.Login()
    })

    it('teste', () => {

        cy.visit('https://www.amazon.com.br/cart?ref_=ewc_gtc')

        cy.



    })

})