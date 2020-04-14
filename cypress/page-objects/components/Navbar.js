import BasePage from '../BasePage';

export default class Navbar {

  static clickOnLogo() {
    BasePage.click('.brand')
  }

  static search(text) {
    BasePage.typeAndEnter('#searchTerm', text)
  }

  static clickSignIn() {
    BasePage.click('#signin_button')
  }

  static clickSettings() {
    cy.contains('Settings').click()
  }

  static logout() {
    BasePage.click('.icon-user')
    BasePage.click('#logout_link')
  }

  static displaySignInButton() {
    cy.isVisible('#signin_button')
  }
}