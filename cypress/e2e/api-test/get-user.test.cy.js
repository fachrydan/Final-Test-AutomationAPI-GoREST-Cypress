describe('Get User List', () => {

    it('Verify the list users will displayed', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/'
           
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })
}) 