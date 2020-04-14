import {url, username, password} from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login failed test', () => {

  before(() => {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it('should not login with invalid credentials', () => {
    LoginPage.login('invalid', 'invalid')
  })

  it('should display error message', () => {
    LoginPage.displayErrorMessage()
  })
})

describe('Login success test', () => {

  before(() => {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it('should login with invalid credentials', () => {
    LoginPage.login(username, password)
  })

  it('should logout from application', () => {
    Navbar.logout()
    Navbar.displaySignInButton()
  })
})