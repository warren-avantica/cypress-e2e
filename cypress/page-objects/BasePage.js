export default class BasePage {

  static click(selector) {
    cy.get(selector).click()
  }

  static type(selector, text) {
    cy.get(selector).type(text)
  }

  static typeAndEnter(selector, text) {
    cy.get(selector).type(`${text} {enter}`)
  }

  static pause(ms) {
    cy.wait(ms)
  }

  static setMobileViewport() {
    cy.viewport('iphone-x')
  }
  
  static setTabletViewport() {
    cy.viewport('ipad-2')
  }

  static setDesktopViewport() {
    cy.viewport('macbook-13')
  }

  static setLargeDesktopViewport() {
    cy.viewport(1920, 1080)
  }
}