import { AngularWeedsPage } from './app.po';

describe('angular-weeds App', () => {
  let page: AngularWeedsPage;

  beforeEach(() => {
    page = new AngularWeedsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
