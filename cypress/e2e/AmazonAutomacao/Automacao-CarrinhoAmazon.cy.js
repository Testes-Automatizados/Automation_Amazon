/// <reference types="cypress" />

import loc from '../../support/locators'     
import commands from '../../support/commandsAutomacaoAmazon/commandsCart'
import command from '../../support/commands'
import 'cypress-xpath';

describe('Teste para validação de adição de um item e adição de varias quantidades de um unico item', () => {

    beforeEach(() => {
        cy.Login()
    });

    it('Teste - Adicionando 1 item no carrinho', () => {

        cy.SelectProdutoAdd('https://www.amazon.com.br/Sapiens-Edi%C3%A7%C3%A3o-quadrinhos-nascimento-humanidade/dp/8535933824/ref=pd_rhf_ee_s_vtp_ses_clicks_nonshared_d_sccl_1_3/134-9477002-7788141?pd_rd_w=4J00w&content-id=amzn1.sym.57378bdf-5d29-4df6-8bba-d06b3def404c&pf_rd_p=57378bdf-5d29-4df6-8bba-d06b3def404c&pf_rd_r=4YVB2A31KF7GYDAZGCG7&pd_rd_wg=EM9si&pd_rd_r=8d478b18-3e81-4777-a495-3daa98b21135&pd_rd_i=8535933824&psc=1');
        cy.ValidandoAdd();
        cy.AcessandoCarrinho();
        cy.ValidarCarrinho('#sc-subtotal-label-buybox'); 
    });

    it('Teste - Adicionando itens em massa no carrinho', () => {
        

        cy.visit('https://www.amazon.com.br/dp/6584956237/ref=sspa_dk_detail_4?psc=1&pd_rd_i=6584956237&pd_rd_w=4TkI7&content-id=amzn1.sym.dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_p=dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_r=NY0SSMFFWZ4J34YNFRQP&pd_rd_wg=TiOCF&pd_rd_r=9f245fab-c565-45d7-898d-1f1401bf4efe&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw')
        cy.clicarNTimes('[data-action="increase-quantity-action"] > .a-column > .a-size-medium-plus', 5)
        cy.SelectProdutsAll()
        cy.ValidarCarrinho('#sc-subtotal-label-buybox')
    });
});