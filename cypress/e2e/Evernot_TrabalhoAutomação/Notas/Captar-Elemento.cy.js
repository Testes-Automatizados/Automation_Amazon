   
   
   
   it('Capturando elemento na tela', () => {

        cy.visit('https://www.amazon.com.br/a/addresses?ref_=ya_d_c_addr');

        cy.get('#address-ui-widgets-FullName').should(($elemento) => {
            
            const textoElemento = $elemento.text();

            if(textoElemento.includes('Teste Endereço Criou')){
                expect(textoElemento).to.contain('Teste Endereço Criou');
            } else {
                throw new Error('Texto esperado não foi encontrado');
            }
        });

    });