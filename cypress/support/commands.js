/// <reference types="cypress" />

import loc from '../support/locators'

Cypress.Commands.add('Login', (username, password) => {

    cy.visit('https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
    cy.reload()
    
    cy.get(loc.LOGIN.EMAIL).type('usertestesautomatizados@gmail.com')
        .tab()
        .wait(1000).click();
    cy.get(loc.LOGIN.PASSWORD).type('TestesAutomatizados123');
    cy.get(loc.LOGIN.SUBMIT).click();
})

Cypress.Commands.add('ExcluirTodosEnderecos', () => {

    cy.visit('https://www.amazon.com.br/a/addresses?ref_=ya_d_c_addr')

    const excluirEnderecoRecursivo = () => {
        
        cy.get('#ya-myab-address-delete-btn-0').then($botaoExcluir => {
            if ($botaoExcluir.length > 0) {
    
                cy.wrap($botaoExcluir).click();

                cy.wait(1000); 

                cy.get('#deleteAddressModal-0-submit-btn').type('{enter}');
                
                excluirEnderecoRecursivo();
            }
        });
    };
    
    excluirEnderecoRecursivo();
});

Cypress.Commands.add('clicarNTimes', (selector, vezes) => {
    for(let i = 0; i < vezes; i++) {
        cy.get(selector).click()
    }
});

Cypress.Commands.add('ExcluirItensCarrinho', (selector) => {
    cy.get('').then(($botaoExcluir) => {

        const botaoExcluir = $botaoExcluir

        cy.get(selector).should('be.visible').then(() => {

            if(botaoExcluir == true) {
                cy.get(selector).click()
                cy.reload()
            }else{
                return;
            }
        })
    })
})



