// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Login command
 */
Cypress.Commands.add('login', (userName, password) => {
	cy.window().then((win) => {
		win.sessionStorage.clear()
		win.localStorage.clear()
	})
	cy.get('#username').should('have.value', '')
	cy.get('#password').should('have.value', '')
	cy.get('#username').type(userName)
	cy.get('#password').type(password, {log:false})
	cy.get('.btn-login-sip').click()
})

Cypress.Commands.add('getByDataCy', (dataCy) => cy.get(`[data-cy=${dataCy}]`))