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

describe('當完成代辦事項後應標記為已完成', () => {
  const todo = 'This is new todo'
  it('fifth e2e', () => {
    cy.visit('http://localhost:8080')
    cy.wait(500).get('#app').should('be.visible')

    cy.get('.new-todo').type(todo).type('{enter}')
    cy.wait(1000)
    cy.get('.todo-list > .todo:first-child').should('be.visible')
    cy.get('.todo-list > .todo:first-child > .view > label').should('have.text', todo)

    cy.get('.todo-list > .todo:first-child > .view > .toggle').click()
    cy.get('.todo-list > .todo:first-child').should('have.class', 'completed')
  })
})

describe('應可從列表上刪除代辦事項', () => {
  const todo = 'This is new todo'
  it('six e2e', () => {
    cy.visit('http://localhost:8080')
    cy.wait(500).get('#app').should('be.visible')

    cy.get('.new-todo').type(todo).type('{enter}')
    cy.wait(1000)
    cy.get('.todo-list > .todo:first-child').should('be.visible')
    cy.get('.todo-list > .todo:first-child > .view > label').should('have.text', todo)

    cy.get('.todo-list > .todo:first-child').trigger('mouseover')
    cy.get('.todo-list > .todo:first-child > .view > button.destroy').click({ force: true })
    cy.get('.todo-list > .todo:first-child').should('not.exist')
  })
})

describe('重整頁面之後應該看到新增的待辦事項', () => {
  const todo = 'This is new todo'
  it('seven e2e', () => {
    //show
    cy.visit('http://localhost:8080')
    cy.wait(500).get('#app').should('be.visible')
    //addTodo
    cy.get('.new-todo').type(todo).type('{enter}')
    cy.wait(1000)
    cy.get('.todo-list > .todo:first-child').should('be.visible')
    cy.get('.todo-list > .todo:first-child > .view > label').should('have.text', todo)
    //check first todo item
    cy.reload()
    cy.get('.todo-list > .todo:first-child > .view > label').should('have.text', todo)
  })
})