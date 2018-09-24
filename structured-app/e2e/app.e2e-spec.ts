import { StructuredAppPage } from './app.po';

describe('structured-app App', () => {
  let page: StructuredAppPage;

  beforeEach(() => {
    page = new StructuredAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
