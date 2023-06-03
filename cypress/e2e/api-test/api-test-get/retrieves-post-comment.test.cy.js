/// <reference types="Cypress" />

describe('GET Retrieves posts comments', () => {
    let accessToken = 'b32f8c543a9aad9fb0557b2d2d93b7efd9dc6f06f1a9fb093602e6423db9ca15'
    it('Succesfully Retrieves posts comments', () => {
        cy.request({
          method: "GET",
          url: "https://gorest.co.in/public/v2/posts/2579/comments",
          headers: {
              'Authorization': 'Bearer ' + accessToken
          }
        }).then((response) => {
          expect(response.status).equal(200)
    
        })
  })
    
})