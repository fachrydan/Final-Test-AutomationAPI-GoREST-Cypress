/// <reference types="Cypress" />

describe('Delete user request', () => {
    let accessToken = 'b32f8c543a9aad9fb0557b2d2d93b7efd9dc6f06f1a9fb093602e6423db9ca15'
    it('Succesfully delete user', () => {
        cy.request({
          method: "DELETE",
          url: "https://gorest.co.in/public/v2/users/2473465",
          headers: {
              'Authorization': 'Bearer ' + accessToken
          }
        }).then((res) => {
          expect(res.status).equal(204)
        })
  })
    
})