//Criando comando de login no Evernote
Cypress.Commands.add('Login', (username, password) => {

    cy.visit('link site evernote')

    cy.get(LOC.LOGIN.EMAIL)
    cy.get(LOC.LOGIN.SENHA)
    cy.click()
})