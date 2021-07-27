/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastro de um novo usuário', () => {
        cadastro.acessarCadastro();
        cadastro.preencherFormularioCadastro();
        cadastro.submenterFormulario();
        
       
    });
});