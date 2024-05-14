/// <reference types="cypress" />

import loc from '../../support/locators'     
import commands from '../../support/commands'

describe('Teste para adicionar itens no carrinho, validar a exclusão dos mesmo e ir para guia de finalizar compra', () => {

    beforeEach(() => {
        cy.Login()
    });

    it('Adicionando item no carrinho', () => {

        cy.visit('https://www.amazon.com.br/gp/browse.html?node=6740748011&ref_=nav_em__books_all_0_2_24_2');

        cy.get('[data-testid="grid-deals-container"] > :nth-child(1)').click()
    });
});