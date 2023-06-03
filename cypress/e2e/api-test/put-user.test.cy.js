/// <reference types="Cypress" />

describe('Edit / Modify Email', () => {
    let accessToken = 'b32f8c543a9aad9fb0557b2d2d93b7efd9dc6f06f1a9fb093602e6423db9ca15'
    
    it('Succesfully created new user', () => {
          cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Fachryyy Ramadhan",
                "email": "fachfach01@gmail.com",
                "gender": "male",
                "status": "active"
            }
          }).then((res) => {
            expect(res.status).equal(201)
            expect(res.body).has.property('name', 'Fachryyy Ramadhan')
            expect(res.body).has.property('email', 'fachfach01@gmail.com')
            expect(res.body).has.property('gender', 'male')
            expect(res.body).has.property('status', 'active')
          })
    })
})