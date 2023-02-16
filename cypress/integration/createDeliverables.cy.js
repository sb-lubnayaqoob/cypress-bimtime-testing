/// <reference types="cypress" />


describe('Create Deliverables', function (){

    it('google search', function () {

        cy.visit('https://app.sablono.link/account/login')
        cy.get('#username').type('lubna.yaqoob+PR@sablono.com', { delay: 50 })
        cy.get('#password').type('Abcd1234')
        cy.get('#login-button').click()
        cy.get('.sb-add-new-card-content').click()
        cy.get('#projectName').type('CYProject',{ delay: 200 })
        cy.get('#projectCode').type('CY123')
        cy.get('#projectDescription').type('This is cypress automation project')
        cy.get('.create-project-button > span').click()
        cy.wait(3000)
        cy.get('.sb-toolbar-navigator-trigger-menu').click()
        //cy.get('.ng-binding').should('contain.text', 'Setup').click()
        cy.wait(3000)
        cy.contains('Setup').click()
        cy.get('[style="transform: none; width: 37px; height: 36px; position: absolute; z-index: 2147483647; background-color: rgb(159, 196, 231); top: -78px; left: 42.1333px;"]').click()
        //cy.get('#sb-sidenav-list-menu-header-SECTION_SIDENAV_SETUP_TITLE > [ng-show="sidenav.showSection(section.pages)"] > v-pane-header > div[ng-transclude=""] > .sb-sidenav-list-link > span').click()
    })
})


