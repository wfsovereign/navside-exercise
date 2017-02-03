import { NavsideExercisePage } from './app.po';

describe('navside-exercise App', function() {
  let page: NavsideExercisePage;

  beforeEach(() => {
    page = new NavsideExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
