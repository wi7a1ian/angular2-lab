import { FormAppPage } from './app.po';

describe('form-app App', () => {
  let page: FormAppPage;

  beforeEach(() => {
    page = new FormAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
