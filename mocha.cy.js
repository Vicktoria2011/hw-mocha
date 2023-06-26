let someVar3 = "Ця змінна доступна для всіх describe у всьому файлі"

describe('Positive scenarois', ()=>{
  
    let someVar2 = "123"; //"Ця змінна доступна для всіх тестів в межах describe"

  it('Test 1', () => {
    let someVar = 123;
    cy.visit('https://google.com')
    cy.log(someVar)
    cy.log(someVar2)
    cy.log(someVar3)

  })

  it('Test 2', () => {
    cy.visit('https://google.com')
    // cy.log(someVar) // not reachable - не доступен
    cy.log(someVar2)

  })

  it('Test 3', () => {    // it.only - запускає тільки цей тест
    cy.visit('https://google.com')
    cy.log(someVar2)

    someVar3 = 'New text from Test 3'
  })

})

describe('Negativ scenarois', ()=>{

  it('Test 1', () => {
    cy.visit('https://google.com')
       // cy.log(someVar2) // not reachable - не доступен
        cy.log(someVar3)
  })

  it('Test 2', () => {    // it.skip - пропускає тест або describe
    cy.visit('https://google.com')
  })

  it('Test 3', () => { // it.only() - запускає тільки цей тест або describe
    cy.visit('https://google.com')
  })

})

