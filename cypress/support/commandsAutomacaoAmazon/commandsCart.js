/// <reference types="cypress" />

import loc from '../../support/locators'
import 'cypress-xpath';

Cypress.Commands.add('SelectProdutoAdd', (url) => {
    cy.visit(url)
    cy.get('#add-to-cart-button').click({force:true})
});

Cypress.Commands.add('ValidandoAdd', () => {
    cy.get('.a-size-medium-plus').should('contain', 'Adicionado ao carrinho').then(() => {
        cy.log('PRODUTO ADICIONADO AO CARRINHO')
    });
});

Cypress.Commands.add('AcessandoCarrinho', () => {
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
        cy.url().should('contain', 'www.amazon.com.br/cart').then(() => { 
            cy.log('VOCÊ ACESSOU O CARRINHO')
        });
});

Cypress.Commands.add('SelectProdutsAll', ()  => {
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
})

Cypress.Commands.add('ValidarCarrinho', (selector) => {
    cy.get(selector).then(($element) => {

            const totalProdutoTexto = $element.text()
            const partes = totalProdutoTexto.split(' ');
            const quantidadeProdutos = partes[1].replace('(', '');

            cy.get(selector).should('contain', `${totalProdutoTexto}`).then(() => {
            cy.log(`FOI ADICIONADO AO CARRINHO ${quantidadeProdutos}`);
        });
    });
});