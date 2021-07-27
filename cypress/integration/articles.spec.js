/// <reference types="cypress" />

import articles from '../support/pages/articles'

context('Publicação', () => {
    
    beforeEach(() => {
    
        // Preparação
        cy.backgroundLogin();
        articles.acessarFormularioDeNovaPublicacao();
    });
    it('Criar um novo artigo para publicação', () => {
        // Ação
        articles.preencherFormulario();
        articles.submenterPublicacao();
        
        // Verificação
        articles.verificarSeAPublicacaoFoiCriadaComSucesso();
    });
});
