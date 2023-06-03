/// <reference types="Cypress" />

describe('GET Retrieves user posts', () => {
    let accessToken = 'b32f8c543a9aad9fb0557b2d2d93b7efd9dc6f06f1a9fb093602e6423db9ca15'
    it('Succesfully Retrieves user posts', () => {
        cy.request({
          method: "GET",
          url: "https://gorest.co.in/public/v2/users/1598/todos",
          headers: {
              'Authorization': 'Bearer ' + accessToken
          }
        }).then((response) => {
          expect(response.status).equal(200)
          //expect(res.body).has.property('user_id', '1598')
        })
  })
    
})