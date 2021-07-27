/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Efetuar login com sucesso', () => {
     login.acessarLogin();
     login.preencherFormulario();
     login.submenterFormulario();

    // verificação
    });
});