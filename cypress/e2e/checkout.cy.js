// ============================================================
// TEST SUITE: Checkout Feature
// App: SauceDemo
// Author: Rotua Immanuela Tampubolon
// Uses: cy.fixture() for data-driven testing
// ============================================================

describe('Checkout Feature', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
  })

  // POSITIVE CASE
  it('TC-009 | Complete checkout with valid data should show confirmation', () => {
    cy.fixture('checkout').then((data) => {
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type(data.validCustomer.firstName)
      cy.get('[data-test="lastName"]').type(data.validCustomer.lastName)
      cy.get('[data-test="postalCode"]').type(data.validCustomer.postalCode)
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()

      cy.get('.complete-header')
        .should('have.text', 'Thank you for your order!')
      cy.screenshot('TC-009-checkout-success-confirmation')
    })
  })

  // NEGATIVE CASES
  it('TC-010 | Empty first name should show validation error', () => {
    cy.fixture('checkout').then((data) => {
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="lastName"]').type(data.missingFirstName.lastName)
      cy.get('[data-test="postalCode"]').type(data.missingFirstName.postalCode)
      cy.get('[data-test="continue"]').click()

      cy.get('[data-test="error"]')
        .should('contain', 'First Name is required')
      cy.screenshot('TC-010-checkout-empty-firstname-error')
    })
  })

  it('TC-011 | Empty last name should show validation error', () => {
    cy.fixture('checkout').then((data) => {
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type(data.missingLastName.firstName)
      cy.get('[data-test="postalCode"]').type(data.missingLastName.postalCode)
      cy.get('[data-test="continue"]').click()

      cy.get('[data-test="error"]')
        .should('contain', 'Last Name is required')
      cy.screenshot('TC-011-checkout-empty-lastname-error')
    })
  })

  it('TC-012 | Empty postal code should show validation error', () => {
    cy.fixture('checkout').then((data) => {
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type(data.missingPostalCode.firstName)
      cy.get('[data-test="lastName"]').type(data.missingPostalCode.lastName)
      cy.get('[data-test="continue"]').click()

      cy.get('[data-test="error"]')
        .should('contain', 'Postal Code is required')
      cy.screenshot('TC-012-checkout-empty-postalcode-error')
    })
  })

})