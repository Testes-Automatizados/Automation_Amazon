/// <reference types="cypress" />

import loc from '../../support/locators'
import command  from '../../support/commands'

describe('Teste para validar as funcionalidades de cadastro de endereços dentro da Amazon', () => {

    beforeEach(() => {
         
        cy.Login();
    })

    it('Testando o cadastro de endereços no dentro da Amazon', () => {

        cy.visit('https://www.amazon.com.br/a/addresses?ref_=ya_d_c_addr');

        cy.get('#ya-myab-address-add-link').click();

        cy.CriarEndereco();

        cy.get('.a-alert-heading').should('contain', 'Endereço salvo').then(() => {
            cy.log('ENDEREÇO CADASTRADO COM SUCESSO');
        });
    });

    it('Excluindo endereço cadastrado no sistema Amazon', () => {

        cy.visit('https://www.amazon.com.br/gp/css/homepage.html?ref_=nav_AccountFlyout_ya');

        cy.get(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner').click({force:true});

        cy.ExcluirEndereco()

        cy.get('.a-alert-heading').should('contain', 'Endereço excluído').then(() => {
            cy.log('ENDEREÇO EXCLUÍDO COM SUCESSO');
        });
    });
});