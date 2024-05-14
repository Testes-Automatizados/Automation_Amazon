/// <reference types="cypress" />

import loc from '../../support/locators'
import command  from '../../support/commands'
import 'cypress-xpath';


describe('Teste para validações de edição de pefil dentro da Amazon', () => { 

    beforeEach(() => {

        cy.Login();
    });

    it('Teste - Alterando foto de perfil', () => { 

        cy.visit('https://www.amazon.com.br/gp/profile/onboard?ref=pc_ob')

        const iconPerfil = 'cypress/fixtures/foto.png'

        cy.AdicionarImagem(iconPerfil)
        cy.EnviarInfo()
    });

    it('Teste - Excluindo Imagem de Perfil', () => {

        cy.visit('https://www.amazon.com.br/gp/profile/amzn1.account.AHG3C7557U3SXZK6NRHYAZLNZJIQ?ref_=pdp_new_ob_def')

        cy.get('.image-edit-popover-trigger-holder > img').click()
        cy.xpath(`//span[@class='a-size-small a-color-base desktop delete-photo']`).click({force:true})
        cy.wait(2000)
        cy.xpath(`(//input[@type='submit'])[8]`).click({force: true})
        cy.contains('Excluído').should('be.visible').then(() => {
            cy.log('FOTO EXCLUIDA COM SUCESSO')
        })
    });

    it('Teste - Alterando Nome com validação de nome vazio', () => {

        cy.visit('https://www.amazon.com.br/gp/profile/onboard?ref=pc_ob')

        const numeroAleatorio = Math.floor(Math.random() * 999) + 1;
        
        cy.get('[data-name="name"] > :nth-child(2) > .a-input-text').clear()
        cy.get('#a-autoid-3 > .a-button-inner > .a-button-input').click()
        cy.get('[data-name="name"] > .a-spacing-top-mini').should('contain', 'Este campo é obrigatório').then(() => {
            cy.log('NÃO PODE SALVAR SEM UM NOME')
        })
        
        cy.get('[data-name="name"] > :nth-child(2) > .a-input-text').type(`Teste Automatizado ${numeroAleatorio}`)
        cy.EnviarInfo()
    });
});