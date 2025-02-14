import headerLocatorManager from '../locators/header.locate';
import footerLocatorManager from '../locators/footer.locate';

export function switchToPage(pageName) {
  switch (pageName) {
    case 'Home':
      headerLocatorManager.getHomeTab().click();
      cy.url().should('include', '/london');
      break;
    case 'Mentors':
      headerLocatorManager.getMentorsTab().click();
      cy.url().should('include', '/london/mentors');
      break;
    case 'Resources':
      headerLocatorManager.getResourcesTab().click();
      cy.url().should('include', '/london/resources');
      break;
    case 'How it works':
      headerLocatorManager.getHowItWorksTab().click();
      cy.url().should('include', '/london');
      break;
    case 'Team':
      headerLocatorManager.getTeamTab().click();
      cy.url().should('include', '/london/team');
      break;
    default:
      break;
  }
}

export function verifyFooter() {
  footerLocatorManager.getFooter();
  footerLocatorManager.getFooterBrandLogo();
  footerLocatorManager.validateFooterWWCInfo();
  footerLocatorManager.validateWWCCopyright();
  footerLocatorManager.validateFooterMentorshipHeader();
  footerLocatorManager.validateFooterMentorshipSubheader();
  footerLocatorManager.validateFollowUsLabel();
  footerLocatorManager.vaidateStayTunedLabel();
  footerLocatorManager.validateLinkedinUrl();
  footerLocatorManager.validateInstagramUrl();
  footerLocatorManager.validateTwitterUrl();
  footerLocatorManager.validateGithubUrl();
  footerLocatorManager.validateMeetupUrl();
  footerLocatorManager.validateFacebookUrl();
  footerLocatorManager.validateSlackUrl();
  footerLocatorManager.validateYoutubeUrl();
}

export function verifyHeaderTabs() {
  headerLocatorManager.getHomeTab();
  headerLocatorManager.getMentorsTab();
  headerLocatorManager.getResourcesTab();
  headerLocatorManager.getHowItWorksTab();
  headerLocatorManager.getTeamTab();
}

export function verifyHeader() {
  headerLocatorManager.getHomeBanner();
  headerLocatorManager.validateHomeHeader();
  headerLocatorManager.validateHomeSubheader();
}
