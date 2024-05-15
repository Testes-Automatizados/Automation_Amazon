/// <reference types="cypress" />

import loc from '../../support/locators'     
import commands from '../../support/commandsAutomacao/commandsCart'
import command from '../../support/commands'
import 'cypress-xpath';

describe('Teste para validação de adição de um item e adição de varias quantidades de um unico item', () => {

    beforeEach(() => {
        cy.Login()
    });

    it('Teste - Adicionando 1 item no carrinho', () => {

        cy.visit('https://www.amazon.com.br/s?rh=n%3A17923704011&fs=true&pf_rd_i=17351089011&pf_rd_m=A1ZZFT5FULY4LN&pf_rd_p=f2c40f77-dfb6-48d2-941f-b77062ea3e25&pf_rd_r=TW279M12M40RQGA7YFCG&pf_rd_s=merchandised-search-8&ref=lp_17923704011_sar');

        cy.SelectProdutoAdd();
        cy.ValidandoAdd();
        cy.AcessandoCarrinho();
        cy.ValidarCarrinho('#sc-subtotal-label-buybox'); 
    });

    it('Teste - Adicionando itens em massa no carrinho', () => {
        
        cy.visit('https://www.amazon.com.br/s?rh=n%3A16253419011&fs=true&pf_rd_i=17351089011&pf_rd_m=A1ZZFT5FULY4LN&pf_rd_p=f2c40f77-dfb6-48d2-941f-b77062ea3e25&pf_rd_r=TW279M12M40RQGA7YFCG&pf_rd_s=merchandised-search-8&ref=lp_16253419011_sar')

        cy.get(loc.PRODUTO.PRODUTO2).click({force:true})

        cy.clicarNTimes('[data-action="increase-quantity-action"] > .a-column > .a-size-medium-plus', 2)
        cy.SelectProdutsAll()
        cy.ValidarCarrinho('#sc-subtotal-label-buybox')
    });
});