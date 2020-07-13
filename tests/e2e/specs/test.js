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

describe('建立新代辦事項後應該出現代辦事項列表', () => {
  const todo = 'This is new todo'
  it('third e2e', () => {
    cy.visit('http://localhost:8080')
    cy.wait(500)
    cy.get('#app')

    cy.get('.new-todo').type(todo).type('{enter}')
    cy.wait(1000)
    cy.get('.todo-list > .todo:first-child').should('be.visible')
    cy.get('.todo-list > .todo:first-child > .view > label').should('have.text', todo)
  })
})

describe('當沒有代辦事項時列表應該隱藏', () => {
  it('fourth e2e', () => {
    cy.visit('http://localhost:8080')
    cy.wait(500)
    cy.get('#app')

    cy.wait(1000)
    cy.get('.main').should('not.be.visible')
  })
})