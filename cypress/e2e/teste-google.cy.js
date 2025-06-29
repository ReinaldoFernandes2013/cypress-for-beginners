/// <reference types= "cypress" />

describe('Testes Básicos no Google', () => {
    it('Acessar o Google', () => {
        cy.visit('https://Google.com');
        cy.title().should('include','Google');
    });

    it('Deve digitar Cypress na barra de pequisa do Google', () => {
        cy.visit('https://Google.com');
        cy.get('[name="q"]').type('Cypress');
    });

    
});