/* globals describe it cy Cypress */
// <reference types="cypress" />

import { helpers } from '../support/tests';
const siteUrl = Cypress.env('localURL');

// Test A11Y
describe('Tests - localhost', () => {

    // For each screen size
    helpers.sizes.forEach((size) => {

        it(`Form test ${size}`, () => {

            // Set viewport size
            if (size) { helpers.viewportSize(size); }

            // Visit URL
            cy.visit(siteUrl);

            // Inject AXE
            cy.injectAxe();

            /**
             * Step 01
            */

            // Check steps navigation
            cy.get('.step__button').eq(0).should('have.class', 'step__button--current');
            cy.get('.step__button').eq(1).should('be.disabled');
            cy.get('.step__button').eq(2).should('be.disabled');

            // Check form validation in step 01
            cy.get('.userForm__submit').click();                // Click to check validation errors
            cy.get('.form-errors').should('be.visible');        // Should see global error box
            cy.get('p.form-error').should('have.length', 6);    // Shoud have 6 error boxes

            // Fill in the form
            cy.get('#title').select('Mr');
            cy.get('#firstName').type('John');
            cy.get('#lastName').type('Doe');
            cy.get('p.form-error').should('have.length', 3); // Shoud have 6 error boxes

            // Check e-mail validation
            cy.get('#email + .form-error').contains('Email is required');
            cy.get('#email').type('test');
            cy.get('#email + .form-error').contains('Invalid e-mail address');
            cy.get('#email').clear().type('test@domain.tld');
            cy.get('#email + .form-error').should('not.exist');

            // Check phone validation
            cy.get('#mobilePhone + .form-error').contains('Mobile number is required');
            cy.get('#mobilePhone').type('123');
            cy.get('#mobilePhone + .form-error').contains('Min length not reached');
            cy.get('#mobilePhone').type('4567890123');
            cy.get('#mobilePhone + .form-error').contains('Max length exceeded');
            cy.get('#mobilePhone').clear().type('123456789012');
            cy.get('#mobilePhone + .form-error').should('not.exist');

            // Check developer radio button
            cy.get('label.userForm__label[for="Developer02"]').click();

            // Should have no validation errors at this stage
            cy.get('.form-errors').should('not.be.visible'); // Should not see global error box
            cy.get('p.form-error').should('have.length', 0); // Shoud have 0 error boxes

            // Check A11Y
            cy.wait(500).checkA11y();

            // Go to next step
            cy.get('.userForm__submit').click();


            /**
             * Step 02
             */

            // Check steps navigation
            cy.get('.step__button').eq(0).should('have.class', 'step__button--finished');
            cy.get('.step__button').eq(1).should('have.class', 'step__button--current');
            cy.get('.step__button').eq(2).should('be.disabled');

            // Check next step button
            cy.get('.prevNext__button').eq(1).should('be.disabled');
            cy.get('label[for="Approve"]').click();
            cy.get('.prevNext__button').eq(1).should('not.be.disabled');
            cy.get('label[for="Approve"]').click();
            cy.get('.prevNext__button').eq(1).should('be.disabled');

            // Get back to Step 01
            cy.get('.prevNext__button').eq(0).click();

            cy.get('#title').should('have.value', 'Mr');
            cy.get('#firstName').should('have.value', 'John');
            cy.get('#lastName').should('have.value', 'Doe');
            cy.get('#email').should('have.value', 'test@domain.tld');
            cy.get('#mobilePhone').should('have.value', '123456789012');
            cy.get('#Developer02').should('be.checked');

            // Check A11Y
            cy.wait(500).checkA11y();

            // Get to step 03
            cy.get('.userForm__submit').click();
            cy.get('label[for="Approve"]').click();
            cy.get('.prevNext__button').eq(1).click();

            /**
            * Step 03
            */

            // Check steps navigation
            cy.get('.step__button').eq(0).should('have.class', 'step__button--finished');
            cy.get('.step__button').eq(1).should('have.class', 'step__button--finished');
            cy.get('.step__button').eq(2).should('have.class', 'step__button--current');

            // Check summary
            cy.get('h2 + ul').contains('Mr');
            cy.get('h2 + ul').contains('John');
            cy.get('h2 + ul').contains('Doe');
            cy.get('h2 + ul').contains('test@domain.tld');
            cy.get('h2 + ul').contains('123456789012');
            cy.get('h2 + ul').contains('Developer: No');

            // Check A11Y
            cy.wait(500).checkA11y();

            /**
             * Restart
             */

            cy.get('.prevNext__button').eq(1).click();  // Click restart button

            // Check steps navigation
            cy.get('.step__button').eq(0).should('have.class', 'step__button--current');
            cy.get('.step__button').eq(1).should('be.disabled');
            cy.get('.step__button').eq(2).should('be.disabled');

            // Form should be empty
            cy.get('#title').should('have.value', '');
            cy.get('#firstName').should('have.value', '');
            cy.get('#lastName').should('have.value', '');
            cy.get('#email').should('have.value', '');
            cy.get('#mobilePhone').should('have.value', '');
            cy.get('#Developer01').should('not.be.checked');
            cy.get('#Developer02').should('not.be.checked');

            // Check A11Y
            cy.wait(500).checkA11y();

        });




    });

});
