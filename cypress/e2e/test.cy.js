/// <reference types="Cypress" />

describe('Create New User / post user request', () => {
    let accessToken = 'b32f8c543a9aad9fb0557b2d2d93b7efd9dc6f06f1a9fb093602e6423db9ca15'
    
    it('Succesfully created new user', () => {
          cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Fachry Ramadhan123123",
                "email": "fach010013@gmail.com",
                "gender": "male",
                "status": "active"
            }
          }).then((res) => {
            expect(res.status).equal(201)
            // expect(res.body.data).has.property('email:fach01001@gmail.com')
            // expect(res.body.data).has.property('gender:male')
          })
    })
})