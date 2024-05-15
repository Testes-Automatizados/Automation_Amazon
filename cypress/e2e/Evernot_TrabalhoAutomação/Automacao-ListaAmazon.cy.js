/// <reference types="cypress" />

import loc from '../../support/locators'
import command  from '../../support/commandsAutomacao/commandsList'

describe('Testando funcionalidades de criar uma lista, editar uma lista, excluir uma lista e adicionar um produto na lista', () => { 

    beforeEach(() => {
        cy.Login()
    });

    it.only('Teste - Criando uma lista a partir da guia Suas Listas', () => { 
        
        cy.visit('https://www.amazon.com.br/hz/wishlist/ls?requiresSignIn=1&ref_=nav_AccountFlyout_wl')

        cy.CriandoListaNew('Criando Lista Automatizada')
        cy.ValidandoCriacaoLista()
    });

    it('Teste - Editando informações da lista criada', () => {
        
        cy.visit('https://www.amazon.com.br/hz/wishlist/ls?requiresSignIn=1&ref_=nav_AccountFlyout_wl')

        cy.EditandLista('Editando Lista Automatizada','usertestesautomatizados@gmail.com')
        cy.ValidandoEdicao()
    });

    it('Teste - Adicionando um produto na lista', () => {
        
        cy.visit('https://www.amazon.com.br/Cerveja-Stella-Artois-Long-330Ml/dp/B08K55P9S2?ref_=Oct_d_orecs_d_19955240011_2&pd_rd_w=PT91n&content-id=amzn1.sym.0cabc286-0291-4c1b-b9ba-e0ae05bc6f7b&pf_rd_p=0cabc286-0291-4c1b-b9ba-e0ae05bc6f7b&pf_rd_r=REYAA7EBJS6PJ1XA7V3X&pd_rd_wg=Dg6u0&pd_rd_r=1e7b78f8-b98e-45db-8d43-42f3d58a2620&pd_rd_i=B08K55P9S2')

        cy.AdicionandoItemLista()
        cy.ValidandoAddItem()
    });

    it('Teste - Excluindo lista', () => {

        cy.visit('https://www.amazon.com.br/hz/wishlist/ls?requiresSignIn=1&ref_=nav_AccountFlyout_wl')

        cy.ExcluirLista()
        cy.ValidandoExclusaoLista()
    })
});