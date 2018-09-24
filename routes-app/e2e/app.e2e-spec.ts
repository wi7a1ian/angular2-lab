import { RoutesAppPage } from './app.po';

describe('routes-app App', () => {
  let page: RoutesAppPage;

  beforeEach(() => {
    page = new RoutesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
