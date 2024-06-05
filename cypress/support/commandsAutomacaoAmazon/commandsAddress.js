/// <reference types="cypress" />

import loc from '../../support/locators'
import 'cypress-xpath';

Cypress.Commands.add('ValidandoEndereco', () =>{
    
    cy.get('.a-alert-heading').should('contain', 'Endereço salvo').then(() => {
        cy.log('ENDEREÇO CADASTRADO COM SUCESSO');
    });

})

Cypress.Commands.add('LimparCamposValidar', () => {

    cy.get('#ya-myab-address-add-link').click();  
    cy.get('#address-ui-widgets-countryCode > .a-button-inner > .a-button-text').type('Rom {enter}');
    cy.wait(2500);
   
    cy.get(loc.ENDERECO.NAME).invoke('removeAttr', 'disabled');
    cy.get(loc.ENDERECO.NAME).clear()
    cy.get('#address-ui-widgets-form-submit-button').click().wait(2000)

    const alertasValidacao = [
        '#address-ui-widgets-enterAddressFullName-full-validation-alerts',
        '#address-ui-widgets-enterAddressLine1-full-validation-alerts',
        '#address-ui-widgets-enterAddressCity-full-validation-alerts',
        '#address-ui-widgets-enterAddressPostalCode-full-validation-alerts',
        '#address-ui-widgets-enterAddressPhoneNumber-full-validation-alerts > .a-box > .a-box-inner > .a-alert-content > .a-section'
    ];
    
    cy.wrap(alertasValidacao).each((seletor) => {
        const tipoCampo = seletor.match(/enterAddress(\w+)-full-validation-alerts/)[1];

        const mensagem = `NECESSÁRIO PREENCHER O CAMPO: ${tipoCampo.toUpperCase()}`;

        cy.get(seletor).should('be.visible').then(() =>{
            cy.log(mensagem)
        })
    })
})

Cypress.Commands.add('CriarEndereco', (nome, address1, address2, city, state, cep, phone) => {
        
    const letra1 = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
    const letra2 = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
    const letra3 = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
    const letra4 = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 

    const letrasAleatorias = letra1 + letra2 + letra3 +  letra4;

    const nomeEndereco = `Teste Automatizado ${letrasAleatorias}`

    cy.LimparCamposValidar()

    cy.get(loc.ENDERECO.NAME).invoke('removeAttr', 'disabled');
    cy.get(loc.ENDERECO.NAME).clear()
    cy.get(loc.ENDERECO.NAME).type(nomeEndereco);
    cy.get(loc.ENDERECO.ADDRESS1).type('teste 123');
    cy.get(loc.ENDERECO.ADDRESS2).type('teste 456');
    cy.get(loc.ENDERECO.CITY).type('Brasov');
    cy.get(loc.ENDERECO.STATE).type('Teste');
    cy.get(loc.ENDERECO.CEP).type('500001');
    cy.get(loc.ENDERECO.PHONE).type('99999999999');
    cy.get(loc.ENDERECO.SUBMIT).click();
})

Cypress.Commands.add('ExcluirEndereco', () => {
    cy.visit('https://www.amazon.com.br/a/addresses?ref_=ya_d_c_addr')
    
    cy.get('#ya-myab-address-delete-btn-0').click()
    cy.get('#deleteAddressModal-0-submit-btn').type('{enter}')
})

Cypress.Commands.add('ValidandoExcluirEndereco', () =>{
    cy.get('.a-alert-heading').should('contain', 'Endereço excluído').then(() => {
        cy.log('ENDEREÇO EXCLUÍDO COM SUCESSO');
    });
})


