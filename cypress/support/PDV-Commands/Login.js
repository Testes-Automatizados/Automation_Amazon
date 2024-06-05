import 'cypress-xpath';

Cypress.Commands.add('Login', () =>{
    const user = 'Gama'
    const password = 'Moovefy@2022'

    cy.visit('https://gamapldigitalhmlg.azurewebsites.net/Login?ReturnUrl=%2F')
    cy.xpath(`//input[@name='Usuario']`).type(user).wait(1000)
    cy.xpath(`//input[@name='Senha']`).type(password)
    cy.xpath(`//*[@id='btnLogin']`).dblclick()
    //Validação de login
    cy.url().should('not.include', 'Login?ReturnUrl=%2F').then(() => {
        cy.log('Login realizado com sucesso!')
    })
})