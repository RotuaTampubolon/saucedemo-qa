// ============================================================
// TEST SUITE: Checkout Feature
// App: SauceDemo (https://www.saucedemo.com)
// Author: Rotua Immanuela Tampubolon
// ============================================================

// Reusable: login + add item to cart
const loginAndAddToCart = () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('.shopping_cart_link').click()
}

describe('Checkout Feature', () => {

  // Setup: login & add item before each test
  beforeEach(() => {
    loginAndAddToCart()
  })

  // POSITIVE CASE
  it('TC-009 | Complete checkout with valid data should show confirmation', () => {
    cy.get('[data-test="checkout"]').click()

    // Fill in customer information
    cy.get('[data-test="firstName"]').type('Ella')
    cy.get('[data-test="lastName"]').type('tampubolon')
    cy.get('[data-test="postalCode"]').type('20211')

    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()

    // Should see order confirmation
    cy.get('.complete-header')
      .should('have.text', 'Thank you for your order!')
  })

  // NEGATIVE CASES
  it('TC-010 | Empty first name should show validation error', () => {
    cy.get('[data-test="checkout"]').click()

    // Skip first name intentionally
    cy.get('[data-test="lastName"]').type('tampubolon')
    cy.get('[data-test="postalCode"]').type('20211')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'First Name is required')
  })

  it('TC-011 | Empty last name should show validation error', () => {
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Ella')                                              
    // Skip last name intentionally
    cy.get('[data-test="postalCode"]').type('20211')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Last Name is required')
  })

  it('TC-012 | Empty postal code should show validation error', () => {
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Ella')
    cy.get('[data-test="lastName"]').type('tampubolon')
    // Skip postal code intentionally
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Postal Code is required')
  })

})