const elementos = require('./elements').ELEMENTS

class Login{
    acessarLogin(){
    //acessar a página de Login
    cy.visit('login');
    }
    
   preencherFormulario(){
    // preencher o formulário
    cy.get(elementos.inputEmail).type(Cypress.config().user.email);
    cy.get(elementos.inputPassword).type(Cypress.config().user.password);
   }
   
   submenterFormulario(){
    // submenter o formulário
    cy.get(elementos.buttonSubmit).click();
   }
}

export default new Login();