/// <reference types="cypress" />

const faker =require('faker') //importar biblioteca faker para dados aleatórios

const elementos = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao(){
        cy.get(elementos.linkNovaPublicacao).click();
    }

    preencherFormulario(){
         // preencher o formulário do artigo
        cy.get(elementos.inputTitle).type('Artigo sobre teste feito com cypress');
        cy.get(elementos.inputAbout).type('Sobre o Cypress');
        cy.get(elementos.inputWriteArticle).type(faker.lorem.paragraph());
        cy.get(elementos.inputTags).type('Cypress'+'QA');

    }

    submenterPublicacao(){
        // submeter o artigo 
        cy.get(elementos.buttonSubmit).click(); 
    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
        
        //templeta string 
        cy.wait(`@${Routes.as.POSTArticles}`).then((postArticlesResponse) =>{
           expect(postArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.GETArticlesTitle}`).then((getArticlesResponse) =>{
            expect(getArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.GETArticlesTitleComments}`).then((getArticlesTitleComments) =>{
            expect(getArticlesTitleComments.status).to.eq(200)
        })
    }
   
}

export default new Articles();