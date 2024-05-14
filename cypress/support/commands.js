/// <reference types="cypress" />

import loc from '../support/locators'

Cypress.Commands.add('Login', (username, password) => {

    cy.visit('https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
    cy.reload()

    cy.get(loc.LOGIN.EMAIL).type('usertestesautomatizados@gmail.com')
        .tab()
        .wait(2000).click();
    cy.get(loc.LOGIN.PASSWORD).type('TestesAutomatizados123');
    cy.get(loc.LOGIN.SUBMIT).click();
})

Cypress.Commands.add('CriarEndereco', (nome, address1, address2, city, state, cep, phone) => {
        
    const letra1 = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
    const letra2 = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
    const letra3 = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
    const letra4 = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 

    const letrasAleatorias = letra1 + letra2 + letra3 +  letra4;

    const nomeEndereco = `Teste Automatizado ${letrasAleatorias}`

    cy.get('#ya-myab-address-add-link').click();    
    cy.get('#address-ui-widgets-countryCode > .a-button-inner > .a-button-text').type('Rom {enter}');
    cy.wait(2500);

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
    cy.get('#ya-myab-address-delete-btn-0').click()
    cy.get('#deleteAddressModal-0-submit-btn').type('{enter}')
})

Cypress.Commands.add('ExcluirTodosEnderecos', () => {
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

Cypress.Commands.add('AdicionarImagem', (img) => {

    cy.xpath(`//input[@id='pr-upload-file-field']`).click({force:true}).selectFile('cypress/fixtures/foto.png', {force:true}) 
    cy.get('img[src="/avatar/default/A18YPOLZKL43FQ?square=true&max_width=460"]')
        .should('exist')
        .should('have.attr', 'alt', 'Sua foto de perfil').then(() => {
             cy.log('IMAGEM IMPORTADA COM SUCESSO');
        });
})

Cypress.Commands.add('EnviarInfo', () => {
    cy.get('#a-autoid-3 > .a-button-inner > .a-button-input').click()
        cy.url().should('contain', '.account.AHG3C7557U3SXZK6NRHYAZLNZJIQ').then(() => {
            cy.log('INFORMAÇÕES ALTERADAS COM SUCESSO')
        })
})

