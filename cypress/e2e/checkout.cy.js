// ============================================================
// TEST SUITE: Checkout Feature
// App: SauceDemo
// Author: Rotua Immanuela Tampubolon
// ============================================================

const loginAndAddToCart = () => {
  cy.visit('/')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('.shopping_cart_link').click()
}

describe('Checkout Feature', () => {

  beforeEach(() => {
    loginAndAddToCart()
  })

  it('TC-009 | Complete checkout with valid data should show confirmation', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Rotua')
    cy.get('[data-test="lastName"]').type('Tampubolon')
    cy.get('[data-test="postalCode"]').type('20211')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()

    cy.get('.complete-header')
      .should('have.text', 'Thank you for your order!')

    cy.screenshot('TC-009-checkout-success-confirmation')
  })

  it('TC-010 | Empty first name should show validation error', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="lastName"]').type('Tampubolon')
    cy.get('[data-test="postalCode"]').type('20211')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'First Name is required')

    cy.screenshot('TC-010-checkout-empty-firstname-error')
  })

  it('TC-011 | Empty last name should show validation error', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Rotua')
    cy.get('[data-test="postalCode"]').type('20211')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Last Name is required')

    cy.screenshot('TC-011-checkout-empty-lastname-error')
  })

  it('TC-012 | Empty postal code should show validation error', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Rotua')
    cy.get('[data-test="lastName"]').type('Tampubolon')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Postal Code is required')

    cy.screenshot('TC-012-checkout-empty-postalcode-error')
  })

})