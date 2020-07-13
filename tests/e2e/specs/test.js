// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Todos')
  })
})

describe('應顯示程式標題與輸入欄位', () => {
  it('first e2e', () => {
    cy.visit('http://localhost:8080')
    cy.wait(500)
    cy.get('#app')
    cy.get('.header')
    cy.contains('h1', 'Todos')
    cy.get('.new-todo')
  })
})

describe('輸入欄位應該在輸入代辦事項後清空', () => {
  const todo = 'This is new todo'
  it('seconed e2e', () => {
    cy.visit('http://localhost:8080')
    cy.wait(500)
    cy.get('#app')

    cy.get('.new-todo').type(todo).type('{enter}')
    cy.get('.new-todo').should('be.empty')
    
  })
})