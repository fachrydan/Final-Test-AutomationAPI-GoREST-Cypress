/// <reference types="Cypress" />

describe('Create a posts comment request', () => {
    let accessToken = 'b32f8c543a9aad9fb0557b2d2d93b7efd9dc6f06f1a9fb093602e6423db9ca15'
    
    it('Succesfully created a posts comment', () => {
          cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/comments",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "post_id": 41302,
                "name": "Fr. Budhil Tagore",
                "email": "fr_budhil_tagore@schiller.test",
                "body": "Odio placeat id. Accusamus et sed. Officia reiciendis exercitationem."
            }
          }).then((res) => {
            expect(res.status).equal(201)
            expect(res.body).has.property('post_id', 41302)
            expect(res.body).has.property('name', 'Fr. Budhil Tagore')
            expect(res.body).has.property('email', 'fr_budhil_tagore@schiller.test')
            expect(res.body).has.property('body', 'Odio placeat id. Accusamus et sed. Officia reiciendis exercitationem.')
          })
    })
})