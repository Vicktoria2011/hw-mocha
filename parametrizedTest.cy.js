describe('Parametrized test 1', ()=>{

    const tests = [{testData: "CYPRESS", expectedResult:"cypress js"}, {testData: "UKRAINE", expectedResult:"ukraine war map"}];

    tests.forEach(text => {

    it(`Test for text"{text}"`, () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Layout"]').click();
    cy.get('[title="Stepper"]').click();
    cy.get('input[placeholder="Enter your name"]').type(text)
    })
    })
})

describe('Parametrized test 2', ()=>{

    const tests = [{testData: "CYPRESS", expectedResult:"cypress js"}, {testData: "UKRAINE", expectedResult:"ukraine war map"}];

    tests.forEach(({testData, expectedResult}) => {
    it(`Test search for term"{testData}"`, () => {
    cy.visit('https://google.com/');
    cy.get('textarea[type="search"]').type(testData)
    cy.get('[role="listbox"] .sbct[role="presentation"]').should('contain', expectedResult)
    })
    })
})