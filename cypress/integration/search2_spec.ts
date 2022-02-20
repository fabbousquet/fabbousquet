
describe('Google Search of hiboo.io', () => {
  var link = null  ;
  it('loads search page', () => {
    cy.visit('https://www.google.com');
  });



// type the search
  it('searches for `hiboo.io`', () => {
    if (cy.get('#L2AGLb > .QS5gu')) {
      cy.get('#L2AGLb > .QS5gu').click()
    }
    cy.get('input[name="q"]').type('hiboo.io{enter}');
  });

// get the first url and check
  it('gets first search result', () => {


    cy.get('#search a')
      .invoke('attr', 'href')
      .then((href) => {
        //expect(href).to.contain('https://www.hiboo.io/'));
        expect(href).to.contain('https://www.hiboo.io/')
        link = href
        cy.log(href)

    });



      
  });

  // visit website
    it('visit the hiboo website', () => {

      cy.get('#search a').first().click()
      cy.wait(3000)
      cy.document().its('contentType').should('eq', 'text/html')


      });

      //asert we are on hiboo website
      it('looks inside <title> tag', () => {
    cy.get('head title').should('contain', 'Hiboo')
    })


});
