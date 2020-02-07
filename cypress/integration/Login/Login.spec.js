
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
        })

    it('login success 2', () => {
        cy.getByDataCy('btn-login').click()
        cy.get('@usersCredentials')
            .then(({ userName, password }) => {
                cy.login(userName, password)
            })
    })
})


