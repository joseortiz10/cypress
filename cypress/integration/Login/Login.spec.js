
describe("login", () => {
    before(() => {
        cy.visit('http://localhost:3000')
    })
    it('login', () => {
        cy.login('adimbptm', 'sesamo')
    })
})

