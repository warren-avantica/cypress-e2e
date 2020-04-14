import BasePage from '../BasePage'

export default class AccountLinks {

  static clickSummary() {
    BasePage.click('#account_summary_tab')
  }
  
  static clickActivity() {
    BasePage.click('#account_activity_tab')
  }
  static clickFunds() {
    BasePage.click('#transfer_funds_tab')
  }
  static clickBills() {
    BasePage.click('#pay_bills_tab')
  }
  static clickMoney() {
    BasePage.click('#money_map_tab')
  }
  static clickOnline() {
    BasePage.click('#online_statements_tab')
  }

}