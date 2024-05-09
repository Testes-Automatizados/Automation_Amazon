describe('Primeiro Teste: Fazendo login no site Evernote', () => {
    
    before(() => {

        //Fazendo login no site
        cy.visit('https://evernote.com/pt-br')


    })
    it('mapeando', () =>{
        //teste alterando a branch e indo para validação
        cy.get('.relative > .bg-accent').click()
        cy.get('.rich-wrapper--hero-vertical > :nth-child(4) > a').click()
        cy.get('#email').type('leomiranda844@gmail.com')
        cy.get('form > .flex-col > .flex').click()

    })
})