/// <reference types="Cypress" />

describe('Create New User / post user request', () => {
    let accessToken = 'b32f8c543a9aad9fb0557b2d2d93b7efd9dc6f06f1a9fb093602e6423db9ca15'
    
    it('Succesfully created new user', () => {
          cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users/2585/posts",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "title": "Fach",
                "body": "Fachry Ramadhan",
            }
          }).then((res) => {
            expect(res.status).equal(201)
            expect(res.body).has.property('title', 'Fach')
            expect(res.body).has.property('body', 'Fachry Ramadhan')
          })
    })
})