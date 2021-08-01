/// <reference types="cypress" />

const faker =require('faker') //importar biblioteca faker para dados aleatórios

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao(){
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFormulario(){
         // preencher o formulário do artigo
        cy.get(el.inputTitle).type('Artigo sobre teste feito com cypress');
        cy.get(el.inputAbout).type('Sobre o Cypress');
        cy.get(el.inputWriteArticle).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('Cypress'+'QA');

    }

    submenterPublicacao(){
        // submeter o artigo 
        cy.get(el.buttonSubmit).click(); 
    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
        
        //templeta string 
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) =>{
           expect(postArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) =>{
            expect(getArticlesTitle.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) =>{
            expect(getArticlesTitleComments.status).to.eq(200)
        })
    }
   
}

export default new Articles();