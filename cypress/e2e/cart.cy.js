// ============================================================
// TEST SUITE: Cart Feature
// App: SauceDemo (https://www.saucedemo.com)
// Author: Rotua Immanuela Tampubolon
// ============================================================

// Reusable login action — avoid repeating code
const login = () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
}

describe('Cart Feature', () => {

  // Login before each test
  beforeEach(() => {
    login()
  })

  // POSITIVE CASES
  it('TC-006 | Add one product should show badge count of 1', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it('TC-007 | Remove product should hide cart badge', () => {
    // Add first, then remove
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('TC-008 | Add 3 products should show badge count of 3', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    cy.get('.shopping_cart_badge').should('have.text', '3')
  })

})