import { OnsenuiAngular2LazyLoadingPage } from './app.po';

describe('onsenui-angular2-lazy-loading App', function() {
  let page: OnsenuiAngular2LazyLoadingPage;

  beforeEach(() => {
    page = new OnsenuiAngular2LazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
