import { Rp2017SitePage } from './app.po';

describe('rp2017-site App', () => {
  let page: Rp2017SitePage;

  beforeEach(() => {
    page = new Rp2017SitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
