
describe("login", () => {
    beforeEach(() => {
        cy.fixture('login.json').as('usersCredentials')
        cy.visit('/')
    })
    it('login success', () => {
        cy.getByDataCy('txt-btn-login').contains('LOGIN').should('be.visible')
        cy.getByDataCy('txt-btn-login').invoke('text').should('contain', 'LOGIN')
        cy.getByDataCy('btn-login').click()
        cy.get('@usersCredentials')
            .then(({ userName, password }) => {
                cy.login(userName, password)
            })
            cy.window().its('store').invoke('getState').should('have.keys', ['oidc'])
        })

    it('login invalid credentiales', () => {
        cy.getByDataCy('btn-login').click()
        cy.login('adimbptm', 'invalidpassword')
        cy.contains("Invalid username or password").should('be.visible');
    })
})


