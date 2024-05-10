/// <reference types="cypress" />

import loc from '../../../support/locators'
import command  from '../../../support/commands'

describe('Teste', () => {

    beforeEach(() => {
        cy.Login()
    })

    it('Pegando elemento botao', ()=> {
    
        cy.visit('https://www.amazon.com.br/a/addresses?ref_=ya_d_c_addr') 

        cy.wait(5000)
       
         cy.ExcluirTodosEnderecos()

    });
});