import { IlynchwebPage } from './app.po';

describe('ilynchweb App', function() {
  let page: IlynchwebPage;

  beforeEach(() => {
    page = new IlynchwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
