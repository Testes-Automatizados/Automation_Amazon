/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Teste de funcionalidades de login da amazon', () => {
    
    before(() => {
        //Link para login no site 
        cy.visit('https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D2486448719927632032%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9100688%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    })
   
        it('Teste - Fazendo login com dados validos', () =>{

            cy.viewport(1920, 1080);
            
            cy.get(loc.LOGIN.EMAIL).type('usertestesautomatizados@gmail.com');
            cy.get('#continue').click();
            cy.get(loc.LOGIN.PASSWORD).type('TestesAutomatizados123');
            cy.get('#signInSubmit').click();

            cy.url().should('include', '_signin&adgrpid').then(() => {
                cy.log('LOGIN REALIZADO COM SUCESSO')
            });

        })

        it('Teste - Fazendo login com e-mail invalido', () => {
            
            cy.visit('https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D2486448719927632032%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9100688%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
            
            cy.get(loc.LOGIN.EMAIL).type('usertestesautomatiza@gmail.com');
            cy.get('#continue').click();
            cy.get('#auth-error-message-box > .a-box-inner').should('contain', 'Não encontramos uma conta associada a este endereço de e-mail').then(() => {
                cy.log('E-MAIL INVALIDO!');
            })
        })
})