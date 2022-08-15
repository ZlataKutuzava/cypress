/// <reference types="cypress" />

describe('Todos Test Suite', () => {
    it('adds and removes todos', () => {
        cy.visit('/');
        cy.get('.new-todo').type('Brush teeth{enter}').type('Eat{enter}');
        cy.get('.todo-list li').should('have.length', 2).first().find('.destroy').click({force: true});
        cy.contains('li', 'Eat').should('be.visible');
    });
});