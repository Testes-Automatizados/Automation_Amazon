/// <reference types="cypress" />

import loc from '../../support/locators'
import command  from '../../support/commands'
import commands from '../../support/commandsAutomacaoAmazon/commandsAddress'

describe('Teste para validar as funcionalidades de cadastro e exclusão de endereços dentro da Amazon', () => {

    beforeEach(() => {
         
        cy.Login();
    })

    it('Teste - Fazendo o cadastro de endereço', () => {

        cy.visit('https://www.amazon.com.br/a/addresses?ref_=ya_d_c_addr');

       cy.CriarEndereco();
       cy.ValidandoEndereco();
    });

    it('Teste - Excluindo o endereço cadastrado', () => {
        
        cy.ExcluirEndereco()
        cy.ValidandoExcluirEndereco()
    });
});