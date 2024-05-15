/// <reference types="cypress" />

import loc from '../../../support/locators'
import command  from '../../../support/commands'

describe('Automação para criação de multiplos endereços em massa', () => {

    beforeEach(() => {
        cy.Login()
    })

    it('Criando multiplos endereços', ()=> {
    
        cy.visit('https://www.amazon.com.br/a/addresses?ref_=ya_d_c_addr') 
       
        cy.CriarMultiplosEnderecos(5)

    });
});