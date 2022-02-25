describe('ExampleTest', () => {
  beforeEach(() => {
    // cy.intercept('/api/test?*', {fixture: 'testResponse.json'}).as('getTest');
    cy.visit('/');
  });

  it('User can request updated fixtures when time range changed', () => {
    // cy.wait('@getTest')
    //   .its('request.url')
    //   .should('contain', `testParam=${true}`);

    cy.get('body').find('input').type('25.02.2022').blur();

    cy.findByText(/^15 ➞ 6$/i).should('be.visible');
  });
});
