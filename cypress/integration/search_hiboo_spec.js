describe('Google Search of hiboo.io', () => {
  it('loads search page', () => {
    cy.visit('https://www.google.fr');
  });

  it('searches for `hiboo.io`', () => {
    cy.get('input[name="q"]').type('hiboo.io{enter}');
  });

  it('gets first search result', () => {
    cy.get('#search a')
      .invoke('attr', 'href')
      .then((href) => console.log(href));
  });
});
