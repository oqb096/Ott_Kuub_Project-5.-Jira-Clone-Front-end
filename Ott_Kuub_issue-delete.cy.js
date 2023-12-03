describe('Test Case 1: Issue Deletion', () => {
    beforeEach(() => {
      // Assert visibility of the issue detail view modal
      cy.get('[data-testid="modal:issue-detail"]').should('be.visible');
    });
  
    it('Should delete an issue successfully', () => {
      // Click the delete button and confirm deletion
      cy.get('[data-testid="button:delete"]').click();
      cy.get('[data-testid="modal:confirm-delete"]').should('be.visible').then(() => {
      cy.get('[data-testid="button:confirm"]').click();
  
      // Assert that the deletion confirmation dialogue is not visible
      cy.get('[data-testid="modal:confirm-delete"]').should('not.exist');
      cy.get('[data-testid="issue-card"]').should('not.exist');
    });  

  it('Test Case 2: Issue Deletion Cancellation', () => {
    // Click the delete button and cancel deletion
    cy.get('[data-testid="button:delete"]').click();
    
    // Assert that the deletion confirmation dialogue is visible
    cy.get('[data-testid="modal:confirm-delete"]').should('be.visible');

    // Cancel deletion
    cy.get('[data-testid="button:cancel"]').click();

    // Assert that the deletion confirmation dialogue is not visible
    cy.get('[data-testid="modal:confirm-delete"]').should('not.exist').then(() => { 
    cy.get('[data-testid="issue-card"]').should('be.visible');
  });
});