// ============================================================
// TEST SUITE: Cart Feature
// App: SauceDemo
// Author: Rotua Immanuela Tampubolon
// ============================================================

const login = () => {
  cy.visit('/')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
}

describe('Cart Feature', () => {

  beforeEach(() => {
    login()
  })

  it('TC-006 | Add one product should show badge count of 1', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.screenshot('TC-006-cart-add-one-product')
  })

  it('TC-007 | Remove product should hide cart badge', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('not.exist')

    cy.screenshot('TC-007-cart-remove-product')
  })

  it('TC-008 | Add 3 products should show badge count of 3', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '3')

    cy.screenshot('TC-008-cart-add-three-products')
  })

})