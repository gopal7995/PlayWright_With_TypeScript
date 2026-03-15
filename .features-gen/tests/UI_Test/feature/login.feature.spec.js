// Generated from: tests\UI_Test\feature\login.feature
import { test } from "../../../../tests/UI_Test/fixture/fixtures.ts";

test.describe('Verify login', () => {

  test.beforeEach('Background: Navigate to eco login page', async ({ Given, logInPage }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { logInPage }); 
  });
  
  test('Verify user is able to login with valid credentials', { tag: ['@login'] }, async ({ When, Then, And, logInPage, page }) => { 
    await And('I click on My account', null, { logInPage }); 
    await And('I enter E-Mail Address "pranav@testroverautomation.com"', null, { logInPage }); 
    await And('I enter password "Test1234"', null, { logInPage }); 
    await When('I click on submit button', null, { logInPage }); 
    await Then('I should verify url contains "route=account/account"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_Test\\feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"pranav@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"pranav@testroverautomation.com\"","children":[{"start":24,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/account\"","children":[{"start":30,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end