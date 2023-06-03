/// <reference types="Cypress" />

describe('Create a user todos request', () => {
    let accessToken = 'b32f8c543a9aad9fb0557b2d2d93b7efd9dc6f06f1a9fb093602e6423db9ca15'
    
    it('Succesfully Created a user todos', () => {
          cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/todos",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "user_id": 2460446,
                "title": "Vigilo subvenio thesaurus aranea sunt.",
                "due_on": "2023-06-21T00:00:00.000+05:30",
                "status": "completed"
            }
          }).then((res) => {
            expect(res.status).equal(201)
            expect(res.body).has.property('user_id', 2460446)
            expect(res.body).has.property('title', 'Vigilo subvenio thesaurus aranea sunt.')
            expect(res.body).has.property('due_on', '2023-06-21T00:00:00.000+05:30')
            expect(res.body).has.property('status', 'completed')
          })
    })
})