
describe.only('Form without labels', () => {
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    })
  
    it('authorization', () => {
      cy.get('input[placeholder="Recipients"]').type('My name')
      cy.get('input[placeholder="Subject"]').type('Question')
      cy.get('textarea[placeholder="Message"]').type('Call me')
      cy.get('[class="status-success appearance-filled size-medium shape-rectangle nb-transition"]').click();
    })
  
  })

