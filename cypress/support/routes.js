class Routes {

as = {
    POSTArticles: 'POSTArticles',
    GETArticlesTitle: 'GETArticlesTitle',
    GETArticlesTitleComments: 'GETArticlesTitleComments'
}    

init(){
    cy.server();
    cy.route('POST', '**/api/articles').as(this.as.POSTArticles);
    cy.route('GET', '**/api/articles/artigo-sobre-teste-feito-com-cypress-**').as(this.as.GETArticlesTitle);
    cy.route('GET', '**/api/articles/artigo-sobre-teste-feito-com-cypress-**/comments').as(this.as.GETArticlesTitleComments);    
    
}
}

export default new Routes();