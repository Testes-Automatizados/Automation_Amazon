/// <reference types="cypress" />

import loc from '../../support/locators'     
import commands from '../../support/commandsAutomacaoAmazon/commandsCart'
import command from '../../support/commands'
import 'cypress-xpath';

describe('Teste para validação de adição de um item e adição de varias quantidades de um unico item', () => {

    beforeEach(() => {
        cy.Login()
    });

    it('Teste - Adicionando 1 item no carrinho', () => {

        cy.SelectProdutoAdd('https://www.amazon.com.br/revolu%C3%A7%C3%A3o-dos-bichos-conto-fadas/dp/8535909559?ref_=Oct_d_omwf_d_7872689011_2&pd_rd_w=LthX3&content-id=amzn1.sym.c23ec944-eb0d-4641-9d63-a30132d94f6a&pf_rd_p=c23ec944-eb0d-4641-9d63-a30132d94f6a&pf_rd_r=SMQ9RBA93JG32V667HJB&pd_rd_wg=esqoW&pd_rd_r=9a031e03-8a9d-4f12-80c5-12f7e2abcbba&pd_rd_i=8535909559');
        cy.ValidandoAdd();
        cy.AcessandoCarrinho();
        cy.ValidarCarrinho('#sc-subtotal-label-buybox'); 
    });
});