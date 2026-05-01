// ============================================================
// TEST SUITE: Login Feature
// App: SauceDemo
// Author: Rotua Immanuela Tampubolon
// Uses: cy.fixture() for data-driven testing
// ============================================================

describe('Login Feature', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // POSITIVE CASE
  it('TC-001 | Valid login should redirect to Products page', () => {
    cy.fixture('users').then((users) => {
      cy.get('#user-name').type(users.validUser.username)
      cy.get('#password').type(users.validUser.password)
      cy.get('#login-button').click()

      cy.url().should('include', '/inventory')
      cy.get('.title').should('have.text', 'Products')
      cy.screenshot('TC-001-login-valid-success')
    })
  })

  //  NEGATIVE CASES
  it('TC-002 | Locked out user should see error message', () => {
    cy.fixture('users').then((users) => {
      cy.get('#user-name').type(users.lockedUser.username)
      cy.get('#password').type(users.lockedUser.password)
      cy.get('#login-button').click()

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Sorry, this user has been locked out')
      cy.screenshot('TC-002-login-locked-out-error')
    })
  })

  it('TC-003 | Empty username should show validation error', () => {
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Username is required')
    cy.screenshot('TC-003-login-empty-username-error')
  })

  it('TC-004 | Empty password should show validation error', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Password is required')
    cy.screenshot('TC-004-login-empty-password-error')
  })

  it('TC-005 | Wrong password should show credentials error', () => {
    cy.fixture('users').then((users) => {
      cy.get('#user-name').type(users.invalidUser.username)
      cy.get('#password').type(users.invalidUser.password)
      cy.get('#login-button').click()

      cy.get('[data-test="error"]')
        .should('contain', 'Username and password do not match')
      cy.screenshot('TC-005-login-wrong-credentials-error')
    })
  })

})