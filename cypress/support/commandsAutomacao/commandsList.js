/// <reference types="cypress" />

import loc from '../../support/locators'
import 'cypress-xpath';

Cypress.Commands.add('CriandoListaNew', (nome) => {

    const nomeLista = nome;

    cy.xpath(loc.LISTA.INPUTBUTTON).click({force:true})
    cy.get('#list-name').clear().type(nomeLista)
    cy.xpath(`(//span[contains(text(), 'Criar uma Lista')])[2]`).click({force:true})

    cy.wrap(nomeLista).as('nomeListaAlias')
});

Cypress.Commands.add('ValidandoCriacaoLista', () => {

    cy.get('@nomeListaAlias').then((nomeLista) => {
         cy.get('.wl-list').should('contain', nomeLista).then(() => {
            cy.log('LISTA CRIADA COM SUCESSO');
        })
    })
})

Cypress.Commands.add('EditandLista', (nome, email) => {

    const NomeEd = nome;
    const EmailEd = email;
    const descricao = 'Edição de lista feita com sucesso?!';

    cy.get('#profile-list-name').then(($element) => {
        const nomeAntigo = $element.text()
        cy.wrap(nomeAntigo).as('nomeAntigoAlias')
    })

    cy.get('#overflow-menu-popover-trigger').click()
    cy.get('#editYourList').click({force:true})
    cy.get('#list-settings-name').clear().type(NomeEd)
    cy.get('#list-settings-email').clear().type(EmailEd)
    cy.get('#list-settings-description').clear().type(descricao)
    cy.wrap(descricao).as('descAlias')
    cy.xpath(`//span[@id='list-settings-save-announce']`).click({force:true})
    .wait(2000)
});

Cypress.Commands.add('ValidandoEdicao', () => {

    cy.get('@nomeAntigoAlias').then((nomeAntigo) => {
        cy.get('#profile-list-name').invoke('text').then((nomeNovo) => {
            expect(nomeNovo).to.not.equal(nomeAntigo);
            cy.log('EDICAO FEITA COM SUCESSO, NOME ALTERADO!');
        })
    })

    cy.get('@descAlias').then((descricao) => {
        cy.get('#wlDesc').should('contain', descricao).then(() => {
            cy.log('DESCRIÇÃO ATUALIZADA COM SUCESSO');
        })
    })
});

Cypress.Commands.add('ExcluirLista', () => {

    cy.get('#overflow-menu-popover-trigger').click()
    cy.get('#editYourList').click({force:true})
    cy.xpath(`//span[contains(text(), 'Deletar lista')]`).click({force:true})
        .wait(2000)
    cy.xpath(`//input[@name='submit.save']`).click({force:true})
        .wait(2000)
});

Cypress.Commands.add('ValidandoExclusaoLista', () => {
    
    cy.xpath(loc.LISTA.INPUTBUTTON).should('contain', 'Criar uma lista')
        .then(() => { 
            cy.log('LISTA EXCLUIDA COM SUCESSO')
        })
});

Cypress.Commands.add('AdicionandoItemLista', () => {
    cy.get('#add-to-wishlist-button').click().wait(2000)
    cy.xpath(`//a[@class='a-link-normal a-dropdown-link a-active atwl-hz-dd-list-default']`).click().wait(2000)
})

Cypress.Commands.add('ValidandoAddItem', () => { 
    cy.get('#huc-atwl-header-section > .a-row > :nth-child(1)')
            .should('have.text', '1 produto adicionado a')
                .then(() => {
                    cy.log('ITEM ADICIONADO A LISTA')
                });
});