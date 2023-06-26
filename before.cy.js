describe('Metod before', ()=>{


    // для мобільних
    // it('Test 1',{
    // viewportHeight: 800,
    // viewportWidth: 600,
    //}), ()=> {

    before(()=>{  
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    })

    it('Test 1', () => {
      cy.get('[title="Layout"]').click();
      cy.get('[title="Stepper"]').click();
    })
  
    it('Test 2', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Layout"]').click();
        cy.get('[title="List"]').click();

      })
  
  })

  describe('Metod beforeEach', ()=>{

    beforeEach(()=>{  
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Layout"]').click();
    })

    it('Test 1', () => {
      cy.get('[title="Stepper"]').click();
    })
  
    it('Test 2', () => {
       cy.get('[title="List"]').click();
      })
  
  })

  describe('Metod beforeEach i before', ()=>{

    before(()=>{
        cy.log('Message from before hook')
    })

    beforeEach(()=>{  
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Layout"]').click();
    })

    it('Test 1', () => {
      cy.get('[title="Stepper"]').click();
    })
  
    it('Test 2', () => {
       cy.get('[title="List"]').click();
      })
  
  })

  // можно винести before поза describe та він буде працювати для обох describe

  beforeEach(()=>{
    cy.log('Message from general before hook')
})

describe('Metod before', ()=>{


    // для мобільних
    // it('Test 1',{
    // viewportHeight: 800,
    // viewportWidth: 600,
    //}), ()=> {

    before(()=>{  
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    })

    it('Test 1', () => {
      cy.get('[title="Layout"]').click();
      cy.get('[title="Stepper"]').click();
    })
  
    it('Test 2', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Layout"]').click();
        cy.get('[title="List"]').click();

      })
  
  })

  describe('Metod beforeEach', ()=>{

    beforeEach(()=>{  
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Layout"]').click();
    })

    it('Test 1', () => {
      cy.get('[title="Stepper"]').click();
    })
  
    it('Test 2', () => {
       cy.get('[title="List"]').click();
      })
  
  })
