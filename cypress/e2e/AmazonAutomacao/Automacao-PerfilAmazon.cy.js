/// <reference types="cypress" />

import loc from '../../support/locators'
import command  from '../../support/commands'
import commands from '../../support/commandsAutomacaoAmazon/commandsPerfil'
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

        cy.ExcluindoFotoPerfil()
        cy.ValidandoExclusao()
    });

    it('Teste - Alterando Nome com validação de nome vazio', () => {

        cy.visit('https://www.amazon.com.br/gp/profile/onboard?ref=pc_ob')

        cy.NomeVazio();
        cy.ValidanoNomeVazio()
        cy.AlterandoNome('Teste Automatizado');
        cy.EnviarInfo();
        cy.ValidandoNovoNome()
    });
});