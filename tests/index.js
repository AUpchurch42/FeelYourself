module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      // .setValue('input[type=text]', 'qwetrqghbqb')
      // .waitForElementVisible('button[name=btnG]', 1000)
      .pause(1000)
      .click('#linkButton')
      .pause(1000)
      .assert.containsText('h3', 'Feel Yourself')
      .end();
  }
};