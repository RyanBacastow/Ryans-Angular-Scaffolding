import { GlysemixPage } from './app.po';

describe('glysemix App', () => {
  let page: GlysemixPage;

  beforeEach(() => {
    page = new GlysemixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
