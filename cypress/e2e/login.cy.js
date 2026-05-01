// ============================================================
// TEST SUITE: Login Feature
// App: SauceDemo (https://www.saucedemo.com)
// Author: Rotua Immanuela Tampubolon
// ============================================================

describe('Login Feature', () => {

  // Runs before each test — open the login page
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  // POSITIVE CASES
  it('TC-001 | Valid login should redirect to Products page', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Should land on inventory page
    cy.url().should('include', '/inventory')
    cy.get('.title').should('have.text', 'Products')
  })

  // NEGATIVE CASES
  it('TC-002 | Locked out user should see error message', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out')
  })

  it('TC-003 | Empty username should show validation error', () => {
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Username is required')
  })

  it('TC-004 | Empty password should show validation error', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Password is required')
  })

  it('TC-005 | Wrong password should show credentials error', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Username and password do not match')
  })

})