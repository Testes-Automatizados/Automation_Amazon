/// <reference types="cypress" />

import loc from '../../support/locators'
import 'cypress-xpath';

Cypress.Commands.add('AdicionarImagem', (img) => {

    cy.wait(2500)
    cy.xpath(`//input[@id='pr-upload-file-field']`).click({force:true}).selectFile('cypress/fixtures/foto.png', {force:true}) 
    cy.get('img[src="/avatar/default/A18YPOLZKL43FQ?square=true&max_width=460"]')
        .should('exist')
        .should('have.attr', 'alt', 'Sua foto de perfil').then(() => {
             cy.log('IMAGEM IMPORTADA COM SUCESSO');
        });
});

Cypress.Commands.add('EnviarInfo', () => {
    cy.get('#a-autoid-3 > .a-button-inner > .a-button-input').click()
        cy.url().should('contain', '.account.AHG3C7557U3SXZK6NRHYAZLNZJIQ').then(() => {
            cy.log('INFORMAÇÕES ALTERADAS COM SUCESSO')
        })
});

Cypress.Commands.add('ExcluindoFotoPerfil', () => {
    
    cy.get('.image-edit-popover-trigger-holder > img').click()
    cy.xpath(`//span[@class='a-size-small a-color-base desktop delete-photo']`).click({force:true})
    cy.wait(2000)
    cy.xpath(`(//span[contains(text(), 'Excluir')])[3]`)
        .wait(1000).click({force: true})
})

Cypress.Commands.add('ValidandoExclusao', () => {
    
    cy.contains('Excluído').should('be.visible').then(() => {
        cy.log('FOTO EXCLUIDA COM SUCESSO')
    })
})

Cypress.Commands.add('NomeVazio', () => {
        
    cy.get('[data-name="name"] > :nth-child(2) > .a-input-text')
        .invoke('val').then(($element) =>{
            const nomeAntigo = $element
            cy.wrap(nomeAntigo).as('nomeAntigo')
    })

    cy.get('[data-name="name"] > :nth-child(2) > .a-input-text').clear()
    cy.get('#a-autoid-3 > .a-button-inner > .a-button-input').click()
})

Cypress.Commands.add('ValidanoNomeVazio', () => {
    
    cy.get('[data-name="name"] > .a-spacing-top-mini').should('contain', 'Este campo é obrigatório').then(() => {
        cy.log('NÃO PODE SALVAR SEM UM NOME')
    })
})

Cypress.Commands.add('AlterandoNome', (nome) => {

    const numeroAleatorio = Math.floor(Math.random() * 999) + 1;

    cy.get('[data-name="name"] > :nth-child(2) > .a-input-text').type(`${nome} ${numeroAleatorio}`)
})

Cypress.Commands.add('ValidandoNovoNome', () => {

    cy.get('@nomeAntigo').then((nomeAntigo) => {
        cy.get('.a-size-extra-large').invoke('text').then((novoNome) => {
            expect(novoNome).to.not.equal(nomeAntigo);
            cy.log('EDICAO FEITA COM SUCESSO, NOME ALTERADO!');
        })
    })
    
})