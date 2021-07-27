const faker =require('faker') //importar biblioteca faker para dados aleatórios

const elementos = require('./elements').ELEMENTS

class Cadastro{
      acessarCadastro(){
        //Acessar a pagina de cadastro
        cy.visit('register');
      }  
      preencherFormularioCadastro(){
        //Preencher formulário de cadastro
        cy.get(elementos.inputName).type(faker.name.firstName() + faker.name.lastName());
        cy.get(elementos.inputEmail).type(faker.internet.email());
        cy.get(elementos.inputPassword).type(123456789);
      }
      submenterFormulario(){
          //submenter o formulário de cadastro
          cy.get(elementos.buttonSubmit).click();
      }
}
export default new Cadastro();