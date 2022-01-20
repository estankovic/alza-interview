describe('Alza Interview App Tests', () => {
  describe('Edit Page', () => {
    it('should display existing hero', () => {
      cy.visit('/heroes/1/edit')
      cy.get('.title').contains('details');
    });

    it('should display error text when hero does not exist', () => {
      cy.visit('/heroes/222222/edit')
      cy.get('.title').should('not.exist');
      cy.get('h1').contains('ERROR, Hero does not exist');
    });
  });
})
