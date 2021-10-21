describe('Basic tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('loads the site', () => {
    cy.contains('Your notes')
  })

  it('opens new note window', () => {
    cy.contains('New note').click()
    cy.contains('Submit')
  })
})

describe('Note creation and deletion', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
    cy.clearLocalStorage()
    cy.clearCookies()
    indexedDB.deleteDatabase('localpostits')
  })

  it('creates a note with title', () => {
    cy.contains('New note').click()
    cy
      .get('input[placeholder="Note title"]')
      .type('Test note')
      .should('have.value', 'Test note')
    cy.contains('Submit').click()

    cy.contains('Test note')
  })

  it('creates a note with title and body', () => {
    cy.contains('New note').click()
    cy
      .get('input[placeholder="Note title"]')
      .type('Test note')
      .should('have.value', 'Test note')
    cy
      .get('textarea[placeholder="Note content"]')
      .type('Test content')
      .should('have.value', 'Test content')
    cy.contains('Submit').click()

    cy.contains('Test note')
    cy.contains('Test content')
  })

  it('deletes a note', () => {
    cy.contains('New note').click()
    cy
      .get('input[placeholder="Note title"]')
      .type('Test note')
      .should('have.value', 'Test note')
    cy
      .get('textarea[placeholder="Note content"]')
      .type('Test content')
      .should('have.value', 'Test content')
    cy.contains('Submit').click()

    cy.contains('Test note')
    cy.contains('Test content')

    cy.contains('Remove').click()

    cy.contains('Test note').should('not.exist')
    cy.contains('Test content').should('not.exist')
  })
})
