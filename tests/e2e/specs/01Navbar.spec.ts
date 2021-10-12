import { getElem } from './utilities/utils';

import {
    leftMenu,
    subheader,
    topHeader,
    leftMenuLogo,
    topNavbarCarIcon,
    topNavbarMenuIcon,
    topNavbarLogoIcon,
    leftMenuCloseIcon,
    subheaderItemLabel,
    topNavbarLoginIcon,
    subheaderMyDataLink,
    topNavbarSearchIcon,
    subheaderMyTasksLink,
    topNavbarCounterIcon,
    subheaderItemBarActive,
    subheaderMyReturnsLink,
    leftMenuTranslationMenu,
} from './utilities/01Navigation.selectors';
import { tasks } from './utilities/02Tasks.selectors';
import { personalData } from './utilities/03PersonalData.selectors';
import { personalReturns } from './utilities/04PersonalReturns.selectors';

import { subheaderItemLabelActiveClass } from './utilities/common.classes';

describe('01 Navbar', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('01 Navbar', () => {
        cy.log('01-01 - Navbar, show correctly ');

        getElem(topHeader).should('be.visible');
        getElem(topNavbarCarIcon).should('be.visible');
        getElem(topNavbarMenuIcon).should('be.visible');
        getElem(topNavbarLogoIcon).should('be.visible');
        getElem(topNavbarLoginIcon).should('be.visible');
        getElem(topNavbarSearchIcon).should('be.visible');
        getElem(topNavbarCounterIcon).should('be.visible');

        getElem(subheader).should('be.visible');
        getElem(subheaderMyDataLink).should('be.visible');
        getElem(subheaderMyTasksLink).should('be.visible');
        getElem(subheaderMyReturnsLink).should('be.visible');

        getElem(tasks).should('be.visible');

        getElem(subheaderMyDataLink)
            .find(subheaderItemLabel)
            .should('have.not.class', subheaderItemLabelActiveClass);

        getElem(subheaderMyTasksLink)
            .find(subheaderItemBarActive)
            .should('be.visible');
        getElem(subheaderMyTasksLink)
            .find(subheaderItemLabel)
            .should('have.class', subheaderItemLabelActiveClass);

        getElem(subheaderMyDataLink)
            .find(subheaderItemLabel)
            .should('have.not.class', subheaderItemLabelActiveClass);

        cy.log('01-02 - Navbar, Left menu functionality');

        getElem(topNavbarMenuIcon).click();

        getElem(leftMenu).should('be.visible');
        getElem(leftMenuLogo).should('be.visible');
        getElem(leftMenuCloseIcon).should('be.visible');
        getElem(leftMenuTranslationMenu).should('be.visible');

        getElem(leftMenuCloseIcon).click();

        cy.log('01-03 - Navbar, subheader functionality');

        getElem(subheaderMyDataLink).click();

        getElem(personalData).should('be.visible');
        getElem(subheaderMyDataLink)
            .find(subheaderItemBarActive)
            .should('be.visible');
        getElem(subheaderMyDataLink)
            .find(subheaderItemLabel)
            .should('have.class', subheaderItemLabelActiveClass);

        getElem(subheaderMyReturnsLink).click();

        getElem(personalReturns).should('be.visible');
        getElem(subheaderMyReturnsLink)
            .find(subheaderItemBarActive)
            .should('be.visible');
        getElem(subheaderMyReturnsLink)
            .find(subheaderItemLabel)
            .should('have.class', subheaderItemLabelActiveClass);

        getElem(subheaderMyTasksLink).click();

        getElem(tasks).should('be.visible');
        getElem(subheaderMyTasksLink)
            .find(subheaderItemBarActive)
            .should('be.visible');
        getElem(subheaderMyTasksLink)
            .find(subheaderItemLabel)
            .should('have.class', subheaderItemLabelActiveClass);
    });
});
