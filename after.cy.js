beforeEach(()=>{  // виконається перед всіма
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Layout"]').click();
  })

describe('Metod after', ()=>{
    
    after(()=>{ // виконається в любому разі після всіх
        cy.log('Log from after hook**')
    })
    it('Test 1', {retries: 2}, () => { // кількість повторних спроб, якщо є помилка
      cy.get('[title="Stepper"]').click(); // указати Stepper1, щоб повторити помилку та повтор
    })                            // або указати в cypress.config
  
    it('Test 2', () => {
        cy.get('[title="List"]').click();
      })
  
})

describe('Metod afterEach', ()=>{
    
    afterEach(()=>{ // виконається в любому разі після всіх/ як посткондішен
        cy.log('Log from afterEach hook**')
    })

    it('Test 1', () => {
      cy.get('[title="Stepper"]').click();
    })
  
    it('Test 2', () => {
        cy.get('[title="List"]').click();
      })
  
})